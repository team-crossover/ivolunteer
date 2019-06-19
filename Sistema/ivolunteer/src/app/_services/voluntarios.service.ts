import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Event, Usuario, Voluntario, NovoVoluntario } from '../_models';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class VoluntariosService {

    constructor(
        private http: HttpClient) {

    }

    createVoluntario(novoVoluntario: NovoVoluntario) {
        return this.http.post<Usuario>(`${environment.apiBaseUrl}api/v1/public/voluntarios`, novoVoluntario);
    }

    updateMyVoluntario(novoVoluntario: NovoVoluntario) {
        return this.http.put<Usuario>(`${environment.apiBaseUrl}api/v1/voluntario`, novoVoluntario);
    }

    getVoluntario(idVoluntario: number) {
        return this.http.get<Voluntario>(`${environment.apiBaseUrl}api/v1/public/voluntarios/${idVoluntario}`);
    }

    getVoluntarios() {
        return this.http.get<Voluntario>(`${environment.apiBaseUrl}api/v1/public/voluntarios`);
    }

}