import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OngApiService {

  private URL = 'assets/ongs.json'

  constructor(private http: HttpClient) { }

  getONGs(): Observable<any> {
    return this.http.get(this.URL);
  }

}
