(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");




/**
 * Evita que usuários possam acessar páginas caso não estejam logados ou com a role adequada.
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (route.data) {
            var currentUser = this.authenticationService.currentUserValue;
            if (route.data.requiresGuest) {
                if (currentUser) {
                    this.router.navigate(['/home']);
                    return false;
                }
            }
            else if (route.data.requiresRoles) {
                if (!currentUser || !route.data.requiresRoles.includes(currentUser.role)) {
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                }
            }
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





/**
 * Enquanto não temos um back-end, essa classe provê respostas 'falsas' para as requisições.
 */
var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var users = [
            { id: 1, email: 'admin@admin.com', password: '123', role: 'admin', name: 'Administrador' },
            { id: 2, email: 'ong@ong.com', password: '123', role: 'ong', name: 'Clube do Gato' },
            { id: 3, email: 'voluntario@voluntario.com', password: '123', role: 'voluntario', name: 'Bette Davis' },
        ];
        var events = [
            { id: 1, ongId: 2, name: "Evento X" }
        ];
        var authHeader = request.headers.get('Authorization');
        var isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
            // authenticate - public
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                var user = users.find(function (x) { return x.email === request.body.username && x.password === request.body.password; });
                if (!user)
                    return error('Username or password is incorrect');
                return ok({
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    name: user.name,
                    token: "fake-jwt-token"
                });
            }
            // get event
            if (request.url.match(/\/events\/(\w*?)/) && request.method === 'GET') {
                var event_1 = events.find(function (x) { return x.id.toString() === request.url.match(/\/events\/(\w*?)/)[1]; });
                if (!event_1)
                    return error('Event not found');
                return ok({
                    id: event_1.id,
                    ongId: event_1.ongId,
                    name: event_1.name
                });
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        // private helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
        }
        function unauthorised() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 400, error: { message: message } });
        }
    };
    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



/**
 * Responsável por adicionar o JWT ao cabeçalho de todas as requisições HTTP feitas.
 * Não adiciona JWT caso não esteja autenticado e com token válido.
 */
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/users/authenticate", { username: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/events.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/events.service.ts ***!
  \*********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");





var EventsService = /** @class */ (function () {
    function EventsService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    EventsService.prototype.getEvent = function (eventId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/events/" + eventId);
    };
    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.service */ "./src/app/_services/events.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return _events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"]; });





/***/ }),

/***/ "./src/app/add-evento/add-evento.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-evento/add-evento.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <h3 class=\"modal-title\">Novo evento</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form clrForm>\n          <section novalidate class=\"form-block\">\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Nome</label>\n              <input clr-col-12 clr-col-md-6 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome do Evento\" />\n            </clr-input-container>\n            <clr-textarea-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Descrição</label>\n              <textarea clr-col-12 clr-col-md-4 clrTextarea type=\"text\" size=\"35\" required\n                placeholder=\"Descrição do Evento\"></textarea>\n            </clr-textarea-container>\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>ONG:</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required\n                placeholder=\"ONG realizará o evento\" />\n            </clr-input-container>\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Local:</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required placeholder=\"Local do Evento\" />\n            </clr-input-container>\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Data:</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"date\" size=\"35\" required placeholder=\"Data do evento\" />\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Horário:</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"time\" size=\"35\" required placeholder=\"Horário do Evento\" />\n            </clr-input-container>\n\n            <br>\n            <h5>Escolha as funções para este Evento:</h5>\n\n            <div class=\"clr-row\">\n              <div class=\"clr-col-md-12\">\n                <div class=\"clr-form-control\">\n                  <label for=\"basic\" class=\"clr-control-label\">Função:</label>\n                  <div class=\"clr-control-container\">\n                    <div class=\"clr-input-wrapper\">\n                      <input type=\"text\" id=\"basic\" placeholder=\"Função para o Evento\" class=\"clr-input\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"clr-col-md-12\">\n                <div class=\"clr-form-control\">\n                  <label for=\"basic\" class=\"clr-control-label\">Descrição:</label>\n                  <div class=\"clr-control-container\">\n                    <div class=\"clr-input-wrapper\">\n                      <input type=\"text\" id=\"basic\" placeholder=\"Descrição do Evento\" class=\"clr-input\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"clr-col-md-12\">\n                <div class=\"clr-form-control\">\n                  <label for=\"basic\" class=\"clr-control-label\">Vagas:</label>\n                  <div class=\"clr-control-container\">\n                    <div class=\"clr-input-wrapper\">\n                      <input type=\"number\" id=\"basic\" placeholder=\"Vagas da função\" class=\"clr-input\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"clr-col-md-12\">\n                <button class=\"btn btn-sm btn-outline\" type=\"button\" style=\"margin: 1rem 0 0 auto;\"\n                  onclick=\"adicionaFuncaoTbl()\">\n                  <clr-icon shape=\"plus is-primary\"></clr-icon> Adicionar Função\n                </button>\n              </div>\n            </div>\n\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>Função</th>\n                  <th>Descrição</th>\n                  <th>Vagas</th>\n                </tr>\n              </thead>\n              <tbody>\n              </tbody>\n            </table>\n\n            <div class=\"clr-row\">\n              <div class=\"clr-col-12\" style=\"text-align: right\">\n                <button class=\"btn btn-primary btn-outline btn-sm btn-icon\"\n                  style=\"margin: 1rem 0 0 auto; margin-right: 20px\">\n                  <clr-icon shape=\"attachment\"></clr-icon> Anexe uma imagem ao Evento\n                </button>\n              </div>\n            </div>\n          </section>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Salvar</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

/***/ }),

/***/ "./src/app/add-evento/add-evento.component.scss":
/*!******************************************************!*\
  !*** ./src/app/add-evento/add-evento.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ldmVudG8vYWRkLWV2ZW50by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/add-evento/add-evento.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-evento/add-evento.component.ts ***!
  \****************************************************/
/*! exports provided: AddEventoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventoComponent", function() { return AddEventoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddEventoComponent = /** @class */ (function () {
    function AddEventoComponent() {
        this.name = '';
    }
    AddEventoComponent.prototype.ngOnInit = function () {
    };
    AddEventoComponent.prototype.adicionaFuncaoTbl = function () {
        alert(this.name);
    };
    AddEventoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-evento',
            template: __webpack_require__(/*! ./add-evento.component.html */ "./src/app/add-evento/add-evento.component.html"),
            styles: [__webpack_require__(/*! ./add-evento.component.scss */ "./src/app/add-evento/add-evento.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddEventoComponent);
    return AddEventoComponent;
}());



/***/ }),

/***/ "./src/app/add-ong/add-ong.component.html":
/*!************************************************!*\
  !*** ./src/app/add-ong/add-ong.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row clr-justify-content-center\">\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Cadastrar ONG\n      </div>\n      <div class=\"card-block\">\n        <div class=\"card-text\">\n          <form clrForm>\n            <section novalidate class=\"form-block\">\n\n              <clr-input-container class=\"form-group\">\n                <label>Nome</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Telefone</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"(DDD)XXXX-XXXX\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                <clr-control-error *clrIfError=\"'minlength'\">Telefone deve ter 14 caracteres</clr-control-error>\n                <clr-control-error *clrIfError=\"'maxlength'\">Telefone deve ter 14 caracteres</clr-control-error>\n              </clr-input-container>\n\n              <clr-date-container class=\"form-group\">\n                <label>Data de fundação</label>\n                <input type=\"text\" clrDate name=\"fundacao\" style=\"width: 230px\">\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-date-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Bairro</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir bairro\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Logradouro</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir logradouro\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>CEP</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir CEP\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Complemento</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir complemento\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-checkbox-container class=\"form-group\">\n                <label>Áreas de interesse</label>\n                <clr-checkbox-wrapper>\n                  <input type=\"checkbox\" clrCheckbox value=\"animais\" name=\"animais\" />\n                  <label>Animais</label>\n                </clr-checkbox-wrapper>\n                <clr-checkbox-wrapper>\n                  <input type=\"checkbox\" clrCheckbox value=\"cultura\" name=\"cultura\" />\n                  <label>Arte e cultura</label>\n                </clr-checkbox-wrapper>\n                <clr-checkbox-wrapper>\n                  <input type=\"checkbox\" clrCheckbox value=\"humanitaria\" name=\"humanitaria\" />\n                  <label>Humanitária</label>\n                </clr-checkbox-wrapper>\n                <clr-checkbox-wrapper>\n                  <input type=\"checkbox\" clrCheckbox value=\"ambiente\" name=\"ambiente\" />\n                  <label>Meio ambiente</label>\n                </clr-checkbox-wrapper>\n                <clr-checkbox-wrapper>\n                  <input type=\"checkbox\" clrCheckbox value=\"saude\" name=\"saude\" />\n                  <label>Saúde</label>\n                </clr-checkbox-wrapper>\n                <clr-control-helper>Escolher áreas de interesse</clr-control-helper>\n              </clr-checkbox-container>\n            </section>\n          </form>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../../\">Salvar</button>\n        <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../../\">Cancelar</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-ong/add-ong.component.scss":
/*!************************************************!*\
  !*** ./src/app/add-ong/add-ong.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1vbmcvYWRkLW9uZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/add-ong/add-ong.component.ts":
/*!**********************************************!*\
  !*** ./src/app/add-ong/add-ong.component.ts ***!
  \**********************************************/
/*! exports provided: AddOngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOngComponent", function() { return AddOngComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddOngComponent = /** @class */ (function () {
    function AddOngComponent() {
    }
    AddOngComponent.prototype.ngOnInit = function () {
    };
    AddOngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-ong',
            template: __webpack_require__(/*! ./add-ong.component.html */ "./src/app/add-ong/add-ong.component.html"),
            styles: [__webpack_require__(/*! ./add-ong.component.scss */ "./src/app/add-ong/add-ong.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddOngComponent);
    return AddOngComponent;
}());



/***/ }),

/***/ "./src/app/add-postagem/add-postagem.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-postagem/add-postagem.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <h3 class=\"modal-title\">Nova postagem</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form clrForm>\n          <section novalidate class=\"form-block\">\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Nome</label>\n              <input clr-col-12 clr-col-md-6 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome da postagem\" />\n            </clr-input-container>\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Descrição</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required\n                placeholder=\"Descrição da postagem\" />\n            </clr-input-container>\n\n            <div class=\"clr-row\">\n              <div class=\"clr-col-12\" style=\"text-align: right\">\n                <button class=\"btn btn-primary btn-outline btn-sm btn-icon\"\n                  style=\"margin: 1rem 0 0 auto; margin-right: 20px\">\n                  <clr-icon shape=\"attachment\"></clr-icon>\n                </button>\n              </div>\n            </div>\n\n          </section>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Salvar</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

/***/ }),

/***/ "./src/app/add-postagem/add-postagem.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/add-postagem/add-postagem.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wb3N0YWdlbS9hZGQtcG9zdGFnZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/add-postagem/add-postagem.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-postagem/add-postagem.component.ts ***!
  \********************************************************/
/*! exports provided: AddPostagemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostagemComponent", function() { return AddPostagemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddPostagemComponent = /** @class */ (function () {
    function AddPostagemComponent() {
    }
    AddPostagemComponent.prototype.ngOnInit = function () {
    };
    AddPostagemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-postagem',
            template: __webpack_require__(/*! ./add-postagem.component.html */ "./src/app/add-postagem/add-postagem.component.html"),
            styles: [__webpack_require__(/*! ./add-postagem.component.scss */ "./src/app/add-postagem/add-postagem.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddPostagemComponent);
    return AddPostagemComponent;
}());



/***/ }),

