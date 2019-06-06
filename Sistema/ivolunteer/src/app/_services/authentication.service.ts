import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Usuario } from '../_models';
import { OngsService } from './ongs.service';
import { VoluntariosService } from './voluntarios.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Usuario>;
    private currentUserTokenSubject: BehaviorSubject<string>;
    public currentUser: Observable<Usuario>;
    public currentUserToken: Observable<string>;

    constructor(private http: HttpClient,
        private ongService: OngsService,
        private voluntarioService: VoluntariosService) {
        this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUserTokenSubject = new BehaviorSubject<string>(localStorage.getItem('currentUserToken'));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentUserToken = this.currentUserTokenSubject.asObservable();
    }

    public get currentUserValue(): Usuario {
        return this.currentUserSubject.value;
    }

    public get currentUserTokenValue(): string {
        return this.currentUserTokenSubject.value;
    }

    /**
     * Tenta obter a ong do usuário autenticado atualmente (caso ele seja uma ONG).
     */
    public getCurrentUserOng() {
        const usuario = this.currentUserValue;
        if (usuario && usuario.tipo == "ong") {
            return this.ongService.getOng(usuario.idOng);
        }
    }

    /**
     * Tenta obter o voluntário do usuário autenticado atualmente (caso ele seja um voluntário).
     */
    public getCurrentUserVoluntario() {
        const usuario = this.currentUserValue;
        if (usuario && usuario.tipo == "voluntario") {
            return this.voluntarioService.getVoluntario(usuario.idVoluntario);
        }
    }

    login(email: string, password: string) {
        return this.http.post<Usuario>(`api/public/auth/authenticate`, { username: email, senha: password }, { observe: 'response' })
            .pipe(map(response => {
                if (response) {
                    const usuario = response.body;
                    if (usuario && response.status && response.status == 200) {
                        const token = response.headers.get("Authorization");
                        if (token) {
                            // stores user token
                            localStorage.setItem('currentUserToken', token);
                            this.currentUserTokenSubject.next(token);

                            if (usuario.tipo)
                                usuario.tipo = usuario.tipo.toLowerCase();

                            // stores user data
                            localStorage.setItem('currentUser', JSON.stringify(usuario));
                            this.currentUserSubject.next(usuario);
                        }
                    }
                }
                return response;
            }));
    }

    logout() {
        if (this.currentUserToken) {
            // invalidate token's session on backend
            this.http.get<any>(`api/public/auth/deauthenticate`).subscribe(response => {
                console.log(response);
            });
            // remove token from local storage
            localStorage.removeItem('currentUserToken');
            this.currentUserTokenSubject.next(null);
        }
        if (this.currentUserSubject) {
            // remove user from local storage
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
        }
    }
}