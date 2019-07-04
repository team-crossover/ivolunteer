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
                console.log("Auto-logout because you're not authorized to be here");
                _this.authenticationService.logout();
                // location.reload(true);
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

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });



// export * from './fake-backend';


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
        var currentToken = this.authenticationService.currentUserTokenValue;
        if (currentToken) {
            request = request.clone({
                setHeaders: {
                    "Authorization": "" + currentToken,
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

/***/ "./src/app/_models/endereco.ts":
/*!*************************************!*\
  !*** ./src/app/_models/endereco.ts ***!
  \*************************************/
/*! exports provided: Endereco */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endereco", function() { return Endereco; });
var Endereco = /** @class */ (function () {
    function Endereco() {
    }
    return Endereco;
}());



/***/ }),

/***/ "./src/app/_models/event.ts":
/*!**********************************!*\
  !*** ./src/app/_models/event.ts ***!
  \**********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var _endereco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endereco */ "./src/app/_models/endereco.ts");

var Event = /** @class */ (function () {
    function Event() {
        this.local = new _endereco__WEBPACK_IMPORTED_MODULE_0__["Endereco"]();
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Usuario, Event, Ong, Voluntario, NovoVoluntario, NovaOng, Endereco */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario */ "./src/app/_models/usuario.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return _usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"]; });

/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/app/_models/event.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _event__WEBPACK_IMPORTED_MODULE_1__["Event"]; });

/* harmony import */ var _ong__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ong */ "./src/app/_models/ong.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ong", function() { return _ong__WEBPACK_IMPORTED_MODULE_2__["Ong"]; });

/* harmony import */ var _voluntario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voluntario */ "./src/app/_models/voluntario.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Voluntario", function() { return _voluntario__WEBPACK_IMPORTED_MODULE_3__["Voluntario"]; });

/* harmony import */ var _novo_voluntario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./novo-voluntario */ "./src/app/_models/novo-voluntario.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NovoVoluntario", function() { return _novo_voluntario__WEBPACK_IMPORTED_MODULE_4__["NovoVoluntario"]; });

/* harmony import */ var _nova_ong__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nova-ong */ "./src/app/_models/nova-ong.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NovaOng", function() { return _nova_ong__WEBPACK_IMPORTED_MODULE_5__["NovaOng"]; });

/* harmony import */ var _endereco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./endereco */ "./src/app/_models/endereco.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Endereco", function() { return _endereco__WEBPACK_IMPORTED_MODULE_6__["Endereco"]; });










/***/ }),

/***/ "./src/app/_models/nova-ong.ts":
/*!*************************************!*\
  !*** ./src/app/_models/nova-ong.ts ***!
  \*************************************/
/*! exports provided: NovaOng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaOng", function() { return NovaOng; });
/* harmony import */ var _endereco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endereco */ "./src/app/_models/endereco.ts");

var NovaOng = /** @class */ (function () {
    function NovaOng() {
        this.areas = [];
        this.endereco = new _endereco__WEBPACK_IMPORTED_MODULE_0__["Endereco"]();
    }
    return NovaOng;
}());



/***/ }),

/***/ "./src/app/_models/novo-evento.ts":
/*!****************************************!*\
  !*** ./src/app/_models/novo-evento.ts ***!
  \****************************************/
/*! exports provided: NovoEvento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoEvento", function() { return NovoEvento; });
/* harmony import */ var _endereco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endereco */ "./src/app/_models/endereco.ts");

var NovoEvento = /** @class */ (function () {
    function NovoEvento() {
        this.local = new _endereco__WEBPACK_IMPORTED_MODULE_0__["Endereco"]();
    }
    return NovoEvento;
}());



/***/ }),

/***/ "./src/app/_models/novo-voluntario.ts":
/*!********************************************!*\
  !*** ./src/app/_models/novo-voluntario.ts ***!
  \********************************************/
/*! exports provided: NovoVoluntario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoVoluntario", function() { return NovoVoluntario; });
var NovoVoluntario = /** @class */ (function () {
    function NovoVoluntario() {
        this.areasInteressadas = [];
    }
    return NovoVoluntario;
}());



/***/ }),

/***/ "./src/app/_models/ong.ts":
/*!********************************!*\
  !*** ./src/app/_models/ong.ts ***!
  \********************************/
/*! exports provided: Ong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ong", function() { return Ong; });
var Ong = /** @class */ (function () {
    function Ong() {
        this.areas = [];
        this.idsEventos = [];
        this.idsSeguidores = [];
    }
    return Ong;
}());



/***/ }),

/***/ "./src/app/_models/usuario.ts":
/*!************************************!*\
  !*** ./src/app/_models/usuario.ts ***!
  \************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/_models/voluntario.ts":
/*!***************************************!*\
  !*** ./src/app/_models/voluntario.ts ***!
  \***************************************/
/*! exports provided: Voluntario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Voluntario", function() { return Voluntario; });
var Voluntario = /** @class */ (function () {
    function Voluntario() {
        this.areasInteressadas = [];
        this.idsOngsSeguidas = [];
        this.idsEventosConfirmados = [];
    }
    return Voluntario;
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
/* harmony import */ var _ongs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ongs.service */ "./src/app/_services/ongs.service.ts");
/* harmony import */ var _voluntarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./voluntarios.service */ "./src/app/_services/voluntarios.service.ts");








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
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "api/v1/public/auth/authenticate", { username: email, senha: password }, { observe: 'response' })
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
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "api/v1/public/auth/deauthenticate").subscribe(function (response) {
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
            _ongs_service__WEBPACK_IMPORTED_MODULE_6__["OngsService"],
            _voluntarios_service__WEBPACK_IMPORTED_MODULE_7__["VoluntariosService"]])
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
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/eventos/" + eventId);
    };
    EventsService.prototype.getEvents = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/eventos");
    };
    EventsService.prototype.getEventByOng = function (idOng) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('idOng', idOng);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/eventos/", { params: params });
    };
    EventsService.prototype.getEventByNome = function (nome) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('nome', nome);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/eventos/", { params: params });
    };
    EventsService.prototype.getEventByAreas = function (areas) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        areas.forEach(function (area) {
            params = params.append('areas', area);
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/eventos/", { params: params });
    };
    // Apenas para ONGs autenticadas
    EventsService.prototype.createEvent = function (novoEvento) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/ong/eventos", novoEvento);
    };
    EventsService.prototype.updateEvent = function (idEvento, novoEvento) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/ong/eventos/" + idEvento, novoEvento);
    };
    EventsService.prototype.deleteEvent = function (idEvento) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/ong/eventos/" + idEvento);
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var OngsService = /** @class */ (function () {
    function OngsService(http) {
        this.http = http;
    }
    OngsService.prototype.createOng = function (novaOng) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/ongs", novaOng);
    };
    OngsService.prototype.updateMyOng = function (novaOng) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/ong", novaOng);
    };
    OngsService.prototype.getOng = function (idOng) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/ongs/" + idOng);
    };
    OngsService.prototype.getOngs = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/ongs");
    };
    OngsService.prototype.getOngByAreas = function (areas) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        areas.forEach(function (area) {
            params = params.append('areas', area);
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/ongs", { params: params });
    };
    OngsService.prototype.getOngByNome = function (nome) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('nome', nome);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/ongs", { params: params });
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var VoluntariosService = /** @class */ (function () {
    function VoluntariosService(http) {
        this.http = http;
    }
    VoluntariosService.prototype.createVoluntario = function (novoVoluntario) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/voluntarios", novoVoluntario);
    };
    VoluntariosService.prototype.updateMyVoluntario = function (novoVoluntario) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/voluntario", novoVoluntario);
    };
    VoluntariosService.prototype.getVoluntario = function (idVoluntario) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/voluntarios/" + idVoluntario);
    };
    VoluntariosService.prototype.getVoluntarios = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/public/voluntarios");
    };
    VoluntariosService.prototype.followOng = function (idOng, valor) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('valor', valor);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/voluntario/ongs/" + idOng + "/seguir?valor=" + valor, { params: params });
    };
    VoluntariosService.prototype.subscribeOnEvent = function (idEvento, valor) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('valor', valor);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "api/v1/voluntario/eventos/" + idEvento + "/confirmar?valor=" + valor, { params: params });
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

module.exports = "<div class=\"modal\">\r\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n        </button>\r\n        <h3 class=\"modal-title\">Novo evento</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form clrForm #eventForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <section novalidate class=\"form-block\">\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Nome</label>\r\n              <input clr-col-12 clr-col-md-6 clrInput type=\"text\" size=\"35\" [(ngModel)]=\"novoEvento.nome\" name=\"nome\"\r\n                required placeholder=\"Nome do Evento\" />\r\n            </clr-input-container>\r\n            <clr-textarea-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Descrição</label>\r\n              <textarea clr-col-12 clr-col-md-4 clrTextarea type=\"text\" size=\"35\" required\r\n                [(ngModel)]=\"novoEvento.descricao\" name=\"descricao\" placeholder=\"Descrição do Evento\"></textarea>\r\n            </clr-textarea-container>\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Data:</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"date\" [(ngModel)]=\"novoEventoDataTemp\" name=\"dataRealizacao\"\r\n                size=\"35\" required placeholder=\"Data do evento\" />\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Horário:</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"time\" [(ngModel)]=\"novoEventoTimeTemp\" name=\"horaRealizacao\"\r\n                size=\"35\" required placeholder=\"Horário do Evento\" />\r\n            </clr-input-container>\r\n\r\n            <h3>Endereço do Evento</h3>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>UF</label>\r\n              <input clrInput type=\"text\" size=\"10\" required placeholder=\"Inserir UF\" [(ngModel)]=\"novoEvento.local.uf\"\r\n                name=\"uf\" minlength=\"2\" maxlength=\"2\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              <clr-control-error *clrIfError=\"'minlength'\">UF deve ter 2 caracteres</clr-control-error>\r\n              <clr-control-error *clrIfError=\"'maxlength'\">UF deve ter 2 caracteres</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Cidade</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir Cidade\"\r\n                [(ngModel)]=\"novoEvento.local.cidade\" name=\"cidade\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>CEP</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir CEP\"\r\n                [(ngModel)]=\"novoEvento.local.cep\" name=\"cep\" minlength=\"8\" maxlength=\"8\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              <clr-control-error *clrIfError=\"'minlength'\">CEP deve ter 8 caracteres</clr-control-error>\r\n              <clr-control-error *clrIfError=\"'maxlength'\">CEP deve ter 8 caracteres</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Bairro</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir bairro\"\r\n                [(ngModel)]=\"novoEvento.local.bairro\" name=\"bairro\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Complemento 1</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir complemento\"\r\n                [(ngModel)]=\"novoEvento.local.complemento1\" name=\"complemento1\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Complemento 2</label>\r\n              <input clrInput type=\"text\" size=\"30\" placeholder=\"Inserir complemento\"\r\n                [(ngModel)]=\"novoEvento.local.complemento2\" name=\"complemento2\" />\r\n            </clr-input-container>\r\n          </section>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!eventForm.form.valid\" [clrLoading]=\"submitBtnState\"\r\n          (click)=\"onSubmit()\">Salvar</button>\r\n        <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../../\">Cancelar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_novo_evento__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_models/novo-evento */ "./src/app/_models/novo-evento.ts");