/***/ "./src/app/add-voluntario/add-voluntario.component.html":
/*!**************************************************************!*\
  !*** ./src/app/add-voluntario/add-voluntario.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row clr-justify-content-center\">\n    <div class=\"clr-col-sm-12 clr-col-md-auto\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Cadastrar voluntário\n            </div>\n            <div class=\"card-block\">\n                <div class=\"card-text\">\n                    <form clrForm>\n                        <section novalidate class=\"form-block\">\n\n                            <clr-input-container class=\"form-group\">\n                                <label>Nome</label>\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\" />\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                                <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres\n                                </clr-control-error>\n                            </clr-input-container>\n\n                            <clr-input-container class=\"form-group\">\n                                <label>Email</label>\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir e-mail\" />\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                            </clr-input-container>\n\n                            <clr-password-container class=\"form-group\">\n                                <label>Senha</label>\n                                <input clrPassword type=\"password\" style=\"width: 195px\" required\n                                    placeholder=\"Inserir senha\" />\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                                <clr-control-error *clrIfError=\"'minlength'\">Senha deve ter 6+ caracteres\n                                </clr-control-error>\n                            </clr-password-container>\n\n                            <clr-input-container class=\"form-group\">\n                                <label>Telefone</label>\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"(DDD)XXXX-XXXX\" />\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                                <clr-control-error *clrIfError=\"'minlength'\">Telefone deve ter 14 caracteres\n                                </clr-control-error>\n                                <clr-control-error *clrIfError=\"'maxlength'\">Telefone deve ter 14 caracteres\n                                </clr-control-error>\n                            </clr-input-container>\n\n                            <clr-date-container class=\"form-group\">\n                                <label>Data de nascimento</label>\n                                <input type=\"date\" clrDate name=\"nascimento\" style=\"width: 230px\">\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                            </clr-date-container>\n\n                        </section>\n                    </form>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../..\">Salvar</button>\n                <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../..\">Cancelar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/add-voluntario/add-voluntario.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/add-voluntario/add-voluntario.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC12b2x1bnRhcmlvL2FkZC12b2x1bnRhcmlvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-voluntario/add-voluntario.component.ts":
/*!************************************************************!*\
  !*** ./src/app/add-voluntario/add-voluntario.component.ts ***!
  \************************************************************/
/*! exports provided: AddVoluntarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVoluntarioComponent", function() { return AddVoluntarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddVoluntarioComponent = /** @class */ (function () {
    function AddVoluntarioComponent() {
    }
    AddVoluntarioComponent.prototype.ngOnInit = function () {
    };
    AddVoluntarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-voluntario',
            template: __webpack_require__(/*! ./add-voluntario.component.html */ "./src/app/add-voluntario/add-voluntario.component.html"),
            styles: [__webpack_require__(/*! ./add-voluntario.component.scss */ "./src/app/add-voluntario/add-voluntario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddVoluntarioComponent);
    return AddVoluntarioComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ongs_ongs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ongs/ongs.component */ "./src/app/ongs/ongs.component.ts");
/* harmony import */ var _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventos/eventos.component */ "./src/app/eventos/eventos.component.ts");
/* harmony import */ var _add_ong_add_ong_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-ong/add-ong.component */ "./src/app/add-ong/add-ong.component.ts");
/* harmony import */ var _add_voluntario_add_voluntario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-voluntario/add-voluntario.component */ "./src/app/add-voluntario/add-voluntario.component.ts");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");
/* harmony import */ var _editar_perfil_editar_perfil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editar-perfil/editar-perfil.component */ "./src/app/editar-perfil/editar-perfil.component.ts");
/* harmony import */ var _ong_filtro_ong_filtro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ong-filtro/ong-filtro.component */ "./src/app/ong-filtro/ong-filtro.component.ts");
/* harmony import */ var _editar_ong_editar_ong_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editar-ong/editar-ong.component */ "./src/app/editar-ong/editar-ong.component.ts");
/* harmony import */ var _perfil_ong_perfil_ong_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./perfil-ong/perfil-ong.component */ "./src/app/perfil-ong/perfil-ong.component.ts");
/* harmony import */ var _ver_evento_ver_evento_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ver-evento/ver-evento.component */ "./src/app/ver-evento/ver-evento.component.ts");
/* harmony import */ var _add_postagem_add_postagem_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-postagem/add-postagem.component */ "./src/app/add-postagem/add-postagem.component.ts");
/* harmony import */ var _excluir_evento_excluir_evento_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./excluir-evento/excluir-evento.component */ "./src/app/excluir-evento/excluir-evento.component.ts");
/* harmony import */ var _add_evento_add_evento_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-evento/add-evento.component */ "./src/app/add-evento/add-evento.component.ts");
/* harmony import */ var _evento_filtro_evento_filtro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./evento-filtro/evento-filtro.component */ "./src/app/evento-filtro/evento-filtro.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");




















