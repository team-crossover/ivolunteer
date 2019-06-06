(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular/core/fesm5 lazy recursive":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/core/fesm5 lazy namespace object ***!
  \****************************************************************/
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
webpackEmptyAsyncContext.id = "./node_modules/@angular/core/fesm5 lazy recursive";

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
                if (!currentUser || !route.data.requiresRoles.includes(currentUser.tipo.toLowerCase())) {
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
        // const users: Usuario[] = [
        //     { id: 1, email: 'admin@admin.com', password: '123', role: 'admin', name: 'Administrador' },
        //     { id: 2, email: 'ong@ong.com', password: '123', role: 'ong', name: 'Clube do Gato' },
        //     { id: 3, email: 'voluntario@voluntario.com', password: '123', role: 'voluntario', name: 'Bette Davis' },
        // ];
        var events = [
            { id: 1, ongId: 2, name: "Evento X" }
        ];
        // const authHeader = request.headers.get('Authorization');
        // const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
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
        // // private helper functions
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
        var currentToken = this.authenticationService.currentUserToken;
        if (currentToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: "" + currentToken
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
/* harmony import */ var _ongs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ongs.service */ "./src/app/_services/ongs.service.ts");
/* harmony import */ var _voluntarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voluntarios.service */ "./src/app/_services/voluntarios.service.ts");







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, ongService, voluntarioService) {
        this.http = http;
        this.ongService = ongService;
        this.voluntarioService = voluntarioService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUserTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](localStorage.getItem('currentUserToken'));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentUserToken = this.currentUserTokenSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "currentUserTokenValue", {
        get: function () {
            return this.currentUserTokenSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tenta obter a ong do usuário autenticado atualmente (caso ele seja uma ONG).
     */
    AuthenticationService.prototype.getCurrentUserOng = function () {
        var usuario = this.currentUserValue;
        if (usuario && usuario.tipo == "ong") {
            return this.ongService.getOng(usuario.idOng);
        }
    };
    /**
     * Tenta obter o voluntário do usuário autenticado atualmente (caso ele seja um voluntário).
     */
    AuthenticationService.prototype.getCurrentUserVoluntario = function () {
        var usuario = this.currentUserValue;
        if (usuario && usuario.tipo == "voluntario") {
            return this.voluntarioService.getVoluntario(usuario.idVoluntario);
        }
    };
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post("api/public/auth/authenticate", { username: email, senha: password }, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response) {
                var usuario = response.body;
                if (usuario && response.status && response.status == 200) {
                    var token = response.headers.get("Authorization");
                    if (token) {
                        // stores user token
                        localStorage.setItem('currentUserToken', token);
                        _this.currentUserTokenSubject.next(token);
                        if (usuario.tipo)
                            usuario.tipo = usuario.tipo.toLowerCase();
                        // stores user data
                        localStorage.setItem('currentUser', JSON.stringify(usuario));
                        _this.currentUserSubject.next(usuario);
                    }
                }
            }
            return response;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        if (this.currentUserToken) {
            // invalidate token's session on backend
            this.http.get("api/public/auth/deauthenticate").subscribe(function (response) {
                console.log(response);
            });
            // remove token from local storage
            localStorage.removeItem('currentUserToken');
            this.currentUserTokenSubject.next(null);
        }
        if (this.currentUserSubject) {
            // remove user from local storage
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
        }
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ongs_service__WEBPACK_IMPORTED_MODULE_5__["OngsService"],
            _voluntarios_service__WEBPACK_IMPORTED_MODULE_6__["VoluntariosService"]])
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
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");




var EventsService = /** @class */ (function () {
    function EventsService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    EventsService.prototype.getEvent = function (eventId) {
        return this.http.get("api/events/" + eventId);
    };
    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, EventsService, OngsService, VoluntariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.service */ "./src/app/_services/events.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return _events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"]; });

/* harmony import */ var _ongs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ongs.service */ "./src/app/_services/ongs.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OngsService", function() { return _ongs_service__WEBPACK_IMPORTED_MODULE_2__["OngsService"]; });

/* harmony import */ var _voluntarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voluntarios.service */ "./src/app/_services/voluntarios.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoluntariosService", function() { return _voluntarios_service__WEBPACK_IMPORTED_MODULE_3__["VoluntariosService"]; });







/***/ }),

/***/ "./src/app/_services/ongs.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/ongs.service.ts ***!
  \*******************************************/
/*! exports provided: OngsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngsService", function() { return OngsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OngsService = /** @class */ (function () {
    function OngsService(http) {
        this.http = http;
    }
    OngsService.prototype.getOng = function (idOng) {
        return this.http.get("api/public/ongs/" + idOng);
    };
    OngsService.prototype.getOngs = function () {
        return this.http.get("api/public/ongs");
    };
    OngsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OngsService);
    return OngsService;
}());



/***/ }),

/***/ "./src/app/_services/voluntarios.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/voluntarios.service.ts ***!
  \**************************************************/
/*! exports provided: VoluntariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoluntariosService", function() { return VoluntariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var VoluntariosService = /** @class */ (function () {
    function VoluntariosService(http) {
        this.http = http;
    }
    VoluntariosService.prototype.getVoluntario = function (idVoluntario) {
        return this.http.get("api/public/voluntarios/" + idVoluntario);
    };
    VoluntariosService.prototype.getVoluntarios = function () {
        return this.http.get("api/public/voluntarios");
    };
    VoluntariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VoluntariosService);
    return VoluntariosService;
}());



/***/ }),

/***/ "./src/app/add-evento/add-evento.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-evento/add-evento.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n        </button>\r\n        <h3 class=\"modal-title\">Novo evento</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form clrForm>\r\n          <section novalidate class=\"form-block\">\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Nome</label>\r\n              <input clr-col-12 clr-col-md-6 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome do Evento\" />\r\n            </clr-input-container>\r\n            <clr-textarea-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Descrição</label>\r\n              <textarea clr-col-12 clr-col-md-4 clrTextarea type=\"text\" size=\"35\" required\r\n                placeholder=\"Descrição do Evento\"></textarea>\r\n            </clr-textarea-container>\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>ONG:</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required\r\n                placeholder=\"ONG realizará o evento\" />\r\n            </clr-input-container>\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Local:</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required placeholder=\"Local do Evento\" />\r\n            </clr-input-container>\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Data:</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"date\" size=\"35\" required placeholder=\"Data do evento\" />\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Horário:</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"time\" size=\"35\" required placeholder=\"Horário do Evento\" />\r\n            </clr-input-container>\r\n\r\n            <br>\r\n            <h5>Escolha as funções para este Evento:</h5>\r\n\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col-md-12\">\r\n                <div class=\"clr-form-control\">\r\n                  <label for=\"basic\" class=\"clr-control-label\">Função:</label>\r\n                  <div class=\"clr-control-container\">\r\n                    <div class=\"clr-input-wrapper\">\r\n                      <input type=\"text\" id=\"basic\" placeholder=\"Função para o Evento\" class=\"clr-input\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"clr-col-md-12\">\r\n                <div class=\"clr-form-control\">\r\n                  <label for=\"basic\" class=\"clr-control-label\">Descrição:</label>\r\n                  <div class=\"clr-control-container\">\r\n                    <div class=\"clr-input-wrapper\">\r\n                      <input type=\"text\" id=\"basic\" placeholder=\"Descrição do Evento\" class=\"clr-input\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"clr-col-md-12\">\r\n                <div class=\"clr-form-control\">\r\n                  <label for=\"basic\" class=\"clr-control-label\">Vagas:</label>\r\n                  <div class=\"clr-control-container\">\r\n                    <div class=\"clr-input-wrapper\">\r\n                      <input type=\"number\" id=\"basic\" placeholder=\"Vagas da função\" class=\"clr-input\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"clr-col-md-12\">\r\n                <button class=\"btn btn-sm btn-outline\" type=\"button\" style=\"margin: 1rem 0 0 auto;\"\r\n                  onclick=\"adicionaFuncaoTbl()\">\r\n                  <clr-icon shape=\"plus is-primary\"></clr-icon> Adicionar Função\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Função</th>\r\n                  <th>Descrição</th>\r\n                  <th>Vagas</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n              </tbody>\r\n            </table>\r\n\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col-12\" style=\"text-align: right\">\r\n                <button class=\"btn btn-primary btn-outline btn-sm btn-icon\"\r\n                  style=\"margin: 1rem 0 0 auto; margin-right: 20px\">\r\n                  <clr-icon shape=\"attachment\"></clr-icon> Anexe uma imagem ao Evento\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </section>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\r\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Salvar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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