var AddEventoComponent = /** @class */ (function () {
    function AddEventoComponent(eventosService, authService, router, toastr) {
        this.eventosService = eventosService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
            'Educação', 'Esportes', 'Idosos', 'Jovens',
            'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
            'Política', 'Refugiados', 'Saúde', 'Outras'];
        this.novoEvento = new _models_novo_evento__WEBPACK_IMPORTED_MODULE_7__["NovoEvento"]();
        this.error = null;
        this.loading = false;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingState"].DEFAULT;
    }
    AddEventoComponent.prototype.ngOnInit = function () {
    };
    AddEventoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingState"].LOADING;
        //Pega o id da ong que está cadastrando o novo evento
        this.authService.getCurrentUserOng().subscribe(function (ong) {
            _this.novoEvento.idOng = ong.id;
            // Coloca hora e data no formato certo
            if (_this.novoEventoDataTemp && _this.novoEventoTimeTemp) {
                var partes = _this.novoEventoDataTemp.split("-");
                _this.novoEvento.dataRealizacao = partes[2] + "/" + partes[1] + "/" + partes[0] + " " + _this.novoEventoTimeTemp;
            }
            //Cria o novo evento
            _this.eventosService.createEvent(_this.novoEvento)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe(function (data) {
                if (data) {
                    _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingState"].SUCCESS;
                    _this.router.navigate(["/login"]);
                    _this.toastr.success('Adicionado cadastro de Evento');
                }
            }, function (error) {
                _this.error = JSON.stringify(error);
                _this.loading = false;
                _this.toastr.error(_this.error);
                _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingState"].DEFAULT;
            });
        });
    };
    AddEventoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-evento',
            template: __webpack_require__(/*! ./add-evento.component.html */ "./src/app/add-evento/add-evento.component.html"),
            styles: [__webpack_require__(/*! ./add-evento.component.scss */ "./src/app/add-evento/add-evento.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
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

module.exports = "<div class=\"clr-row clr-justify-content-center\">\r\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Cadastrar ONG\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"card-text\">\r\n          <form clrForm #ongForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <section class=\"form-block\">\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Usuário</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir usuário\"\r\n                  [(ngModel)]=\"novaOng.username\" name=\"username\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-password-container class=\"form-group\">\r\n                <label>Senha</label>\r\n                <input clrPassword type=\"password\" style=\"width: 195px\" required placeholder=\"Inserir senha\"\r\n                  [(ngModel)]=\"novaOng.senha\" name=\"senha\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                <clr-control-error *clrIfError=\"'minlength'\">Senha deve ter 6+ caracteres\r\n                </clr-control-error>\r\n              </clr-password-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Nome</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\" [(ngModel)]=\"novaOng.nome\"\r\n                  name=\"novaOng\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Descrição</label>\r\n                <input clrInput type=\"textarea\" size=\"30\" required placeholder=\"Inserir descrição\"\r\n                  [(ngModel)]=\"novaOng.descricao\" name=\"descricao\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Doações</label>\r\n                <input clrInput type=\"textarea\" size=\"30\" required placeholder=\"Inserir doações\"\r\n                  [(ngModel)]=\"novaOng.doacoes\" name=\"doacoes\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-date-container class=\"form-group\">\r\n                <label>Data de fundação</label>\r\n                <input type=\"text\" clrDate name=\"fundacao\" style=\"width: 230px\">\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-date-container>\r\n\r\n              <div class=\"from-group\">\r\n                <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\"><b>Áreas</b></label>\r\n                <div class=\"clr-control-container\" style=\"max-width: 200px\">\r\n                  <ng-select [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\" [(ngModel)]=\"novaOng.areas\"\r\n                    name=\"areas\">\r\n                    <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\r\n                      <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\" name=\"id-{{index}}\" />\r\n                      {{item}}\r\n                    </ng-template>\r\n                  </ng-select>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"clr-form-control from-group\">\r\n                  <label class=\"clr-control-label\">Imagem</label>\r\n                  <div class=\"clr-control-container\">\r\n                    <input #imageInput type=\"file\" accept=\"image/*\" (change)=\"imgChangeListener(imageInput)\">\r\n                  </div>\r\n                </div>\r\n                \r\n              <h3>Contato</h3>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Telefone</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"(DDD)XXXXX-XXXX\"\r\n                  [(ngModel)]=\"novaOng.telefone\" name=\"telefone\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Email</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir email\" [(ngModel)]=\"novaOng.email\"\r\n                  name=\"email\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Facebook</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir URL Facebook\"\r\n                  [(ngModel)]=\"novaOng.urlFacebook\" name=\"urlFacebook\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Website</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir URL Website\"\r\n                  [(ngModel)]=\"novaOng.urlWebsite\" name=\"urlWebsite\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <h3>Endereço</h3>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>UF</label>\r\n                <input clrInput type=\"text\" size=\"10\" required placeholder=\"Inserir UF\"\r\n                  [(ngModel)]=\"novaOng.endereco.uf\" name=\"uf\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Cidade</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir Cidade\"\r\n                  [(ngModel)]=\"novaOng.endereco.cidade\" name=\"cidade\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>CEP</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir CEP\"\r\n                  [(ngModel)]=\"novaOng.endereco.cep\" name=\"cep\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Bairro</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir bairro\"\r\n                  [(ngModel)]=\"novaOng.endereco.bairro\" name=\"bairro\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Complemento 1</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir complemento\"\r\n                  [(ngModel)]=\"novaOng.endereco.complemento1\" name=\"complemento1\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Complemento 2</label>\r\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir complemento\"\r\n                  [(ngModel)]=\"novaOng.endereco.complemento2\" name=\"complemento2\" />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              </clr-input-container>\r\n            </section>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!ongForm.form.valid\" [clrLoading]=\"submitBtnState\" (click)=\"onSubmit()\">Salvar</button>\r\n        <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../../\">Cancelar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");








var AddOngComponent = /** @class */ (function () {
    function AddOngComponent(ongsService, authService, router, toastr) {
        this.ongsService = ongsService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
            'Educação', 'Esportes', 'Idosos', 'Jovens',
            'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
            'Política', 'Refugiados', 'Saúde', 'Outras'];
        this.novaOng = new _models__WEBPACK_IMPORTED_MODULE_2__["NovaOng"]();
        this.error = null;
        this.loading = false;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrLoadingState"].DEFAULT;
    }
    AddOngComponent.prototype.ngOnInit = function () {
    };
    AddOngComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrLoadingState"].LOADING;
        this.ongsService.createOng(this.novaOng)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            if (data) {
                _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrLoadingState"].SUCCESS;
                _this.router.navigate(["/login"]);
                _this.toastr.success('Adicionado cadastrado de ONG');
            }
        }, function (error) {
            _this.error = JSON.stringify(error);
            _this.loading = false;
            _this.toastr.error(_this.error);
            _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrLoadingState"].DEFAULT;
        });
    };
    AddOngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-ong',
            template: __webpack_require__(/*! ./add-ong.component.html */ "./src/app/add-ong/add-ong.component.html"),
            styles: [__webpack_require__(/*! ./add-ong.component.scss */ "./src/app/add-ong/add-ong.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["OngsService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
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

module.exports = "<div class=\"clr-row clr-justify-content-center\">\r\n    <div class=\"clr-col-sm-12 clr-col-md-auto\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Cadastrar voluntário\r\n            </div>\r\n            <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                    <form clrForm #voluntarioForm=\"ngForm\">\r\n\r\n                        <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\r\n                            <div class=\"alert-items\">\r\n                                <div class=\"alert-item static\">\r\n                                    <div class=\"alert-icon-wrapper\">\r\n                                        <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\r\n                                    </div>\r\n                                    <span class=\"alert-text\">\r\n                                        {{error}}\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <section class=\"form-block\">\r\n                            <clr-input-container class=\"form-group\">\r\n                                <label>Usuário</label>\r\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir usuário\"\r\n                                    [(ngModel)]=\"novoVoluntario.username\" name=\"username\" />\r\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                            </clr-input-container>\r\n\r\n                            <clr-password-container class=\"form-group\">\r\n                                <label>Senha</label>\r\n                                <input clrPassword type=\"password\" style=\"width: 195px\" required\r\n                                    placeholder=\"Inserir senha\" [(ngModel)]=\"novoVoluntario.senha\" name=\"senha\" />\r\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                                <clr-control-error *clrIfError=\"'minlength'\">Senha deve ter 6+ caracteres\r\n                                </clr-control-error>\r\n                            </clr-password-container>\r\n\r\n                            <clr-input-container class=\"form-group\">\r\n                                <label>Nome</label>\r\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\"\r\n                                    [(ngModel)]=\"novoVoluntario.nome\" name=\"nome\" />\r\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                                <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres\r\n                                </clr-control-error>\r\n                            </clr-input-container>\r\n\r\n                            <clr-input-container class=\"form-group\">\r\n                                <label>Email</label>\r\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir e-mail\"\r\n                                    [(ngModel)]=\"novoVoluntario.email\" name=\"email\" />\r\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                            </clr-input-container>\r\n\r\n                            <clr-date-container class=\"form-group\">\r\n                                <label>Data de nascimento</label>\r\n                                <input type=\"date\" clrDate style=\"width: 230px\"\r\n                                    [(ngModel)]=\"novoVoluntario.dataNascimento\" name=\"dataNascimento\" />\r\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                            </clr-date-container>\r\n\r\n                            <div class=\"from-group\">\r\n                                <label style=\"color: #000000; margin-left: -2%; margin-top: 5%; margin-right: 32%\"><b>Áreas de interesse</b></label>\r\n                                <div class=\"clr-control-container\" style=\"max-width: 200px\">\r\n                                    <ng-select [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\"\r\n                                        [(ngModel)]=\"novoVoluntario.areasInteressadas\" name=\"areasInteressadas\">\r\n                                        <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\r\n                                            <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\"\r\n                                                name=\"id-{{index}}\" />\r\n                                            {{item}}\r\n                                        </ng-template>\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </section>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!voluntarioForm.form.valid\" [clrLoading]=\"submitBtnState\" (click)=\"onSubmit()\">Salvar</button>\r\n                <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\"\r\n                    routerLink=\"../..\">Cancelar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");








var AddVoluntarioComponent = /** @class */ (function () {
    function AddVoluntarioComponent(voluntariosService, authService, router, toastr) {
        this.voluntariosService = voluntariosService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
            'Educação', 'Esportes', 'Idosos', 'Jovens',
            'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
            'Política', 'Refugiados', 'Saúde', 'Outras'];
        this.novoVoluntario = new _models__WEBPACK_IMPORTED_MODULE_2__["NovoVoluntario"]();
        this.error = null;
        this.loading = false;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrLoadingState"].DEFAULT;
    }
    AddVoluntarioComponent.prototype.ngOnInit = function () {
    };
    AddVoluntarioComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrLoadingState"].LOADING;
        this.voluntariosService.createVoluntario(this.novoVoluntario)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            if (data) {
                _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrLoadingState"].SUCCESS;
                _this.router.navigate(["/login"]);
                _this.toastr.success('Adicionado cadastro de voluntário');
            }
        }, function (error) {
            _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrLoadingState"].DEFAULT;
            _this.error = JSON.stringify(error);
            _this.loading = false;
            _this.toastr.error(_this.error);
        });
    };
    AddVoluntarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-voluntario',
            template: __webpack_require__(/*! ./add-voluntario.component.html */ "./src/app/add-voluntario/add-voluntario.component.html"),
            styles: [__webpack_require__(/*! ./add-voluntario.component.scss */ "./src/app/add-voluntario/add-voluntario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["VoluntariosService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
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
/* harmony import */ var _editar_evento_editar_evento_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./editar-evento/editar-evento.component */ "./src/app/editar-evento/editar-evento.component.ts");





















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
                component: _editar_evento_editar_evento_component__WEBPACK_IMPORTED_MODULE_20__["EditarEventoComponent"],
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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./eventos/eventos.component */ "./src/app/eventos/eventos.component.ts");
/* harmony import */ var _ongs_ongs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ongs/ongs.component */ "./src/app/ongs/ongs.component.ts");
/* harmony import */ var _ong_card_ong_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ong-card/ong-card.component */ "./src/app/ong-card/ong-card.component.ts");
/* harmony import */ var _add_ong_add_ong_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-ong/add-ong.component */ "./src/app/add-ong/add-ong.component.ts");
/* harmony import */ var _add_voluntario_add_voluntario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-voluntario/add-voluntario.component */ "./src/app/add-voluntario/add-voluntario.component.ts");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");
/* harmony import */ var _editar_perfil_editar_perfil_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editar-perfil/editar-perfil.component */ "./src/app/editar-perfil/editar-perfil.component.ts");
/* harmony import */ var _ong_filtro_ong_filtro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ong-filtro/ong-filtro.component */ "./src/app/ong-filtro/ong-filtro.component.ts");
/* harmony import */ var _timeline_post_timeline_post_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./timeline-post/timeline-post.component */ "./src/app/timeline-post/timeline-post.component.ts");
/* harmony import */ var _timeline_evento_timeline_evento_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./timeline-evento/timeline-evento.component */ "./src/app/timeline-evento/timeline-evento.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _evento_card_evento_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./evento-card/evento-card.component */ "./src/app/evento-card/evento-card.component.ts");
/* harmony import */ var _add_evento_add_evento_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-evento/add-evento.component */ "./src/app/add-evento/add-evento.component.ts");
/* harmony import */ var _add_postagem_add_postagem_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-postagem/add-postagem.component */ "./src/app/add-postagem/add-postagem.component.ts");
/* harmony import */ var _evento_filtro_evento_filtro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./evento-filtro/evento-filtro.component */ "./src/app/evento-filtro/evento-filtro.component.ts");
/* harmony import */ var _excluir_evento_excluir_evento_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./excluir-evento/excluir-evento.component */ "./src/app/excluir-evento/excluir-evento.component.ts");
/* harmony import */ var _editar_ong_editar_ong_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./editar-ong/editar-ong.component */ "./src/app/editar-ong/editar-ong.component.ts");
/* harmony import */ var _perfil_ong_perfil_ong_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./perfil-ong/perfil-ong.component */ "./src/app/perfil-ong/perfil-ong.component.ts");
/* harmony import */ var _ver_evento_ver_evento_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ver-evento/ver-evento.component */ "./src/app/ver-evento/ver-evento.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dashboard-admin/dashboard-admin.component */ "./src/app/dashboard-admin/dashboard-admin.component.ts");
/* harmony import */ var _convidado_convidado_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./convidado/convidado.component */ "./src/app/convidado/convidado.component.ts");
/* harmony import */ var _dashboard_ong_dashboard_ong_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dashboard-ong/dashboard-ong.component */ "./src/app/dashboard-ong/dashboard-ong.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _editar_evento_editar_evento_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./editar-evento/editar-evento.component */ "./src/app/editar-evento/editar-evento.component.ts");