var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        data: {
            requiresGuest: true,
        },
    },
    {
        path: 'cadastrar/ong',
        component: _add_ong_add_ong_component__WEBPACK_IMPORTED_MODULE_6__["AddOngComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        data: {
            requiresGuest: true,
        },
    },
    {
        path: 'cadastrar/voluntario',
        component: _add_voluntario_add_voluntario_component__WEBPACK_IMPORTED_MODULE_7__["AddVoluntarioComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        data: {
            requiresGuest: true,
        }
    },
    {
        path: 'usuario/:id',
        component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__["PerfilComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        children: [
            {
                path: 'editar',
                component: _editar_perfil_editar_perfil_component__WEBPACK_IMPORTED_MODULE_9__["EditarPerfilComponent"],
                canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                data: {
                    requiresRoles: ['voluntario'],
                }
            }
        ]
    },
    {
        path: 'ongs',
        component: _ongs_ongs_component__WEBPACK_IMPORTED_MODULE_4__["OngsComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        children: [
            {
                path: 'filtrar',
                component: _ong_filtro_ong_filtro_component__WEBPACK_IMPORTED_MODULE_10__["OngFiltroComponent"]
            }
        ]
    },
    {
        path: 'eventos',
        component: _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_5__["EventosComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        children: [
            {
                path: 'filtrar',
                component: _evento_filtro_evento_filtro_component__WEBPACK_IMPORTED_MODULE_17__["EventoFiltroComponent"]
            },
            {
                path: 'add',
                component: _add_evento_add_evento_component__WEBPACK_IMPORTED_MODULE_16__["AddEventoComponent"],
                canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                data: {
                    requiresRoles: ['ong'],
                }
            },
        ]
    },
    {
        path: 'evento/:id',
        component: _ver_evento_ver_evento_component__WEBPACK_IMPORTED_MODULE_13__["VerEventoComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        children: [
            {
                path: 'editar',
                component: _add_evento_add_evento_component__WEBPACK_IMPORTED_MODULE_16__["AddEventoComponent"],
                canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                data: {
                    requiresRoles: ['ong'],
                }
            },
            {
                path: 'excluir',
                component: _excluir_evento_excluir_evento_component__WEBPACK_IMPORTED_MODULE_15__["ExcluirEventoComponent"],
                canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                data: {
                    requiresRoles: ['ong'],
                }
            },
        ]
    },
    {
        path: 'ong/:id',
        component: _perfil_ong_perfil_ong_component__WEBPACK_IMPORTED_MODULE_12__["PerfilOngComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        children: [
            {
                path: 'add-evento',
                component: _add_evento_add_evento_component__WEBPACK_IMPORTED_MODULE_16__["AddEventoComponent"],
                canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                data: {
                    requiresRoles: ['ong']
                },
            },
            {
                path: 'add-post',
                component: _add_postagem_add_postagem_component__WEBPACK_IMPORTED_MODULE_14__["AddPostagemComponent"],
                canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                data: {
                    requiresRoles: ['ong']
                },
            },
            {
                path: 'editar',
                component: _editar_ong_editar_ong_component__WEBPACK_IMPORTED_MODULE_11__["EditarOngComponent"],
                canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                data: {
                    requiresRoles: ['ong']
                },
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n  <clr-header class=\"header header-6\">\n    <div class=\"branding\">\n        <div class=\"nav-link\">\n            <clr-icon shape=\"users\"></clr-icon>\n            <span class=\"title\">{{title}}</span>\n        </div>\n    </div>\n    <div class=\"header-nav\" [clr-nav-level]=\"1\">\n      <a class=\"nav-link nav-text\" clrVerticalNavLink routerLinkActive=\"active\" routerLink=\"/home\">Início</a>\n      <a class=\"nav-link nav-text\" clrVerticalNavLink routerLinkActive=\"active\" routerLink=\"/eventos\">Eventos</a>\n      <a class=\"nav-link nav-text\" clrVerticalNavLink routerLinkActive=\"active\" routerLink=\"/ongs\">ONGs</a>\n    </div>\n    <div class=\"header-actions\">\n      <!-- Botão de entrar -->\n      <a *ngIf=\"auth?.currentUserValue == null\" routerLinkActive=\"active\" routerLink=\"/login\" class=\"nav-link nav-text\">\n        Entrar\n      </a>\n      <!-- Menu de criar conta -->\n      <clr-dropdown *ngIf=\"auth?.currentUserValue == null\">\n        <button class=\"nav-text\" clrDropdownTrigger>\n          Cadastrar\n          <clr-icon shape=\"caret down\"></clr-icon>\n        </button>\n        <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n          <a routerLinkActive=\"active\" routerLink=\"/cadastrar/voluntario\" clrDropdownItem>Cadastrar como\n            voluntário</a>\n          <a routerLinkActive=\"active\" routerLink=\"/cadastrar/ong\" clrDropdownItem>Cadastrar como ONG</a>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n      <!-- Menu de usuario logado -->\n      <clr-dropdown *ngIf=\"auth?.currentUserValue\">\n        <button class=\"nav-text\" clrDropdownTrigger>\n          {{auth?.currentUserValue?.name}}\n          <clr-icon shape=\"caret down\"></clr-icon>\n        </button>\n        <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n          <a *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" routerLinkActive=\"active\" routerLink=\"/usuario/1\"\n            clrDropdownItem>Ver perfil</a>\n          <a *ngIf=\"auth?.currentUserValue?.role == 'ong'\" routerLinkActive=\"active\" routerLink=\"/ong/2\"\n            clrDropdownItem>Ver perfil</a>\n          <a (click)=\"logout()\" clrDropdownItem>Sair</a>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n    </div>\n  </clr-header>\n  <div class=\"content-container\">\n    <div class=\"content-area\" id=\"content-area\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</clr-main-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-container {\n  overflow: auto; }\n\n#content-area {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 70%;\n  max-width: 1000px;\n  overflow: visible;\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n  padding: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuI2NvbnRlbnQtYXJlYSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1pbi13aWR0aDogNzAlO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.title = 'iVolunteer';
    }
    AppComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./eventos/eventos.component */ "./src/app/eventos/eventos.component.ts");
/* harmony import */ var _ongs_ongs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ongs/ongs.component */ "./src/app/ongs/ongs.component.ts");
/* harmony import */ var _ong_card_ong_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ong-card/ong-card.component */ "./src/app/ong-card/ong-card.component.ts");
/* harmony import */ var _add_ong_add_ong_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-ong/add-ong.component */ "./src/app/add-ong/add-ong.component.ts");
/* harmony import */ var _add_voluntario_add_voluntario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-voluntario/add-voluntario.component */ "./src/app/add-voluntario/add-voluntario.component.ts");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");
/* harmony import */ var _editar_perfil_editar_perfil_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editar-perfil/editar-perfil.component */ "./src/app/editar-perfil/editar-perfil.component.ts");
/* harmony import */ var _ong_filtro_ong_filtro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ong-filtro/ong-filtro.component */ "./src/app/ong-filtro/ong-filtro.component.ts");
/* harmony import */ var _timeline_post_timeline_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./timeline-post/timeline-post.component */ "./src/app/timeline-post/timeline-post.component.ts");
/* harmony import */ var _timeline_evento_timeline_evento_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./timeline-evento/timeline-evento.component */ "./src/app/timeline-evento/timeline-evento.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _evento_card_evento_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./evento-card/evento-card.component */ "./src/app/evento-card/evento-card.component.ts");
/* harmony import */ var _add_evento_add_evento_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-evento/add-evento.component */ "./src/app/add-evento/add-evento.component.ts");
/* harmony import */ var _add_postagem_add_postagem_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-postagem/add-postagem.component */ "./src/app/add-postagem/add-postagem.component.ts");
/* harmony import */ var _evento_filtro_evento_filtro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./evento-filtro/evento-filtro.component */ "./src/app/evento-filtro/evento-filtro.component.ts");
/* harmony import */ var _excluir_evento_excluir_evento_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./excluir-evento/excluir-evento.component */ "./src/app/excluir-evento/excluir-evento.component.ts");
/* harmony import */ var _editar_ong_editar_ong_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./editar-ong/editar-ong.component */ "./src/app/editar-ong/editar-ong.component.ts");
/* harmony import */ var _perfil_ong_perfil_ong_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./perfil-ong/perfil-ong.component */ "./src/app/perfil-ong/perfil-ong.component.ts");
/* harmony import */ var _ver_evento_ver_evento_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ver-evento/ver-evento.component */ "./src/app/ver-evento/ver-evento.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dashboard-admin/dashboard-admin.component */ "./src/app/dashboard-admin/dashboard-admin.component.ts");
/* harmony import */ var _convidado_convidado_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./convidado/convidado.component */ "./src/app/convidado/convidado.component.ts");
/* harmony import */ var _dashboard_ong_dashboard_ong_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dashboard-ong/dashboard-ong.component */ "./src/app/dashboard-ong/dashboard-ong.component.ts");



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_20__["TimelineComponent"],
                _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_10__["EventosComponent"],
                _ongs_ongs_component__WEBPACK_IMPORTED_MODULE_11__["OngsComponent"],
                _ong_card_ong_card_component__WEBPACK_IMPORTED_MODULE_12__["OngCardComponent"],
                _ong_filtro_ong_filtro_component__WEBPACK_IMPORTED_MODULE_17__["OngFiltroComponent"],
                _add_ong_add_ong_component__WEBPACK_IMPORTED_MODULE_13__["AddOngComponent"],
                _add_voluntario_add_voluntario_component__WEBPACK_IMPORTED_MODULE_14__["AddVoluntarioComponent"],
                _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_15__["PerfilComponent"],
                _editar_perfil_editar_perfil_component__WEBPACK_IMPORTED_MODULE_16__["EditarPerfilComponent"],
                _timeline_post_timeline_post_component__WEBPACK_IMPORTED_MODULE_18__["TimelinePostComponent"],
                _timeline_evento_timeline_evento_component__WEBPACK_IMPORTED_MODULE_19__["TimelineEventoComponent"],
                _evento_card_evento_card_component__WEBPACK_IMPORTED_MODULE_21__["EventoCardComponent"],
                _add_evento_add_evento_component__WEBPACK_IMPORTED_MODULE_22__["AddEventoComponent"],
                _add_postagem_add_postagem_component__WEBPACK_IMPORTED_MODULE_23__["AddPostagemComponent"],
                _evento_filtro_evento_filtro_component__WEBPACK_IMPORTED_MODULE_24__["EventoFiltroComponent"],
                _excluir_evento_excluir_evento_component__WEBPACK_IMPORTED_MODULE_25__["ExcluirEventoComponent"],
                _editar_ong_editar_ong_component__WEBPACK_IMPORTED_MODULE_26__["EditarOngComponent"],
                _perfil_ong_perfil_ong_component__WEBPACK_IMPORTED_MODULE_27__["PerfilOngComponent"],
                _ver_evento_ver_evento_component__WEBPACK_IMPORTED_MODULE_28__["VerEventoComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_30__["HomeComponent"],
                _dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_31__["DashboardAdminComponent"],
                _convidado_convidado_component__WEBPACK_IMPORTED_MODULE_32__["ConvidadoComponent"],
                _dashboard_ong_dashboard_ong_component__WEBPACK_IMPORTED_MODULE_33__["DashboardOngComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClarityModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
                _helpers__WEBPACK_IMPORTED_MODULE_5__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/convidado/convidado.component.html":
/*!****************************************************!*\
  !*** ./src/app/convidado/convidado.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n<clr-icon shape=\"users\" size=\"72\" class=\"is-info\"></clr-icon>\n<h1>Seja bem-vindo(a) ao iVolunteer</h1>\n<h3>\n  <clr-icon shape=\"user\" size=\"20\" class=\"is-highlight\"></clr-icon>&nbsp;<a routerLinkActive=\"active\" routerLink=\"/cadastrar/voluntario\">Cadastre-se como voluntário</a> para encontrar ONGs e oportunidades de trabalho voluntário pertos de você!\n</h3>\n<h3>\n  <clr-icon shape=\"world\" size=\"20\" class=\"is-highlight\"></clr-icon>&nbsp;<a routerLinkActive=\"active\" routerLink=\"/cadastrar/ong\">Cadastre-se como ONG</a> para divulgar seu trabalho e encontrar colaboradores.\n</h3>\n<h2>Junte-se a nós!</h2>\n</div>\n<hr>\n<h2>Eventos em destaque</h2>\n<div class=\"clr-row\">\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n</div>\n\n<h2>ONGs em destaque</h2>\n<div class=\"clr-row\">\n  <app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n  <app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n  <app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n  <app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n</div>"

/***/ }),

/***/ "./src/app/convidado/convidado.component.scss":
/*!****************************************************!*\
  !*** ./src/app/convidado/convidado.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnZpZGFkby9jb252aWRhZG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/convidado/convidado.component.ts":
/*!**************************************************!*\
  !*** ./src/app/convidado/convidado.component.ts ***!
  \**************************************************/
/*! exports provided: ConvidadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvidadoComponent", function() { return ConvidadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConvidadoComponent = /** @class */ (function () {
    function ConvidadoComponent() {
    }
    ConvidadoComponent.prototype.ngOnInit = function () {
    };
    ConvidadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-convidado',
            template: __webpack_require__(/*! ./convidado.component.html */ "./src/app/convidado/convidado.component.html"),
            styles: [__webpack_require__(/*! ./convidado.component.scss */ "./src/app/convidado/convidado.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConvidadoComponent);
    return ConvidadoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-admin/dashboard-admin.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-admin/dashboard-admin.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Bem-vindo(a), Administrador</h3><br>\n\n<clr-tabs>\n  <!-- Visão geral -->\n  <clr-tab>\n    <button clrTabLink>Visão geral</button>\n    <ng-template [(clrIfActive)]=\"overviewActive\">\n      <clr-tab-content>\n        <div class=\"clr-row\">\n          <div class=\"clr-col-4 clr-col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                ONGs cadastradas\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numOngs }}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"clr-col-4 clr-col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Eventos publicados\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numEventos }}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"clr-col-4 clr-col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Postagens publicadas\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numPostagens }}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"clr-col-4 clr-col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Voluntários cadastrados\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numUsuarios }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- ONGs -->\n  <clr-tab>\n    <button clrTabLink>ONGs</button>\n    <ng-template [(clrIfActive)]=\"ongsActive\">\n      <clr-tab-content>\n        <h4> {{ numOngs }} ONGs cadastradas </h4>\n\n        <table class=\"table table-noborder\">\n          <thead>\n            <tr>\n              <th class=\"left\">Nome da ONG</th>\n              <th>Data de ingresso</th>\n              <th>Número de eventos</th>\n              <th>Número de postagens</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let ong of ongs\">\n              <td class=\"left\"><a>{{ ong }}</a></td>\n              <td>{{ data }}</td>\n              <td>3</td>\n              <td>2</td>\n              <td>\n                <div class=\"btn-group btn-link btn-sm\">\n                  <button class=\"btn\">Ver</button>\n                  <button class=\"btn\">Editar</button>\n                  <button class=\"btn\">Deletar</button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- Eventos -->\n  <clr-tab>\n    <button clrTabLink>Eventos</button>\n    <ng-template [(clrIfActive)]=\"eventsActive\">\n      <clr-tab-content>\n        <h4> {{ numEventos }} Eventos publicados </h4>\n\n        <table class=\"table table-noborder\">\n          <thead>\n            <tr>\n              <th class=\"left\">Título</th>\n              <th>Data de cadastro</th>\n              <th>ONG responsável</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let event of eventos\">\n              <td class=\"left\"><a>{{ event }}</a></td>\n              <td>{{ data }}</td>\n              <td><a>Nome da ONG</a></td>\n              <td>\n                <div class=\"btn-group btn-link btn-sm\">\n                  <button class=\"btn\">Ver</button>\n                  <button class=\"btn\">Editar</button>\n                  <button class=\"btn\">Deletar</button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- Postagens -->\n  <clr-tab>\n    <button clrTabLink>Postagens</button>\n    <ng-template [(clrIfActive)]=\"postsActive\">\n      <clr-tab-content>\n        <h4> {{ numPostagens }} Postagens publicadas </h4>\n\n        <table class=\"table table-noborder\">\n          <thead>\n            <tr>\n              <th class=\"left\">Título</th>\n              <th>Data</th>\n              <th>ONG Responsável</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let post of postagens\">\n              <td class=\"left\"><a>{{ post }}</a></td>\n              <td>{{ data }}</td>\n              <td><a>Nome da ONG</a></td>\n              <td>\n                <div class=\"btn-group btn-link btn-sm\">\n                  <button class=\"btn\">Ver</button>\n                  <button class=\"btn\">Editar</button>\n                  <button class=\"btn\">Deletar</button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- Usuários -->\n  <clr-tab>\n    <button clrTabLink>Usuários</button>\n    <ng-template [(clrIfActive)]=\"usersActive\">\n      <clr-tab-content>\n        <h4> {{ numUsuarios }} Usuários cadastrados </h4>\n\n        <table class=\"table table-noborder\">\n          <thead>\n            <tr>\n              <th class=\"left\">Nome Completo</th>\n              <th>Data de ingresso</th>\n              <th>Quantidade de eventos comparecidos</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of usuarios\">\n              <td class=\"left\"><a>{{ user }}</a></td>\n              <td>{{ data }}</td>\n              <td>3</td>\n              <td>\n                <div class=\"btn-group btn-link btn-sm\">\n                  <button class=\"btn\">Ver</button>\n                  <button class=\"btn\">Editar</button>\n                  <button class=\"btn\">Deletar</button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n</clr-tabs>\n<!--<router-outlet></router-outlet>-->"

/***/ }),

