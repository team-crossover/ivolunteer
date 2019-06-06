import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Event, Usuario, Voluntario } from '../_models';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class VoluntariosService {

    constructor(
        private http: HttpClient) {

    }

    getVoluntario(idVoluntario: number) {
        return this.http.get<Voluntario>(`api/public/voluntarios/${idVoluntario}`);
    }

    getVoluntarios() {
        return this.http.get<Voluntario>(`api/public/voluntarios`);
    }

}