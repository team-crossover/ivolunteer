﻿import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { Usuario, Event } from '../_models';

/**
 * Enquanto não temos um back-end, essa classe provê respostas 'falsas' para as requisições.
 */
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const users: Usuario[] = [
        //     { id: 1, email: 'admin@admin.com', password: '123', role: 'admin', name: 'Administrador' },
        //     { id: 2, email: 'ong@ong.com', password: '123', role: 'ong', name: 'Clube do Gato' },
        //     { id: 3, email: 'voluntario@voluntario.com', password: '123', role: 'voluntario', name: 'Bette Davis' },
        // ];

        const events: Event[] = [
            { id: 1, ongId: 2, name: "Evento X" }
        ]

        // const authHeader = request.headers.get('Authorization');
        // const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            //     // authenticate - public
            //     if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
            //         const user = users.find(x => x.email === request.body.username && x.password === request.body.password);
            //         if (!user) return error('Username or password is incorrect');
            //         return ok({
            //             id: user.id,
            //             email: user.email,
            //             role: user.role,
            //             name: user.name,
            //             token: `fake-jwt-token`
            //         });
            //     }

            // get event
            if (request.url.match(/\/events\/(\w*?)/) && request.method === 'GET') {
                const event = events.find(x => x.id.toString() === request.url.match(/\/events\/(\w*?)/)[1]);
                if (!event) return error('Event not found');
                return ok({
                    id: event.id,
                    ongId: event.ongId,
                    name: event.name
                });
            }

            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        // // private helper functions

        function ok(body) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function unauthorised() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function error(message) {
            return throwError({ status: 400, error: { message } });
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};