module.exports = "<div class=\"clr-row clr-justify-content-center\">\r\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Cadastrar ONG\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"card-text\">\r\n          <form clrForm>\r\n            <section novalidate class=\"form-block\">\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Nome</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Telefone</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"(DDD)XXXX-XXXX\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                <clr-control-error *clrIfError=\"'minlength'\">Telefone deve ter 14 caracteres</clr-control-error>\r\n                <clr-control-error *clrIfError=\"'maxlength'\">Telefone deve ter 14 caracteres</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-date-container class=\"form-group\">\r\n                <label>Data de fundação</label>\r\n                <input type=\"text\" clrDate name=\"fundacao\" style=\"width: 230px\">\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-date-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Bairro</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir bairro\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Logradouro</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir logradouro\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>CEP</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir CEP\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Complemento</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir complemento\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-checkbox-container class=\"form-group\">\r\n                <label>Áreas de interesse</label>\r\n                <clr-checkbox-wrapper>\r\n                  <input type=\"checkbox\" clrCheckbox value=\"animais\" name=\"animais\" />\r\n                  <label>Animais</label>\r\n                </clr-checkbox-wrapper>\r\n                <clr-checkbox-wrapper>\r\n                  <input type=\"checkbox\" clrCheckbox value=\"cultura\" name=\"cultura\" />\r\n                  <label>Arte e cultura</label>\r\n                </clr-checkbox-wrapper>\r\n                <clr-checkbox-wrapper>\r\n                  <input type=\"checkbox\" clrCheckbox value=\"humanitaria\" name=\"humanitaria\" />\r\n                  <label>Humanitária</label>\r\n                </clr-checkbox-wrapper>\r\n                <clr-checkbox-wrapper>\r\n                  <input type=\"checkbox\" clrCheckbox value=\"ambiente\" name=\"ambiente\" />\r\n                  <label>Meio ambiente</label>\r\n                </clr-checkbox-wrapper>\r\n                <clr-checkbox-wrapper>\r\n                  <input type=\"checkbox\" clrCheckbox value=\"saude\" name=\"saude\" />\r\n                  <label>Saúde</label>\r\n                </clr-checkbox-wrapper>\r\n                <clr-control-helper>Escolher áreas de interesse</clr-control-helper>\r\n              </clr-checkbox-container>\r\n            </section>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../../\">Salvar</button>\r\n        <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../../\">Cancelar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"modal\">\r\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n        </button>\r\n        <h3 class=\"modal-title\">Nova postagem</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form clrForm>\r\n          <section novalidate class=\"form-block\">\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Nome</label>\r\n              <input clr-col-12 clr-col-md-6 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome da postagem\" />\r\n            </clr-input-container>\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Descrição</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required\r\n                placeholder=\"Descrição da postagem\" />\r\n            </clr-input-container>\r\n\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col-12\" style=\"text-align: right\">\r\n                <button class=\"btn btn-primary btn-outline btn-sm btn-icon\"\r\n                  style=\"margin: 1rem 0 0 auto; margin-right: 20px\">\r\n                  <clr-icon shape=\"attachment\"></clr-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </section>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\r\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Salvar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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