/***/ "./src/app/dashboard-admin/dashboard-admin.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-admin/dashboard-admin.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1hZG1pbi9kYXNoYm9hcmQtYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-admin/dashboard-admin.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-admin/dashboard-admin.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAdminComponent", function() { return DashboardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardAdminComponent = /** @class */ (function () {
    function DashboardAdminComponent() {
        this.ongs = ['Clube do Gato', 'Lar de Idosos'];
        this.usuarios = ['João Pedro', 'Natália Lopes', 'Nelson William', 'Sofia Moraes'];
        this.eventos = ['Feira de Adoção', 'Arrecadação', 'Visita ao Abrigo', 'Jantar beneficiente'];
        this.postagens = ['Novidades', 'Meta atingida', 'Novo Local'];
        this.data = "23/05/2019";
        this.numOngs = this.ongs.length;
        for (var index = 0; index < this.ongs.length; index++) {
            var ong = this.ongs[index];
        }
        this.numEventos = this.eventos.length;
        for (var index = 0; index < this.eventos.length; index++) {
            var event_1 = this.eventos[index];
        }
        this.numPostagens = this.postagens.length;
        for (var index = 0; index < this.postagens.length; index++) {
            var post = this.postagens[index];
        }
        this.numUsuarios = this.usuarios.length;
        for (var index = 0; index < this.usuarios.length; index++) {
            var user = this.usuarios[index];
        }
    }
    DashboardAdminComponent.prototype.ngOnInit = function () {
    };
    DashboardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-admin',
            template: __webpack_require__(/*! ./dashboard-admin.component.html */ "./src/app/dashboard-admin/dashboard-admin.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-admin.component.scss */ "./src/app/dashboard-admin/dashboard-admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardAdminComponent);
    return DashboardAdminComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-ong/dashboard-ong.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard-ong/dashboard-ong.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Bem-vindo(a), Clube do Gato</h3><br>\n\n<clr-tabs>\n  <!-- Visão geral -->\n  <clr-tab>\n    <button clrTabLink>Visão geral</button>\n    <ng-template [(clrIfActive)]=\"overviewActive\">\n      <clr-tab-content>\n        <div class=\"clr-row\">\n          <div class=\"clr-col-sm-12 clr-col-md-4\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Eventos publicados\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numEventos }}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"clr-col-sm-12 clr-col-md-4\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Postagens publicadas\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numPostagens }}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"clr-col-sm-12 clr-col-md-4\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Voluntários confirmados\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numVoluntarios }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h3>\n          Próximos eventos\n        </h3>\n        <div class=\"clr-row\">\n          <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n          <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n          <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n        </div>\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- Eventos -->\n  <clr-tab>\n    <button clrTabLink>Eventos</button>\n    <ng-template [(clrIfActive)]=\"eventsActive\">\n      <clr-tab-content>\n        <div class=\"clr-row\">\n          <div class=\"clr-col\">\n            <h4> {{ numEventos }} Eventos publicados </h4>\n          </div>\n          <div class=\"clr-col-auto\">\n            <button class=\"btn btn-sm btn-outline\" style=\"margin-top:1rem;\" routerLinkActive=\"active\"\n              routerLink=\"/ong/1/add-evento\">\n              <clr-icon shape=\"plus is-primary\"></clr-icon> Novo evento\n            </button>\n          </div>\n        </div>\n\n        <table class=\"table table-noborder\">\n          <thead>\n            <tr>\n              <th class=\"left\">Título</th>\n              <th>Data de cadastro</th>\n              <th>ONG responsável</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let event of eventos\">\n              <td class=\"left\"><a>{{ event }}</a></td>\n              <td>{{ data }}</td>\n              <td><a>Nome da ONG</a></td>\n              <td>\n                <div class=\"btn-group btn-link btn-sm\">\n                  <button class=\"btn\">Ver</button>\n                  <button class=\"btn\">Editar</button>\n                  <button class=\"btn\">Deletar</button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- Postagens -->\n  <clr-tab>\n    <button clrTabLink>Postagens</button>\n    <ng-template [(clrIfActive)]=\"postsActive\">\n      <clr-tab-content>\n        <div class=\"clr-row\">\n          <div class=\"clr-col\">\n            <h4> {{ numPostagens }} Postagens publicadas </h4>\n          </div>\n          <button class=\"clr-col-auto btn btn-sm btn-outline\" style=\"margin-top:1rem;\" routerLinkActive=\"active\"\n            routerLink=\"/ong/1/add-post\">\n            <clr-icon shape=\"plus is-primary\"></clr-icon> Nova postagem\n          </button>\n        </div>\n\n        <table class=\"table table-noborder\">\n          <thead>\n            <tr>\n              <th class=\"left\">Título</th>\n              <th>Data</th>\n              <th>ONG Responsável</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let post of postagens\">\n              <td class=\"left\"><a>{{ post }}</a></td>\n              <td>{{ data }}</td>\n              <td><a>Nome da ONG</a></td>\n              <td>\n                <div class=\"btn-group btn-link btn-sm\">\n                  <button class=\"btn\">Ver</button>\n                  <button class=\"btn\">Editar</button>\n                  <button class=\"btn\">Deletar</button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n</clr-tabs>\n\n<!--<router-outlet></router-outlet>-->"

/***/ }),

/***/ "./src/app/dashboard-ong/dashboard-ong.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard-ong/dashboard-ong.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1vbmcvZGFzaGJvYXJkLW9uZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard-ong/dashboard-ong.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard-ong/dashboard-ong.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardOngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardOngComponent", function() { return DashboardOngComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardOngComponent = /** @class */ (function () {
    function DashboardOngComponent() {
        this.eventos = ['Feira de Adoção', 'Arrecadação', 'Visita ao Abrigo', 'Jantar beneficiente'];
        this.postagens = ['Novidades', 'Meta atingida', 'Novo Local'];
        this.data = "23/05/2019";
        this.numEventos = this.eventos.length;
        this.numPostagens = this.postagens.length;
        this.numVoluntarios = this.numEventos * 5;
    }
    DashboardOngComponent.prototype.ngOnInit = function () {
    };
    DashboardOngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-ong',
            template: __webpack_require__(/*! ./dashboard-ong.component.html */ "./src/app/dashboard-ong/dashboard-ong.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-ong.component.scss */ "./src/app/dashboard-ong/dashboard-ong.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardOngComponent);
    return DashboardOngComponent;
}());



/***/ }),

/***/ "./src/app/editar-ong/editar-ong.component.html":
/*!******************************************************!*\
  !*** ./src/app/editar-ong/editar-ong.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <h3 class=\"modal-title\">Editar dados da ONG</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form clrForm>\n          <section novalidate class=\"form-block\">\n\n            <clr-input-container class=\"form-group\">\n              <label>Nome</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar nome\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Telefone</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"(DDD)XXXX-XXXX\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              <clr-control-error *clrIfError=\"'minlength'\">Telefone deve ter 14 caracteres</clr-control-error>\n              <clr-control-error *clrIfError=\"'maxlength'\">Telefone deve ter 14 caracteres</clr-control-error>\n            </clr-input-container>\n\n            <clr-date-container class=\"form-group\">\n              <label>Data de fundação</label>\n              <input type=\"text\" clrDate name=\"fundacao\" style=\"width: 230px\">\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-date-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Bairro</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar bairro\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Logradouro</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar logradouro\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>CEP</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar CEP\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Complemento</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar complemento\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-select-container class=\"form-group\">\n              <label>Áreas de interesse</label>\n              <select clrSelect name=\"interesse\" style=\"width: 230px\" required>\n                <option value=\"animais\">Animais</option>\n                <option value=\"cultura\">Arte e cultura</option>\n                <option value=\"humanitaria\">Humanitária</option>\n                <option value=\"ambiente\">Meio ambiente</option>\n              </select>\n              <clr-control-helper>Escolher categoria</clr-control-helper>\n            </clr-select-container>\n\n          </section>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Salvar</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

/***/ }),

/***/ "./src/app/editar-ong/editar-ong.component.scss":
/*!******************************************************!*\
  !*** ./src/app/editar-ong/editar-ong.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRhci1vbmcvZWRpdGFyLW9uZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/editar-ong/editar-ong.component.ts":
/*!****************************************************!*\
  !*** ./src/app/editar-ong/editar-ong.component.ts ***!
  \****************************************************/
/*! exports provided: EditarOngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarOngComponent", function() { return EditarOngComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditarOngComponent = /** @class */ (function () {
    function EditarOngComponent() {
    }
    EditarOngComponent.prototype.ngOnInit = function () {
    };
    EditarOngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-ong',
            template: __webpack_require__(/*! ./editar-ong.component.html */ "./src/app/editar-ong/editar-ong.component.html"),
            styles: [__webpack_require__(/*! ./editar-ong.component.scss */ "./src/app/editar-ong/editar-ong.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditarOngComponent);
    return EditarOngComponent;
}());



/***/ }),

/***/ "./src/app/editar-perfil/editar-perfil.component.html":
/*!************************************************************!*\
  !*** ./src/app/editar-perfil/editar-perfil.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n                    <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n                </button>\n                <h3 class=\"modal-title\">Editar perfil</h3>\n            </div>\n            <div class=\"modal-body\">\n                <form clrForm clrLayout=\"horizontal\">\n                    <section novalidate class=\"form-block\">\n\n                        <clr-input-container class=\"form-group\">\n                            <label>Nome</label>\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar nome\" />\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                            <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres</clr-control-error>\n                        </clr-input-container>\n\n                        <clr-input-container class=\"form-group\">\n                            <label>Email</label>\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar e-mail\" />\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                        </clr-input-container>\n\n                        <clr-password-container class=\"form-group\">\n                            <label>Senha</label>\n                            <input clrPassword type=\"password\" style=\"width: 195px\" required\n                                placeholder=\"Atualizar senha\" />\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                            <clr-control-error *clrIfError=\"'minlength'\">Senha deve ter 6+ caracteres\n                            </clr-control-error>\n                        </clr-password-container>\n\n                        <clr-input-container class=\"form-group\">\n                            <label>Telefone</label>\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"(DDD)XXXX-XXXX\" />\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                            <clr-control-error *clrIfError=\"'minlength'\">Telefone deve ter 14 caracteres\n                            </clr-control-error>\n                            <clr-control-error *clrIfError=\"'maxlength'\">Telefone deve ter 14 caracteres\n                            </clr-control-error>\n                        </clr-input-container>\n\n                        <clr-date-container class=\"form-group\">\n                            <label>Data de nascimento</label>\n                            <input type=\"date\" [(clrDate)]=\"date\" style=\"width: 230px\">\n                            <clr-control-helper>Atualizar data de nascimento</clr-control-helper>\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                        </clr-date-container>\n\n                    </section>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\"\n                    routerLink=\"..\">Cancelar</button>\n                <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Salvar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

/***/ }),

/***/ "./src/app/editar-perfil/editar-perfil.component.scss":
/*!************************************************************!*\
  !*** ./src/app/editar-perfil/editar-perfil.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRhci1wZXJmaWwvZWRpdGFyLXBlcmZpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/editar-perfil/editar-perfil.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/editar-perfil/editar-perfil.component.ts ***!
  \**********************************************************/