// import { fakeBackendProvider } from './_helpers';































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_21__["TimelineComponent"],
                _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_11__["EventosComponent"],
                _ongs_ongs_component__WEBPACK_IMPORTED_MODULE_12__["OngsComponent"],
                _ong_card_ong_card_component__WEBPACK_IMPORTED_MODULE_13__["OngCardComponent"],
                _ong_filtro_ong_filtro_component__WEBPACK_IMPORTED_MODULE_18__["OngFiltroComponent"],
                _add_ong_add_ong_component__WEBPACK_IMPORTED_MODULE_14__["AddOngComponent"],
                _add_voluntario_add_voluntario_component__WEBPACK_IMPORTED_MODULE_15__["AddVoluntarioComponent"],
                _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_16__["PerfilComponent"],
                _editar_perfil_editar_perfil_component__WEBPACK_IMPORTED_MODULE_17__["EditarPerfilComponent"],
                _timeline_post_timeline_post_component__WEBPACK_IMPORTED_MODULE_19__["TimelinePostComponent"],
                _timeline_evento_timeline_evento_component__WEBPACK_IMPORTED_MODULE_20__["TimelineEventoComponent"],
                _evento_card_evento_card_component__WEBPACK_IMPORTED_MODULE_22__["EventoCardComponent"],
                _add_evento_add_evento_component__WEBPACK_IMPORTED_MODULE_23__["AddEventoComponent"],
                _add_postagem_add_postagem_component__WEBPACK_IMPORTED_MODULE_24__["AddPostagemComponent"],
                _evento_filtro_evento_filtro_component__WEBPACK_IMPORTED_MODULE_25__["EventoFiltroComponent"],
                _excluir_evento_excluir_evento_component__WEBPACK_IMPORTED_MODULE_26__["ExcluirEventoComponent"],
                _editar_ong_editar_ong_component__WEBPACK_IMPORTED_MODULE_27__["EditarOngComponent"],
                _perfil_ong_perfil_ong_component__WEBPACK_IMPORTED_MODULE_28__["PerfilOngComponent"],
                _ver_evento_ver_evento_component__WEBPACK_IMPORTED_MODULE_29__["VerEventoComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"],
                _dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_32__["DashboardAdminComponent"],
                _convidado_convidado_component__WEBPACK_IMPORTED_MODULE_33__["ConvidadoComponent"],
                _dashboard_ong_dashboard_ong_component__WEBPACK_IMPORTED_MODULE_34__["DashboardOngComponent"],
                _editar_evento_editar_evento_component__WEBPACK_IMPORTED_MODULE_36__["EditarEventoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClarityModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_35__["NgSelectModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot()
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
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

module.exports = "<div style=\"text-align: center\">\r\n  <clr-icon shape=\"users\" size=\"72\" class=\"is-info\"></clr-icon>\r\n  <h1>Seja bem-vindo(a) ao iVolunteer</h1>\r\n  <h3>\r\n    <clr-icon shape=\"user\" size=\"20\" class=\"is-highlight\"></clr-icon>&nbsp;<a routerLinkActive=\"active\"\r\n      routerLink=\"/cadastrar/voluntario\">Cadastre-se como voluntário</a> para encontrar ONGs e oportunidades de trabalho\r\n    voluntário perto de você!\r\n  </h3>\r\n  <h3>\r\n    <clr-icon shape=\"world\" size=\"20\" class=\"is-highlight\"></clr-icon>&nbsp;<a routerLinkActive=\"active\"\r\n      routerLink=\"/cadastrar/ong\">Cadastre-se como ONG</a> para divulgar seu trabalho e encontrar colaboradores.\r\n  </h3>\r\n  <h2>Junte-se a nós!</h2>\r\n</div>\r\n<hr>\r\n<h2>Eventos em destaque</h2>\r\n<div class=\"clr-row\">\r\n  <div class=\"clr-row\">\r\n    <div class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\" *ngFor=\"let evento of eventos\">\r\n        <a routerLinkActive=\"active\" routerLink=\"/evento/{{evento.id}}\" class=\"card clickable\">\r\n          <div class=\"card-header clr-row\">\r\n            <div class=\"clr-col\">\r\n              {{evento.nome}}\r\n              <div *ngFor=\"let ong of ongs\">\r\n                  <div *ngIf=\"evento.idOng === ong.id\">\r\n                    <small>{{ ong.nome }}</small>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n          </div>\r\n\r\n          <div class=\"card-img\">\r\n            <img src=\"{{(evento && evento.img) ? evento.img : imgEventoPadrao }}\" alt=\"ong\" style=\"max-height:200px;object-fit: cover;\" />\r\n          </div>\r\n          <div class=\" card-block\">\r\n            <div class=\"card-text\" style=\"height: 100px\">\r\n              <div class=\"clr-row\" style=\"margin-bottom:5px;\">\r\n                <div class=\"clr-col-auto\">\r\n                  <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\r\n                  {{evento.dataRealizacao}}\r\n                </div>\r\n                <div class=\"clr-col-auto\">\r\n                  <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\r\n                  {{evento.local.bairro}}\r\n                </div>\r\n              </div>\r\n              {{evento.descricao}}\r\n            </div>\r\n          </div>\r\n          </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<h2>ONGs em destaque</h2>\r\n<div class=\"clr-row\">\r\n  <div class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\" *ngFor=\"let ong of ongs\">\r\n      <a routerLinkActive=\"active\" routerLink=\"/ong/{{ong.id}}\" class=\"card clickable\">\r\n        <div class=\"card-img\">\r\n          <img src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao }}\" alt=\"ong\" />\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"card-title\">\r\n            <b>{{ong.nome}}</b>\r\n          </div>\r\n          <p class=\"card-text short-description\" style=\"height: 120px\">\r\n            {{ong.descricao}}\r\n          </p>\r\n        </div>\r\n        <div class=\"card-footer\" style=\"height: 70px\">\r\n          <div *ngFor=\"let area of ong.areas\">\r\n            <a routerLinkActive=\"active\" routerLink=\".\" class=\"label clickable\">{{area}}</a>\r\n          </div>\r\n        </div>\r\n      </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/convidado/convidado.component.scss":
/*!****************************************************!*\
  !*** ./src/app/convidado/convidado.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".short-description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  /* number of lines to show */\n  line-height: 1rem;\n  /* fallback */\n  max-height: 4rem;\n  /* fallback */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmlkYWRvL0M6XFxVc2Vyc1xcRGVzZW52b2x2ZWRvclxcUmVwb3NpdG9yaWVzXFxVRkdcXGl2b2x1bnRlZXJcXFNpc3RlbWFcXGl2b2x1bnRlZXIvc3JjXFxhcHBcXGNvbnZpZGFkb1xcY29udmlkYWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFFcEIscUJBQXFCO0VBQUUsNEJBQUE7RUFDdkIsaUJBQWlCO0VBQU0sYUFBQTtFQUN2QixnQkFBZ0I7RUFBTyxhQUFBLEVBQWMiLCJmaWxlIjoic3JjL2FwcC9jb252aWRhZG8vY29udmlkYWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3J0LWRlc2NyaXB0aW9uIHtcclxuICAgIC8vIExpbWl0YSBhIGFsdHVyYSBtw6F4aW1hIGEgNCBsaW5oYXNcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtOyAgICAgLyogZmFsbGJhY2sgKi9cclxuICAgIG1heC1oZWlnaHQ6IDRyZW07ICAgICAgLyogZmFsbGJhY2sgKi9cclxuIH0iXX0= */"

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var ConvidadoComponent = /** @class */ (function () {
    function ConvidadoComponent(eventService, ongService) {
        this.eventService = eventService;
        this.ongService = ongService;
        this.imgPerfilVoluntarioPadrao = 'assets/images/user-default.png';
        this.imgPerfilOngPadrao = 'assets/images/ong-default.png';
        this.imgEventoPadrao = 'assets/images/evento-default.jpg';
        this.eventos = [];
        this.ongs = [];
    }
    ConvidadoComponent.prototype.ngOnInit = function () {
        this.loadEventos();
        this.loadOngs();
    };
    ConvidadoComponent.prototype.loadEventos = function () {
        var _this = this;
        this.eventService.getEvents().subscribe(function (data) {
            data.forEach(function (evento) {
                if (_this.eventos.length < 3) {
                    _this.eventos.push(evento);
                }
            });
        });
    };
    ConvidadoComponent.prototype.loadOngs = function () {
        var _this = this;
        this.ongService.getOngs().subscribe(function (data) {
            data.forEach(function (ong) {
                if (_this.ongs.length < 4) {
                    _this.ongs.push(ong);
                }
            });
        });
    };
    ConvidadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-convidado',
            template: __webpack_require__(/*! ./convidado.component.html */ "./src/app/convidado/convidado.component.html"),
            styles: [__webpack_require__(/*! ./convidado.component.scss */ "./src/app/convidado/convidado.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["EventsService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["OngsService"]])
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

module.exports = "<h3>Bem-vindo(a), Administrador</h3><br>\r\n\r\n<clr-tabs>\r\n  <!-- Visão geral -->\r\n  <clr-tab>\r\n    <button clrTabLink>Visão geral</button>\r\n    <ng-template [(clrIfActive)]=\"overviewActive\">\r\n      <clr-tab-content>\r\n        <div class=\"clr-row\">\r\n          <div class=\"clr-col-4 clr-col-sm-6\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                ONGs cadastradas\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numOngs }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"clr-col-4 clr-col-sm-6\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Eventos publicados\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numEventos }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"clr-col-4 clr-col-sm-6\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Postagens publicadas\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numPostagens }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"clr-col-4 clr-col-sm-6\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Voluntários cadastrados\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numUsuarios }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- ONGs -->\r\n  <clr-tab>\r\n    <button clrTabLink>ONGs</button>\r\n    <ng-template [(clrIfActive)]=\"ongsActive\">\r\n      <clr-tab-content>\r\n        <h4> {{ numOngs }} ONGs cadastradas </h4>\r\n\r\n        <table class=\"table table-noborder\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"left\">Nome da ONG</th>\r\n              <th>Data de fundação</th>\r\n              <th>Número de eventos</th>\r\n              <th>Número de postagens</th>\r\n              <th>Opções</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let ong of ongs\">\r\n              <td class=\"left\"><a>{{ ong.nome }}</a></td>\r\n              <td>{{ ong.dataFundacao }}</td>\r\n              <td>{{ ong.idsEventos.length }}</td>\r\n              <td>2</td>\r\n              <td>\r\n                <div class=\"btn-group btn-link btn-sm\">\r\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/ong/{{ ong.id }}\">Ver</button>\r\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/ong/{{ ong.id }}/editar\">Editar</button>\r\n                  <!-- <button class=\"btn\">Deletar</button> -->\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- Eventos -->\r\n  <clr-tab>\r\n    <button clrTabLink>Eventos</button>\r\n    <ng-template [(clrIfActive)]=\"eventsActive\">\r\n      <clr-tab-content>\r\n        <h4> {{ numEventos }} Eventos publicados </h4>\r\n\r\n        <table class=\"table table-noborder\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"left\">Título</th>\r\n              <th>Cadastro</th>\r\n              <th>ONG responsável</th>\r\n              <th>Opções</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let event of eventos\">\r\n              <td class=\"left\"><a>{{ event.nome }}</a></td>\r\n              <td>{{ event.dataCriacao }}</td>\r\n              <td><a *ngFor=\"let on of ongs\">\r\n                <div *ngIf=\"event.idOng === on.id\">\r\n                  {{ on.nome }}\r\n                </div>\r\n              </a>\r\n              </td>\r\n              <td>\r\n                <div class=\"btn-group btn-link btn-sm\">\r\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}\">Ver</button>\r\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}/editar\">Editar</button>\r\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}/excluir\">Deletar</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- Postagens -->\r\n  <clr-tab>\r\n    <button clrTabLink>Postagens</button>\r\n    <ng-template [(clrIfActive)]=\"postsActive\">\r\n      <clr-tab-content>\r\n        <h4> {{ numPostagens }} Postagens publicadas </h4>\r\n\r\n        <table class=\"table table-noborder\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"left\">Título</th>\r\n              <th>Data</th>\r\n              <th>ONG Responsável</th>\r\n              <th>Opções</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let post of postagens\">\r\n              <td class=\"left\"><a>{{ post }}</a></td>\r\n              <td>{{ data }}</td>\r\n              <td><a>Nome da ONG</a></td>\r\n              <td>\r\n                <div class=\"btn-group btn-link btn-sm\">\r\n                  <button class=\"btn\">Ver</button>\r\n                  <button class=\"btn\">Editar</button>\r\n                  <button class=\"btn\">Deletar</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- Usuários -->\r\n  <clr-tab>\r\n    <button clrTabLink>Usuários</button>\r\n    <ng-template [(clrIfActive)]=\"usersActive\">\r\n      <clr-tab-content>\r\n        <h4> {{ numUsuarios }} Usuários cadastrados </h4>\r\n\r\n        <table class=\"table table-noborder\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"left\">Nome Completo</th>\r\n              <th>Ingresso</th>\r\n              <th>Quantidade de eventos comparecidos</th>\r\n              <th>Opções</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let vol of voluntarios\">\r\n              <td class=\"left\"><a>{{ vol.nome }}</a></td>\r\n              <td>{{ vol.dataCriacao }}</td>\r\n              <td>{{ vol.idsEventosConfirmados.length }}</td>\r\n              <td>\r\n                <div class=\"btn-group btn-link btn-sm\">\r\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/usuario/{{ vol.id }}\">Ver</button>\r\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/usuario/{{ vol.id }}/editar\">Editar</button>\r\n                  <!-- <button class=\"btn\">Deletar</button> -->\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n</clr-tabs>\r\n<!--<router-outlet></router-outlet>-->"

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var DashboardAdminComponent = /** @class */ (function () {
    function DashboardAdminComponent(ongService, voluntarioService, eventosService) {
        this.ongService = ongService;
        this.voluntarioService = voluntarioService;
        this.eventosService = eventosService;
        this.ongs = [];
        this.eventos = [];
        this.voluntarios = [];
        this.postagens = ['Novidades', 'Meta atingida', 'Novo Local'];
        this.overviewActive = true;
        this.eventsActive = false;
        this.postsActive = false;
        this.usersActive = false;
        this.ongsActive = false;
        this.data = "23/05/2019";
        this.numPostagens = this.postagens.length;
        for (var index = 0; index < this.postagens.length; index++) {
            var post = this.postagens[index];
        }
    }
    DashboardAdminComponent.prototype.ngOnInit = function () {
        this.loadOngs();
        this.loadEvents();
        this.loadVoluntarios();
    };
    DashboardAdminComponent.prototype.loadEvents = function () {
        var _this = this;
        this.eventosService.getEvents().subscribe(function (data) {
            _this.eventos = data;
            _this.numEventos = _this.eventos.length;
        });
    };
    DashboardAdminComponent.prototype.loadVoluntarios = function () {
        var _this = this;
        this.voluntarioService.getVoluntarios().subscribe(function (data) {
            _this.voluntarios = data;
            _this.numUsuarios = _this.voluntarios.length;
        });
    };
    DashboardAdminComponent.prototype.loadOngs = function () {
        var _this = this;
        this.ongService.getOngs().subscribe(function (data) {
            _this.ongs = data;
            _this.numOngs = _this.ongs.length;
        });
    };
    DashboardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-admin',
            template: __webpack_require__(/*! ./dashboard-admin.component.html */ "./src/app/dashboard-admin/dashboard-admin.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-admin.component.scss */ "./src/app/dashboard-admin/dashboard-admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["OngsService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["VoluntariosService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
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

module.exports = "<h3>Bem-vindo(a), {{ ong.nome }}</h3><br>\r\n\r\n<clr-tabs>\r\n  <!-- Visão geral -->\r\n  <clr-tab>\r\n    <button clrTabLink>Visão geral</button>\r\n    <ng-template [(clrIfActive)]=\"overviewActive\">\r\n      <clr-tab-content>\r\n        <div class=\"clr-row\">\r\n          <div class=\"clr-col-sm-12 clr-col-md-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Eventos publicados\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numEventos }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"clr-col-sm-12 clr-col-md-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Postagens publicadas\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numPostagens }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"clr-col-sm-12 clr-col-md-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Voluntários confirmados\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <div class=\"card-text\">\r\n                  {{ numVoluntarios }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h3>\r\n          Próximos eventos\r\n        </h3>\r\n          <div class=\"clr-row\">\r\n            <div class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\" *ngFor=\"let ev of eventosDash\">\r\n                <a routerLinkActive=\"active\" routerLink=\"/evento/{{ev.id}}\" class=\"card clickable\">\r\n                  <div class=\"card-header clr-row\">\r\n                    <div class=\"clr-col\">\r\n                      {{ev.nome}}\r\n                      <small><br>{{ ong.nome }}</small>\r\n                    </div>\r\n                    <br>\r\n                  </div>\r\n        \r\n                  <div class=\"card-img\">\r\n                    <img src=\"{{(ev && ev.img) ? ev.img : imgEventoPadrao }}\" alt=\"ong\" style=\"max-height:200px;object-fit: cover;\" />\r\n                  </div>\r\n                  <div class=\" card-block\">\r\n                    <div class=\"card-text\" style=\"height: 100px\">\r\n                      <div class=\"clr-row\" style=\"margin-bottom:5px;\">\r\n                        <div class=\"clr-col-auto\">\r\n                          <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\r\n                          {{ev.dataRealizacao}}\r\n                        </div>\r\n                        <div class=\"clr-col-auto\">\r\n                          <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\r\n                          {{ev.local.bairro}}\r\n                        </div>\r\n                      </div>\r\n                      {{ev.descricao}}\r\n                    </div>\r\n                  </div>\r\n                  </a>\r\n            </div>\r\n          </div>\r\n          \r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- Eventos -->\r\n  <clr-tab>\r\n    <button clrTabLink>Eventos</button>\r\n    <ng-template [(clrIfActive)]=\"eventsActive\">\r\n      <clr-tab-content>\r\n        <div class=\"clr-row\">\r\n          <div class=\"clr-col\">\r\n            <h4> {{ numEventos }} Eventos publicados </h4>\r\n          </div>\r\n          <div class=\"clr-col-auto\">\r\n            <button class=\"btn btn-sm btn-outline\" style=\"margin-top:1rem;\" routerLinkActive=\"active\"\r\n              routerLink=\"/ong/{{ ong.id }}/add-evento\">\r\n              <clr-icon shape=\"plus is-primary\"></clr-icon> Novo evento\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"clr-row\">\r\n          <div class=\"clr-col-12\">\r\n            <table class=\"table table-noborder\">\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"left\">Título</th>\r\n                  <th>Cadastro</th>\r\n                  <th>ONG responsável</th>\r\n                  <th>Opções</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let event of eventos\">\r\n                  <td class=\"left\"><a>{{ event.nome }}</a></td>\r\n                  <td>{{ event.dataCriacao }}</td>\r\n                  <td><a>{{ ong.nome }}</a></td>\r\n                  <td>\r\n                    <div class=\"btn-group btn-link btn-sm\">\r\n                      <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}\">Ver</button>\r\n                      <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}/editar\">Editar</button>\r\n                      <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}/excluir\">Deletar</button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab>\r\n\r\n  <!-- Postagens -->\r\n  <!-- <clr-tab>\r\n    <button clrTabLink>Postagens</button>\r\n    <ng-template [(clrIfActive)]=\"postsActive\">\r\n      <clr-tab-content>\r\n        <div class=\"clr-row\">\r\n          <div class=\"clr-col\">\r\n            <h4> {{ numPostagens }} Postagens publicadas </h4>\r\n          </div>\r\n          <button class=\"clr-col-auto btn btn-sm btn-outline\" style=\"margin-top:1rem;\" routerLinkActive=\"active\"\r\n            routerLink=\"/ong/1/add-post\">\r\n            <clr-icon shape=\"plus is-primary\"></clr-icon> Nova postagem\r\n          </button>\r\n        </div>\r\n\r\n        <table class=\"table table-noborder\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"left\">Título</th>\r\n              <th>Data</th>\r\n              <th>ONG Responsável</th>\r\n              <th>Opções</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let post of postagens\">\r\n              <td class=\"left\"><a>{{ post }}</a></td>\r\n              <td>{{ data }}</td>\r\n              <td><a>Nome da ONG</a></td>\r\n              <td>\r\n                <div class=\"btn-group btn-link btn-sm\">\r\n                  <button class=\"btn\">Ver</button>\r\n                  <button class=\"btn\">Editar</button>\r\n                  <button class=\"btn\">Deletar</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </clr-tab-content>\r\n    </ng-template>\r\n  </clr-tab> -->\r\n\r\n</clr-tabs>\r\n\r\n<!--<router-outlet></router-outlet>-->"

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");




var DashboardOngComponent = /** @class */ (function () {
    function DashboardOngComponent(authService, eventService, ongService) {
        this.authService = authService;
        this.eventService = eventService;
        this.ongService = ongService;
        this.imgEventoPadrao = 'assets/images/evento-default.jpg';
        this.eventos = [];
        this.eventosDash = [];
        this.ong = new _models__WEBPACK_IMPORTED_MODULE_3__["Ong"]();
        this.postagens = ['Novidades', 'Meta atingida', 'Novo Local'];
        this.data = "23/05/2019";
        this.usuario = new _models__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.overviewActive = true;
        this.eventsActive = false;
        this.postsActive = false;
        this.numPostagens = this.postagens.length;
    }
    DashboardOngComponent.prototype.ngOnInit = function () {
        this.getUsuario();
        var idOngString = this.usuario.idOng.toString();
        this.loadEventos(idOngString);
        this.loadOng(this.usuario.idOng);
    };
    DashboardOngComponent.prototype.getUsuario = function () {
        var _this = this;
        this.authService.currentUser.subscribe(function (data) {
            _this.usuario = data;
        });
    };
    DashboardOngComponent.prototype.loadOng = function (idOng) {
        var _this = this;
        this.ongService.getOng(idOng).subscribe(function (data) {
            _this.ong = data;
            _this.numEventos = _this.ong.idsEventos.length;
        });
    };
    DashboardOngComponent.prototype.loadEventos = function (id) {
        var _this = this;
        this.eventService.getEventByOng(id).subscribe(function (data) {
            _this.eventos = data;
            data.forEach(function (evento) {
                if (_this.eventosDash.length < 3) {
                    _this.eventosDash.push(evento);
                }
            });
        });
        this.numVoluntarios = 0;
        this.eventos.forEach(function (evento) {
            _this.numVoluntarios = _this.numVoluntarios + evento.idsVoluntariosConfirmados.length;
        });
    };
    DashboardOngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-ong',
            template: __webpack_require__(/*! ./dashboard-ong.component.html */ "./src/app/dashboard-ong/dashboard-ong.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-ong.component.scss */ "./src/app/dashboard-ong/dashboard-ong.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["EventsService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["OngsService"]])
    ], DashboardOngComponent);
    return DashboardOngComponent;
}());



/***/ }),

/***/ "./src/app/editar-evento/editar-evento.component.html":
/*!************************************************************!*\
  !*** ./src/app/editar-evento/editar-evento.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n        </button>\r\n        <h3 class=\"modal-title\">Editar evento</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form clrForm #eventForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <section novalidate class=\"form-block\">\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Nome</label>\r\n              <input clr-col-12 clr-col-md-6 clrInput type=\"text\" size=\"35\" [(ngModel)]=\"event.nome\" name=\"nome\"\r\n                required placeholder=\"Nome do Evento\" />\r\n            </clr-input-container>\r\n            <clr-textarea-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Descrição</label>\r\n              <textarea clr-col-12 clr-col-md-4 clrTextarea type=\"text\" size=\"35\" required [(ngModel)]=\"event.descricao\"\r\n                name=\"descricao\" placeholder=\"Descrição do Evento\"></textarea>\r\n            </clr-textarea-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Data:</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"date\" [(ngModel)]=\"event.dataRealizacao\"\r\n                name=\"dataRealizacao\" size=\"35\" required placeholder=\"Data do evento\" />\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-2>Horário:</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"time\" [(ngModel)]=\"eventTimeTemp\" name=\"eventTimeTemp\"\r\n                size=\"35\" required placeholder=\"Horário do Evento\" />\r\n            </clr-input-container>\r\n\r\n            <div class=\"clr-form-control from-group\">\r\n              <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\">\r\n                <b>Imagem</b>\r\n              </label>\r\n              <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\r\n                <input #imageInput type=\"file\" accept=\"image/*\" (change)=\"imgChangeListener(imageInput)\">\r\n              </div>\r\n            </div>\r\n\r\n            <h3>Endereço do Evento</h3>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>UF</label>\r\n              <input clrInput type=\"text\" size=\"10\" required placeholder=\"Inserir UF\" [(ngModel)]=\"event.local.uf\"\r\n                name=\"uf\" minlength=\"2\" maxlength=\"2\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              <clr-control-error *clrIfError=\"'minlength'\">UF deve ter 2 caracteres</clr-control-error>\r\n              <clr-control-error *clrIfError=\"'maxlength'\">UF deve ter 2 caracteres</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Cidade</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir Cidade\"\r\n                [(ngModel)]=\"event.local.cidade\" name=\"cidade\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>CEP</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir CEP\" [(ngModel)]=\"event.local.cep\"\r\n                name=\"cep\"  minlength=\"8\" maxlength=\"8\"/>\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n              <clr-control-error *clrIfError=\"'minlength'\">CEP deve ter 8 caracteres</clr-control-error>\r\n              <clr-control-error *clrIfError=\"'maxlength'\">CEP deve ter 8 caracteres</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Bairro</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir bairro\"\r\n                [(ngModel)]=\"event.local.bairro\" name=\"bairro\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Complemento 1</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir complemento\"\r\n                [(ngModel)]=\"event.local.complemento1\" name=\"complemento1\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Complemento 2</label>\r\n              <input clrInput type=\"text\" size=\"30\" placeholder=\"Inserir complemento\"\r\n                [(ngModel)]=\"event.local.complemento2\" name=\"complemento2\" />\r\n            </clr-input-container>\r\n          </section>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!eventForm.form.valid\" [clrLoading]=\"submitBtnState\"\r\n          (click)=\"onSubmit()\">Salvar</button>\r\n        <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

/***/ }),