module.exports = "<div class=\"clr-row clr-justify-content-center\">\r\n    <div class=\"clr-col-sm-12 clr-col-md-auto\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Cadastrar voluntário\r\n            </div>\r\n            <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                    <form clrForm>\r\n                        <section novalidate class=\"form-block\">\r\n\r\n                            <clr-input-container class=\"form-group\">\r\n                                <label>Nome</label>\r\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\" />\r\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                                <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres\r\n                                </clr-control-error>\r\n                            </clr-input-container>\r\n\r\n                            <clr-input-container class=\"form-group\">\r\n                                <label>Email</label>\r\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir e-mail\" />\r\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                            </clr-input-container>\r\n\r\n                            <clr-password-container class=\"form-group\">\r\n                                <label>Senha</label>\r\n                                <input clrPassword type=\"password\" style=\"width: 195px\" required\r\n                                    placeholder=\"Inserir senha\" />\r\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                                <clr-control-error *clrIfError=\"'minlength'\">Senha deve ter 6+ caracteres\r\n                                </clr-control-error>\r\n                            </clr-password-container>\r\n\r\n                            <clr-input-container class=\"form-group\">\r\n                                <label>Telefone</label>\r\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"(DDD)XXXX-XXXX\" />\r\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                                <clr-control-error *clrIfError=\"'minlength'\">Telefone deve ter 14 caracteres\r\n                                </clr-control-error>\r\n                                <clr-control-error *clrIfError=\"'maxlength'\">Telefone deve ter 14 caracteres\r\n                                </clr-control-error>\r\n                            </clr-input-container>\r\n\r\n                            <clr-date-container class=\"form-group\">\r\n                                <label>Data de nascimento</label>\r\n                                <input type=\"date\" clrDate name=\"nascimento\" style=\"width: 230px\">\r\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                            </clr-date-container>\r\n\r\n                        </section>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../..\">Salvar</button>\r\n                <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../..\">Cancelar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
                    requiresRoles: ['voluntario', 'admin'],
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
                    requiresRoles: ['ong', 'admin'],
                }
            },
            {
                path: 'excluir',
                component: _excluir_evento_excluir_evento_component__WEBPACK_IMPORTED_MODULE_15__["ExcluirEventoComponent"],
                canActivate: [_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                data: {
                    requiresRoles: ['ong', 'admin'],
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
                    requiresRoles: ['ong', 'admin']
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

module.exports = "<clr-main-container>\r\n  <clr-header class=\"header header-6\">\r\n    <div class=\"branding\">\r\n      <div class=\"nav-link\">\r\n        <clr-icon shape=\"users\"></clr-icon>\r\n        <span class=\"title\">{{title}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-nav\" [clr-nav-level]=\"1\">\r\n      <a class=\"nav-link nav-text\" clrVerticalNavLink routerLinkActive=\"active\" routerLink=\"/home\">Início</a>\r\n      <a class=\"nav-link nav-text\" clrVerticalNavLink routerLinkActive=\"active\" routerLink=\"/eventos\">Eventos</a>\r\n      <a class=\"nav-link nav-text\" clrVerticalNavLink routerLinkActive=\"active\" routerLink=\"/ongs\">ONGs</a>\r\n    </div>\r\n    <div class=\"header-actions\">\r\n      <!-- Botão de entrar -->\r\n      <a *ngIf=\"!isAuthenticated\" routerLinkActive=\"active\" routerLink=\"/login\" class=\"nav-link nav-text\">\r\n        Entrar\r\n      </a>\r\n      <!-- Menu de criar conta -->\r\n      <clr-dropdown *ngIf=\"!isAuthenticated\">\r\n        <button class=\"nav-text\" clrDropdownTrigger>\r\n          Cadastrar\r\n          <clr-icon shape=\"caret down\"></clr-icon>\r\n        </button>\r\n        <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\r\n          <a routerLinkActive=\"active\" routerLink=\"/cadastrar/voluntario\" clrDropdownItem>Cadastrar como\r\n            voluntário</a>\r\n          <a routerLinkActive=\"active\" routerLink=\"/cadastrar/ong\" clrDropdownItem>Cadastrar como ONG</a>\r\n        </clr-dropdown-menu>\r\n      </clr-dropdown>\r\n      <!-- Menu de usuario logado -->\r\n      <clr-dropdown *ngIf=\"isAuthenticated\">\r\n        <button class=\"nav-text\" clrDropdownTrigger>\r\n          {{userName}}\r\n          <clr-icon shape=\"caret down\"></clr-icon>\r\n        </button>\r\n        <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\r\n          <a *ngIf=\"userTipo == 'voluntario'\" routerLinkActive=\"active\" [routerLink]=\"[urlProfile]\" clrDropdownItem>Ver\r\n            perfil</a>\r\n          <a *ngIf=\"userTipo == 'ong'\" routerLinkActive=\"active\" [routerLink]=\"[urlProfile]\" clrDropdownItem>Ver\r\n            perfil</a>\r\n          <a (click)=\"logout()\" clrDropdownItem>Sair</a>\r\n        </clr-dropdown-menu>\r\n      </clr-dropdown>\r\n    </div>\r\n  </clr-header>\r\n  <div class=\"content-container\">\r\n    <div class=\"content-area\" id=\"content-area\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</clr-main-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-container {\n  overflow: auto; }\n\n#content-area {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 70%;\n  max-width: 1000px;\n  overflow: visible;\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n  padding: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxEZXNlbnZvbHZlZG9yXFxSZXBvc2l0b3JpZXNcXFVGR1xcaXZvbHVudGVlclxcU2lzdGVtYVxcaXZvbHVudGVlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4jY29udGVudC1hcmVhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiA3MCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn0iXX0= */"

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
        var _this = this;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.title = 'iVolunteer';
        this.isAuthenticated = false;
        this.userTipo = '';
        this.userName = '???';
        this.urlProfile = '';
        auth.currentUser.subscribe(function (user) {
            if (user) {
                _this.isAuthenticated = true;
                _this.userTipo = user.tipo;
                if (_this.userTipo == "voluntario")
                    _this.urlProfile = "/usuario/" + user.idVoluntario;
                else if (_this.userTipo == "ong")
                    _this.urlProfile = "/ong/" + user.idOng;
                else
                    _this.urlProfile = null;
                _this.userName = user.username;
                if (_this.userTipo == "ong") {
                    auth.getCurrentUserOng().subscribe(function (ong) {
                        _this.userName = ong.nome;
                    });
                }
                else if (_this.userTipo == "voluntario") {
                    auth.getCurrentUserVoluntario().subscribe(function (voluntario) {
                        _this.userName = voluntario.nome;
                    });
                }
            }
            else {
                _this.isAuthenticated = false;
                _this.userTipo = null;
                _this.userName = '???';
                _this.urlProfile = null;
            }
        });
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

module.exports = "<div style=\"text-align: center\">\r\n  <clr-icon shape=\"users\" size=\"72\" class=\"is-info\"></clr-icon>\r\n  <h1>Seja bem-vindo(a) ao iVolunteer</h1>\r\n  <h3>\r\n    <clr-icon shape=\"user\" size=\"20\" class=\"is-highlight\"></clr-icon>&nbsp;<a routerLinkActive=\"active\"\r\n      routerLink=\"/cadastrar/voluntario\">Cadastre-se como voluntário</a> para encontrar ONGs e oportunidades de trabalho\r\n    voluntário perto de você!\r\n  </h3>\r\n  <h3>\r\n    <clr-icon shape=\"world\" size=\"20\" class=\"is-highlight\"></clr-icon>&nbsp;<a routerLinkActive=\"active\"\r\n      routerLink=\"/cadastrar/ong\">Cadastre-se como ONG</a> para divulgar seu trabalho e encontrar colaboradores.\r\n  </h3>\r\n  <h2>Junte-se a nós!</h2>\r\n</div>\r\n<hr>\r\n<h2>Eventos em destaque</h2>\r\n<div class=\"clr-row\">\r\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\r\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\r\n  <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\r\n</div>\r\n\r\n<h2>ONGs em destaque</h2>\r\n<div class=\"clr-row\">\r\n  <app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\r\n  <app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\r\n  <app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\r\n  <app-ong-card class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\"></app-ong-card>\r\n</div>"

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

module.exports = "<h3>Bem-vindo(a), Administrador</h3><br>\r\n\r\n<clr-tabs>\r\n  <!-- Visão geral -->\r\n  <clr-tab>\r\n    <button clrTabLink>Visão geral</button>\r\n    <ng-template [(clrIfActive)]=\"overviewActive\">\r\n      <clr-tab-content>\r\n        <div class=\"clr-row\">\r\n          <div class=\"clr-col-4 clr-col-sm-6\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                ONGs cadastradas\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numOngs }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"clr-col-4 clr-col-sm-6\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Eventos publicados\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numEventos }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"clr-col-4 clr-col-sm-6\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Postagens publicadas\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numPostagens }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"clr-col-4 clr-col-sm-6\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Voluntários cadastrados\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numUsuarios }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- ONGs -->\r\n  <clr-tab>\r\n    <button clrTabLink>ONGs</button>\r\n    <ng-template [(clrIfActive)]=\"ongsActive\">\r\n      <clr-tab-content>\r\n        <h4> {{ numOngs }} ONGs cadastradas </h4>\r\n\r\n        <table class=\"table table-noborder\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"left\">Nome da ONG</th>\r\n              <th>Data de ingresso</th>\r\n              <th>Número de eventos</th>\r\n              <th>Número de postagens</th>\r\n              <th>Opções</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let ong of ongs\">\r\n              <td class=\"left\"><a>{{ ong }}</a></td>\r\n              <td>{{ data }}</td>\r\n              <td>3</td>\r\n              <td>2</td>\r\n              <td>\r\n                <div class=\"btn-group btn-link btn-sm\">\r\n                  <button class=\"btn\">Ver</button>\r\n                  <button class=\"btn\">Editar</button>\r\n                  <button class=\"btn\">Deletar</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- Eventos -->\r\n  <clr-tab>\r\n    <button clrTabLink>Eventos</button>\r\n    <ng-template [(clrIfActive)]=\"eventsActive\">\r\n      <clr-tab-content>\r\n        <h4> {{ numEventos }} Eventos publicados </h4>\r\n\r\n        <table class=\"table table-noborder\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"left\">Título</th>\r\n              <th>Data de cadastro</th>\r\n              <th>ONG responsável</th>\r\n              <th>Opções</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let event of eventos\">\r\n              <td class=\"left\"><a>{{ event }}</a></td>\r\n              <td>{{ data }}</td>\r\n              <td><a>Nome da ONG</a></td>\r\n              <td>\r\n                <div class=\"btn-group btn-link btn-sm\">\r\n                  <button class=\"btn\">Ver</button>\r\n                  <button class=\"btn\">Editar</button>\r\n                  <button class=\"btn\">Deletar</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- Postagens -->\r\n  <clr-tab>\r\n    <button clrTabLink>Postagens</button>\r\n    <ng-template [(clrIfActive)]=\"postsActive\">\r\n      <clr-tab-content>\r\n        <h4> {{ numPostagens }} Postagens publicadas </h4>\r\n\r\n        <table class=\"table table-noborder\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"left\">Título</th>\r\n              <th>Data</th>\r\n              <th>ONG Responsável</th>\r\n              <th>Opções</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let post of postagens\">\r\n              <td class=\"left\"><a>{{ post }}</a></td>\r\n              <td>{{ data }}</td>\r\n              <td><a>Nome da ONG</a></td>\r\n              <td>\r\n                <div class=\"btn-group btn-link btn-sm\">\r\n                  <button class=\"btn\">Ver</button>\r\n                  <button class=\"btn\">Editar</button>\r\n                  <button class=\"btn\">Deletar</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- Usuários -->\r\n  <clr-tab>\r\n    <button clrTabLink>Usuários</button>\r\n    <ng-template [(clrIfActive)]=\"usersActive\">\r\n      <clr-tab-content>\r\n        <h4> {{ numUsuarios }} Usuários cadastrados </h4>\r\n\r\n        <table class=\"table table-noborder\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"left\">Nome Completo</th>\r\n              <th>Data de ingresso</th>\r\n              <th>Quantidade de eventos comparecidos</th>\r\n              <th>Opções</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let user of usuarios\">\r\n              <td class=\"left\"><a>{{ user }}</a></td>\r\n              <td>{{ data }}</td>\r\n              <td>3</td>\r\n              <td>\r\n                <div class=\"btn-group btn-link btn-sm\">\r\n                  <button class=\"btn\">Ver</button>\r\n                  <button class=\"btn\">Editar</button>\r\n                  <button class=\"btn\">Deletar</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n</clr-tabs>\r\n<!--<router-outlet></router-outlet>-->"

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

module.exports = "<h3>Bem-vindo(a), Clube do Gato</h3><br>\r\n\r\n<clr-tabs>\r\n  <!-- Visão geral -->\r\n  <clr-tab>\r\n    <button clrTabLink>Visão geral</button>\r\n    <ng-template [(clrIfActive)]=\"overviewActive\">\r\n      <clr-tab-content>\r\n        <div class=\"clr-row\">\r\n          <div class=\"clr-col-sm-12 clr-col-md-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Eventos publicados\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numEventos }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"clr-col-sm-12 clr-col-md-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Postagens publicadas\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numPostagens }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"clr-col-sm-12 clr-col-md-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Voluntários confirmados\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numVoluntarios }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h3>\r\n          Próximos eventos\r\n        </h3>\r\n        <div class=\"clr-row\">\r\n          <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\r\n          <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\r\n          <app-evento-card class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\"></app-evento-card>\r\n        </div>\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- Eventos -->\r\n  <clr-tab>\r\n    <button clrTabLink>Eventos</button>\r\n    <ng-template [(clrIfActive)]=\"eventsActive\">\r\n      <clr-tab-content>\r\n        <div class=\"clr-row\">\r\n          <div class=\"clr-col\">\r\n            <h4> {{ numEventos }} Eventos publicados </h4>\r\n          </div>\r\n          <div class=\"clr-col-auto\">\r\n            <button class=\"btn btn-sm btn-outline\" style=\"margin-top:1rem;\" routerLinkActive=\"active\"\r\n              routerLink=\"/ong/1/add-evento\">\r\n              <clr-icon shape=\"plus is-primary\"></clr-icon> Novo evento\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <table class=\"table table-noborder\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"left\">Título</th>\r\n              <th>Data de cadastro</th>\r\n              <th>ONG responsável</th>\r\n              <th>Opções</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let event of eventos\">\r\n              <td class=\"left\"><a>{{ event }}</a></td>\r\n              <td>{{ data }}</td>\r\n              <td><a>Nome da ONG</a></td>\r\n              <td>\r\n                <div class=\"btn-group btn-link btn-sm\">\r\n                  <button class=\"btn\">Ver</button>\r\n                  <button class=\"btn\">Editar</button>\r\n                  <button class=\"btn\">Deletar</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- Postagens -->\r\n  <clr-tab>\r\n    <button clrTabLink>Postagens</button>\r\n    <ng-template [(clrIfActive)]=\"postsActive\">\r\n      <clr-tab-content>\r\n        <div class=\"clr-row\">\r\n          <div class=\"clr-col\">\r\n            <h4> {{ numPostagens }} Postagens publicadas </h4>\r\n          </div>\r\n          <button class=\"clr-col-auto btn btn-sm btn-outline\" style=\"margin-top:1rem;\" routerLinkActive=\"active\"\r\n            routerLink=\"/ong/1/add-post\">\r\n            <clr-icon shape=\"plus is-primary\"></clr-icon> Nova postagem\r\n          </button>\r\n        </div>\r\n\r\n        <table class=\"table table-noborder\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"left\">Título</th>\r\n              <th>Data</th>\r\n              <th>ONG Responsável</th>\r\n              <th>Opções</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let post of postagens\">\r\n              <td class=\"left\"><a>{{ post }}</a></td>\r\n              <td>{{ data }}</td>\r\n              <td><a>Nome da ONG</a></td>\r\n              <td>\r\n                <div class=\"btn-group btn-link btn-sm\">\r\n                  <button class=\"btn\">Ver</button>\r\n                  <button class=\"btn\">Editar</button>\r\n                  <button class=\"btn\">Deletar</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n</clr-tabs>\r\n\r\n<!--<router-outlet></router-outlet>-->"

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

