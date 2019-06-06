import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services';

/**
 * Responsável por adicionar o JWT ao cabeçalho de todas as requisições HTTP feitas.
 * Não adiciona JWT caso não esteja autenticado e com token válido.
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentToken = this.authenticationService.currentUserToken;
        if (currentToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${currentToken}`
                }
            });
        }
        return next.handle(request);
    }
}