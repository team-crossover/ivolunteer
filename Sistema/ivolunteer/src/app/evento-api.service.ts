import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoApiService {

  private URL = 'assets/eventos.json'

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any> {
    return this.http.get(this.URL);
  }

}