/***/ "./src/app/editar-evento/editar-evento.component.scss":
/*!************************************************************!*\
  !*** ./src/app/editar-evento/editar-evento.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRhci1ldmVudG8vZWRpdGFyLWV2ZW50by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/editar-evento/editar-evento.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/editar-evento/editar-evento.component.ts ***!
  \**********************************************************/
/*! exports provided: EditarEventoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarEventoComponent", function() { return EditarEventoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _ver_evento_ver_evento_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ver-evento/ver-evento.component */ "./src/app/ver-evento/ver-evento.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var EditarEventoComponent = /** @class */ (function () {
    function EditarEventoComponent(ongsService, authService, router, toastr, eventsService, verEvent) {
        this.ongsService = ongsService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.eventsService = eventsService;
        this.areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
            'Educação', 'Esportes', 'Idosos', 'Jovens',
            'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
            'Política', 'Refugiados', 'Saúde', 'Outras'];
        this.event = new _models__WEBPACK_IMPORTED_MODULE_6__["Event"]();
        this.error = null;
        this.loading = false;
        this.usuario = new _models__WEBPACK_IMPORTED_MODULE_6__["Usuario"]();
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLoadingState"].DEFAULT;
        this.idEvento = verEvent.idEvento;
    }
    EditarEventoComponent.prototype.ngOnInit = function () {
        this.getUsuario();
        this.patchEvento();
    };
    EditarEventoComponent.prototype.getUsuario = function () {
        var _this = this;
        this.authService.currentUser.subscribe(function (data) {
            _this.usuario = data;
        });
    };
    EditarEventoComponent.prototype.patchEvento = function () {
        var _this = this;
        this.eventsService.getEvent(this.idEvento).subscribe(function (data) {
            _this.event = data;
            //Divide a data do evento e hora do evento
            var partes = _this.event.dataRealizacao.split(' ');
            _this.eventDataTemp = partes[0];
            _this.eventTimeTemp = partes[1];
            partes = _this.eventDataTemp.split('/');
            _this.event.dataRealizacao = partes[2] + '-' + partes[1] + '-' + partes[0];
        });
    };
    EditarEventoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLoadingState"].LOADING;
        //Pega o id da ong que está cadastrando o novo evento
        this.authService.getCurrentUserOng().subscribe(function (ong) {
            _this.event.idOng = ong.id;
            // Coloca hora e data no formato certo
            if (_this.eventDataTemp && _this.eventTimeTemp) {
                var partes = _this.event.dataRealizacao.split("-");
                _this.event.dataRealizacao = partes[2] + "/" + partes[1] + "/" + partes[0] + " " + _this.eventTimeTemp;
            }
            //Altera o evento
            _this.eventsService.updateEvent(_this.idEvento, _this.event)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
                .subscribe(function (data) {
                if (data) {
                    _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLoadingState"].SUCCESS;
                    _this.router.navigate(['/eventos']);
                    _this.toastr.success('Atualizado cadastro de Evento');
                }
            }, function (error) {
                _this.error = JSON.stringify(error);
                _this.loading = false;
                _this.toastr.error(_this.error);
                _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLoadingState"].DEFAULT;
            });
        });
    };
    EditarEventoComponent.prototype.imgChangeListener = function (imageInput) {
        var _this = this;
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.event.img = event.target.result;
        });
        reader.readAsDataURL(file);
    };
    EditarEventoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-evento',
            template: __webpack_require__(/*! ./editar-evento.component.html */ "./src/app/editar-evento/editar-evento.component.html"),
            styles: [__webpack_require__(/*! ./editar-evento.component.scss */ "./src/app/editar-evento/editar-evento.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["OngsService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["EventsService"],
            _ver_evento_ver_evento_component__WEBPACK_IMPORTED_MODULE_7__["VerEventoComponent"]])
    ], EditarEventoComponent);
    return EditarEventoComponent;
}());



/***/ }),

/***/ "./src/app/editar-ong/editar-ong.component.html":
/*!******************************************************!*\
  !*** ./src/app/editar-ong/editar-ong.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n        </button>\r\n        <h3 class=\"modal-title\">Editar dados da ONG</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form clrForm #ongForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <section class=\"form-block\">\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Usuário</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir usuário\"\r\n                [(ngModel)]=\"novaOng.username\" name=\"username\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-password-container class=\"form-group\">\r\n              <label>Senha</label>\r\n              <input clrPassword type=\"password\" style=\"width: 195px\" placeholder=\"Inserir senha\"\r\n                [(ngModel)]=\"novaOng.senha\" name=\"senha\" />\r\n            </clr-password-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Nome</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\" [(ngModel)]=\"novaOng.nome\"\r\n                name=\"ong\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Descrição</label>\r\n              <input clrInput type=\"textarea\" size=\"30\" required placeholder=\"Inserir descrição\"\r\n                [(ngModel)]=\"novaOng.descricao\" name=\"descricao\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Doações</label>\r\n              <input clrInput type=\"textarea\" size=\"30\" placeholder=\"Inserir doações\" [(ngModel)]=\"novaOng.doacoes\"\r\n                name=\"doacoes\" />\r\n            </clr-input-container>\r\n\r\n            <clr-date-container class=\"form-group\">\r\n              <label>Data de fundação</label>\r\n              <input type=\"text\" clrDate [(ngModel)]=\"novaOng.dataFundacao\" name=\"fundacao\" style=\"width: 230px\">\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-date-container>\r\n\r\n            <div class=\"clr-form-control from-group\">\r\n              <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\"><b>Áreas</b></label>\r\n              <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\r\n                <ng-select [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\" [(ngModel)]=\"novaOng.areas\"\r\n                  name=\"areas\">\r\n                  <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\r\n                    <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\" name=\"id-{{index}}\" />\r\n                    {{item}}\r\n                  </ng-template>\r\n                </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"clr-form-control from-group\">\r\n              <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\">\r\n                <b>Imagem</b>\r\n              </label>\r\n              <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\r\n                <input #imageInput type=\"file\" accept=\"image/*\" (change)=\"imgChangeListener(imageInput)\">\r\n              </div>\r\n            </div>\r\n\r\n            <h3>Contato</h3>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Telefone</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"(DDD)XXXXX-XXXX\"\r\n                [(ngModel)]=\"novaOng.telefone\" name=\"telefone\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Email</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir email\" [(ngModel)]=\"novaOng.email\"\r\n                name=\"email\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Facebook</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir URL Facebook\"\r\n                [(ngModel)]=\"novaOng.urlFacebook\" name=\"urlFacebook\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Website</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir URL Website\"\r\n                [(ngModel)]=\"novaOng.urlWebsite\" name=\"urlWebsite\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <h3>Endereço</h3>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>UF</label>\r\n              <input clrInput type=\"text\" size=\"10\" required placeholder=\"Inserir UF\" [(ngModel)]=\"novaOng.endereco.uf\"\r\n                name=\"uf\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Cidade</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir Cidade\"\r\n                [(ngModel)]=\"novaOng.endereco.cidade\" name=\"cidade\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>CEP</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir CEP\"\r\n                [(ngModel)]=\"novaOng.endereco.cep\" name=\"cep\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Bairro</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir bairro\"\r\n                [(ngModel)]=\"novaOng.endereco.bairro\" name=\"bairro\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Complemento 1</label>\r\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir complemento\"\r\n                [(ngModel)]=\"novaOng.endereco.complemento1\" name=\"complemento1\" />\r\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n            </clr-input-container>\r\n\r\n            <clr-input-container class=\"form-group\">\r\n              <label>Complemento 2</label>\r\n              <input clrInput type=\"text\" size=\"30\" placeholder=\"Inserir complemento\"\r\n                [(ngModel)]=\"novaOng.endereco.complemento2\" name=\"complemento2\" />\r\n            </clr-input-container>\r\n          </section>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\r\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"onSubmit()\" [clrLoading]=\"submitBtnState\">Salvar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _perfil_ong_perfil_ong_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../perfil-ong/perfil-ong.component */ "./src/app/perfil-ong/perfil-ong.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");