/*! exports provided: EditarPerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPerfilComponent", function() { return EditarPerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditarPerfilComponent = /** @class */ (function () {
    function EditarPerfilComponent() {
    }
    EditarPerfilComponent.prototype.ngOnInit = function () {
    };
    EditarPerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-perfil',
            template: __webpack_require__(/*! ./editar-perfil.component.html */ "./src/app/editar-perfil/editar-perfil.component.html"),
            styles: [__webpack_require__(/*! ./editar-perfil.component.scss */ "./src/app/editar-perfil/editar-perfil.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditarPerfilComponent);
    return EditarPerfilComponent;
}());



/***/ }),

/***/ "./src/app/evento-card/evento-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/evento-card/evento-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLinkActive=\"active\" routerLink=\"/evento/1\" class=\"card clickable\">\n<div class=\"card-header clr-row\">\n  <div class=\"clr-col\">\n    Nome do Evento\n    <small><br>Nome da Ong</small>\n  </div>\n  <br>\n</div>\n\n<div class=\"card-img\">\n  <img src=\"assets/images/evento.jpg\" alt=\"ong\" style=\"max-height:200px;object-fit: cover;\" />\n</div>\n<div class=\" card-block\">\n  <div class=\"card-text\">\n    <div class=\"clr-row\" style=\"margin-bottom:5px;\">\n      <div class=\"clr-col-auto\">\n        <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\n        24/08/2018\n      </div>\n      <div class=\"clr-col-auto\">\n        <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\n        Setor Sudoeste\n      </div>\n    </div>\n    He was charismatic, magnetic, electric and everybody knew it...\n  </div>\n</div>\n</a>\n<!--<router-outlet></router-outlet>-->"

/***/ }),

/***/ "./src/app/evento-card/evento-card.component.scss":
/*!********************************************************!*\
  !*** ./src/app/evento-card/evento-card.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-author-img {\n  display: inline-block;\n  border-radius: 100%;\n  height: 1.5rem;\n  width: 1.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: -0.5rem -1.75rem -0.5rem 0;\n  box-shadow: 0 2px 3px #818181;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvZXZlbnRvLWNhcmQvZXZlbnRvLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLDZCQUF3QztFQUN4Qyx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2V2ZW50by1jYXJkL2V2ZW50by1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtYXV0aG9yLWltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogLTAuNXJlbSAtMS43NXJlbSAtMC41cmVtIDA7XG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYigxMjksIDEyOSwgMTI5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/evento-card/evento-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/evento-card/evento-card.component.ts ***!
  \******************************************************/
/*! exports provided: EventoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoCardComponent", function() { return EventoCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventoCardComponent = /** @class */ (function () {
    function EventoCardComponent() {
    }
    EventoCardComponent.prototype.ngOnInit = function () {
    };
    EventoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-evento-card',
            template: __webpack_require__(/*! ./evento-card.component.html */ "./src/app/evento-card/evento-card.component.html"),
            styles: [__webpack_require__(/*! ./evento-card.component.scss */ "./src/app/evento-card/evento-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventoCardComponent);
    return EventoCardComponent;
}());



/***/ }),

/***/ "./src/app/evento-filtro/evento-filtro.component.html":
/*!************************************************************!*\
  !*** ./src/app/evento-filtro/evento-filtro.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <h3 class=\"modal-title\">Filtrar Eventos</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form clrForm>\n          <section novalidate class=\"form-block\">\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-4>Nome</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome do Evento\" />\n            </clr-input-container>\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-4>ONG</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome da Ong\" />\n            </clr-input-container>\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-4>Dt Evento</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"date\" size=\"35\" required placeholder=\"Nome da Ong\" />\n            </clr-input-container>\n            <clr-checkbox-container class=\"form-group\" clrInline>\n              <label clr-col-12 clr-col-md-4>Categorias</label>\n              <clr-checkbox-wrapper>\n                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\n                <label>Animais</label>\n              </clr-checkbox-wrapper>\n              <clr-checkbox-wrapper>\n                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\n                <label>Meio ambiente</label>\n              </clr-checkbox-wrapper>\n              <clr-checkbox-wrapper>\n                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\n                <label>Saúde</label>\n              </clr-checkbox-wrapper>\n            </clr-checkbox-container>\n          </section>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Filtrar</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

/***/ }),

/***/ "./src/app/evento-filtro/evento-filtro.component.scss":
/*!************************************************************!*\
  !*** ./src/app/evento-filtro/evento-filtro.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50by1maWx0cm8vZXZlbnRvLWZpbHRyby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/evento-filtro/evento-filtro.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/evento-filtro/evento-filtro.component.ts ***!
  \**********************************************************/
/*! exports provided: EventoFiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoFiltroComponent", function() { return EventoFiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventoFiltroComponent = /** @class */ (function () {
    function EventoFiltroComponent() {
    }
    EventoFiltroComponent.prototype.ngOnInit = function () {
    };
    EventoFiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-evento-filtro',
            template: __webpack_require__(/*! ./evento-filtro.component.html */ "./src/app/evento-filtro/evento-filtro.component.html"),
            styles: [__webpack_require__(/*! ./evento-filtro.component.scss */ "./src/app/evento-filtro/evento-filtro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventoFiltroComponent);
    return EventoFiltroComponent;
}());



/***/ }),

/***/ "./src/app/eventos/eventos.component.html":
/*!************************************************!*\
  !*** ./src/app/eventos/eventos.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <!--<router-outlet></router-outlet>-->\n  <div class=\"clr-col-12\">\n    <div class=\"clr-row\">\n      <div class=\"clr-col\">\n        <h3>Eventos</h3>\n      </div>\n      <div *ngIf=\"auth?.currentUserValue?.role == 'ong'\" class=\"clr-col-auto\">\n        <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"add\"\n          style=\"margin: 1rem 0 0 auto; display: table;\">\n          <clr-icon shape=\"plus is-primary\"></clr-icon> Novo Evento\n        </button>\n      </div>\n      <!--<router-outlet></router-outlet>-->\n      <div class=\"clr-col-auto\">\n        <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"filtrar\"\n          style=\"margin: 1rem 0 0 auto; display: table;\">\n          <clr-icon shape=\"search is-primary\"></clr-icon> Filtrar Eventos\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/eventos/eventos.component.scss":
/*!************************************************!*\
  !*** ./src/app/eventos/eventos.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50b3MvZXZlbnRvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/eventos/eventos.component.ts":
/*!**********************************************!*\
  !*** ./src/app/eventos/eventos.component.ts ***!
  \**********************************************/
/*! exports provided: EventosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosComponent", function() { return EventosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var EventosComponent = /** @class */ (function () {
    function EventosComponent(auth) {
        this.auth = auth;
    }
    EventosComponent.prototype.ngOnInit = function () {
    };
    EventosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventos',
            template: __webpack_require__(/*! ./eventos.component.html */ "./src/app/eventos/eventos.component.html"),
            styles: [__webpack_require__(/*! ./eventos.component.scss */ "./src/app/eventos/eventos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], EventosComponent);
    return EventosComponent;
}());



/***/ }),

/***/ "./src/app/excluir-evento/excluir-evento.component.html":
/*!**************************************************************!*\
  !*** ./src/app/excluir-evento/excluir-evento.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal static bump-down\">\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <h3 class=\"modal-title\">Excluir evento</h3>\n      </div>\n      <div class=\"alert alert-danger\" role=\"alert\">\n        <div class=\"alert-items\">\n          <div class=\"alert-item static\">\n            <div class=\"alert-icon-wrapper\">\n              <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n            </div>\n            <span class=\"alert-text\">\n              Você deseja excluir o evento?\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Excluir</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

/***/ }),

/***/ "./src/app/excluir-evento/excluir-evento.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/excluir-evento/excluir-evento.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4Y2x1aXItZXZlbnRvL2V4Y2x1aXItZXZlbnRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/excluir-evento/excluir-evento.component.ts":
/*!************************************************************!*\
  !*** ./src/app/excluir-evento/excluir-evento.component.ts ***!
  \************************************************************/
