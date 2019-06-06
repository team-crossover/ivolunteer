import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Ong, Event, Usuario } from '../_models';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class OngsService {

    constructor(
        private http: HttpClient) {

    }

    getOng(idOng: number) {
        return this.http.get<Ong>(`api/public/ongs/${idOng}`);
    }

    getOngs() {
        return this.http.get<Ong>(`api/public/ongs`);
    }

}