module.exports = "<div class=\"modal\">\r\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n        </button>\r\n        <h3 class=\"modal-title\">Editar dados da ONG</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form clrForm>\r\n          <section novalidate class=\"form-block\">\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Nome</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar nome\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Telefone</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"(DDD)XXXX-XXXX\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              <clr-control-error *clrIfError=\"'minlength'\">Telefone deve ter 14 caracteres</clr-control-error>\r\n              <clr-control-error *clrIfError=\"'maxlength'\">Telefone deve ter 14 caracteres</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-date-container class=\"form-group\">\r\n              <label>Data de fundação</label>\r\n              <input type=\"text\" clrDate name=\"fundacao\" style=\"width: 230px\">\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-date-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Bairro</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar bairro\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Logradouro</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar logradouro\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>CEP</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar CEP\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Complemento</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar complemento\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-select-container class=\"form-group\">\r\n              <label>Áreas de interesse</label>\r\n              <select clrSelect name=\"interesse\" style=\"width: 230px\" required>\r\n                <option value=\"animais\">Animais</option>\r\n                <option value=\"cultura\">Arte e cultura</option>\r\n                <option value=\"humanitaria\">Humanitária</option>\r\n                <option value=\"ambiente\">Meio ambiente</option>\r\n              </select>\r\n              <clr-control-helper>Escolher categoria</clr-control-helper>\r\n            </clr-select-container>\r\n\r\n          </section>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\r\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Salvar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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

module.exports = "<div class=\"modal\">\r\n    <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n                    <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n                </button>\r\n                <h3 class=\"modal-title\">Editar perfil</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form clrForm clrLayout=\"horizontal\">\r\n                    <section novalidate class=\"form-block\">\r\n\r\n                        <clr-input-container class=\"form-group\">\r\n                            <label>Nome</label>\r\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar nome\" />\r\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                            <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres</clr-control-error>\r\n                        </clr-input-container>\r\n\r\n                        <clr-input-container class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"Atualizar e-mail\" />\r\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                        </clr-input-container>\r\n\r\n                        <clr-password-container class=\"form-group\">\r\n                            <label>Senha</label>\r\n                            <input clrPassword type=\"password\" style=\"width: 195px\" required\r\n                                placeholder=\"Atualizar senha\" />\r\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                            <clr-control-error *clrIfError=\"'minlength'\">Senha deve ter 6+ caracteres\r\n                            </clr-control-error>\r\n                        </clr-password-container>\r\n\r\n                        <clr-input-container class=\"form-group\">\r\n                            <label>Telefone</label>\r\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"(DDD)XXXX-XXXX\" />\r\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                            <clr-control-error *clrIfError=\"'minlength'\">Telefone deve ter 14 caracteres\r\n                            </clr-control-error>\r\n                            <clr-control-error *clrIfError=\"'maxlength'\">Telefone deve ter 14 caracteres\r\n                            </clr-control-error>\r\n                        </clr-input-container>\r\n\r\n                        <clr-date-container class=\"form-group\">\r\n                            <label>Data de nascimento</label>\r\n                            <input type=\"date\" [(clrDate)]=\"date\" style=\"width: 230px\">\r\n                            <clr-control-helper>Atualizar data de nascimento</clr-control-helper>\r\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                        </clr-date-container>\r\n\r\n                    </section>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\"\r\n                    routerLink=\"..\">Cancelar</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Salvar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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

/***/ "./src/app/evento-api.service.ts":
/*!***************************************!*\
  !*** ./src/app/evento-api.service.ts ***!
  \***************************************/
/*! exports provided: EventoApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoApiService", function() { return EventoApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EventoApiService = /** @class */ (function () {
    function EventoApiService(http) {
        this.http = http;
        this.URL = 'assets/eventos.json';
    }
    EventoApiService.prototype.getEventos = function () {
        return this.http.get(this.URL);
    };
    EventoApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventoApiService);
    return EventoApiService;
}());



/***/ }),

/***/ "./src/app/evento-card/evento-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/evento-card/evento-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLinkActive=\"active\" routerLink=\"/evento/1\" class=\"card clickable\">\r\n<div class=\"card-header clr-row\">\r\n  <div class=\"clr-col\">\r\n    Nome do Evento\r\n    <small><br>Nome da Ong</small>\r\n  </div>\r\n  <br>\r\n</div>\r\n\r\n<div class=\"card-img\">\r\n  <img src=\"assets/images/evento.jpg\" alt=\"ong\" style=\"max-height:200px;object-fit: cover;\" />\r\n</div>\r\n<div class=\" card-block\">\r\n  <div class=\"card-text\">\r\n    <div class=\"clr-row\" style=\"margin-bottom:5px;\">\r\n      <div class=\"clr-col-auto\">\r\n        <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\r\n        24/08/2018\r\n      </div>\r\n      <div class=\"clr-col-auto\">\r\n        <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\r\n        Setor Sudoeste\r\n      </div>\r\n    </div>\r\n    He was charismatic, magnetic, electric and everybody knew it...\r\n  </div>\r\n</div>\r\n</a>\r\n<!--<router-outlet></router-outlet>-->"

/***/ }),

/***/ "./src/app/evento-card/evento-card.component.scss":
/*!********************************************************!*\
  !*** ./src/app/evento-card/evento-card.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-author-img {\n  display: inline-block;\n  border-radius: 100%;\n  height: 1.5rem;\n  width: 1.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: -0.5rem -1.75rem -0.5rem 0;\n  box-shadow: 0 2px 3px #818181;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRvLWNhcmQvQzpcXFVzZXJzXFxEZXNlbnZvbHZlZG9yXFxSZXBvc2l0b3JpZXNcXFVGR1xcaXZvbHVudGVlclxcU2lzdGVtYVxcaXZvbHVudGVlci9zcmNcXGFwcFxcZXZlbnRvLWNhcmRcXGV2ZW50by1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyw2QkFBd0M7RUFDeEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ldmVudG8tY2FyZC9ldmVudG8tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWF1dGhvci1pbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgd2lkdGg6IDEuNXJlbTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogLTAuNXJlbSAtMS43NXJlbSAtMC41cmVtIDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICJdfQ== */"

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

module.exports = "<div class=\"modal\">\r\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n        </button>\r\n        <h3 class=\"modal-title\">Filtrar Eventos</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form clrForm>\r\n          <section novalidate class=\"form-block\">\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-4>Nome</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome do Evento\" />\r\n            </clr-input-container>\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-4>ONG</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome da Ong\" />\r\n            </clr-input-container>\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-4>Dt Evento</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"date\" size=\"35\" required placeholder=\"Nome da Ong\" />\r\n            </clr-input-container>\r\n            <clr-checkbox-container class=\"form-group\" clrInline>\r\n              <label clr-col-12 clr-col-md-4>Categorias</label>\r\n              <clr-checkbox-wrapper>\r\n                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\r\n                <label>Animais</label>\r\n              </clr-checkbox-wrapper>\r\n              <clr-checkbox-wrapper>\r\n                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\r\n                <label>Meio ambiente</label>\r\n              </clr-checkbox-wrapper>\r\n              <clr-checkbox-wrapper>\r\n                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\r\n                <label>Saúde</label>\r\n              </clr-checkbox-wrapper>\r\n            </clr-checkbox-container>\r\n          </section>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\r\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Filtrar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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

module.exports = "<div class=\"clr-row\">\r\n  <!--<router-outlet></router-outlet>-->\r\n  <div class=\"clr-col-12\">\r\n    <div class=\"clr-row\">\r\n      <div class=\"clr-col\">\r\n        <h3>Eventos</h3>\r\n      </div>\r\n      <div *ngIf=\"auth?.currentUserValue?.role == 'ong'\" class=\"clr-col-auto\">\r\n        <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"add\"\r\n          style=\"margin: 1rem 0 0 auto; display: table;\">\r\n          <clr-icon shape=\"plus is-primary\"></clr-icon> Novo Evento\r\n        </button>\r\n      </div>\r\n      <!--<router-outlet></router-outlet>-->\r\n      <div class=\"clr-col-auto\">\r\n        <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"filtrar\"\r\n          style=\"margin: 1rem 0 0 auto; display: table;\">\r\n          <clr-icon shape=\"search is-primary\"></clr-icon> Filtrar Eventos\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"clr-row\">\r\n    <div class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\" *ngFor=\"let evento of eventos\">\r\n        <a routerLinkActive=\"active\" routerLink=\"/evento/{{evento.id}}\" class=\"card clickable\">\r\n          <div class=\"card-header clr-row\">\r\n            <div class=\"clr-col\">\r\n              {{evento.nome}}\r\n              <small><br>{{evento.ong}}</small>\r\n            </div>\r\n            <br>\r\n          </div>\r\n\r\n          <div class=\"card-img\">\r\n            <img src=\"assets/images/evento.jpg\" alt=\"ong\" style=\"max-height:200px;object-fit: cover;\" />\r\n          </div>\r\n          <div class=\" card-block\">\r\n            <div class=\"card-text\" style=\"height: 100px\">\r\n              <div class=\"clr-row\" style=\"margin-bottom:5px;\">\r\n                <div class=\"clr-col-auto\">\r\n                  <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\r\n                  {{evento.data}}\r\n                </div>\r\n                <div class=\"clr-col-auto\">\r\n                  <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\r\n                  {{evento.bairro}}\r\n                </div>\r\n              </div>\r\n              {{evento.descricao}}\r\n            </div>\r\n          </div>\r\n          </a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _evento_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../evento-api.service */ "./src/app/evento-api.service.ts");