var EditarOngComponent = /** @class */ (function () {
    function EditarOngComponent(ongsService, authService, router, toastr, route, perfilOng) {
        this.ongsService = ongsService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.perfilOng = perfilOng;
        this.areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
            'Educação', 'Esportes', 'Idosos', 'Jovens',
            'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
            'Política', 'Refugiados', 'Saúde', 'Outras'];
        this.novaOng = new _models__WEBPACK_IMPORTED_MODULE_2__["NovaOng"]();
        this.error = null;
        this.loading = false;
        this.usuario = new _models__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLoadingState"].DEFAULT;
    }
    EditarOngComponent.prototype.ngOnInit = function () {
        this.idOng = this.perfilOng.id_ong;
        this.getUsuario();
        this.patchNovaOng();
    };
    EditarOngComponent.prototype.patchNovaOng = function () {
        var _this = this;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLoadingState"].LOADING;
        this.ongsService.getOng(this.idOng).subscribe(function (data) {
            _this.ong = data;
            _this.novaOng.username = _this.usuario.username;
            _this.novaOng.areas = _this.ong.areas;
            _this.novaOng.dataFundacao = _this.ong.dataFundacao;
            _this.novaOng.descricao = _this.ong.descricao;
            _this.novaOng.doacoes = _this.ong.doacoes;
            _this.novaOng.email = _this.ong.email;
            _this.novaOng.endereco.uf = _this.ong.endereco.uf;
            _this.novaOng.endereco.bairro = _this.ong.endereco.bairro;
            _this.novaOng.endereco.cidade = _this.ong.endereco.cidade;
            _this.novaOng.endereco.cep = _this.ong.endereco.cep;
            _this.novaOng.endereco.complemento1 = _this.ong.endereco.complemento1;
            _this.novaOng.nome = _this.ong.nome;
            _this.novaOng.telefone = _this.ong.telefone;
            _this.novaOng.urlFacebook = _this.ong.urlFacebook;
            _this.novaOng.urlWebsite = _this.ong.urlWebsite;
            _this.novaOng.imgPerfil = _this.ong.imgPerfil;
        });
    };
    EditarOngComponent.prototype.getUsuario = function () {
        var _this = this;
        this.authService.currentUser.subscribe(function (data) {
            _this.usuario = data;
        });
    };
    EditarOngComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLoadingState"].LOADING;
        this.ongsService.updateMyOng(this.novaOng)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            if (data) {
                _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLoadingState"].SUCCESS;
                _this.authService.logout();
                _this.router.navigate(["/login"]);
                _this.toastr.success('Atualizado cadastro de ONG');
            }
        }, function (error) {
            _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLoadingState"].DEFAULT;
            _this.error = JSON.stringify(error);
            _this.loading = false;
            _this.toastr.error(_this.error);
        });
    };
    EditarOngComponent.prototype.imgChangeListener = function (imageInput) {
        var _this = this;
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.novaOng.imgPerfil = event.target.result;
        });
        reader.readAsDataURL(file);
    };
    EditarOngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-ong',
            template: __webpack_require__(/*! ./editar-ong.component.html */ "./src/app/editar-ong/editar-ong.component.html"),
            styles: [__webpack_require__(/*! ./editar-ong.component.scss */ "./src/app/editar-ong/editar-ong.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["OngsService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _perfil_ong_perfil_ong_component__WEBPACK_IMPORTED_MODULE_7__["PerfilOngComponent"]])
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

module.exports = "<div class=\"modal\">\r\n    <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n                    <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n                </button>\r\n                <h3 class=\"modal-title\">Editar perfil</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form clrForm>\r\n                    <section class=\"form-block\">\r\n                        <clr-input-container class=\"form-group\">\r\n                            <label>Usuário</label>\r\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir usuário\"\r\n                                [(ngModel)]=\"novoVoluntario.username\" name=\"username\" />\r\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                        </clr-input-container>\r\n\r\n                        <clr-password-container class=\"form-group\">\r\n                            <label>Senha</label>\r\n                            <input clrPassword type=\"password\" style=\"width: 195px\" placeholder=\"Inserir senha\"\r\n                                [(ngModel)]=\"novoVoluntario.senha\" name=\"senha\" />\r\n                        </clr-password-container>\r\n\r\n                        <clr-input-container class=\"form-group\">\r\n                            <label>Nome</label>\r\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\"\r\n                                [(ngModel)]=\"novoVoluntario.nome\" name=\"nome\" />\r\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                            <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres\r\n                            </clr-control-error>\r\n                        </clr-input-container>\r\n\r\n                        <clr-input-container class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir e-mail\"\r\n                                [(ngModel)]=\"novoVoluntario.email\" name=\"email\" />\r\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                        </clr-input-container>\r\n\r\n                        <clr-date-container class=\"form-group\">\r\n                            <label>Data de nascimento</label>\r\n                            <input type=\"date\" clrDate style=\"width: 230px\" [(ngModel)]=\"novoVoluntario.dataNascimento\"\r\n                                name=\"dataNascimento\" />\r\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\r\n                        </clr-date-container>\r\n\r\n                        <div class=\"clr-form-control from-group\">\r\n                            <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\"><b>Áreas\r\n                                    de interesse</b></label>\r\n                            <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\r\n                                <ng-select [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\"\r\n                                    [(ngModel)]=\"novoVoluntario.areasInteressadas\" name=\"areasInteressadas\">\r\n                                    <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\r\n                                        <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\"\r\n                                            name=\"id-{{index}}\" />\r\n                                        {{item}}\r\n                                    </ng-template>\r\n                                </ng-select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"clr-form-control from-group\">\r\n                            <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\">\r\n                                <b>Imagem</b>\r\n                            </label>\r\n                            <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\r\n                                <input #imageInput type=\"file\" accept=\"image/*\"\r\n                                    (change)=\"imgChangeListener(imageInput)\">\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\"\r\n                    routerLink=\"..\">Cancelar</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"onSubmit()\" [clrLoading]=\"submitBtnState\">Salvar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");









var EditarPerfilComponent = /** @class */ (function () {
    function EditarPerfilComponent(voluntarioService, authService, router, route, toastr, perfilService) {
        this.voluntarioService = voluntarioService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.perfilService = perfilService;
        this.date = null;
        this.areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
            'Educação', 'Esportes', 'Idosos', 'Jovens',
            'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
            'Política', 'Refugiados', 'Saúde', 'Outras'];
        this.novoVoluntario = new _models__WEBPACK_IMPORTED_MODULE_2__["NovoVoluntario"]();
        this.voluntario = new _models__WEBPACK_IMPORTED_MODULE_2__["Voluntario"]();
        this.usuario = new _models__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.error = null;
        this.loading = false;
        this.idVoluntario = 0;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLoadingState"].DEFAULT;
    }
    EditarPerfilComponent.prototype.ngOnInit = function () {
        this.idVoluntario = this.perfilService.idVoluntario;
        this.getUsuario();
        this.getVoluntarioPatch(this.idVoluntario);
    };
    EditarPerfilComponent.prototype.getVoluntarioPatch = function (id) {
        var _this = this;
        this.voluntarioService.getVoluntario(id).subscribe(function (data) {
            _this.voluntario = data;
            console.log("VOLUNTARIO: " + JSON.stringify(_this.voluntario));
            _this.novoVoluntario.username = _this.usuario.username;
            _this.novoVoluntario.nome = _this.voluntario.nome;
            _this.novoVoluntario.email = _this.voluntario.email;
            _this.novoVoluntario.areasInteressadas = _this.voluntario.areasInteressadas;
            _this.novoVoluntario.dataNascimento = _this.voluntario.dataNascimento;
            _this.novoVoluntario.imgPerfil = _this.voluntario.imgPerfil;
        });
    };
    EditarPerfilComponent.prototype.getUsuario = function () {
        var _this = this;
        this.authService.currentUser.subscribe(function (data) {
            _this.usuario = data;
        });
    };
    EditarPerfilComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLoadingState"].LOADING;
        this.authService.currentUser.subscribe(function (data) {
            console.log("USER: " + JSON.stringify(data));
        });
        console.log(this.novoVoluntario);
        this.voluntarioService.updateMyVoluntario(this.novoVoluntario)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            if (data) {
                _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLoadingState"].SUCCESS;
                _this.authService.logout();
                _this.router.navigate(["/login"]);
                _this.toastr.success('Atualizado cadastro de voluntário');
            }
        }, function (error) {
            _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLoadingState"].DEFAULT;
            _this.error = JSON.stringify(error);
            _this.loading = false;
            _this.toastr.error(_this.error);
        });
    };
    EditarPerfilComponent.prototype.imgChangeListener = function (imageInput) {
        var _this = this;
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.novoVoluntario.imgPerfil = event.target.result;
        });
        reader.readAsDataURL(file);
    };
    EditarPerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-perfil',
            template: __webpack_require__(/*! ./editar-perfil.component.html */ "./src/app/editar-perfil/editar-perfil.component.html"),
            styles: [__webpack_require__(/*! ./editar-perfil.component.scss */ "./src/app/editar-perfil/editar-perfil.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["VoluntariosService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__["PerfilComponent"]])
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

module.exports = "<div class=\"modal\">\r\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n        </button>\r\n        <h3 class=\"modal-title\">Filtrar Eventos</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form clrForm>\r\n          <section class=\"form-block\">\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-4>Nome</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome do Evento\" />\r\n            </clr-input-container>\r\n            <clr-input-container class=\"form-group\">\r\n              <label clr-col-12 clr-col-md-4>ONG</label>\r\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome da Ong\" />\r\n            </clr-input-container>\r\n            \r\n            <div class=\"clr-form-control from-group\">\r\n              <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\"><b>Áreas</b></label>\r\n              <div class=\"clr-control-container\" style=\"max-width: 200px; margin-top: 5%\">\r\n                <ng-select [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\" name=\"areas\">\r\n                  <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\r\n                    <input id=\"item-{{index}}\" type=\"checkbox\" name=\"id-{{index}}\" />\r\n                    {{item}}\r\n                  </ng-template>\r\n                </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n          </section>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\r\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Filtrar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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
        this.areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
            'Educação', 'Esportes', 'Idosos', 'Jovens',
            'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
            'Política', 'Refugiados', 'Saúde', 'Outras'];
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

module.exports = "<div class=\"clr-row\">\r\n  <!--<router-outlet></router-outlet>-->\r\n  <div class=\"clr-col-12\">\r\n    <div class=\"clr-row\">\r\n      <div class=\"clr-col\">\r\n        <h3>Eventos</h3>\r\n      </div>\r\n      <div *ngIf=\"auth?.currentUserValue?.tipo == 'ong'\" class=\"clr-col-auto\">\r\n        <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"add\"\r\n          style=\"margin: 1rem 0 0 auto; display: table;\">\r\n          <clr-icon shape=\"plus is-primary\"></clr-icon> Novo Evento\r\n        </button>\r\n      </div>\r\n      <!--<router-outlet></router-outlet>-->\r\n      <!-- <div class=\"clr-col-auto\">\r\n        <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"filtrar\"\r\n          style=\"margin: 1rem 0 0 auto; display: table;\">\r\n          <clr-icon shape=\"search is-primary\"></clr-icon> Filtrar Eventos\r\n        </button>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"clr-row\">\r\n    <div class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\" *ngFor=\"let evento of eventos\">\r\n        <a routerLinkActive=\"active\" routerLink=\"/evento/{{evento.id}}\" class=\"card clickable\">\r\n          <div class=\"card-header clr-row\">\r\n            <div class=\"clr-col\">\r\n              {{evento.nome}}\r\n              <div *ngFor=\"let ong of ongs\">\r\n                  <div *ngIf=\"evento.idOng === ong.id\">\r\n                    <small>{{ ong.nome }}</small>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n          </div>\r\n\r\n          <div class=\"card-img\">\r\n            <img src=\"{{(evento && evento.img) ? evento.img : imgEventoPadrao }}\" alt=\"ong\" style=\"max-height:200px;object-fit: cover;\" />\r\n          </div>\r\n          <div class=\" card-block\">\r\n            <div class=\"card-text\" style=\"height: 100px\">\r\n              <div class=\"clr-row\" style=\"margin-bottom:5px;\">\r\n                <div class=\"clr-col-auto\">\r\n                  <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\r\n                  {{evento.dataRealizacao}}\r\n                </div>\r\n                <div class=\"clr-col-auto\">\r\n                  <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\r\n                  {{evento.local.bairro}}\r\n                </div>\r\n              </div>\r\n              {{evento.descricao}}\r\n            </div>\r\n          </div>\r\n          </a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<router-outlet></router-outlet>"

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
    function EventosComponent(auth, eventService, ongService) {
        this.auth = auth;
        this.eventService = eventService;
        this.ongService = ongService;
        this.imgEventoPadrao = 'assets/images/evento-default.jpg';
        this.eventos = [];
        this.ongs = [];
    }
    EventosComponent.prototype.ngOnInit = function () {
        this.loadEventos();
        this.loadOngs();
    };
    EventosComponent.prototype.loadEventos = function () {
        var _this = this;
        this.eventService.getEvents().subscribe(function (data) {
            _this.eventos = data;
        });
    };
    EventosComponent.prototype.loadOngs = function () {
        var _this = this;
        this.ongService.getOngs().subscribe(function (data) {
            _this.ongs = data;
        });
    };
    EventosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventos',
            template: __webpack_require__(/*! ./eventos.component.html */ "./src/app/eventos/eventos.component.html"),
            styles: [__webpack_require__(/*! ./eventos.component.scss */ "./src/app/eventos/eventos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["EventsService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["OngsService"]])
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

module.exports = "<div class=\"modal static bump-down\">\r\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n        </button>\r\n        <h3 class=\"modal-title\">Excluir evento</h3>\r\n      </div>\r\n      <strong>Você tem certeza que deseja excluir o evento selecionado?</strong>\r\n      <br>\r\n      <clr-icon shape=\"exclamation-circle\" size=\"22\" class=\"is-error\"></clr-icon> Esta ação será permanente.\r\n      <div class=\"modal-footer\">\r\n        <form clrForm #eventForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <button class=\"btn btn-outline-danger\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\r\n          <button type=\"submit\" class=\"btn btn-danger\" [clrLoading]=\"submitBtnState\"\r\n            (click)=\"onSubmit()\">Excluir</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _ver_evento_ver_evento_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ver-evento/ver-evento.component */ "./src/app/ver-evento/ver-evento.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var ExcluirEventoComponent = /** @class */ (function () {
    function ExcluirEventoComponent(authService, router, toastr, eventsService, verEvent) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.eventsService = eventsService;
        this.error = null;
        this.loading = false;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLoadingState"].DEFAULT;
        this.submited = false;
        this.idEvento = verEvent.idEvento;
    }
    ExcluirEventoComponent.prototype.ngOnInit = function () {
    };
    ExcluirEventoComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.submited)
            return;
        //Altera o evento
        this.eventsService.deleteEvent(this.idEvento)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(function (data) {
            if (data) {
                _this.submited = true;
                _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLoadingState"].SUCCESS;
                _this.router.navigate(['/eventos']);
                _this.toastr.success('Excluído cadastro de Evento');
            }
        }, function (error) {
            _this.submited = true;
            _this.error = JSON.stringify(error);
            _this.loading = false;
            _this.toastr.error(_this.error);
            _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLoadingState"].DEFAULT;
        });
    };
    ExcluirEventoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-excluir-evento',
            template: __webpack_require__(/*! ./excluir-evento.component.html */ "./src/app/excluir-evento/excluir-evento.component.html"),
            styles: [__webpack_require__(/*! ./excluir-evento.component.scss */ "./src/app/excluir-evento/excluir-evento.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["EventsService"],
            _ver_evento_ver_evento_component__WEBPACK_IMPORTED_MODULE_6__["VerEventoComponent"]])
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

