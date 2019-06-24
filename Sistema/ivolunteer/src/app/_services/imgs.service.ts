import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Imagem, Ong, Event, Usuario, NovaOng } from '../_models';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class ImgsService {

    constructor(private http: HttpClient) {
    }

    getImg(idImagem: number) {
        return this.http.get<Imagem>(`${environment.apiBaseUrl}api/v1/public/imagens/${idImagem}`);
    }

}