/*! exports provided: ExcluirEventoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcluirEventoComponent", function() { return ExcluirEventoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExcluirEventoComponent = /** @class */ (function () {
    function ExcluirEventoComponent() {
    }
    ExcluirEventoComponent.prototype.ngOnInit = function () {
    };
    ExcluirEventoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-excluir-evento',
            template: __webpack_require__(/*! ./excluir-evento.component.html */ "./src/app/excluir-evento/excluir-evento.component.html"),
            styles: [__webpack_require__(/*! ./excluir-evento.component.scss */ "./src/app/excluir-evento/excluir-evento.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExcluirEventoComponent);
    return ExcluirEventoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<router-outlet></router-outlet>-->\n<!-- Home do convidado -->\n<div *ngIf=\"auth?.currentUserValue == null\">\n  <app-convidado></app-convidado>\n</div>\n<!-- Home do voluntário -->\n<div *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\">\n  <app-timeline></app-timeline>\n</div>\n<!-- Home da ONG -->\n<div *ngIf=\"auth?.currentUserValue?.role == 'ong'\">\n  <app-dashboard-ong></app-dashboard-ong>\n</div>\n<!-- Home do administrador -->\n<div *ngIf=\"auth?.currentUserValue?.role == 'admin'\">\n  <app-dashboard-admin></app-dashboard-admin>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row clr-justify-content-center\">\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Entrar\n      </div>\n      <div class=\"card-block\">\n        <div class=\"card-text\">\n          <form clrForm [formGroup]=\"loginForm\" clrLayout=\"horizontal\">\n              <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\n                <div class=\"alert-items\">\n                  <div class=\"alert-item static\">\n                    <div class=\"alert-icon-wrapper\">\n                      <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n                    </div>\n                    <span class=\"alert-text\">\n                      {{error}}\n                    </span>\n                  </div>\n                </div>\n              </div>\n\n              <clr-input-container class=\"form-group\">\n                <label>E-mail</label>\n                <input formControlName=\"email\" clrInput type=\"email\" size=35 required />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é obrigatório</clr-control-error>\n              </clr-input-container>\n\n              <clr-password-container class=\"form-group\">\n                <label>Senha</label>\n                <input formControlName=\"password\" clrPassword type=\"password\" size=30 required />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é obrigatório</clr-control-error>\n              </clr-password-container>\n          </form>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\">\n          Entrar\n          <span *ngIf=\"loading\" class=\"spinner spinner-inline\">\n            Loading...\n          </span>\n        </button>\n        <button class=\"btn btn-sm btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.submitted = false;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.authenticationService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/ong-card/ong-card.component.html":
/*!**************************************************!*\
  !*** ./src/app/ong-card/ong-card.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLinkActive=\"active\" routerLink=\"/ong/2\" class=\"card clickable\">\n  <div class=\"card-img\">\n    <img src=\"assets/images/ong.png\" alt=\"ong\" />\n  </div>\n  <div class=\"card-block\">\n    <div class=\"card-title\">\n      <b>Nome da ONG</b>\n    </div>\n    <p class=\"card-text short-description\">\n      I was in the winter of my life and the men that I met along the road were my only summer.\n      At night, I fell asleep with visions of myself dancing and laughing and crying with them.\n      Three years down the line of being on an endless world tour and\n      my memories of them were the only things that substained me and my only real happy times.\n    </p>\n    <div>\n      <a routerLinkActive=\"active\" routerLink=\".\" class=\"label clickable\">Animais</a>\n      <a routerLinkActive=\"active\" routerLink=\".\" class=\"label clickable\">Meio ambiente</a>\n    </div>\n  </div>\n</a>\n<!--<router-outlet></router-outlet>-->"

/***/ }),

/***/ "./src/app/ong-card/ong-card.component.scss":
/*!**************************************************!*\
  !*** ./src/app/ong-card/ong-card.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".short-description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  /* number of lines to show */\n  line-height: 1rem;\n  /* fallback */\n  max-height: 4rem;\n  /* fallback */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvb25nLWNhcmQvb25nLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUVwQixxQkFBcUI7RUFBRSw0QkFBQTtFQUN2QixpQkFBaUI7RUFBTSxhQUFBO0VBQ3ZCLGdCQUFnQjtFQUFPLGFBQUEsRUFBYyIsImZpbGUiOiJzcmMvYXBwL29uZy1jYXJkL29uZy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3J0LWRlc2NyaXB0aW9uIHtcbiAgICAvLyBMaW1pdGEgYSBhbHR1cmEgbcOheGltYSBhIDQgbGluaGFzXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgICBsaW5lLWhlaWdodDogMXJlbTsgICAgIC8qIGZhbGxiYWNrICovXG4gICAgbWF4LWhlaWdodDogNHJlbTsgICAgICAvKiBmYWxsYmFjayAqL1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/ong-card/ong-card.component.ts":
/*!************************************************!*\
  !*** ./src/app/ong-card/ong-card.component.ts ***!
  \************************************************/
/*! exports provided: OngCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngCardComponent", function() { return OngCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OngCardComponent = /** @class */ (function () {
    function OngCardComponent() {
    }
    OngCardComponent.prototype.ngOnInit = function () {
    };
    OngCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ong-card',
            template: __webpack_require__(/*! ./ong-card.component.html */ "./src/app/ong-card/ong-card.component.html"),
            styles: [__webpack_require__(/*! ./ong-card.component.scss */ "./src/app/ong-card/ong-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OngCardComponent);
    return OngCardComponent;
}());



/***/ }),

/***/ "./src/app/ong-filtro/ong-filtro.component.html":
/*!******************************************************!*\
  !*** ./src/app/ong-filtro/ong-filtro.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n                    <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n                </button>\n                <h3 class=\"modal-title\">Filtrar ONGs</h3>\n            </div>\n            <div class=\"modal-body\">\n                <form clrForm>\n                    <section novalidate class=\"form-block\">\n                        <clr-input-container class=\"form-group\">\n                            <label clr-col-12 clr-col-md-4>Nome</label>\n                            <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required\n                                placeholder=\"Nome da ONG\" />\n                        </clr-input-container>\n                        <clr-checkbox-container class=\"form-group\" clrInline>\n                            <label clr-col-12 clr-col-md-4>Áreas</label>\n                            <clr-checkbox-wrapper>\n                                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\n                                <label>Animais</label>\n                            </clr-checkbox-wrapper>\n                            <clr-checkbox-wrapper>\n                                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\n                                <label>Meio ambiente</label>\n                            </clr-checkbox-wrapper>\n                            <clr-checkbox-wrapper>\n                                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\n                                <label>Saúde</label>\n                            </clr-checkbox-wrapper>\n                        </clr-checkbox-container>\n                    </section>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\"\n                    routerLink=\"..\">Cancelar</button>\n                <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\"\n                    routerLink=\"..\">Filtrar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

/***/ }),