var EventosComponent = /** @class */ (function () {
    function EventosComponent(auth, eventoService) {
        this.auth = auth;
        this.eventoService = eventoService;
        this.eventos = [];
    }
    EventosComponent.prototype.ngOnInit = function () {
        this.loadEventos();
    };
    EventosComponent.prototype.loadEventos = function () {
        var _this = this;
        this.eventoService.getEventos().subscribe(function (data) {
            _this.eventos = data;
        });
    };
    EventosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventos',
            template: __webpack_require__(/*! ./eventos.component.html */ "./src/app/eventos/eventos.component.html"),
            styles: [__webpack_require__(/*! ./eventos.component.scss */ "./src/app/eventos/eventos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _evento_api_service__WEBPACK_IMPORTED_MODULE_3__["EventoApiService"]])
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

module.exports = "<div class=\"modal static bump-down\">\r\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n        </button>\r\n        <h3 class=\"modal-title\">Excluir evento</h3>\r\n      </div>\r\n      <strong>Você tem certeza que deseja excluir o evento selecionado?</strong>\r\n      <br><clr-icon shape=\"exclamation-circle\" size=\"22\" class=\"is-error\"></clr-icon> Esta ação será permanente.\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\r\n        <button class=\"btn btn-danger\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Excluir</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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

module.exports = "<!--<router-outlet></router-outlet>-->\r\n<!-- Home do convidado -->\r\n<div *ngIf=\"auth?.currentUserValue == null\">\r\n  <app-convidado></app-convidado>\r\n</div>\r\n<!-- Home do voluntário -->\r\n<div *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\">\r\n  <app-timeline></app-timeline>\r\n</div>\r\n<!-- Home da ONG -->\r\n<div *ngIf=\"auth?.currentUserValue?.role == 'ong'\">\r\n  <app-dashboard-ong></app-dashboard-ong>\r\n</div>\r\n<!-- Home do administrador -->\r\n<div *ngIf=\"auth?.currentUserValue?.role == 'admin'\">\r\n  <app-dashboard-admin></app-dashboard-admin>\r\n</div>"

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

module.exports = "<div class=\"clr-row clr-justify-content-center\">\r\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Entrar\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"card-text\">\r\n          <form clrForm [formGroup]=\"loginForm\" clrLayout=\"horizontal\">\r\n              <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\r\n                <div class=\"alert-items\">\r\n                  <div class=\"alert-item static\">\r\n                    <div class=\"alert-icon-wrapper\">\r\n                      <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\r\n                    </div>\r\n                    <span class=\"alert-text\">\r\n                      {{error}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Usuário</label>\r\n                <input formControlName=\"username\" clrInput type=\"text\" size=35 required />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é obrigatório</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-password-container class=\"form-group\">\r\n                <label>Senha</label>\r\n                <input formControlName=\"password\" clrPassword type=\"password\" size=30 required />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é obrigatório</clr-control-error>\r\n              </clr-password-container>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\">\r\n          Entrar\r\n          <span *ngIf=\"loading\" class=\"spinner spinner-inline\">\r\n            Loading...\r\n          </span>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
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
        this.authenticationService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
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

/***/ "./src/app/ong-api.service.ts":
/*!************************************!*\
  !*** ./src/app/ong-api.service.ts ***!
  \************************************/
/*! exports provided: OngApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngApiService", function() { return OngApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OngApiService = /** @class */ (function () {
    function OngApiService(http) {
        this.http = http;
        this.URL = 'assets/ongs.json';
    }
    OngApiService.prototype.getONGs = function () {
        return this.http.get(this.URL);
    };
    OngApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OngApiService);
    return OngApiService;
}());



/***/ }),

/***/ "./src/app/ong-card/ong-card.component.html":
/*!**************************************************!*\
  !*** ./src/app/ong-card/ong-card.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLinkActive=\"active\" routerLink=\"/ong/2\" class=\"card clickable\">\r\n  <div class=\"card-img\">\r\n    <img src=\"assets/images/ong.png\" alt=\"ong\" />\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <div class=\"card-title\">\r\n      <b>Nome da ONG</b>\r\n    </div>\r\n    <p class=\"card-text short-description\">\r\n      I was in the winter of my life and the men that I met along the road were my only summer.\r\n      At night, I fell asleep with visions of myself dancing and laughing and crying with them.\r\n      Three years down the line of being on an endless world tour and\r\n      my memories of them were the only things that substained me and my only real happy times.\r\n    </p>\r\n    <div>\r\n      <a routerLinkActive=\"active\" routerLink=\".\" class=\"label clickable\">Animais</a>\r\n      <a routerLinkActive=\"active\" routerLink=\".\" class=\"label clickable\">Meio ambiente</a>\r\n    </div>\r\n  </div>\r\n</a>\r\n<!--<router-outlet></router-outlet>-->"

/***/ }),

/***/ "./src/app/ong-card/ong-card.component.scss":
/*!**************************************************!*\
  !*** ./src/app/ong-card/ong-card.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".short-description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  /* number of lines to show */\n  line-height: 1rem;\n  /* fallback */\n  max-height: 4rem;\n  /* fallback */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25nLWNhcmQvQzpcXFVzZXJzXFxEZXNlbnZvbHZlZG9yXFxSZXBvc2l0b3JpZXNcXFVGR1xcaXZvbHVudGVlclxcU2lzdGVtYVxcaXZvbHVudGVlci9zcmNcXGFwcFxcb25nLWNhcmRcXG9uZy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFFcEIscUJBQXFCO0VBQUUsNEJBQUE7RUFDdkIsaUJBQWlCO0VBQU0sYUFBQTtFQUN2QixnQkFBZ0I7RUFBTyxhQUFBLEVBQWMiLCJmaWxlIjoic3JjL2FwcC9vbmctY2FyZC9vbmctY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9ydC1kZXNjcmlwdGlvbiB7XHJcbiAgICAvLyBMaW1pdGEgYSBhbHR1cmEgbcOheGltYSBhIDQgbGluaGFzXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXHJcbiAgICBsaW5lLWhlaWdodDogMXJlbTsgICAgIC8qIGZhbGxiYWNrICovXHJcbiAgICBtYXgtaGVpZ2h0OiA0cmVtOyAgICAgIC8qIGZhbGxiYWNrICovXHJcbiB9Il19 */"

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
    OngCardComponent.prototype.ngOnInit = function () { };
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

module.exports = "<div class=\"modal\">\r\n    <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n                    <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n                </button>\r\n                <h3 class=\"modal-title\">Filtrar ONGs</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form clrForm>\r\n                    <section novalidate class=\"form-block\">\r\n                        <clr-input-container class=\"form-group\">\r\n                            <label clr-col-12 clr-col-md-4>Nome</label>\r\n                            <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required\r\n                                placeholder=\"Nome da ONG\" />\r\n                        </clr-input-container>\r\n                        <clr-checkbox-container class=\"form-group\" clrInline>\r\n                            <label clr-col-12 clr-col-md-4>Áreas</label>\r\n                            <clr-checkbox-wrapper>\r\n                                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\r\n                                <label>Animais</label>\r\n                            </clr-checkbox-wrapper>\r\n                            <clr-checkbox-wrapper>\r\n                                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\r\n                                <label>Meio ambiente</label>\r\n                            </clr-checkbox-wrapper>\r\n                            <clr-checkbox-wrapper>\r\n                                <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\r\n                                <label>Saúde</label>\r\n                            </clr-checkbox-wrapper>\r\n                        </clr-checkbox-container>\r\n                    </section>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\"\r\n                    routerLink=\"..\">Cancelar</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\"\r\n                    routerLink=\"..\">Filtrar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

/***/ }),

/***/ "./src/app/ong-filtro/ong-filtro.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ong-filtro/ong-filtro.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".short-options {\n  max-height: 100px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25nLWZpbHRyby9DOlxcVXNlcnNcXERlc2Vudm9sdmVkb3JcXFJlcG9zaXRvcmllc1xcVUZHXFxpdm9sdW50ZWVyXFxTaXN0ZW1hXFxpdm9sdW50ZWVyL3NyY1xcYXBwXFxvbmctZmlsdHJvXFxvbmctZmlsdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29uZy1maWx0cm8vb25nLWZpbHRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9ydC1vcHRpb25zIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */"

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

module.exports = "<div class=\"clr-row\">\r\n  <div class=\"clr-col-6\">\r\n    <h3>ONGs</h3>\r\n  </div>\r\n  <div class=\"clr-col-6\">\r\n    <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"filtrar\"\r\n      style=\"margin: 1rem 0 0 auto; display: table;\">\r\n      <clr-icon shape=\"search is-primary\"></clr-icon> Filtrar ONGs\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"clr-row\">\r\n  <div class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\" *ngFor=\"let ong of ongs\">\r\n      <a routerLinkActive=\"active\" routerLink=\"/ong/{{ong.id}}\" class=\"card clickable\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/images/ong.png\" alt=\"ong\" />\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"card-title\">\r\n            <b>{{ong.nome}}</b>\r\n          </div>\r\n          <p class=\"card-text short-description\" style=\"height: 100px\">\r\n            {{ong.descricao}}\r\n          </p>\r\n          <div>\r\n            <a routerLinkActive=\"active\" routerLink=\".\" class=\"label clickable\">{{ong.interesses}}</a>\r\n          </div>\r\n        </div>\r\n      </a>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/ongs/ongs.component.scss":
/*!******************************************!*\
  !*** ./src/app/ongs/ongs.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filtros-container {\n  padding: 12px;\n  width: 100%;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ncy9DOlxcVXNlcnNcXERlc2Vudm9sdmVkb3JcXFJlcG9zaXRvcmllc1xcVUZHXFxpdm9sdW50ZWVyXFxTaXN0ZW1hXFxpdm9sdW50ZWVyL3NyY1xcYXBwXFxvbmdzXFxvbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvb25ncy9vbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRyb3MtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8vIC5jbHItY29udHJvbC1jb250YWluZXIge1xyXG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbi8vIH1cclxuIl19 */"

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
/* harmony import */ var _ong_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ong-api.service */ "./src/app/ong-api.service.ts");