module.exports = "<!--<router-outlet></router-outlet>-->\r\n<!-- Home do convidado -->\r\n<div *ngIf=\"auth?.currentUserValue == null\">\r\n  <app-convidado></app-convidado>\r\n</div>\r\n<!-- Home do voluntário -->\r\n<div *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\">\r\n  <app-timeline></app-timeline>\r\n</div>\r\n<!-- Home da ONG -->\r\n<div *ngIf=\"auth?.currentUserValue?.tipo == 'ong'\">\r\n  <app-dashboard-ong></app-dashboard-ong>\r\n</div>\r\n<!-- Home do administrador -->\r\n<div *ngIf=\"auth?.currentUserValue?.tipo == 'admin'\">\r\n  <app-dashboard-admin></app-dashboard-admin>\r\n</div>"

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

module.exports = "<div class=\"clr-row clr-justify-content-center\">\r\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Entrar\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"card-text\">\r\n          <form clrForm [formGroup]=\"loginForm\" clrLayout=\"horizontal\">\r\n\r\n              <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\r\n                <div class=\"alert-items\">\r\n                  <div class=\"alert-item static\">\r\n                    <div class=\"alert-icon-wrapper\">\r\n                      <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\r\n                    </div>\r\n                    <span class=\"alert-text\">\r\n                      {{error}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <clr-input-container class=\"form-group\">\r\n                <label>Usuário</label>\r\n                <input formControlName=\"username\" clrInput type=\"text\" size=35 required />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é obrigatório</clr-control-error>\r\n              </clr-input-container>\r\n\r\n              <clr-password-container class=\"form-group\">\r\n                <label>Senha</label>\r\n                <input formControlName=\"password\" clrPassword type=\"password\" size=30 required />\r\n                <clr-control-error *clrIfError=\"'required'\">Este campo é obrigatório</clr-control-error>\r\n              </clr-password-container>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button [disabled]=\"loginForm.invalid\" [clrLoading]=\"submitBtnState\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">\r\n          Entrar\r\n        </button>\r\n        <button class=\"btn btn-sm btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");







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
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLoadingState"].DEFAULT;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLoadingState"].LOADING;
        this.submitted = true;
        this.loading = true;
        this.authenticationService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLoadingState"].SUCCESS;
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLoadingState"].DEFAULT;
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
            _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
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

module.exports = "<div class=\"modal\">\r\n    <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\r\n                    <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\r\n                </button>\r\n                <h3 class=\"modal-title\">Filtrar ONGs</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form clrForm>\r\n                    <section novalidate class=\"form-block\">\r\n                        <clr-input-container class=\"form-group\">\r\n                            <label clr-col-12 clr-col-md-4>Nome</label>\r\n                            <input clr-col-12 clr-col-md-4 [(ngModel)]=\"ong.nome\" clrInput type=\"text\" size=\"35\" required\r\n                                placeholder=\"Nome da ONG\" />\r\n                        </clr-input-container>\r\n                        \r\n                        <div class=\"clr-form-control from-group\">\r\n                            <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\"><b>Áreas</b></label>\r\n                            <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\r\n                            <ng-select [(ngModel)]=\"ong.areas\" [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\" name=\"areas\">\r\n                                <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\r\n                                <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\" name=\"id-{{index}}\" />\r\n                                {{item}}\r\n                                </ng-template>\r\n                            </ng-select>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </section>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\"\r\n                    routerLink=\"..\">Cancelar</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\"\r\n                    routerLink=\"..\">Filtrar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");




