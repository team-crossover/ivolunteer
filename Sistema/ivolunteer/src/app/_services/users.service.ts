import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Ong, Event, Usuario, NovoVoluntario, NovaOng } from '../_models';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class UsersService {

    constructor(
        private http: HttpClient) {

    }

    createVoluntario(novoVoluntario: NovoVoluntario) {
        return this.http.post<Usuario>(`${environment.apiBaseUrl}api/v1/public/users/create/voluntario`, novoVoluntario);
    }

    createOng(novaOng: NovaOng) {
        return this.http.post<Usuario>(`${environment.apiBaseUrl}api/v1/public/users/create/ong`, novaOng);
    }

    getOng(idOng: number) {
        return this.http.get<Ong>(`${environment.apiBaseUrl}api/v1/public/ongs/${idOng}`);
    }

    getOngs() {
        return this.http.get<Ong>(`${environment.apiBaseUrl}api/v1/public/ongs`);
    }

}