var OngsComponent = /** @class */ (function () {
    function OngsComponent(ongService) {
        this.ongService = ongService;
        this.ongs = [];
    }
    OngsComponent.prototype.ngOnInit = function () {
        this.loadOngs();
    };
    OngsComponent.prototype.loadOngs = function () {
        var _this = this;
        this.ongService.getONGs().subscribe(function (data) {
            _this.ongs = data;
        });
    };
    OngsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ongs',
            template: __webpack_require__(/*! ./ongs.component.html */ "./src/app/ongs/ongs.component.html"),
            styles: [__webpack_require__(/*! ./ongs.component.scss */ "./src/app/ongs/ongs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ong_api_service__WEBPACK_IMPORTED_MODULE_2__["OngApiService"]])
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

module.exports = "<div class=\"clr-row\">\r\n  <!-- Coluna da esquerda -->\r\n  <div class=\"clr-col-sm-12 clr-col-md-3\">\r\n    <div class=\"clr-row\">\r\n      <div class=\"clr-col\">\r\n        <!-- Card com informações da ONG-->\r\n        <div class=\"card\">\r\n          <div class=\"card-img\">\r\n            <img src=\"assets/images/ong.png\" alt=\"Logo ONG\">\r\n          </div>\r\n          <div class=\"card-header\">\r\n            <h2 style=\"text-align: center\">Nome da ONG</h2>\r\n          </div>\r\n          <!-- Quem Somos -->\r\n          <div class=\"card-block\">\r\n            <div class=\"card-title\">\r\n              Quem somos\r\n            </div>\r\n            <div class=\"card-text\">\r\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\r\n              when an unknown printer took a galley of type and scrambled it to make a type specimen book.\r\n            </div>\r\n          </div>\r\n          <!-- Contato -->\r\n          <div class=\"card-block\">\r\n            <div class=\"card-title\">\r\n              Contato\r\n            </div>\r\n            <div class=\"card-text\">\r\n              <clr-icon shape=\"phone-handset\" class=\"is-info\"></clr-icon> <strong> Telefone: </strong>(062) 9999-9999\r\n              <br>\r\n              <clr-icon shape=\"envelope\" class=\"is-info\"></clr-icon> <strong> E-mail: </strong>ong@email.com\r\n              <br>\r\n              <clr-icon shape=\"network-globe\" class=\"is-info\"></clr-icon> <strong> Website: </strong> <a>ong.org</a>\r\n              <br>\r\n              <clr-icon shape=\"network-globe\" class=\"is-info\"></clr-icon> <strong> Facebook: </strong> <a>fb.com/ong</a>\r\n            </div>\r\n          </div>\r\n          <!-- Categorias -->\r\n          <div class=\"card-block\">\r\n            <div class=\"card-title\">\r\n              Categorias\r\n            </div>\r\n            <div class=\"card-text\">\r\n              <a class=\"label label-purple clickable\" routerLinkActive=\"active\" routerLink=\".\">Animais</a>\r\n              <a class=\"label label-blue clickable\" routerLinkActive=\"active\" routerLink=\".\">Meio ambiente</a>\r\n            </div>\r\n          </div>\r\n          <!-- Categorias -->\r\n          <div class=\"card-block\">\r\n            <div class=\"card-title\">\r\n              Doações\r\n            </div>\r\n            <div class=\"card-text\">\r\n              Donate at ....\r\n            </div>\r\n          </div>\r\n          <!-- Botoes -->\r\n          <div class=\"card-footer\">\r\n            <button *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"btn btn-sm btn-link\">\r\n              <clr-icon shape=\"bookmark\"></clr-icon> Seguir\r\n            </button>\r\n            <button class=\"btn btn-sm btn-link\">\r\n              <clr-icon shape=\"share\"></clr-icon> Compartilhar\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"auth?.currentUserValue?.role == 'ong' || auth?.currentUserValue?.role == 'admin'\" class=\"clr-row\">\r\n          <div class=\"clr-col-lg-1 clr-col-md-1 clr-col-12\">\r\n            <button class=\"btn btn-link\" routerLinkActive=\"active\" routerLink=\"editar\">Editar perfil</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Coluna da direita -->\r\n  <div class=\"clr-col\">\r\n    <!-- Barra de navegacao-->\r\n    <clr-tabs>\r\n      <!-- Eventos -->\r\n      <clr-tab>\r\n        <button clrTabLink>Eventos</button>\r\n        <ng-template [(clrIfActive)]=\"eventosActive\">\r\n          <clr-tab-content>\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col\">\r\n                <h3>Últimos eventos</h3>\r\n              </div>\r\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.role == 'ong'\">\r\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\" routerLinkActive=\"active\"\r\n                  routerLink=\"add-evento\">\r\n                  Novo evento\r\n                </button>\r\n              </div>\r\n              <div class=\"clr-col-12\">\r\n                <app-timeline-evento></app-timeline-evento>\r\n                <app-timeline-evento></app-timeline-evento>\r\n                <app-timeline-evento></app-timeline-evento>\r\n              </div>\r\n              <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\r\n                Carregar mais antigos\r\n              </button>\r\n            </div>\r\n          </clr-tab-content>\r\n        </ng-template>\r\n      </clr-tab>\r\n\r\n      <!-- Publicações -->\r\n      <clr-tab>\r\n        <button clrTabLink>Publicações</button>\r\n        <ng-template [(clrIfActive)]=\"publicacoesActive\">\r\n          <clr-tab-content>\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col\">\r\n                <h3>Últimas postagens</h3>\r\n              </div>\r\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.role == 'ong'\">\r\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\" routerLinkActive=\"active\"\r\n                  routerLink=\"add-post\">\r\n                  Nova postagem\r\n                </button>\r\n              </div>\r\n              <div class=\"clr-col-12\">\r\n                <app-timeline-post></app-timeline-post>\r\n                <app-timeline-post></app-timeline-post>\r\n                <app-timeline-post></app-timeline-post>\r\n                <app-timeline-post></app-timeline-post>\r\n              </div>\r\n              <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\r\n                Carregar mais antigos\r\n              </button>\r\n            </div>\r\n          </clr-tab-content>\r\n        </ng-template>\r\n      </clr-tab>\r\n\r\n      <!-- Seguidores -->\r\n      <clr-tab>\r\n        <button clrTabLink>Seguidores</button>\r\n        <ng-template [(clrIfActive)]=\"seguidoresActive\">\r\n          <clr-tab-content>\r\n            <h3> {{ numSeguidores }} Seguidores </h3>\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col-sm-12 clr-col-md-6\" *ngFor=\"let seguidor of seguidores\">\r\n                <a routerLinkActive=\"active\" routerLink=\"/usuario/user\" class=\"card clickable\">\r\n                  <div class=\"card-header\" style=\"height:auto; overflow:auto;\">\r\n                    <img class=\"seguidor-card\" src=\"assets/images/ong.png\" alt=\"profile-picture\" />\r\n                    <h3> {{ seguidor }}</h3>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </clr-tab-content>\r\n        </ng-template>\r\n      </clr-tab>\r\n\r\n      <!-- Galeria -->\r\n      <clr-tab>\r\n        <button clrTabLink>Galeria</button>\r\n        <ng-template [(clrIfActive)]=\"galeriaActive\">\r\n          <clr-tab-content>\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col\">\r\n                <h3>Fotos</h3>\r\n              </div>\r\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.role == 'ong'\">\r\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\r\n                  Nova foto\r\n                </button>\r\n              </div>\r\n              <div class=\"clr-col-md-12\"></div>\r\n            </div>\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col-md-6 clr-col-12\">\r\n                <a class=\"card card-img\">\r\n                  <img src=\"assets/images/galeria.jpg\" />\r\n                </a>\r\n              </div>\r\n              <div class=\"clr-col-md-6 clr-col-12\">\r\n                <a class=\"card card-img\">\r\n                  <img src=\"assets/images/galeria2.jpg\" />\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </clr-tab-content>\r\n        </ng-template>\r\n      </clr-tab>\r\n    </clr-tabs>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/perfil-ong/perfil-ong.component.scss":
/*!******************************************************!*\
  !*** ./src/app/perfil-ong/perfil-ong.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seguidor-card {\n  max-width: 80px;\n  max-height: 80px;\n  border-radius: 50%;\n  float: right;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: 0;\n  background-color: white;\n  box-shadow: 0 2px 3px #818181; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsLW9uZy9DOlxcVXNlcnNcXERlc2Vudm9sdmVkb3JcXFJlcG9zaXRvcmllc1xcVUZHXFxpdm9sdW50ZWVyXFxTaXN0ZW1hXFxpdm9sdW50ZWVyL3NyY1xcYXBwXFxwZXJmaWwtb25nXFxwZXJmaWwtb25nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsNkJBQXdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwtb25nL3BlcmZpbC1vbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VndWlkb3ItY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwcHg7IFxyXG4gICAgbWF4LWhlaWdodDogODBweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2IoMTI5LCAxMjksIDEyOSk7XHJcbn0iXX0= */"

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

module.exports = "<clr-tabs>\r\n  <clr-tab>\r\n    <button clrTabLink>Dados gerais</button>\r\n    <clr-tab-content>\r\n      <div class=\"clr-row\">\r\n        <div class=\"clr-col-lg-3 clr-col-md-3 clr-col-12\">\r\n          <a class=\"card clickable\" routerLinkActive=\"active\" routerLink=\".\">\r\n            <div class=\"card-img\">\r\n              <img src=\"assets/images/avatar-2.jpg\" alt=\"avatar\">\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"clr-col-md-9\">\r\n\r\n          <table>\r\n            <tbody>\r\n              <tr>\r\n                <td><h5><b>Nome</b></h5></td>\r\n                <td><h5 class=\"margin-data\">Bette Davis</h5></td>\r\n              </tr>\r\n              <tr>\r\n                <td><h5><b>E-mail</b></h5></td>\r\n                <td><h5 class=\"margin-data\">bettinha@hollywood.com</h5></td>\r\n              </tr>\r\n              <tr>\r\n                <td><h5><b>Telefone</b></h5></td>\r\n                <td><h5 class=\"margin-data\">555-123-678</h5></td>\r\n              </tr>\r\n              <tr>\r\n                <td><h5><b>Idade</b></h5></td>\r\n                <td><h5 class=\"margin-data\">82 anos</h5></td>\r\n              </tr>\r\n              <tr>\r\n                <td><h5><b>Interesses</b></h5></td>\r\n                <td>\r\n                  <div style=\"margin-top: 5%;\" class=\"margin-data\">\r\n                    <a class=\"label label-purple clickable\" routerLinkActive=\"active\" routerLink=\".\">Arte e cultura</a>\r\n                    <a class=\"label label-orange clickable\" routerLinkActive=\"active\" routerLink=\".\">Humanitária</a>\r\n                    <a class=\"label label-blue clickable\" routerLinkActive=\"active\" routerLink=\".\">Meio ambiente</a>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"auth?.currentUserValue?.role == 'voluntario' || auth?.currentUserValue?.role == 'admin'\"\r\n        class=\"clr-row\">\r\n        <div>\r\n          <button class=\"btn btn-link\" routerLinkActive=\"active\" routerLink=\"editar\">Editar perfil</button>\r\n        </div>\r\n      </div>\r\n    </clr-tab-content>\r\n  </clr-tab>\r\n  <clr-tab>\r\n    <button clrTabLink>Participação em eventos</button>\r\n    <clr-tab-content>\r\n\r\n      <div class=\"clr-row\">\r\n\r\n        <div class=\"clr-col-lg-4 clr-col-md-8 clr-col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block\">\r\n              <div class=\"card-title\">\r\n                <b>Evento 1</b>\r\n              </div>\r\n              <div class=\"card-text\" style=\"height: 220px;\">\r\n                <br /><b>ONG:</b>\r\n                <br />Bluepeace\r\n                <br /><b>Data</b>\r\n                <br />25/05/1541\r\n                <br /><b>Local</b>\r\n                <br />Campus Samambaia\r\n                <br /><b>Função</b>\r\n                <br />Logística\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"/evento/1\">Ver evento</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"clr-col-lg-4 clr-col-md-8 clr-col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block\">\r\n              <div class=\"card-title\">\r\n                <b>Evento 2</b>\r\n              </div>\r\n              <div class=\"card-text\" style=\"height: 220px;\">\r\n                <br /><b>ONG:</b>\r\n                <br />Yellowpeace\r\n                <br /><b>Data</b>\r\n                <br />25/05/1541\r\n                <br /><b>Local</b>\r\n                <br />Campus Samambaia\r\n                <br /><b>Função</b>\r\n                <br />Parte técnica\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"/evento/1\">Ver evento</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"clr-col-lg-4 clr-col-md-8 clr-col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block\">\r\n              <div class=\"card-title\">\r\n                <b>Evento 3</b>\r\n              </div>\r\n              <div class=\"card-text\" style=\"height: 220px;\">\r\n                <br /><b>ONG:</b>\r\n                <br />Redpeace\r\n                <br /><b>Data</b>\r\n                <br />25/05/1541\r\n                <br /><b>Local</b>\r\n                <br />Campus Samambaia\r\n                <br /><b>Função</b>\r\n                <br />Divulgação\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"/evento/1\">Ver evento</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </clr-tab-content>\r\n  </clr-tab>\r\n\r\n</clr-tabs>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/perfil/perfil.component.scss":
/*!**********************************************!*\
  !*** ./src/app/perfil/perfil.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-data {\n  margin-left: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL0M6XFxVc2Vyc1xcRGVzZW52b2x2ZWRvclxcUmVwb3NpdG9yaWVzXFxVRkdcXGl2b2x1bnRlZXJcXFNpc3RlbWFcXGl2b2x1bnRlZXIvc3JjXFxhcHBcXHBlcmZpbFxccGVyZmlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tZGF0YSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn0iXX0= */"

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

module.exports = "<a routerLinkActive=\"active\" routerLink=\"/evento/a12b3c\" class=\"card clickable\">\r\n  <div class=\"card-header clr-row\">\r\n    <div class=\"clr-col\">\r\n      <clr-icon shape=\"calendar\"></clr-icon>\r\n      Nome do Evento\r\n    </div>\r\n    <div class=\"clr-col-auto\">\r\n      <span class=\"p4\">por</span>\r\n      <span class=\"h2\">\r\n        Nome da ONG\r\n      </span>\r\n      <img class=\"clr-col-12 clr-col-md-auto post-author-img\" src=\"assets/images/ong.png\" alt=\"ONG\">\r\n    </div>\r\n  </div>\r\n  <div class=\"card-img\">\r\n    <img src=\"assets/images/evento.jpg\" alt=\"ong\" style=\"max-height:300px;object-fit: cover;\" />\r\n  </div>\r\n  <div class=\" card-block\">\r\n    <div class=\"card-text\">\r\n      <div class=\"clr-row\" style=\"margin-bottom:5px;\">\r\n        <div class=\"clr-col-auto\">\r\n          <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\r\n          24/08/2018\r\n        </div>\r\n        <div class=\"clr-col-auto\">\r\n          <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\r\n          Setor Sudoeste\r\n        </div>\r\n        <div class=\"clr-col\"></div>\r\n        <div class=\"clr-col-auto\">\r\n          <span class=\"label\">Animais</span>\r\n          <span class=\"label\">Meio ambiente</span>\r\n        </div>\r\n      </div>\r\n      He was charismatic, magnetic, electric and everybody knew it.<br>\r\n      When he walked in every woman's head turned, everyone stood up to talk to him.<br>\r\n      He was like this hybrid, this mix of a man who couldn't contain himself.\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer clr-row\">\r\n    <div class=\"clr-col\">\r\n      <button *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"btn btn-sm btn-link\">\r\n        <clr-icon shape=\"heart\"></clr-icon>\r\n        Favoritar\r\n      </button>\r\n    </div>\r\n    <div class=\"clr-col-auto\">\r\n      <span class=\"p8\" style=\"margin-top:0.5rem;\">\r\n        Postado às 18:35 em 21/08/1998\r\n      </span>\r\n    </div>\r\n  </div>\r\n</a>\r\n<!--<router-outlet></router-outlet>-->"

/***/ }),

/***/ "./src/app/timeline-evento/timeline-evento.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/timeline-evento/timeline-evento.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-author-img {\n  display: inline-block;\n  border-radius: 100%;\n  height: 1.5rem;\n  width: 1.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: -0.5rem -1.75rem -0.5rem 0;\n  box-shadow: 0 2px 3px #818181;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUtZXZlbnRvL0M6XFxVc2Vyc1xcRGVzZW52b2x2ZWRvclxcUmVwb3NpdG9yaWVzXFxVRkdcXGl2b2x1bnRlZXJcXFNpc3RlbWFcXGl2b2x1bnRlZXIvc3JjXFxhcHBcXHRpbWVsaW5lLWV2ZW50b1xcdGltZWxpbmUtZXZlbnRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyw2QkFBd0M7RUFDeEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aW1lbGluZS1ldmVudG8vdGltZWxpbmUtZXZlbnRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtYXV0aG9yLWltZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAtMC41cmVtIC0xLjc1cmVtIC0wLjVyZW0gMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2IoMTI5LCAxMjksIDEyOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgIl19 */"

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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header clr-row\">\r\n    <div class=\"clr-col\">\r\n      <clr-icon shape=\"talk-bubbles\"></clr-icon>\r\n      Nome da Postagem\r\n    </div>\r\n    <div class=\"clr-col-auto\">\r\n      <span class=\"p4\">por</span>\r\n      <strong class=\"h2\">\r\n        Nome da ONG\r\n      </strong>\r\n      <img class=\"clr-col-12 clr-col-md-auto post-author-img\" src=\"assets/images/ong.png\" alt=\"ONG\">\r\n    </div>\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <div class=\"card-text\">\r\n      He was charismatic, magnetic, electric and everybody knew it.<br>\r\n      When he walked in every woman's head turned, everyone stood up to talk to him.<br>\r\n      He was like this hybrid, this mix of a man who couldn't contain himself.\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer clr-row\">\r\n    <div class=\"clr-col\">\r\n      <button *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"btn btn-sm btn-link\">\r\n        <clr-icon shape=\"heart\"></clr-icon>\r\n        Favoritar\r\n      </button>\r\n    </div>\r\n    <div class=\"clr-col-auto\">\r\n      <span class=\"p8\" style=\"margin-top:0.5rem;\">\r\n        Postado às 18:35 em 21/08/1998\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/timeline-post/timeline-post.component.scss":
/*!************************************************************!*\
  !*** ./src/app/timeline-post/timeline-post.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-author-img {\n  display: inline-block;\n  border-radius: 100%;\n  height: 1.5rem;\n  width: 1.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: -0.5rem -1.75rem -0.5rem 0;\n  box-shadow: 0 2px 3px #818181;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUtcG9zdC9DOlxcVXNlcnNcXERlc2Vudm9sdmVkb3JcXFJlcG9zaXRvcmllc1xcVUZHXFxpdm9sdW50ZWVyXFxTaXN0ZW1hXFxpdm9sdW50ZWVyL3NyY1xcYXBwXFx0aW1lbGluZS1wb3N0XFx0aW1lbGluZS1wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyw2QkFBd0M7RUFDeEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aW1lbGluZS1wb3N0L3RpbWVsaW5lLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1hdXRob3ItaW1nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IC0wLjVyZW0gLTEuNzVyZW0gLTAuNXJlbSAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYigxMjksIDEyOSwgMTI5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAiXX0= */"

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

module.exports = "<div class=\"clr-row\">\r\n  <router-outlet></router-outlet>\r\n  <div class=\"clr-col-12\">\r\n    <h3>Últimas postagens e eventos</h3>\r\n  </div>\r\n  <div class=\"clr-col-12\">\r\n    <app-timeline-post></app-timeline-post>\r\n    <app-timeline-post></app-timeline-post>\r\n    <app-timeline-evento></app-timeline-evento>\r\n    <app-timeline-evento></app-timeline-evento>\r\n    <app-timeline-post></app-timeline-post>\r\n    <app-timeline-evento></app-timeline-evento>\r\n    <app-timeline-post></app-timeline-post>\r\n  </div>\r\n  <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\r\n    Carregar mais antigos\r\n  </button>\r\n\r\n  <div *ngIf=\"auth?.currentUserValue?.role == 'ong'\">\r\n    <button class=\"btn btn-primary btn-icon btnLateralSuspenso\" routerLinkActive=\"active\" routerLink=\"addPostagem\"\r\n      title=\"Nova postagem\">\r\n      <clr-icon shape=\"plus\"></clr-icon>\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/timeline/timeline.component.scss":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnLateralSuspenso {\n  margin-right: 12px;\n  border-radius: 50% !important;\n  position: fixed;\n  bottom: 40px;\n  right: 80px;\n  width: 60px;\n  height: 60px;\n  box-shadow: 2px 2px 10px #808080;\n  font-size: 30px; }\n\n.btnLateralSuspenso:hover {\n  box-shadow: 4px 4px 20px #808080;\n  transition: .3s linear all; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvQzpcXFVzZXJzXFxEZXNlbnZvbHZlZG9yXFxSZXBvc2l0b3JpZXNcXFVGR1xcaXZvbHVudGVlclxcU2lzdGVtYVxcaXZvbHVudGVlci9zcmNcXGFwcFxcdGltZWxpbmVcXHRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLDZCQUE0QjtFQUM1QixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxlQUNKLEVBQUE7O0FBRUE7RUFDSSxnQ0FBZ0M7RUFDaEMsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5MYXRlcmFsU3VzcGVuc28ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICBib3R0b206IDQwcHg7XHJcbiAgICByaWdodDogODBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICM4MDgwODA7XHJcbiAgICBmb250LXNpemU6IDMwcHhcclxufVxyXG5cclxuLmJ0bkxhdGVyYWxTdXNwZW5zbzpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMjBweCAjODA4MDgwO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGxpbmVhciBhbGw7XHJcbn0iXX0= */"

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

module.exports = "<h2>\r\n  Nome do Evento\r\n</h2>\r\n<div class=\"clr-row\">\r\n\r\n  <div class=\"clr-col\">\r\n    <div class=\"card-img\">\r\n      <img src=\"assets/images/evento.jpg\" alt=\"ong\" style=\"max-height:400px;object-fit: cover;\" />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"clr-break-row\"></div>\r\n\r\n  <!-- Coluna da esquerda -->\r\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\r\n    <div class=\"clr-row\">\r\n      <div class=\"clr-col\">\r\n        <!-- Card com informações-->\r\n        <a routerLinkActive=\"active\" routerLink=\"/ong/ong123\" class=\"card clickable\">\r\n          <div class=\"card-header\" style=\"height:auto; overflow:auto;\">\r\n            <span class=\"p4\">Realização</span> Nome da ONG <img class=\"ong-card\" src=\"assets/images/ong.png\" />\r\n          </div>\r\n        </a>\r\n        <div class=\"card\">\r\n          <div class=\"card-block\">\r\n            <div class=\"card-title\">\r\n              Informações\r\n            </div>\r\n            <div class=\"card-text\">\r\n              <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon> <strong> Local:</strong> Setor Sudoeste\r\n              <br>\r\n              <clr-icon shape=\"calendar\" class=\"is-info\"></clr-icon> <strong> Data:</strong> 25/05/2019\r\n              <br>\r\n              <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon> <strong> Horário:</strong> 09:00\r\n            </div>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <div class=\"card-title\">\r\n              Categorias\r\n            </div>\r\n            <div class=\"card-text\">\r\n              <a class=\"label label-purple clickable\" routerLinkActive=\"active\" routerLink=\".\">Animais</a>\r\n              <a class=\"label label-blue clickable\" routerLinkActive=\"active\" routerLink=\".\">Meio ambiente</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <button *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"btn btn-sm btn-link\">\r\n              <clr-icon shape=\"heart\"></clr-icon> Favoritar\r\n            </button>\r\n            <button class=\"btn btn-sm btn-link\">\r\n              <clr-icon shape=\"share\"></clr-icon> Compartilhar\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <!-- Editar/Deletar evento-->\r\n        <div *ngIf=\"auth?.currentUserValue?.role == 'ong' || auth?.currentUserValue?.role == 'admin'\" class=\"clr-row\">\r\n          <div class=\"clr-col-auto\">\r\n            <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"editar\" style=\"margin: 1rem 0 0 auto;\">\r\n              <clr-icon shape=\"edit is-primary\"></clr-icon> Editar Evento\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"clr-col-auto\">\r\n            <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"excluir\" style=\"margin: 1rem 0 0 auto;\">\r\n              <clr-icon shape=\"trash is-primary\"></clr-icon> Excluir Evento\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Coluna da direita -->\r\n  <div class=\"clr-col\">\r\n    <!-- Descrição -->\r\n    <h3><strong>Descrição:</strong></h3>\r\n    <h4> He was charismatic, magnetic, electric and everybody knew it. When he walked in every woman's head turned,\r\n      everyone stood\r\n      up to talk to him. He was like this hybrid, this mix of a man who couldn't contain himself.</h4>\r\n\r\n    <!-- Funções -->\r\n    <h3><strong>Funções:</strong></h3>\r\n    <div class=\"clr-row\">\r\n      <div class=\"clr-col-lg-6 clr-col-sm-6 clr-col-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            Auxiliador(a) de idosas\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <strong>Vagas restantes: </strong> 10\r\n          </div>\r\n          <div class=\"card-block\">\r\n            You can be my daddy tonight, night, night I'm neon phosphorescent Open like a Christmas present, now\r\n          </div>\r\n          <div *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"card-footer\">\r\n            <a class=\"btn btn-primary\">Confirmar presença</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"clr-col-lg-6 clr-col-sm-6 clr-col-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            Lavador(a) de cachorros\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <strong>Vagas restantes: </strong> 2\r\n          </div>\r\n          <div class=\"card-block\">\r\n            You can be my daddy tonight, night, night If you're seeking heaven Then you wanna come and get it, get it\r\n          </div>\r\n          <div *ngIf=\"auth?.currentUserValue?.role == 'voluntario'\" class=\"card-footer\">\r\n            <a class=\"btn btn-primary\">Confirmar presença</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/ver-evento/ver-evento.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ver-evento/ver-evento.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ong-card {\n  max-width: 100px;\n  max-height: 100px;\n  border-radius: 50%;\n  float: right;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: 0;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyLWV2ZW50by9DOlxcVXNlcnNcXERlc2Vudm9sdmVkb3JcXFJlcG9zaXRvcmllc1xcVUZHXFxpdm9sdW50ZWVyXFxTaXN0ZW1hXFxpdm9sdW50ZWVyL3NyY1xcYXBwXFx2ZXItZXZlbnRvXFx2ZXItZXZlbnRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Zlci1ldmVudG8vdmVyLWV2ZW50by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbmctY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4OyBcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */"

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

module.exports = __webpack_require__(/*! C:\Users\Desenvolvedor\Repositories\UFG\ivolunteer\Sistema\ivolunteer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map