var OngFiltroComponent = /** @class */ (function () {
    function OngFiltroComponent(ongService) {
        this.ongService = ongService;
        this.areas = ['Animais', 'Crianças', 'Cultura e arte', 'Direitos humanos',
            'Educação', 'Esportes', 'Idosos', 'Jovens',
            'LGBTQ+', 'Meio ambiente', 'Mulheres', 'Pessoas com deficiência',
            'Política', 'Refugiados', 'Saúde', 'Outras'];
        this.ongFiltro = [];
        this.ong = new _models__WEBPACK_IMPORTED_MODULE_3__["Ong"]();
    }
    OngFiltroComponent.prototype.ngOnInit = function () {
    };
    OngFiltroComponent.prototype.getOngsByNome = function () {
        var _this = this;
        this.ongService.getOngByNome(this.ong.nome).subscribe(function (data) {
            _this.ongFiltro = data;
        });
    };
    OngFiltroComponent.prototype.getOngsByArea = function () {
        var _this = this;
        this.ongService.getOngByAreas(this.ong.areas).subscribe(function (data) {
            _this.ongFiltro = data;
        });
    };
    OngFiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ong-filtro',
            template: __webpack_require__(/*! ./ong-filtro.component.html */ "./src/app/ong-filtro/ong-filtro.component.html"),
            styles: [__webpack_require__(/*! ./ong-filtro.component.scss */ "./src/app/ong-filtro/ong-filtro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["OngsService"]])
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

module.exports = "<div class=\"clr-row\">\r\n  <div class=\"clr-col-auto\">\r\n    <h3>ONGs</h3>\r\n  <!-- </div>\r\n  <div class=\"clr-col-6\">\r\n    <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"filtrar\"\r\n      style=\"margin: 1rem 0 0 auto; display: table;\">\r\n      <clr-icon shape=\"search is-primary\"></clr-icon> Filtrar ONGs\r\n    </button>\r\n  </div> -->\r\n</div>\r\n<div class=\"clr-row\">\r\n  <div class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\" *ngFor=\"let ong of ongs\">\r\n      <a routerLinkActive=\"active\" routerLink=\"/ong/{{ong.id}}\" class=\"card clickable\">\r\n        <div class=\"card-img\">\r\n          <img src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao }}\" alt=\"ong\" />\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"card-title\">\r\n            <b>{{ong.nome}}</b>\r\n          </div>\r\n          <p class=\"card-text short-description\" style=\"height: 120px\">\r\n            {{ong.descricao}}\r\n          </p>\r\n        </div>\r\n        <div class=\"card-footer\" style=\"height: 70px\">\r\n          <div *ngFor=\"let area of ong.areas\">\r\n            <a routerLinkActive=\"active\" routerLink=\".\" class=\"label clickable\">{{area}}</a>\r\n          </div>\r\n        </div>\r\n      </a>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var OngsComponent = /** @class */ (function () {
    function OngsComponent(ongService) {
        this.ongService = ongService;
        this.imgPerfilOngPadrao = 'assets/images/ong-default.png';
        this.ongs = [];
    }
    OngsComponent.prototype.ngOnInit = function () {
        this.loadOngs();
    };
    OngsComponent.prototype.loadOngs = function () {
        var _this = this;
        this.ongService.getOngs().subscribe(function (data) {
            _this.ongs = data;
        });
    };
    OngsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ongs',
            template: __webpack_require__(/*! ./ongs.component.html */ "./src/app/ongs/ongs.component.html"),
            styles: [__webpack_require__(/*! ./ongs.component.scss */ "./src/app/ongs/ongs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["OngsService"]])
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

module.exports = "<div class=\"clr-row\">\r\n  <!-- Coluna da esquerda -->\r\n  <div class=\"clr-col-md-3\">\r\n    <!-- Card com informações da ONG-->\r\n    <div class=\"card\">\r\n      <div class=\"card-img\">\r\n        <img src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao}}\" alt=\"Logo ONG\">\r\n      </div>\r\n      <div class=\"card-header\">\r\n        <h2 style=\"text-align: center; margin: 0;\">{{ong.nome}}</h2>\r\n      </div>\r\n      <!-- Quem Somos -->\r\n      <div class=\"card-block\">\r\n        <div class=\"card-title\">\r\n          Quem somos\r\n        </div>\r\n        <div class=\"card-text\">\r\n          {{ong.descricao}}\r\n        </div>\r\n      </div>\r\n      <!-- Contato -->\r\n      <div class=\"card-block\">\r\n        <div class=\"card-title\">\r\n          Contato\r\n        </div>\r\n        <div class=\"card-text\">\r\n          <clr-icon shape=\"phone-handset\" class=\"is-info\"></clr-icon> <strong> Telefone: </strong>{{ong.telefone}}\r\n          <br>\r\n          <clr-icon shape=\"envelope\" class=\"is-info\"></clr-icon> <strong> E-mail: </strong>{{ong.email}}\r\n          <br>\r\n          <clr-icon shape=\"network-globe\" class=\"is-info\"></clr-icon> <strong> Website: </strong>\r\n          <a>{{ong.urlWebsite}}</a>\r\n          <br>\r\n          <clr-icon shape=\"network-globe\" class=\"is-info\"></clr-icon> <strong> Facebook: </strong>\r\n          <a>{{ong.urlFacebook}}</a>\r\n        </div>\r\n      </div>\r\n      <!-- Categorias -->\r\n      <div class=\"card-block\">\r\n        <div class=\"card-title\">\r\n          Áreas\r\n        </div>\r\n        <div class=\"card-text\" *ngFor=\"let area of ong.areas\">\r\n          <a class=\"label label-purple clickable\" routerLinkActive=\"active\" routerLink=\".\">{{area}}</a>\r\n        </div>\r\n      </div>\r\n      <!-- Categorias -->\r\n      <div *ngIf=\"ong.doacoes\" class=\"card-block\">\r\n        <div class=\"card-title\">\r\n          Doações\r\n        </div>\r\n        <div class=\"card-text\">\r\n          {{ong.doacoes}}\r\n        </div>\r\n      </div>\r\n      <!-- Botoes -->\r\n      <div class=\"card-footer\">\r\n        <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\" (click)=\"follow()\">\r\n          <clr-icon shape=\"bookmark\"></clr-icon> {{ textFollowUnfollow }}\r\n        </button>\r\n        <button class=\"btn btn-sm btn-link\">\r\n          <clr-icon shape=\"share\"></clr-icon> Compartilhar\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"auth?.currentUserValue?.tipo == 'ong' || auth?.currentUserValue?.tipo == 'admin'\" class=\"clr-row\">\r\n      <div class=\"clr-col-lg-1 clr-col-md-1 clr-col-12\">\r\n        <button class=\"btn btn-link\" routerLinkActive=\"active\" routerLink=\"editar\">Editar perfil</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Coluna da direita -->\r\n  <div class=\"clr-col-md-9\">\r\n    <!-- Barra de navegacao-->\r\n    <clr-tabs>\r\n      <!-- Eventos -->\r\n      <clr-tab>\r\n        <button clrTabLink>Eventos</button>\r\n        <ng-template [(clrIfActive)]=\"eventosActive\">\r\n          <clr-tab-content>\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col\">\r\n                <h3>Últimos eventos</h3>\r\n              </div>\r\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.tipo == 'ong' && auth?.currentUserValue?.idOng === ong.id\">\r\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\" routerLinkActive=\"active\"\r\n                  routerLink=\"add-evento\">\r\n                  Novo evento\r\n                </button>\r\n              </div>\r\n              <div class=\"clr-col-12\" *ngFor=\"let evento of eventos\">\r\n                <a routerLinkActive=\"active\" routerLink=\"/evento/{{evento.id}}\" class=\"card clickable\">\r\n                  <div class=\"card-header\">\r\n                    <div class=\"clr-row\">\r\n                      <div class=\"clr-col\">\r\n                        <clr-icon shape=\"calendar\"></clr-icon>\r\n                        {{evento.nome}}\r\n                      </div>\r\n                      <div class=\"clr-col-auto\">\r\n                        <span class=\"p4\">por</span>\r\n                        <span class=\"h2\">\r\n                          {{ong.nome}}\r\n                        </span>\r\n                        <img class=\"clr-col-12 clr-col-md-auto post-author-img\" src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao}}\" alt=\"ONG\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-img\">\r\n                    <img src=\"{{(evento && evento.img) ? evento.img : imgEventoPadrao }}\" alt=\"ong\" style=\"max-height:300px;object-fit: cover;\" />\r\n                  </div>\r\n                  <div class=\" card-block\">\r\n                    <div class=\"card-text\">\r\n                      <div class=\"clr-row\" style=\"margin-bottom:5px;\">\r\n                        <div class=\"clr-col-auto\">\r\n                          <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\r\n                          {{evento.dataRealizacao}}\r\n                        </div>\r\n                        <div class=\"clr-col-auto\">\r\n                          <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\r\n                          {{evento.local.bairro}}\r\n                        </div>\r\n                        <div class=\"clr-col\"></div>\r\n                        <div class=\"clr-col-auto\">\r\n                          <div *ngFor=\"let area of evento.areas\">\r\n                            <span class=\"label\">{{area}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      {{evento.descricao}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-footer clr-row\">\r\n                    <div class=\"clr-col\">\r\n                      <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\">\r\n                        <clr-icon shape=\"heart\"></clr-icon>\r\n                        Favoritar\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"clr-col-auto\">\r\n                      <span class=\"p8\" style=\"margin-top:0.5rem;\">\r\n                        Postado em {{evento.dataCriacao}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </clr-tab-content>\r\n        </ng-template>\r\n      </clr-tab>\r\n\r\n      <!-- Postagens \r\n      <clr-tab>\r\n        <button clrTabLink>Postagens</button>\r\n        <ng-template [(clrIfActive)]=\"postagensActive\">\r\n          <clr-tab-content>\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col\">\r\n                <h3>Últimas postagens</h3>\r\n              </div>\r\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.tipo == 'ong'\">\r\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\" routerLinkActive=\"active\"\r\n                  routerLink=\"add-post\">\r\n                  Nova postagem\r\n                </button>\r\n              </div>\r\n              <div class=\"clr-col-12\">\r\n                <app-timeline-post></app-timeline-post>\r\n                <app-timeline-post></app-timeline-post>\r\n                <app-timeline-post></app-timeline-post>\r\n                <app-timeline-post></app-timeline-post>\r\n              </div>\r\n            </div>\r\n          </clr-tab-content>\r\n        </ng-template>\r\n      </clr-tab>\r\n-->\r\n      <!-- Seguidores -->\r\n      <clr-tab>\r\n        <button clrTabLink>Seguidores</button>\r\n        <ng-template [(clrIfActive)]=\"seguidoresActive\">\r\n          <clr-tab-content>\r\n            <h3> {{ numSeguidores }} Seguidores </h3>\r\n            <div class=\"clr-row\" *ngIf=\"numSeguidores > 0\">\r\n              <div class=\"clr-col-sm-12 clr-col-md-6\" *ngFor=\"let voluntario of voluntarios\">\r\n                <a routerLinkActive=\"active\" routerLink=\"/usuario/{{voluntario.id}}\" class=\"card clickable\">\r\n                  <div class=\"card-header\" style=\"height:auto; overflow:auto;\">\r\n                    <img class=\"seguidor-card\" src=\"{{voluntario.imgPerfil ? voluntario.imgPerfil : imgPerfilVoluntarioPadrao}}\" alt=\"profile-picture\" />\r\n                    <h3> {{ voluntario.nome }}</h3>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </clr-tab-content>\r\n        </ng-template>\r\n      </clr-tab>\r\n\r\n      <!-- Galeria \r\n      <clr-tab>\r\n        <button clrTabLink>Galeria</button>\r\n        <ng-template [(clrIfActive)]=\"galeriaActive\">\r\n          <clr-tab-content>\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col\">\r\n                <h3>Fotos</h3>\r\n              </div>\r\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.tipo == 'ong'\">\r\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\r\n                  Nova foto\r\n                </button>\r\n              </div>\r\n              <div class=\"clr-col-md-12\"></div>\r\n            </div>\r\n            <div class=\"clr-row\">\r\n              <div class=\"clr-col-md-6 clr-col-12\">\r\n                <a class=\"card card-img\">\r\n                  <img src=\"assets/images/galeria.jpg\" />\r\n                </a>\r\n              </div>\r\n              <div class=\"clr-col-md-6 clr-col-12\">\r\n                <a class=\"card card-img\">\r\n                  <img src=\"assets/images/galeria2.jpg\" />\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </clr-tab-content>\r\n        </ng-template>\r\n      </clr-tab>\r\n      -->\r\n    </clr-tabs>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/perfil-ong/perfil-ong.component.scss":
/*!******************************************************!*\
  !*** ./src/app/perfil-ong/perfil-ong.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seguidor-card {\n  max-width: 80px;\n  max-height: 80px;\n  border-radius: 50%;\n  float: right;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: 0;\n  background-color: white;\n  box-shadow: 0 2px 3px #818181; }\n\n.post-author-img {\n  display: inline-block;\n  border-radius: 100%;\n  height: 1.5rem;\n  width: 1.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: -0.5rem -1.75rem -0.5rem 0;\n  box-shadow: 0 2px 3px #818181;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsLW9uZy9DOlxcVXNlcnNcXERlc2Vudm9sdmVkb3JcXFJlcG9zaXRvcmllc1xcVUZHXFxpdm9sdW50ZWVyXFxTaXN0ZW1hXFxpdm9sdW50ZWVyL3NyY1xcYXBwXFxwZXJmaWwtb25nXFxwZXJmaWwtb25nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsNkJBQXdDLEVBQUE7O0FBRzVDO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyw2QkFBd0M7RUFDeEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwtb25nL3BlcmZpbC1vbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VndWlkb3ItY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwcHg7IFxyXG4gICAgbWF4LWhlaWdodDogODBweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2IoMTI5LCAxMjksIDEyOSk7XHJcbn1cclxuXHJcbi5wb3N0LWF1dGhvci1pbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgd2lkdGg6IDEuNXJlbTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogLTAuNXJlbSAtMS43NXJlbSAtMC41cmVtIDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var PerfilOngComponent = /** @class */ (function () {
    function PerfilOngComponent(auth, ongService, eventService, route, voluntarioService, toastr) {
        var _this = this;
        this.auth = auth;
        this.ongService = ongService;
        this.eventService = eventService;
        this.route = route;
        this.voluntarioService = voluntarioService;
        this.toastr = toastr;
        this.imgPerfilVoluntarioPadrao = 'assets/images/user-default.png';
        this.imgPerfilOngPadrao = 'assets/images/ong-default.png';
        this.imgEventoPadrao = 'assets/images/evento-default.jpg';
        this.voluntarios = [];
        this.idSeguidores = [];
        this.idsOngsSeguidas = [];
        this.eventos = [];
        this.eventosActive = true;
        this.publicacoesActive = false;
        this.seguidoresActive = false;
        this.galeriaActive = false;
        // Ação a ser tomada ao se pressionar o botão "Seguir/Deixar de seguir"
        this.statusFollow = null;
        this.usuario = new _models__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
        this.currentVoluntario = new _models__WEBPACK_IMPORTED_MODULE_4__["Voluntario"]();
        this.error = null;
        // Texto que aparece junto ao botão de seguir.
        this.textFollowUnfollow = null;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.id_ong = params['id'];
            }
        });
    }
    PerfilOngComponent.prototype.ngOnInit = function () {
        this.statusFollow = true;
        this.textFollowUnfollow = 'Seguir';
        this.loadOng();
        var id_string = this.id_ong.toString();
        this.loadEventos(id_string);
        this.loadCurrentVoluntario();
    };
    PerfilOngComponent.prototype.loadOng = function () {
        var _this = this;
        this.ongService.getOng(this.id_ong).subscribe(function (data) {
            _this.ong = data;
            _this.numSeguidores = _this.ong.idsSeguidores.length;
            _this.idSeguidores = _this.ong.idsSeguidores;
            _this.voluntarios = [];
            _this.idSeguidores.forEach(function (id) {
                _this.voluntarioService.getVoluntario(id).subscribe(function (data) {
                    _this.voluntarios.push(data);
                });
            });
        });
    };
    PerfilOngComponent.prototype.loadEventos = function (id) {
        var _this = this;
        this.eventService.getEventByOng(id).subscribe(function (data) {
            _this.eventos = data;
        });
    };
    PerfilOngComponent.prototype.loadCurrentVoluntario = function () {
        var _this = this;
        this.auth.currentUser.subscribe(function (data) {
            _this.usuario = data;
        });
        this.voluntarioService.getVoluntario(this.usuario.idVoluntario).subscribe(function (vol) {
            _this.currentVoluntario = vol;
            _this.currentVoluntario.idsOngsSeguidas.forEach(function (id) {
                if (id == _this.id_ong) {
                    _this.statusFollow = false;
                    _this.textFollowUnfollow = 'Deixar de seguir';
                }
            });
        });
    };
    PerfilOngComponent.prototype.follow = function () {
        var _this = this;
        var statusFollowString = String(this.statusFollow);
        this.voluntarioService.followOng(this.id_ong, statusFollowString)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            if (data) {
                if (_this.statusFollow) {
                    _this.toastr.success('Você seguiu esta ONG');
                    _this.statusFollow = false;
                    _this.textFollowUnfollow = 'Deixar de seguir';
                }
                else {
                    _this.toastr.success('Você deixou de seguir esta ONG');
                    _this.statusFollow = true;
                    _this.textFollowUnfollow = 'Seguir';
                }
                _this.loadOng();
            }
            (function (error) {
                _this.error = JSON.stringify(error);
                _this.toastr.error(_this.error);
            });
        });
    };
    PerfilOngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil-ong',
            template: __webpack_require__(/*! ./perfil-ong.component.html */ "./src/app/perfil-ong/perfil-ong.component.html"),
            styles: [__webpack_require__(/*! ./perfil-ong.component.scss */ "./src/app/perfil-ong/perfil-ong.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["OngsService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["VoluntariosService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
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

module.exports = "<clr-tabs>\r\n\r\n  <clr-tab>\r\n    <button clrTabLink>Dados gerais</button>\r\n    <clr-tab-content>\r\n      <div class=\"clr-row\">\r\n        <div class=\"clr-col-lg-3 clr-col-md-3 clr-col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-img\">\r\n              <img src=\"{{imgPerfil}}\" alt=\"avatar\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"clr-col-auto\">\r\n          <table>\r\n            <tbody>\r\n              <tr>\r\n                <td><h5><b>Nome</b></h5></td>\r\n                <td><h5 class=\"margin-data\">{{voluntario.nome}}</h5></td>\r\n              </tr>\r\n              <tr>\r\n                <td><h5><b>E-mail</b></h5></td>\r\n                <td><h5 class=\"margin-data\">{{voluntario.email}}</h5></td>\r\n              </tr>\r\n              <tr>\r\n                <td><h5><b>Data de nascimento</b></h5></td>\r\n                <td><h5 class=\"margin-data\">{{voluntario.dataNascimento}}</h5></td>\r\n              </tr>\r\n              <tr>\r\n                <td><h5><b>Áreas de interesse</b></h5></td>\r\n                <td>\r\n                  <div style=\"margin-top: 5%;\" class=\"margin-data\" *ngFor=\"let area of voluntario.areasInteressadas\">\r\n                    <a class=\"label clickable\" routerLinkActive=\"active\" routerLink=\".\">{{area}}</a>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario' || auth?.currentUserValue?.tipo == 'admin'\"\r\n        class=\"clr-row\">\r\n        <div>\r\n          <button class=\"btn btn-link\" routerLinkActive=\"active\" routerLink=\"editar\">Editar perfil</button>\r\n        </div>\r\n      </div>\r\n    </clr-tab-content>\r\n  </clr-tab>\r\n\r\n  <clr-tab>\r\n    <button clrTabLink>Participação em eventos</button>\r\n    <clr-tab-content>\r\n\r\n      <h3> {{ numEventosConfirmados }} eventos confirmados </h3>\r\n      <div class=\"clr-row\" *ngIf=\"numEventosConfirmados > 0\">\r\n        <div class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\" *ngFor=\"let evento of eventos\">\r\n          <a routerLinkActive=\"active\" routerLink=\"/evento/{{evento.id}}\" class=\"card clickable\">\r\n            <div class=\"card-header clr-row\">\r\n              <div class=\"clr-col\">\r\n                {{evento.nome}}\r\n              </div>\r\n              <br>\r\n            </div>\r\n  \r\n            <div class=\"card-img\">\r\n              <img src=\"assets/images/evento.jpg\" alt=\"ong\" style=\"max-height:200px;object-fit: cover;\" />\r\n            </div>\r\n            <div class=\" card-block\">\r\n              <div class=\"card-text\" style=\"height: 100px\">\r\n                <div class=\"clr-row\" style=\"margin-bottom:5px;\">\r\n                  <div class=\"clr-col-auto\">\r\n                    <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\r\n                    {{evento.dataRealizacao}}\r\n                  </div>\r\n                  <div class=\"clr-col-auto\">\r\n                    <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\r\n                    {{evento.local.bairro}}\r\n                  </div>\r\n                </div>\r\n                {{evento.descricao}}\r\n              </div>\r\n            </div>\r\n          </a>\r\n          </div>\r\n      </div>\r\n\r\n\r\n    </clr-tab-content>\r\n  </clr-tab>\r\n\r\n  <clr-tab>\r\n    <button clrTabLink>ONGs seguidas</button>\r\n    <clr-tab-content>\r\n\r\n      <h3> {{ numOngsSeguidas }} ONGs seguidas </h3>\r\n      <div class=\"clr-row\" *ngIf=\"numOngsSeguidas > 0\">\r\n        <div class=\"clr-col-sm-12 clr-col-md-6\" *ngFor=\"let ong of ongs\">\r\n          <a routerLinkActive=\"active\" routerLink=\"/ong/{{ong.id}}\" class=\"card clickable\">\r\n            <div class=\"card-header\" style=\"height:auto; overflow:auto;\">\r\n              <img class=\"seguidor-card\" src=\"assets/images/ong.png\" alt=\"profile-picture\" />\r\n              <h3> {{ ong.nome }}</h3>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </clr-tab-content>\r\n  </clr-tab>\r\n\r\n</clr-tabs>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/perfil/perfil.component.scss":
/*!**********************************************!*\
  !*** ./src/app/perfil/perfil.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-data {\n  margin-left: 5%; }\n\n.seguidor-card {\n  max-width: 80px;\n  max-height: 80px;\n  border-radius: 50%;\n  float: right;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: 0;\n  background-color: white;\n  box-shadow: 0 2px 3px #818181; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL0M6XFxVc2Vyc1xcRGVzZW52b2x2ZWRvclxcUmVwb3NpdG9yaWVzXFxVRkdcXGl2b2x1bnRlZXJcXFNpc3RlbWFcXGl2b2x1bnRlZXIvc3JjXFxhcHBcXHBlcmZpbFxccGVyZmlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLDZCQUF3QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tZGF0YSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbi5zZWd1aWRvci1jYXJkIHtcclxuICAgIG1heC13aWR0aDogODBweDsgXHJcbiAgICBtYXgtaGVpZ2h0OiA4MHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYigxMjksIDEyOSwgMTI5KTtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(auth, voluntarioService, eventService, ongService, route) {
        var _this = this;
        this.auth = auth;
        this.voluntarioService = voluntarioService;
        this.eventService = eventService;
        this.ongService = ongService;
        this.route = route;
        this.eventos = [];
        this.ongs = [];
        this.idEventosConfirmados = [];
        this.idOngsSeguidas = [];
        this.imgPerfil = 'assets/images/loading.gif';
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.idVoluntario = params['id'];
            }
        });
    }
    PerfilComponent.prototype.ngOnInit = function () {
        this.loadVoluntario(this.idVoluntario);
    };
    PerfilComponent.prototype.loadVoluntario = function (id) {
        var _this = this;
        this.voluntarioService.getVoluntario(id).subscribe(function (data) {
            _this.voluntario = data;
            _this.numOngsSeguidas = _this.voluntario.idsOngsSeguidas.length;
            _this.numEventosConfirmados = _this.voluntario.idsEventosConfirmados.length;
            _this.idEventosConfirmados = _this.voluntario.idsEventosConfirmados;
            _this.idOngsSeguidas = _this.voluntario.idsOngsSeguidas;
            _this.idOngsSeguidas.forEach(function (id) {
                _this.ongService.getOng(id).subscribe(function (data) {
                    _this.ongs.push(data);
                });
            });
            _this.idEventosConfirmados.forEach(function (id) {
                _this.eventService.getEvent(id).subscribe(function (data) {
                    _this.eventos.push(data);
                });
            });
            _this.getImgPerfil();
        });
    };
    PerfilComponent.prototype.getImgPerfil = function () {
        if (this.voluntario.imgPerfil)
            this.imgPerfil = this.voluntario.imgPerfil;
        else
            this.imgPerfil = 'assets/images/user-default.png';
    };
    PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.scss */ "./src/app/perfil/perfil.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["VoluntariosService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["EventsService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["OngsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "<a routerLinkActive=\"active\" routerLink=\"/evento/a12b3c\" class=\"card clickable\">\r\n  <div class=\"card-header clr-row\">\r\n    <div class=\"clr-col\">\r\n      <clr-icon shape=\"calendar\"></clr-icon>\r\n      Nome do Evento\r\n    </div>\r\n    <div class=\"clr-col-auto\">\r\n      <span class=\"p4\">por</span>\r\n      <span class=\"h2\">\r\n        Nome da ONG\r\n      </span>\r\n      <img class=\"clr-col-12 clr-col-md-auto post-author-img\" src=\"assets/images/ong.png\" alt=\"ONG\">\r\n    </div>\r\n  </div>\r\n  <div class=\"card-img\">\r\n    <img src=\"assets/images/evento.jpg\" alt=\"ong\" style=\"max-height:300px;object-fit: cover;\" />\r\n  </div>\r\n  <div class=\" card-block\">\r\n    <div class=\"card-text\">\r\n      <div class=\"clr-row\" style=\"margin-bottom:5px;\">\r\n        <div class=\"clr-col-auto\">\r\n          <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\r\n          24/08/2018\r\n        </div>\r\n        <div class=\"clr-col-auto\">\r\n          <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\r\n          Setor Sudoeste\r\n        </div>\r\n        <div class=\"clr-col\"></div>\r\n        <div class=\"clr-col-auto\">\r\n          <span class=\"label\">Animais</span>\r\n          <span class=\"label\">Meio ambiente</span>\r\n        </div>\r\n      </div>\r\n      He was charismatic, magnetic, electric and everybody knew it.<br>\r\n      When he walked in every woman's head turned, everyone stood up to talk to him.<br>\r\n      He was like this hybrid, this mix of a man who couldn't contain himself.\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer clr-row\">\r\n    <div class=\"clr-col\">\r\n      <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\">\r\n        <clr-icon shape=\"heart\"></clr-icon>\r\n        Favoritar\r\n      </button>\r\n    </div>\r\n    <div class=\"clr-col-auto\">\r\n      <span class=\"p8\" style=\"margin-top:0.5rem;\">\r\n        Postado às 18:35 em 21/08/1998\r\n      </span>\r\n    </div>\r\n  </div>\r\n</a>\r\n<!--<router-outlet></router-outlet>-->"

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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header clr-row\">\r\n    <div class=\"clr-col\">\r\n      <clr-icon shape=\"talk-bubbles\"></clr-icon>\r\n      Nome da Postagem\r\n    </div>\r\n    <div class=\"clr-col-auto\">\r\n      <span class=\"p4\">por</span>\r\n      <strong class=\"h2\">\r\n        Nome da ONG\r\n      </strong>\r\n      <img class=\"clr-col-12 clr-col-md-auto post-author-img\" src=\"assets/images/ong.png\" alt=\"ONG\">\r\n    </div>\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <div class=\"card-text\">\r\n      He was charismatic, magnetic, electric and everybody knew it.<br>\r\n      When he walked in every woman's head turned, everyone stood up to talk to him.<br>\r\n      He was like this hybrid, this mix of a man who couldn't contain himself.\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer clr-row\">\r\n    <div class=\"clr-col\">\r\n      <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\">\r\n        <clr-icon shape=\"heart\"></clr-icon>\r\n        Favoritar\r\n      </button>\r\n    </div>\r\n    <div class=\"clr-col-auto\">\r\n      <span class=\"p8\" style=\"margin-top:0.5rem;\">\r\n        Postado às 18:35 em 21/08/1998\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"clr-row\">\r\n  <router-outlet></router-outlet>\r\n  <div class=\"clr-col-12\">\r\n    <h3>Eventos das ONGs que você seguiu</h3>\r\n  </div>\r\n  <div class=\"clr-col-12\" *ngIf=\"eventos.length !== 0; else elseTimeline\">\r\n    <div *ngFor=\"let evento of eventos\">\r\n      <a routerLinkActive=\"active\" routerLink=\"/evento/{{ evento.id }}\" class=\"card clickable\">\r\n        <div class=\"card-header clr-row\">\r\n          <div class=\"clr-col\">\r\n            <clr-icon shape=\"calendar\"></clr-icon>\r\n            {{ evento.nome }}\r\n          </div>\r\n          <div class=\"clr-col-auto\">\r\n            <span class=\"p4\">por</span>\r\n            <span *ngFor=\"let ong of ongs\">\r\n              <span class=\"h2\" *ngIf=\"evento.idOng === ong.id\">\r\n                {{ ong.nome }}\r\n              </span>\r\n              <img class=\"clr-col-12 clr-col-md-auto post-author-img\"\r\n                src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao }}\" alt=\"ONG\">\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-img\">\r\n          <img src=\"{{(evento && evento.img) ? evento.img : imgEventoPadrao }}\" alt=\"ong\"\r\n            style=\"max-height:300px;object-fit: cover;\" />\r\n        </div>\r\n        <div class=\" card-block\">\r\n          <div class=\"card-text\">\r\n            <div class=\"clr-row\" style=\"margin-bottom:5px;\">\r\n              <div class=\"clr-col-auto\">\r\n                <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\r\n                {{ evento.dataRealizacao }}\r\n              </div>\r\n              <div class=\"clr-col-auto\">\r\n                <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\r\n                {{ evento.local.bairro }}\r\n              </div>\r\n              <div class=\"clr-col\"></div>\r\n              <div class=\"clr-col-auto\" *ngFor=\"let area of evento.areas\">\r\n                <span class=\"label\">{{ area }}</span>\r\n              </div>\r\n            </div>\r\n            {{ evento.descricao }}\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer clr-row\">\r\n          <div class=\"clr-col\">\r\n            <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\">\r\n              <clr-icon shape=\"heart\"></clr-icon>\r\n              Favoritar\r\n            </button>\r\n          </div>\r\n          <div class=\"clr-col-auto\">\r\n            <span class=\"p8\" style=\"margin-top:0.5rem;\">\r\n              Postado em {{ evento.dataCriacao }}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <ng-template #elseTimeline>\r\n    <div class=\"clr-col-12\">\r\n      <h5>Você não segue nenhuma ONG</h5>\r\n    </div>\r\n  </ng-template>\r\n  <!-- <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\r\n    Carregar mais antigos\r\n  </button> -->\r\n\r\n  <div *ngIf=\"auth?.currentUserValue?.tipo == 'ong'\">\r\n    <button class=\"btn btn-primary btn-icon btnLateralSuspenso\" routerLinkActive=\"active\" routerLink=\"addPostagem\"\r\n      title=\"Nova postagem\">\r\n      <clr-icon shape=\"plus\"></clr-icon>\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/timeline/timeline.component.scss":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnLateralSuspenso {\n  margin-right: 12px;\n  border-radius: 50% !important;\n  position: fixed;\n  bottom: 40px;\n  right: 80px;\n  width: 60px;\n  height: 60px;\n  box-shadow: 2px 2px 10px #808080;\n  font-size: 30px; }\n\n.btnLateralSuspenso:hover {\n  box-shadow: 4px 4px 20px #808080;\n  transition: .3s linear all; }\n\n.post-author-img {\n  display: inline-block;\n  border-radius: 100%;\n  height: 1.5rem;\n  width: 1.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: -0.5rem -1.75rem -0.5rem 0;\n  box-shadow: 0 2px 3px #818181;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvQzpcXFVzZXJzXFxEZXNlbnZvbHZlZG9yXFxSZXBvc2l0b3JpZXNcXFVGR1xcaXZvbHVudGVlclxcU2lzdGVtYVxcaXZvbHVudGVlci9zcmNcXGFwcFxcdGltZWxpbmVcXHRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLDZCQUE0QjtFQUM1QixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxlQUNKLEVBQUE7O0FBRUE7RUFDSSxnQ0FBZ0M7RUFDaEMsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyw2QkFBd0M7RUFDeEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5MYXRlcmFsU3VzcGVuc28ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICBib3R0b206IDQwcHg7XHJcbiAgICByaWdodDogODBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICM4MDgwODA7XHJcbiAgICBmb250LXNpemU6IDMwcHhcclxufVxyXG5cclxuLmJ0bkxhdGVyYWxTdXNwZW5zbzpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMjBweCAjODA4MDgwO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGxpbmVhciBhbGw7XHJcbn1cclxuXHJcbi5wb3N0LWF1dGhvci1pbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgd2lkdGg6IDEuNXJlbTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogLTAuNXJlbSAtMS43NXJlbSAtMC41cmVtIDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuICAiXX0= */"

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");




var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(auth, eventService, ongService, voluntarioService) {
        this.auth = auth;
        this.eventService = eventService;
        this.ongService = ongService;
        this.voluntarioService = voluntarioService;
        this.imgPerfilVoluntarioPadrao = 'assets/images/user-default.png';
        this.imgPerfilOngPadrao = 'assets/images/ong-default.png';
        this.imgEventoPadrao = 'assets/images/evento-default.jpg';
        this.usuario = new _models__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.eventos = [];
        this.voluntario = new _models__WEBPACK_IMPORTED_MODULE_3__["Voluntario"]();
        this.ongs = [];
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this.getUsuario();
        this.loadVoluntario();
    };
    TimelineComponent.prototype.getUsuario = function () {
        var _this = this;
        this.auth.currentUser.subscribe(function (data) {
            _this.usuario = data;
        });
    };
    TimelineComponent.prototype.loadVoluntario = function () {
        var _this = this;
        var idString;
        this.voluntarioService.getVoluntario(this.usuario.idVoluntario).subscribe(function (data) {
            data.idsOngsSeguidas.forEach(function (id) {
                _this.ongService.getOng(id).subscribe(function (ong) {
                    _this.ongs.push(ong);
                });
                idString = "" + id;
                idString = String(id);
                _this.eventService.getEventByOng(idString).subscribe(function (evento) {
                    evento.forEach(function (ev) {
                        _this.eventos.push(ev);
                    });
                });
            });
        });
    };
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/timeline/timeline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["EventsService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["OngsService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["VoluntariosService"]])
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

module.exports = "<h2>\r\n  {{ event.nome }}\r\n</h2>\r\n<div class=\"clr-row\">\r\n\r\n  <div class=\"clr-col\">\r\n    <div class=\"card-img\">\r\n      <img src=\"{{(event && event.img) ? event.img : imgEventoPadrao }}\" alt=\"ong\" style=\"max-height:400px;object-fit: cover;\" />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"clr-break-row\"></div>\r\n\r\n  <!-- Coluna da esquerda -->\r\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\r\n    <div class=\"clr-row\">\r\n      <div class=\"clr-col\">\r\n        <!-- Card com informações-->\r\n        <a routerLinkActive=\"active\" routerLink=\"/ong/{{ ong.id }}\" class=\"card clickable\">\r\n          <div class=\"card-header\" style=\"height:auto; overflow:auto;\">\r\n            <span class=\"p4\">Realização</span> {{ ong.nome }} <img class=\"ong-card\" src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao}}\" />\r\n          </div>\r\n        </a>\r\n        <div class=\"card\">\r\n          <div class=\"card-block\">\r\n            <div class=\"card-title\">\r\n              Informações\r\n            </div>\r\n            <div class=\"card-text\">\r\n              <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon> <strong> Local:</strong> {{ event.local.bairro }}\r\n              <br>\r\n              <clr-icon shape=\"calendar\" class=\"is-info\"></clr-icon> <strong> Data:</strong> {{ eventoDataTemp }}\r\n              <br>\r\n              <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon> <strong> Horário:</strong> {{ eventoTimeTemp }}\r\n            </div>\r\n          </div>\r\n          <div class=\"card-block\" *ngIf=\"event?.areas && event.areas.length > 0\">\r\n            <div class=\"card-title\">\r\n              Áreas\r\n            </div>\r\n            <div class=\"card-text\" *ngFor=\"let area of event.areas\">\r\n              <a class=\"label label-purple clickable\" routerLinkActive=\"active\" routerLink=\".\">{{area}}</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\">\r\n              <clr-icon shape=\"heart\"></clr-icon> Favoritar\r\n            </button>\r\n            <button class=\"btn btn-sm btn-link\">\r\n              <clr-icon shape=\"share\"></clr-icon> Compartilhar\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <!-- Confirmar interesse -->\r\n        <div class=\"clr-row\" *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\">\r\n          <div class=\"clr-col\">\r\n            <div class=\"card\">\r\n              <div class=\"card-block\">\r\n                <a class=\"btn btn-primary btn-block\">Confirmar Interesse</a>\r\n                <p *ngIf=\"numInteressados\">{{ numInteressados }} pessoa(s) confirmaram interesse</p>\r\n                <p *ngIf=\"!numInteressados\">Ninguém confirmou interesse</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Editar/Deletar evento-->\r\n        <div *ngIf=\"auth?.currentUserValue?.tipo == 'admin' || (auth?.currentUserValue?.tipo == 'ong' && auth?.currentUserValue?.idOng === ong.id)\" class=\"clr-row\">\r\n          <div class=\"clr-col-auto\">\r\n            <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"editar\"\r\n              style=\"margin: 1rem 0 0 auto;\">\r\n              <clr-icon shape=\"edit is-primary\"></clr-icon> Editar Evento\r\n            </button>\r\n          </div>\r\n          <div class=\"clr-col-auto\">\r\n            <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"excluir\"\r\n              style=\"margin: 1rem 0 0 auto;\">\r\n              <clr-icon shape=\"trash is-primary\"></clr-icon> Excluir Evento\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Coluna da direita -->\r\n  <div class=\"clr-col\">\r\n    <!-- Descrição -->\r\n    <h3><strong>Descrição:</strong></h3>\r\n    <h4> {{ event.descricao}}</h4>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var VerEventoComponent = /** @class */ (function () {
    function VerEventoComponent(eventService, ongService, auth, router, toastr, route) {
        var _this = this;
        this.eventService = eventService;
        this.ongService = ongService;
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.imgPerfilOngPadrao = 'assets/images/ong-default.png';
        this.imgEventoPadrao = 'assets/images/evento-default.jpg';
        this.event = new _models__WEBPACK_IMPORTED_MODULE_4__["Event"]();
        this.ong = new _models__WEBPACK_IMPORTED_MODULE_4__["Ong"]();
        this.route.params.subscribe(function (params) {
            _this.idEvento = params.id;
        });
    }
    VerEventoComponent.prototype.ngOnInit = function () {
        this.patchEvento();
    };
    VerEventoComponent.prototype.patchEvento = function () {
        var _this = this;
        //Pesquisa dados do evento
        this.eventService.getEvent(this.idEvento).subscribe(function (data) {
            _this.event = data;
            //Separa data de horário
            var partes = _this.event.dataRealizacao.split(' ');
            _this.eventoDataTemp = partes[0];
            _this.eventoTimeTemp = partes[1];
            //Pesquisa dados da ong
            _this.ongService.getOng(_this.event.idOng).subscribe(function (dataII) {
                _this.ong = dataII;
            });
        });
    };
    VerEventoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ver-evento',
            template: __webpack_require__(/*! ./ver-evento.component.html */ "./src/app/ver-evento/ver-evento.component.html"),
            styles: [__webpack_require__(/*! ./ver-evento.component.scss */ "./src/app/ver-evento/ver-evento.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["EventsService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["OngsService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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
    apiBaseUrl: "https://ivolunteer-api.herokuapp.com/",
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