/***/ "./src/app/ong-filtro/ong-filtro.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ong-filtro/ong-filtro.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".short-options {\n  max-height: 100px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvb25nLWZpbHRyby9vbmctZmlsdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29uZy1maWx0cm8vb25nLWZpbHRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9ydC1vcHRpb25zIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ong-filtro/ong-filtro.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ong-filtro/ong-filtro.component.ts ***!
  \****************************************************/
/*! exports provided: OngFiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngFiltroComponent", function() { return OngFiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OngFiltroComponent = /** @class */ (function () {
    function OngFiltroComponent() {
    }
    OngFiltroComponent.prototype.ngOnInit = function () {
    };
    OngFiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ong-filtro',
            template: __webpack_require__(/*! ./ong-filtro.component.html */ "./src/app/ong-filtro/ong-filtro.component.html"),
            styles: [__webpack_require__(/*! ./ong-filtro.component.scss */ "./src/app/ong-filtro/ong-filtro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OngFiltroComponent);
    return OngFiltroComponent;
}());



/***/ }),

/***/ "./src/app/ongs/ongs.component.html":
/*!******************************************!*\
  !*** ./src/app/ongs/ongs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <div class=\"clr-col-6\">\n    <h3>ONGs</h3>\n  </div>\n  <div class=\"clr-col-6\">\n    <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"filtrar\" style=\"margin: 1rem 0 0 auto; display: table;\">\n<clr-icon shape=\"search is-primary\"></clr-icon> Filtrar ONGs\n</button>\n</div>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n<app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/ongs/ongs.component.scss":
/*!******************************************!*\
  !*** ./src/app/ongs/ongs.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filtros-container {\n  padding: 12px;\n  width: 100%;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvb25ncy9vbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvb25ncy9vbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRyb3MtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLy8gLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuLy8gICBtYXJnaW4tbGVmdDogMXJlbTtcbi8vIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ongs/ongs.component.ts":
/*!****************************************!*\
  !*** ./src/app/ongs/ongs.component.ts ***!
  \****************************************/
/*! exports provided: OngsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngsComponent", function() { return OngsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OngsComponent = /** @class */ (function () {
    function OngsComponent() {
    }
    OngsComponent.prototype.ngOnInit = function () {
    };
    OngsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ongs',
            template: __webpack_require__(/*! ./ongs.component.html */ "./src/app/ongs/ongs.component.html"),
            styles: [__webpack_require__(/*! ./ongs.component.scss */ "./src/app/ongs/ongs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OngsComponent);
    return OngsComponent;
}());



/***/ }),

/***/ "./src/app/perfil-ong/perfil-ong.component.html":
/*!******************************************************!*\
  !*** ./src/app/perfil-ong/perfil-ong.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <!-- Coluna da esquerda -->\n  <div class=\"clr-col-sm-12 clr-col-md-3\">\n    <div class=\"clr-row\">\n      <div class=\"clr-col\">\n        <!-- Card com informações da ONG-->\n        <div class=\"card\">\n          <div class=\"card-img\">\n            <img src=\"assets/images/ong.png\" alt=\"Logo ONG\">\n          </div>\n          <div class=\"card-header\">\n            <h2 style=\"text-align: center\">Nome da ONG</h2>\n          </div>\n          <!-- Quem Somos -->\n          <div class=\"card-block\">\n            <div class=\"card-title\">\n              Quem somos\n            </div>\n            <div class=\"card-text\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n              when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n            </div>\n          </div>\n          <!-- Contato -->\n          <div class=\"card-block\">\n            <div class=\"card-title\">\n              Contato\n            </div>\n            <div class=\"card-text\">\n              <clr-icon shape=\"phone-handset\" class=\"is-info\"></clr-icon> <strong> Telefone: </strong>(062) 9999-9999\n              <br>\n              <clr-icon shape=\"envelope\" class=\"is-info\"></clr-icon> <strong> E-mail: </strong>ong@email.com\n              <br>\n              <clr-icon shape=\"network-globe\" class=\"is-info\"></clr-icon> <strong> Website: </strong> <a>ong.org</a>\n              <br>\n              <clr-icon shape=\"network-globe\" class=\"is-info\"></clr-icon> <strong> Facebook: </strong> <a>fb.com/ong</a>\n            </div>\n          </div>\n          <!-- Categorias -->\n          <div class=\"card-block\">\n            <div class=\"card-title\">\n              Categorias\n            </div>\n            <div class=\"card-text\">\n              <a class=\"label label-purple clickable\" routerLinkActive=\"active\" routerLink=\".\">Animais</a>\n              <a class=\"label label-blue clickable\" routerLinkActive=\"active\" routerLink=\".\">Meio ambiente</a>\n            </div>\n          </div>\n          <!-- Categorias -->\n          <div class=\"card-block\">\n            <div class=\"card-title\">\n              Doações\n            </div>\n            <div class=\"card-text\">\n              Donate at ....\n            </div>\n          </div>\n          <!-- Botoes -->\n          <div class=\"card-footer\">\n            <button *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"btn btn-sm btn-link\">\n              <clr-icon shape=\"bookmark\"></clr-icon> Seguir\n            </button>\n            <button class=\"btn btn-sm btn-link\">\n              <clr-icon shape=\"share\"></clr-icon> Compartilhar\n            </button>\n          </div>\n        </div>\n        <div *ngIf=\"auth?.currentUserValue?.role == 'ong' || auth?.currentUserValue?.role == 'admin'\" class=\"clr-row\">\n          <div class=\"clr-col-lg-1 clr-col-md-1 clr-col-12\">\n            <button class=\"btn btn-link\" routerLinkActive=\"active\" routerLink=\"editar\">Editar perfil</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Coluna da direita -->\n  <div class=\"clr-col\">\n    <!-- Barra de navegacao-->\n    <clr-tabs>\n      <!-- Eventos -->\n      <clr-tab>\n        <button clrTabLink>Eventos</button>\n        <ng-template [(clrIfActive)]=\"eventosActive\">\n          <clr-tab-content>\n            <div class=\"clr-row\">\n              <div class=\"clr-col\">\n                <h3>Últimos eventos</h3>\n              </div>\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.role == 'ong'\">\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\" routerLinkActive=\"active\"\n                  routerLink=\"add-evento\">\n                  Novo evento\n                </button>\n              </div>\n              <div class=\"clr-col-12\">\n                <app-timeline-evento></app-timeline-evento>\n                <app-timeline-evento></app-timeline-evento>\n                <app-timeline-evento></app-timeline-evento>\n              </div>\n              <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\n                Carregar mais antigos\n              </button>\n            </div>\n          </clr-tab-content>\n        </ng-template>\n      </clr-tab>\n\n      <!-- Publicações -->\n      <clr-tab>\n        <button clrTabLink>Publicações</button>\n        <ng-template [(clrIfActive)]=\"publicacoesActive\">\n          <clr-tab-content>\n            <div class=\"clr-row\">\n              <div class=\"clr-col\">\n                <h3>Últimas postagens</h3>\n              </div>\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.role == 'ong'\">\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\" routerLinkActive=\"active\"\n                  routerLink=\"add-post\">\n                  Nova postagem\n                </button>\n              </div>\n              <div class=\"clr-col-12\">\n                <app-timeline-post></app-timeline-post>\n                <app-timeline-post></app-timeline-post>\n                <app-timeline-post></app-timeline-post>\n                <app-timeline-post></app-timeline-post>\n              </div>\n              <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\n                Carregar mais antigos\n              </button>\n            </div>\n          </clr-tab-content>\n        </ng-template>\n      </clr-tab>\n\n      <!-- Seguidores -->\n      <clr-tab>\n        <button clrTabLink>Seguidores</button>\n        <ng-template [(clrIfActive)]=\"seguidoresActive\">\n          <clr-tab-content>\n            <h3> {{ numSeguidores }} Seguidores </h3>\n            <div class=\"clr-row\">\n              <div class=\"clr-col-sm-12 clr-col-md-6\" *ngFor=\"let seguidor of seguidores\">\n                <a routerLinkActive=\"active\" routerLink=\"/usuario/user\" class=\"card clickable\">\n                  <div class=\"card-header\" style=\"height:auto; overflow:auto;\">\n                    <img class=\"seguidor-card\" src=\"assets/images/ong.png\" alt=\"profile-picture\" />\n                    <h3> {{ seguidor }}</h3>\n                  </div>\n                </a>\n              </div>\n            </div>\n          </clr-tab-content>\n        </ng-template>\n      </clr-tab>\n\n      <!-- Galeria -->\n      <clr-tab>\n        <button clrTabLink>Galeria</button>\n        <ng-template [(clrIfActive)]=\"galeriaActive\">\n          <clr-tab-content>\n            <div class=\"clr-row\">\n              <div class=\"clr-col\">\n                <h3>Fotos</h3>\n              </div>\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.role == 'ong'\">\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\n                  Nova foto\n                </button>\n              </div>\n              <div class=\"clr-col-md-12\"></div>\n            </div>\n            <div class=\"clr-row\">\n              <div class=\"clr-col-md-6 clr-col-12\">\n                <a class=\"card card-img\">\n                  <img src=\"assets/images/galeria.jpg\" />\n                </a>\n              </div>\n              <div class=\"clr-col-md-6 clr-col-12\">\n                <a class=\"card card-img\">\n                  <img src=\"assets/images/galeria2.jpg\" />\n                </a>\n              </div>\n            </div>\n          </clr-tab-content>\n        </ng-template>\n      </clr-tab>\n    </clr-tabs>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/perfil-ong/perfil-ong.component.scss":
/*!******************************************************!*\
  !*** ./src/app/perfil-ong/perfil-ong.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seguidor-card {\n  max-width: 80px;\n  max-height: 80px;\n  border-radius: 50%;\n  float: right;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: 0;\n  background-color: white;\n  box-shadow: 0 2px 3px #818181; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvcGVyZmlsLW9uZy9wZXJmaWwtb25nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsNkJBQXdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwtb25nL3BlcmZpbC1vbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VndWlkb3ItY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA4MHB4OyBcbiAgICBtYXgtaGVpZ2h0OiA4MHB4OyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2IoMTI5LCAxMjksIDEyOSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/perfil-ong/perfil-ong.component.ts":
/*!****************************************************!*\
  !*** ./src/app/perfil-ong/perfil-ong.component.ts ***!
  \****************************************************/
/*! exports provided: PerfilOngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilOngComponent", function() { return PerfilOngComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var PerfilOngComponent = /** @class */ (function () {
    function PerfilOngComponent(auth) {
        this.auth = auth;
        this.seguidores = ['João Pedro', 'Natália Lopes', 'Nelson William', 'Sofia Moraes'];
        this.numSeguidores = this.seguidores.length;
        for (var index = 0; index < this.seguidores.length; index++) {
            var seguidor = this.seguidores[index];
        }
    }
    PerfilOngComponent.prototype.ngOnInit = function () {
    };
    PerfilOngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil-ong',
            template: __webpack_require__(/*! ./perfil-ong.component.html */ "./src/app/perfil-ong/perfil-ong.component.html"),
            styles: [__webpack_require__(/*! ./perfil-ong.component.scss */ "./src/app/perfil-ong/perfil-ong.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], PerfilOngComponent);
    return PerfilOngComponent;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.component.html":
/*!**********************************************!*\
  !*** ./src/app/perfil/perfil.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-tabs>\n  <clr-tab>\n    <button clrTabLink>Dados gerais</button>\n    <clr-tab-content>\n      <div class=\"clr-row\">\n        <div class=\"clr-col-lg-3 clr-col-md-3 clr-col-12\">\n          <a class=\"card clickable\" routerLinkActive=\"active\" routerLink=\".\">\n            <div class=\"card-img\">\n              <img src=\"assets/images/avatar-2.jpg\" alt=\"avatar\">\n            </div>\n          </a>\n        </div>\n        <div class=\"clr-col-md-9\">\n\n          <table>\n            <tbody>\n              <tr>\n                <td><h5><b>Nome</b></h5></td>\n                <td><h5 class=\"margin-data\">Bette Davis</h5></td>\n              </tr>\n              <tr>\n                <td><h5><b>E-mail</b></h5></td>\n                <td><h5 class=\"margin-data\">bettinha@hollywood.com</h5></td>\n              </tr>\n              <tr>\n                <td><h5><b>Telefone</b></h5></td>\n                <td><h5 class=\"margin-data\">555-123-678</h5></td>\n              </tr>\n              <tr>\n                <td><h5><b>Idade</b></h5></td>\n                <td><h5 class=\"margin-data\">82 anos</h5></td>\n              </tr>\n              <tr>\n                <td><h5><b>Interesses</b></h5></td>\n                <td>\n                  <div style=\"margin-top: 5%;\" class=\"margin-data\">\n                    <a class=\"label label-purple clickable\" routerLinkActive=\"active\" routerLink=\".\">Arte e cultura</a>\n                    <a class=\"label label-orange clickable\" routerLinkActive=\"active\" routerLink=\".\">Humanitária</a>\n                    <a class=\"label label-blue clickable\" routerLinkActive=\"active\" routerLink=\".\">Meio ambiente</a>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div *ngIf=\"auth?.currentUserValue?.role == 'voluntario' || auth?.currentUserValue?.role == 'admin'\"\n        class=\"clr-row\">\n        <div>\n          <button class=\"btn btn-link\" routerLinkActive=\"active\" routerLink=\"editar\">Editar perfil</button>\n        </div>\n      </div>\n    </clr-tab-content>\n  </clr-tab>\n  <clr-tab>\n    <button clrTabLink>Participação em eventos</button>\n    <clr-tab-content>\n\n      <div class=\"clr-row\">\n\n        <div class=\"clr-col-lg-4 clr-col-md-8 clr-col-12\">\n          <div class=\"card\">\n            <div class=\"card-block\">\n              <div class=\"card-title\">\n                <b>Evento 1</b>\n              </div>\n              <div class=\"card-text\" style=\"height: 220px;\">\n                <br /><b>ONG:</b>\n                <br />Bluepeace\n                <br /><b>Data</b>\n                <br />25/05/1541\n                <br /><b>Local</b>\n                <br />Campus Samambaia\n                <br /><b>Função</b>\n                <br />Logística\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"/evento/1\">Ver evento</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"clr-col-lg-4 clr-col-md-8 clr-col-12\">\n          <div class=\"card\">\n            <div class=\"card-block\">\n              <div class=\"card-title\">\n                <b>Evento 2</b>\n              </div>\n              <div class=\"card-text\" style=\"height: 220px;\">\n                <br /><b>ONG:</b>\n                <br />Yellowpeace\n                <br /><b>Data</b>\n                <br />25/05/1541\n                <br /><b>Local</b>\n                <br />Campus Samambaia\n                <br /><b>Função</b>\n                <br />Parte técnica\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"/evento/1\">Ver evento</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"clr-col-lg-4 clr-col-md-8 clr-col-12\">\n          <div class=\"card\">\n            <div class=\"card-block\">\n              <div class=\"card-title\">\n                <b>Evento 3</b>\n              </div>\n              <div class=\"card-text\" style=\"height: 220px;\">\n                <br /><b>ONG:</b>\n                <br />Redpeace\n                <br /><b>Data</b>\n                <br />25/05/1541\n                <br /><b>Local</b>\n                <br />Campus Samambaia\n                <br /><b>Função</b>\n                <br />Divulgação\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"/evento/1\">Ver evento</button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n\n    </clr-tab-content>\n  </clr-tab>\n\n</clr-tabs>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/perfil/perfil.component.scss":
/*!**********************************************!*\
  !*** ./src/app/perfil/perfil.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-data {\n  margin-left: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLWRhdGEge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/perfil/perfil.component.ts":
/*!********************************************!*\
  !*** ./src/app/perfil/perfil.component.ts ***!
  \********************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(auth) {
        this.auth = auth;
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.scss */ "./src/app/perfil/perfil.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/timeline-evento/timeline-evento.component.html":
/*!****************************************************************!*\
  !*** ./src/app/timeline-evento/timeline-evento.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLinkActive=\"active\" routerLink=\"/evento/a12b3c\" class=\"card clickable\">\n  <div class=\"card-header clr-row\">\n    <div class=\"clr-col\">\n      <clr-icon shape=\"calendar\"></clr-icon>\n      Nome do Evento\n    </div>\n    <div class=\"clr-col-auto\">\n      <span class=\"p4\">por</span>\n      <span class=\"h2\">\n        Nome da ONG\n      </span>\n      <img class=\"clr-col-12 clr-col-md-auto post-author-img\" src=\"assets/images/ong.png\" alt=\"ONG\">\n    </div>\n  </div>\n  <div class=\"card-img\">\n    <img src=\"assets/images/evento.jpg\" alt=\"ong\" style=\"max-height:300px;object-fit: cover;\" />\n  </div>\n  <div class=\" card-block\">\n    <div class=\"card-text\">\n      <div class=\"clr-row\" style=\"margin-bottom:5px;\">\n        <div class=\"clr-col-auto\">\n          <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\n          24/08/2018\n        </div>\n        <div class=\"clr-col-auto\">\n          <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\n          Setor Sudoeste\n        </div>\n        <div class=\"clr-col\"></div>\n        <div class=\"clr-col-auto\">\n          <span class=\"label\">Animais</span>\n          <span class=\"label\">Meio ambiente</span>\n        </div>\n      </div>\n      He was charismatic, magnetic, electric and everybody knew it.<br>\n      When he walked in every woman's head turned, everyone stood up to talk to him.<br>\n      He was like this hybrid, this mix of a man who couldn't contain himself.\n    </div>\n  </div>\n  <div class=\"card-footer clr-row\">\n    <div class=\"clr-col\">\n      <button *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"btn btn-sm btn-link\">\n        <clr-icon shape=\"heart\"></clr-icon>\n        Favoritar\n      </button>\n    </div>\n    <div class=\"clr-col-auto\">\n      <span class=\"p8\" style=\"margin-top:0.5rem;\">\n        Postado às 18:35 em 21/08/1998\n      </span>\n    </div>\n  </div>\n</a>\n<!--<router-outlet></router-outlet>-->"

/***/ }),

/***/ "./src/app/timeline-evento/timeline-evento.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/timeline-evento/timeline-evento.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-author-img {\n  display: inline-block;\n  border-radius: 100%;\n  height: 1.5rem;\n  width: 1.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: -0.5rem -1.75rem -0.5rem 0;\n  box-shadow: 0 2px 3px #818181;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvdGltZWxpbmUtZXZlbnRvL3RpbWVsaW5lLWV2ZW50by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMsNkJBQXdDO0VBQ3hDLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGltZWxpbmUtZXZlbnRvL3RpbWVsaW5lLWV2ZW50by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWF1dGhvci1pbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IC0wLjVyZW0gLTEuNzVyZW0gLTAuNXJlbSAwO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2IoMTI5LCAxMjksIDEyOSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/timeline-evento/timeline-evento.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/timeline-evento/timeline-evento.component.ts ***!
  \**************************************************************/
/*! exports provided: TimelineEventoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineEventoComponent", function() { return TimelineEventoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var TimelineEventoComponent = /** @class */ (function () {
    function TimelineEventoComponent(auth) {
        this.auth = auth;
    }
    TimelineEventoComponent.prototype.ngOnInit = function () {
    };
    TimelineEventoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline-evento',
            template: __webpack_require__(/*! ./timeline-evento.component.html */ "./src/app/timeline-evento/timeline-evento.component.html"),
            styles: [__webpack_require__(/*! ./timeline-evento.component.scss */ "./src/app/timeline-evento/timeline-evento.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], TimelineEventoComponent);
    return TimelineEventoComponent;
}());



/***/ }),

/***/ "./src/app/timeline-post/timeline-post.component.html":
/*!************************************************************!*\
  !*** ./src/app/timeline-post/timeline-post.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header clr-row\">\n    <div class=\"clr-col\">\n      <clr-icon shape=\"talk-bubbles\"></clr-icon>\n      Nome da Postagem\n    </div>\n    <div class=\"clr-col-auto\">\n      <span class=\"p4\">por</span>\n      <strong class=\"h2\">\n        Nome da ONG\n      </strong>\n      <img class=\"clr-col-12 clr-col-md-auto post-author-img\" src=\"assets/images/ong.png\" alt=\"ONG\">\n    </div>\n  </div>\n  <div class=\"card-block\">\n    <div class=\"card-text\">\n      He was charismatic, magnetic, electric and everybody knew it.<br>\n      When he walked in every woman's head turned, everyone stood up to talk to him.<br>\n      He was like this hybrid, this mix of a man who couldn't contain himself.\n    </div>\n  </div>\n  <div class=\"card-footer clr-row\">\n    <div class=\"clr-col\">\n      <button *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"btn btn-sm btn-link\">\n        <clr-icon shape=\"heart\"></clr-icon>\n        Favoritar\n      </button>\n    </div>\n    <div class=\"clr-col-auto\">\n      <span class=\"p8\" style=\"margin-top:0.5rem;\">\n        Postado às 18:35 em 21/08/1998\n      </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/timeline-post/timeline-post.component.scss":
/*!************************************************************!*\
  !*** ./src/app/timeline-post/timeline-post.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-author-img {\n  display: inline-block;\n  border-radius: 100%;\n  height: 1.5rem;\n  width: 1.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: -0.5rem -1.75rem -0.5rem 0;\n  box-shadow: 0 2px 3px #818181;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvdGltZWxpbmUtcG9zdC90aW1lbGluZS1wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyw2QkFBd0M7RUFDeEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aW1lbGluZS1wb3N0L3RpbWVsaW5lLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1hdXRob3ItaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAtMC41cmVtIC0xLjc1cmVtIC0wLjVyZW0gMDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiKDEyOSwgMTI5LCAxMjkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/timeline-post/timeline-post.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/timeline-post/timeline-post.component.ts ***!
  \**********************************************************/
/*! exports provided: TimelinePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePostComponent", function() { return TimelinePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var TimelinePostComponent = /** @class */ (function () {
    function TimelinePostComponent(auth) {
        this.auth = auth;
    }
    TimelinePostComponent.prototype.ngOnInit = function () {
    };
    TimelinePostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline-post',
            template: __webpack_require__(/*! ./timeline-post.component.html */ "./src/app/timeline-post/timeline-post.component.html"),
            styles: [__webpack_require__(/*! ./timeline-post.component.scss */ "./src/app/timeline-post/timeline-post.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], TimelinePostComponent);
    return TimelinePostComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <router-outlet></router-outlet>\n  <div class=\"clr-col-12\">\n    <h3>Últimas postagens e eventos</h3>\n  </div>\n  <div class=\"clr-col-12\">\n    <app-timeline-post></app-timeline-post>\n    <app-timeline-post></app-timeline-post>\n    <app-timeline-evento></app-timeline-evento>\n    <app-timeline-evento></app-timeline-evento>\n    <app-timeline-post></app-timeline-post>\n    <app-timeline-evento></app-timeline-evento>\n    <app-timeline-post></app-timeline-post>\n  </div>\n  <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\n    Carregar mais antigos\n  </button>\n\n  <div *ngIf=\"auth?.currentUserValue?.role == 'ong'\">\n    <button class=\"btn btn-primary btn-icon btnLateralSuspenso\" routerLinkActive=\"active\" routerLink=\"addPostagem\"\n      title=\"Nova postagem\">\n      <clr-icon shape=\"plus\"></clr-icon>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/timeline/timeline.component.scss":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnLateralSuspenso {\n  margin-right: 12px;\n  border-radius: 50% !important;\n  position: fixed;\n  bottom: 40px;\n  right: 80px;\n  width: 60px;\n  height: 60px;\n  box-shadow: 2px 2px 10px #808080;\n  font-size: 30px; }\n\n.btnLateralSuspenso:hover {\n  box-shadow: 4px 4px 20px #808080;\n  transition: .3s linear all; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsNkJBQTRCO0VBQzVCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGVBQ0osRUFBQTs7QUFFQTtFQUNJLGdDQUFnQztFQUNoQywwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkxhdGVyYWxTdXNwZW5zbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICBib3R0b206IDQwcHg7XG4gICAgcmlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMzBweFxufVxuXG4uYnRuTGF0ZXJhbFN1c3BlbnNvOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMjBweCAjODA4MDgwO1xuICAgIHRyYW5zaXRpb246IC4zcyBsaW5lYXIgYWxsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/timeline/timeline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/ver-evento/ver-evento.component.html":
/*!******************************************************!*\
  !*** ./src/app/ver-evento/ver-evento.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  Nome do Evento\n</h2>\n<div class=\"clr-row\">\n\n  <div class=\"clr-col\">\n    <div class=\"card-img\">\n      <img src=\"assets/images/evento.jpg\" alt=\"ong\" style=\"max-height:400px;object-fit: cover;\" />\n    </div>\n  </div>\n\n  <div class=\"clr-break-row\"></div>\n\n  <!-- Coluna da esquerda -->\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\n    <div class=\"clr-row\">\n      <div class=\"clr-col\">\n        <!-- Card com informações-->\n        <a routerLinkActive=\"active\" routerLink=\"/ong/ong123\" class=\"card clickable\">\n          <div class=\"card-header\" style=\"height:auto; overflow:auto;\">\n            <span class=\"p4\">Realização</span> Nome da ONG <img class=\"ong-card\" src=\"assets/images/ong.png\" />\n          </div>\n        </a>\n        <div class=\"card\">\n          <div class=\"card-block\">\n            <div class=\"card-title\">\n              Informações\n            </div>\n            <div class=\"card-text\">\n              <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon> <strong> Local:</strong> Setor Sudoeste\n              <br>\n              <clr-icon shape=\"calendar\" class=\"is-info\"></clr-icon> <strong> Data:</strong> 25/05/2019\n              <br>\n              <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon> <strong> Horário:</strong> 09:00\n            </div>\n          </div>\n          <div class=\"card-block\">\n            <div class=\"card-title\">\n              Categorias\n            </div>\n            <div class=\"card-text\">\n              <a class=\"label label-purple clickable\" routerLinkActive=\"active\" routerLink=\".\">Animais</a>\n              <a class=\"label label-blue clickable\" routerLinkActive=\"active\" routerLink=\".\">Meio ambiente</a>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <button *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"btn btn-sm btn-link\">\n              <clr-icon shape=\"heart\"></clr-icon> Favoritar\n            </button>\n            <button class=\"btn btn-sm btn-link\">\n              <clr-icon shape=\"share\"></clr-icon> Compartilhar\n            </button>\n          </div>\n        </div>\n        <!-- Editar/Deletar evento-->\n        <div *ngIf=\"auth?.currentUserValue?.role == 'ong' || auth?.currentUserValue?.role == 'admin'\" class=\"clr-row\">\n          <div class=\"clr-col-auto\">\n            <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"editar\" style=\"margin: 1rem 0 0 auto;\">\n              <clr-icon shape=\"edit is-primary\"></clr-icon> Editar Evento\n            </button>\n          </div>\n\n          <div class=\"clr-col-auto\">\n            <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"excluir\" style=\"margin: 1rem 0 0 auto;\">\n              <clr-icon shape=\"trash is-primary\"></clr-icon> Excluir Evento\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Coluna da direita -->\n  <div class=\"clr-col\">\n    <!-- Descrição -->\n    <h3><strong>Descrição:</strong></h3>\n    <h4> He was charismatic, magnetic, electric and everybody knew it. When he walked in every woman's head turned,\n      everyone stood\n      up to talk to him. He was like this hybrid, this mix of a man who couldn't contain himself.</h4>\n\n    <!-- Funções -->\n    <h3><strong>Funções:</strong></h3>\n    <div class=\"clr-row\">\n      <div class=\"clr-col-lg-6 clr-col-sm-6 clr-col-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Auxiliador(a) de idosas\n          </div>\n          <div class=\"card-block\">\n            <strong>Vagas restantes: </strong> 10\n          </div>\n          <div class=\"card-block\">\n            You can be my daddy tonight, night, night I'm neon phosphorescent Open like a Christmas present, now\n          </div>\n          <div *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"card-footer\">\n            <a class=\"btn btn-primary\">Confirmar presença</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"clr-col-lg-6 clr-col-sm-6 clr-col-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Lavador(a) de cachorros\n          </div>\n          <div class=\"card-block\">\n            <strong>Vagas restantes: </strong> 2\n          </div>\n          <div class=\"card-block\">\n            You can be my daddy tonight, night, night If you're seeking heaven Then you wanna come and get it, get it\n          </div>\n          <div *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"card-footer\">\n            <a class=\"btn btn-primary\">Confirmar presença</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/ver-evento/ver-evento.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ver-evento/ver-evento.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ong-card {\n  max-width: 100px;\n  max-height: 100px;\n  border-radius: 50%;\n  float: right;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: 0;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvdmVyLWV2ZW50by92ZXItZXZlbnRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Zlci1ldmVudG8vdmVyLWV2ZW50by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbmctY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDsgXG4gICAgbWF4LWhlaWdodDogMTAwcHg7IFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/ver-evento/ver-evento.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ver-evento/ver-evento.component.ts ***!
  \****************************************************/
/*! exports provided: VerEventoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerEventoComponent", function() { return VerEventoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var VerEventoComponent = /** @class */ (function () {
    // eventId?: number = -1;
    // isOwnedByMe: boolean = false;
    function VerEventoComponent(
    // private route: ActivatedRoute,
    auth) {
        // this.route.params.subscribe(params => {
        //   this.eventId = params.id;
        this.auth = auth;
        //   const currentUser = this.auth.currentUserValue;
        //   if (!currentUser)
        //     return;
        //   if (currentUser.role != 'ong')
        //     this.isOwnedByMe = false;
        //   else {
        //     this.events.getEvent(this.eventId)
        //       .subscribe(
        //         (event: Event) => {
        //           this.isOwnedByMe = event.ongId == currentUser.id;
        //         }
        //       );
        //   }
        // });
    }
    VerEventoComponent.prototype.ngOnInit = function () { };
    VerEventoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ver-evento',
            template: __webpack_require__(/*! ./ver-evento.component.html */ "./src/app/ver-evento/ver-evento.component.html"),
            styles: [__webpack_require__(/*! ./ver-evento.component.scss */ "./src/app/ver-evento/ver-evento.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], VerEventoComponent);
    return VerEventoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:4000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/joaopedro/Desktop/ivolunteer/Sistema/ivolunteer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map