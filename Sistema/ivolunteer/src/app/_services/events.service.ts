import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Event } from '../_models';
import { AuthenticationService } from './authentication.service';
import { NovoEvento } from '../_models/novo-evento';

@Injectable({ providedIn: 'root' })
export class EventsService {

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {
    }

    getEvent(eventId: number) {
        return this.http.get<Event>(`${environment.apiBaseUrl}api/v1/public/eventos/${eventId}`);
    }

    getEvents() {
        return this.http.get<Event[]>(`${environment.apiBaseUrl}api/v1/public/eventos`);
    }

    getEventByOng(idOng: string) {
        let params = new HttpParams()
        params = params.append('idOng', idOng);
        return this.http.get<Event[]>(`${environment.apiBaseUrl}api/v1/public/eventos/`, { params: params });
    }

    getEventByNome(nome: string) {
        let params = new HttpParams()
        params = params.append('nome', nome);
        return this.http.get<Event>(`${environment.apiBaseUrl}api/v1/public/eventos/`, { params: params });
    }

    getEventByAreas(areas: string[]) {
        let params = new HttpParams()
        areas.forEach(area => {
            params = params.append('areas', area);
        });
        return this.http.get<Event>(`${environment.apiBaseUrl}api/v1/public/eventos/`, { params: params });
    }

    // Apenas para ONGs autenticadas
    createEvent(novoEvento: NovoEvento) {
        return this.http.post<Event>(`${environment.apiBaseUrl}api/v1/ong/eventos`, novoEvento);
    }

    updateEvent(idEvento: number, novoEvento: Event){
        return this.http.put<Event>(`${environment.apiBaseUrl}api/v1/ong/eventos/${idEvento}`, novoEvento);
    }

    deleteEvent(idEvento: number){
        return this.http.delete<Event>(`${environment.apiBaseUrl}api/v1/ong/eventos/${idEvento}`);
    }

    // /**
    //  * Checa se o evento com determinado ID pertence ao usuário atual.
    //  * @param ongId
    //  */
    // isOwnedByCurrentUser(eventId: number): boolean {
    //     const currentUser = this.authenticationService.currentUserValue;
    //     if (!currentUser)
    //         return false;

    //     const event = this.http.get<Event>(`${environment.apiUrl}/events/${eventId}`);
    //     event.pipe(e => {

    //     });
    //     return true;
    // }

}