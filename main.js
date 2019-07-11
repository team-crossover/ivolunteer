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

module.exports = "<div class=\"modal\">\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <h3 class=\"modal-title\">Novo evento</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form clrForm #eventForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <section novalidate class=\"form-block\">\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Nome</label>\n              <input clr-col-12 clr-col-md-6 clrInput type=\"text\" size=\"35\" [(ngModel)]=\"novoEvento.nome\" name=\"nome\"\n                required placeholder=\"Nome do Evento\" />\n            </clr-input-container>\n            <clr-textarea-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Descrição</label>\n              <textarea clr-col-12 clr-col-md-4 clrTextarea type=\"text\" size=\"35\" required\n                [(ngModel)]=\"novoEvento.descricao\" name=\"descricao\" placeholder=\"Descrição do Evento\"></textarea>\n            </clr-textarea-container>\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Data:</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"date\" [(ngModel)]=\"novoEventoDataTemp\" name=\"dataRealizacao\"\n                size=\"35\" required placeholder=\"Data do evento\" />\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Horário:</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"time\" [(ngModel)]=\"novoEventoTimeTemp\" name=\"horaRealizacao\"\n                size=\"35\" required placeholder=\"Horário do Evento\" />\n            </clr-input-container>\n\n            <h3>Endereço do Evento</h3>\n\n            <clr-input-container class=\"form-group\">\n              <label>UF</label>\n              <input clrInput type=\"text\" size=\"10\" required placeholder=\"Inserir UF\" [(ngModel)]=\"novoEvento.local.uf\"\n                name=\"uf\" minlength=\"2\" maxlength=\"2\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              <clr-control-error *clrIfError=\"'minlength'\">UF deve ter 2 caracteres</clr-control-error>\n              <clr-control-error *clrIfError=\"'maxlength'\">UF deve ter 2 caracteres</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Cidade</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir Cidade\"\n                [(ngModel)]=\"novoEvento.local.cidade\" name=\"cidade\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>CEP</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir CEP\"\n                [(ngModel)]=\"novoEvento.local.cep\" name=\"cep\" minlength=\"8\" maxlength=\"8\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              <clr-control-error *clrIfError=\"'minlength'\">CEP deve ter 8 caracteres</clr-control-error>\n              <clr-control-error *clrIfError=\"'maxlength'\">CEP deve ter 8 caracteres</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Bairro</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir bairro\"\n                [(ngModel)]=\"novoEvento.local.bairro\" name=\"bairro\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Complemento 1</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir complemento\"\n                [(ngModel)]=\"novoEvento.local.complemento1\" name=\"complemento1\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Complemento 2</label>\n              <input clrInput type=\"text\" size=\"30\" placeholder=\"Inserir complemento\"\n                [(ngModel)]=\"novoEvento.local.complemento2\" name=\"complemento2\" />\n            </clr-input-container>\n          </section>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!eventForm.form.valid\" [clrLoading]=\"submitBtnState\"\n          (click)=\"onSubmit()\">Salvar</button>\n        <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../../\">Cancelar</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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

module.exports = "<div class=\"clr-row clr-justify-content-center\">\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Cadastrar ONG\n      </div>\n      <div class=\"card-block\">\n        <div class=\"card-text\">\n          <form clrForm #ongForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n            <section class=\"form-block\">\n              <clr-input-container class=\"form-group\">\n                <label>Usuário</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir usuário\"\n                  [(ngModel)]=\"novaOng.username\" name=\"username\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-password-container class=\"form-group\">\n                <label>Senha</label>\n                <input clrPassword type=\"password\" style=\"width: 195px\" required placeholder=\"Inserir senha\"\n                  [(ngModel)]=\"novaOng.senha\" name=\"senha\" minlength=\"6\"/>\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                <clr-control-error *clrIfError=\"'minlength'\">Senha deve ter 6+ caracteres\n                </clr-control-error>\n              </clr-password-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Nome</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\" [(ngModel)]=\"novaOng.nome\"\n                  name=\"novaOng\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-textarea-container class=\"form-group\">\n                <label>Descrição</label>\n                <textarea clrTextarea size=\"30\" required placeholder=\"Inserir descrição\"\n                  [(ngModel)]=\"novaOng.descricao\" name=\"descricao\"></textarea>  \n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-textarea-container>\n  \n              <clr-textarea-container class=\"form-group\">\n                <label>Doações</label>\n                <textarea clrTextarea size=\"30\" placeholder=\"Inserir informação sobre doações\" [(ngModel)]=\"novaOng.doacoes\"\n                  name=\"doacoes\"></textarea>\n              </clr-textarea-container>\n              \n              <clr-date-container class=\"form-group\">\n                <label>Data de fundação</label>\n                <input type=\"text\" clrDate name=\"fundacao\" style=\"width: 230px\">\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-date-container>\n\n              <div class=\"from-group\">\n                <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\"><b>Áreas</b></label>\n                <div class=\"clr-control-container\" style=\"max-width: 200px\">\n                  <ng-select [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\" [(ngModel)]=\"novaOng.areas\"\n                    name=\"areas\">\n                    <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                      <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\" name=\"id-{{index}}\" />\n                      {{item}}\n                    </ng-template>\n                  </ng-select>\n                </div>\n              </div>\n                \n              <h3>Contato</h3>\n\n              <clr-input-container class=\"form-group\">\n                <label>Telefone</label>\n                <input clrInput type=\"text\" size=\"30\" placeholder=\"(DDD)XXXXX-XXXX\"\n                  [(ngModel)]=\"novaOng.telefone\" name=\"telefone\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Email</label>\n                <input clrInput type=\"text\" size=\"30\" placeholder=\"Inserir email\" [(ngModel)]=\"novaOng.email\"\n                  name=\"email\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Facebook</label>\n                <input clrInput type=\"text\" size=\"30\" placeholder=\"Inserir URL Facebook\"\n                  [(ngModel)]=\"novaOng.urlFacebook\" name=\"urlFacebook\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Website</label>\n                <input clrInput type=\"text\" size=\"30\" placeholder=\"Inserir URL Website\"\n                  [(ngModel)]=\"novaOng.urlWebsite\" name=\"urlWebsite\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <h3>Endereço</h3>\n\n              <clr-input-container class=\"form-group\">\n                <label>UF</label>\n                <input clrInput type=\"text\" size=\"10\" required placeholder=\"Inserir UF\"\n                  [(ngModel)]=\"novaOng.endereco.uf\" name=\"uf\" minlength=\"2\" maxlength=\"2\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                <clr-control-error *clrIfError=\"'minlength'\">UF deve ter 2 caracteres</clr-control-error>\n                <clr-control-error *clrIfError=\"'maxlength'\">UF deve ter 2 caracteres</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Cidade</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir Cidade\"\n                  [(ngModel)]=\"novaOng.endereco.cidade\" name=\"cidade\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>CEP</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir CEP\"\n                  [(ngModel)]=\"novaOng.endereco.cep\" name=\"cep\" minlength=\"8\" maxlength=\"8\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                <clr-control-error *clrIfError=\"'minlength'\">CEP deve ter 8 caracteres</clr-control-error>\n                <clr-control-error *clrIfError=\"'maxlength'\">CEP deve ter 8 caracteres</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Bairro</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir bairro\"\n                  [(ngModel)]=\"novaOng.endereco.bairro\" name=\"bairro\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Complemento 1</label>\n                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir complemento\"\n                  [(ngModel)]=\"novaOng.endereco.complemento1\" name=\"complemento1\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n\n              <clr-input-container class=\"form-group\">\n                <label>Complemento 2</label>\n                <input clrInput type=\"text\" size=\"30\" placeholder=\"Inserir complemento\"\n                  [(ngModel)]=\"novaOng.endereco.complemento2\" name=\"complemento2\" />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              </clr-input-container>\n            </section>\n          </form>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!ongForm.form.valid\" [clrLoading]=\"submitBtnState\" (click)=\"onSubmit()\">Salvar</button>\n        <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"../../\">Cancelar</button>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"clr-row clr-justify-content-center\">\n    <div class=\"clr-col-sm-12 clr-col-md-auto\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Cadastrar voluntário\n            </div>\n            <div class=\"card-block\">\n                <div class=\"card-text\">\n                    <form clrForm #voluntarioForm=\"ngForm\">\n\n                        <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\n                            <div class=\"alert-items\">\n                                <div class=\"alert-item static\">\n                                    <div class=\"alert-icon-wrapper\">\n                                        <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n                                    </div>\n                                    <span class=\"alert-text\">\n                                        {{error}}\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <section class=\"form-block\">\n                            <clr-input-container class=\"form-group\">\n                                <label>Usuário</label>\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir usuário\"\n                                    [(ngModel)]=\"novoVoluntario.username\" name=\"username\" />\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                            </clr-input-container>\n\n                            <clr-password-container class=\"form-group\">\n                                <label>Senha</label>\n                                <input clrPassword type=\"password\" style=\"width: 195px\" required\n                                    placeholder=\"Inserir senha\" [(ngModel)]=\"novoVoluntario.senha\" name=\"senha\" />\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                                <clr-control-error *clrIfError=\"'minlength'\">Senha deve ter 6+ caracteres\n                                </clr-control-error>\n                            </clr-password-container>\n\n                            <clr-input-container class=\"form-group\">\n                                <label>Nome</label>\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\"\n                                    [(ngModel)]=\"novoVoluntario.nome\" name=\"nome\" />\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                                <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres\n                                </clr-control-error>\n                            </clr-input-container>\n\n                            <clr-input-container class=\"form-group\">\n                                <label>Email</label>\n                                <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir e-mail\"\n                                    [(ngModel)]=\"novoVoluntario.email\" name=\"email\" />\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                            </clr-input-container>\n\n                            <clr-date-container class=\"form-group\">\n                                <label>Data de nascimento</label>\n                                <input type=\"date\" clrDate style=\"width: 230px\"\n                                    [(ngModel)]=\"novoVoluntario.dataNascimento\" name=\"dataNascimento\" />\n                                <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                            </clr-date-container>\n\n                            <div class=\"from-group\">\n                                <label style=\"color: #000000; margin-left: -2%; margin-top: 5%; margin-right: 32%\"><b>Áreas de interesse</b></label>\n                                <div class=\"clr-control-container\" style=\"max-width: 200px\">\n                                    <ng-select [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\"\n                                        [(ngModel)]=\"novoVoluntario.areasInteressadas\" name=\"areasInteressadas\">\n                                        <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                            <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\"\n                                                name=\"id-{{index}}\" />\n                                            {{item}}\n                                        </ng-template>\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </section>\n                    </form>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!voluntarioForm.form.valid\" [clrLoading]=\"submitBtnState\" (click)=\"onSubmit()\">Salvar</button>\n                <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\"\n                    routerLink=\"../..\">Cancelar</button>\n            </div>\n        </div>\n    </div>\n</div>"

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

module.exports = "<clr-main-container>\n  <clr-header class=\"header header-6\">\n    <div class=\"branding\">\n      <div class=\"nav-link\">\n        <clr-icon shape=\"users\"></clr-icon>\n        <span class=\"title\">{{title}}</span>\n      </div>\n    </div>\n    <div class=\"header-nav\" [clr-nav-level]=\"1\">\n      <a class=\"nav-link nav-text\" clrVerticalNavLink routerLinkActive=\"active\" routerLink=\"/home\">Início</a>\n      <a class=\"nav-link nav-text\" clrVerticalNavLink routerLinkActive=\"active\" routerLink=\"/eventos\">Eventos</a>\n      <a class=\"nav-link nav-text\" clrVerticalNavLink routerLinkActive=\"active\" routerLink=\"/ongs\">ONGs</a>\n    </div>\n    <div class=\"header-actions\">\n      <!-- Botão de entrar -->\n      <a *ngIf=\"!isAuthenticated\" routerLinkActive=\"active\" routerLink=\"/login\" class=\"nav-link nav-text\">\n        Entrar\n      </a>\n      <!-- Menu de criar conta -->\n      <clr-dropdown *ngIf=\"!isAuthenticated\">\n        <button class=\"nav-text\" clrDropdownTrigger>\n          Cadastrar\n          <clr-icon shape=\"caret down\"></clr-icon>\n        </button>\n        <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n          <a routerLinkActive=\"active\" routerLink=\"/cadastrar/voluntario\" clrDropdownItem>Cadastrar como\n            voluntário</a>\n          <a routerLinkActive=\"active\" routerLink=\"/cadastrar/ong\" clrDropdownItem>Cadastrar como ONG</a>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n      <!-- Menu de usuario logado -->\n      <clr-dropdown *ngIf=\"isAuthenticated\">\n        <button class=\"nav-text\" clrDropdownTrigger>\n          {{userName}}\n          <clr-icon shape=\"caret down\"></clr-icon>\n        </button>\n        <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n          <a *ngIf=\"userTipo == 'voluntario'\" routerLinkActive=\"active\" [routerLink]=\"[urlProfile]\" clrDropdownItem>Ver\n            perfil</a>\n          <a *ngIf=\"userTipo == 'ong'\" routerLinkActive=\"active\" [routerLink]=\"[urlProfile]\" clrDropdownItem>Ver\n            perfil</a>\n          <a (click)=\"logout()\" clrDropdownItem>Sair</a>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n    </div>\n  </clr-header>\n  <div class=\"content-container\">\n    <div class=\"content-area\" id=\"content-area\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</clr-main-container>"

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

module.exports = "<div style=\"text-align: center\">\n  <clr-icon shape=\"users\" size=\"72\" class=\"is-info\"></clr-icon>\n  <h1>Seja bem-vindo(a) ao iVolunteer</h1>\n  <h3>\n    <clr-icon shape=\"user\" size=\"20\" class=\"is-highlight\"></clr-icon>&nbsp;<a routerLinkActive=\"active\"\n      routerLink=\"/cadastrar/voluntario\">Cadastre-se como voluntário</a> para encontrar ONGs e oportunidades de trabalho\n    voluntário perto de você!\n  </h3>\n  <h3>\n    <clr-icon shape=\"world\" size=\"20\" class=\"is-highlight\"></clr-icon>&nbsp;<a routerLinkActive=\"active\"\n      routerLink=\"/cadastrar/ong\">Cadastre-se como ONG</a> para divulgar seu trabalho e encontrar colaboradores.\n  </h3>\n  <h2>Junte-se a nós!</h2>\n</div>\n<hr>\n<h2>Eventos em destaque</h2>\n<div class=\"clr-row\">\n  <div class=\"clr-row\">\n    <div class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\" *ngFor=\"let evento of eventos\">\n        <a routerLinkActive=\"active\" routerLink=\"/evento/{{evento.id}}\" class=\"card clickable\">\n          <div class=\"card-header clr-row\">\n            <div class=\"clr-col\">\n              {{evento.nome}}\n              <div *ngFor=\"let ong of ongs\">\n                  <div *ngIf=\"evento.idOng === ong.id\">\n                    <small>{{ ong.nome }}</small>\n                  </div>\n              </div>\n            </div>\n            <br>\n          </div>\n\n          <div class=\"card-img\">\n            <img src=\"{{(evento && evento.img) ? evento.img : imgEventoPadrao }}\" alt=\"ong\" style=\"max-height:200px;object-fit: cover;\" />\n          </div>\n          <div class=\" card-block\">\n            <div class=\"card-text\" style=\"height: 100px\">\n              <div class=\"clr-row\" style=\"margin-bottom:5px;\">\n                <div class=\"clr-col-auto\">\n                  <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\n                  {{evento.dataRealizacao}}\n                </div>\n                <div class=\"clr-col-auto\">\n                  <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\n                  {{evento.local.bairro}}\n                </div>\n              </div>\n              {{evento.descricao}}\n            </div>\n          </div>\n          </a>\n    </div>\n  </div>\n</div>\n\n<h2>ONGs em destaque</h2>\n<div class=\"clr-row\">\n  <div class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\" *ngFor=\"let ong of ongs\">\n      <a routerLinkActive=\"active\" routerLink=\"/ong/{{ong.id}}\" class=\"card clickable\">\n        <div class=\"card-img\">\n          <img src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao }}\" alt=\"ong\" />\n        </div>\n        <div class=\"card-block\">\n          <div class=\"card-title\">\n            <b>{{ong.nome}}</b>\n          </div>\n          <p class=\"card-text short-description\" style=\"height: 120px\">\n            {{ong.descricao}}\n          </p>\n        </div>\n        <div class=\"card-footer\" style=\"height: 70px\">\n          <div *ngFor=\"let area of ong.areas\">\n            <a routerLinkActive=\"active\" routerLink=\".\" class=\"label clickable\">{{area}}</a>\n          </div>\n        </div>\n      </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/convidado/convidado.component.scss":
/*!****************************************************!*\
  !*** ./src/app/convidado/convidado.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".short-description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  /* number of lines to show */\n  line-height: 1rem;\n  /* fallback */\n  max-height: 4rem;\n  /* fallback */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvY29udmlkYWRvL2NvbnZpZGFkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBRXBCLHFCQUFxQjtFQUFFLDRCQUFBO0VBQ3ZCLGlCQUFpQjtFQUFNLGFBQUE7RUFDdkIsZ0JBQWdCO0VBQU8sYUFBQSxFQUFjIiwiZmlsZSI6InNyYy9hcHAvY29udmlkYWRvL2NvbnZpZGFkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9ydC1kZXNjcmlwdGlvbiB7XG4gICAgLy8gTGltaXRhIGEgYWx0dXJhIG3DoXhpbWEgYSA0IGxpbmhhc1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07ICAgICAvKiBmYWxsYmFjayAqL1xuICAgIG1heC1oZWlnaHQ6IDRyZW07ICAgICAgLyogZmFsbGJhY2sgKi9cbiB9Il19 */"

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

module.exports = "<h3>Bem-vindo(a), Administrador</h3><br>\n\n<clr-tabs>\n  <!-- Visão geral -->\n  <clr-tab>\n    <button clrTabLink>Visão geral</button>\n    <ng-template [(clrIfActive)]=\"overviewActive\">\n      <clr-tab-content>\n        <div class=\"clr-row\">\n          <div class=\"clr-col-4 clr-col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                ONGs cadastradas\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numOngs }}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"clr-col-4 clr-col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Eventos publicados\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numEventos }}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"clr-col-4 clr-col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Postagens publicadas\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numPostagens }}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"clr-col-4 clr-col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Voluntários cadastrados\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numUsuarios }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- ONGs -->\n  <clr-tab>\n    <button clrTabLink>ONGs</button>\n    <ng-template [(clrIfActive)]=\"ongsActive\">\n      <clr-tab-content>\n        <h4> {{ numOngs }} ONGs cadastradas </h4>\n\n        <table class=\"table table-noborder\">\n          <thead>\n            <tr>\n              <th class=\"left\">Nome da ONG</th>\n              <th>Data de fundação</th>\n              <th>Número de eventos</th>\n              <th>Número de postagens</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let ong of ongs\">\n              <td class=\"left\"><a>{{ ong.nome }}</a></td>\n              <td>{{ ong.dataFundacao }}</td>\n              <td>{{ ong.idsEventos.length }}</td>\n              <td>2</td>\n              <td>\n                <div class=\"btn-group btn-link btn-sm\">\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/ong/{{ ong.id }}\">Ver</button>\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/ong/{{ ong.id }}/editar\">Editar</button>\n                  <!-- <button class=\"btn\">Deletar</button> -->\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- Eventos -->\n  <clr-tab>\n    <button clrTabLink>Eventos</button>\n    <ng-template [(clrIfActive)]=\"eventsActive\">\n      <clr-tab-content>\n        <h4> {{ numEventos }} Eventos publicados </h4>\n\n        <table class=\"table table-noborder\">\n          <thead>\n            <tr>\n              <th class=\"left\">Título</th>\n              <th>Cadastro</th>\n              <th>ONG responsável</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let event of eventos\">\n              <td class=\"left\"><a>{{ event.nome }}</a></td>\n              <td>{{ event.dataCriacao }}</td>\n              <td><a *ngFor=\"let on of ongs\">\n                <div *ngIf=\"event.idOng === on.id\">\n                  {{ on.nome }}\n                </div>\n              </a>\n              </td>\n              <td>\n                <div class=\"btn-group btn-link btn-sm\">\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}\">Ver</button>\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}/editar\">Editar</button>\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}/excluir\">Deletar</button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- Postagens -->\n  <clr-tab>\n    <button clrTabLink>Postagens</button>\n    <ng-template [(clrIfActive)]=\"postsActive\">\n      <clr-tab-content>\n        <h4> {{ numPostagens }} Postagens publicadas </h4>\n\n        <table class=\"table table-noborder\">\n          <thead>\n            <tr>\n              <th class=\"left\">Título</th>\n              <th>Data</th>\n              <th>ONG Responsável</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let post of postagens\">\n              <td class=\"left\"><a>{{ post }}</a></td>\n              <td>{{ data }}</td>\n              <td><a>Nome da ONG</a></td>\n              <td>\n                <div class=\"btn-group btn-link btn-sm\">\n                  <button class=\"btn\">Ver</button>\n                  <button class=\"btn\">Editar</button>\n                  <button class=\"btn\">Deletar</button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- Usuários -->\n  <clr-tab>\n    <button clrTabLink>Usuários</button>\n    <ng-template [(clrIfActive)]=\"usersActive\">\n      <clr-tab-content>\n        <h4> {{ numUsuarios }} Usuários cadastrados </h4>\n\n        <table class=\"table table-noborder\">\n          <thead>\n            <tr>\n              <th class=\"left\">Nome Completo</th>\n              <th>Ingresso</th>\n              <th>Quantidade de eventos comparecidos</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let vol of voluntarios\">\n              <td class=\"left\"><a>{{ vol.nome }}</a></td>\n              <td>{{ vol.dataCriacao }}</td>\n              <td>{{ vol.idsEventosConfirmados.length }}</td>\n              <td>\n                <div class=\"btn-group btn-link btn-sm\">\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/usuario/{{ vol.id }}\">Ver</button>\n                  <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/usuario/{{ vol.id }}/editar\">Editar</button>\n                  <!-- <button class=\"btn\">Deletar</button> -->\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n</clr-tabs>\n<!--<router-outlet></router-outlet>-->"

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

module.exports = "<h3>Bem-vindo(a), {{ ong.nome }}</h3><br>\n\n<clr-tabs>\n  <!-- Visão geral -->\n  <clr-tab>\n    <button clrTabLink>Visão geral</button>\n    <ng-template [(clrIfActive)]=\"overviewActive\">\n      <clr-tab-content>\n        <div class=\"clr-row\">\n          <div class=\"clr-col-sm-12 clr-col-md-4\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Eventos publicados\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numEventos }}\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"clr-col-sm-12 clr-col-md-4\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Postagens publicadas\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numPostagens }}\n                </div>\n              </div>\n            </div>\n          </div> -->\n          <div class=\"clr-col-sm-12 clr-col-md-4\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Voluntários confirmados\n              </div>\n              <div class=\"card-block\">\n                <div class=\"card-text\">\n                  {{ numVoluntarios }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h3>\n          Próximos eventos\n        </h3>\n          <div class=\"clr-row\">\n            <div class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\" *ngFor=\"let ev of eventosDash\">\n                <a routerLinkActive=\"active\" routerLink=\"/evento/{{ev.id}}\" class=\"card clickable\">\n                  <div class=\"card-header clr-row\">\n                    <div class=\"clr-col\">\n                      {{ev.nome}}\n                      <small><br>{{ ong.nome }}</small>\n                    </div>\n                    <br>\n                  </div>\n        \n                  <div class=\"card-img\">\n                    <img src=\"{{(ev && ev.img) ? ev.img : imgEventoPadrao }}\" alt=\"ong\" style=\"max-height:200px;object-fit: cover;\" />\n                  </div>\n                  <div class=\" card-block\">\n                    <div class=\"card-text\" style=\"height: 100px\">\n                      <div class=\"clr-row\" style=\"margin-bottom:5px;\">\n                        <div class=\"clr-col-auto\">\n                          <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\n                          {{ev.dataRealizacao}}\n                        </div>\n                        <div class=\"clr-col-auto\">\n                          <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\n                          {{ev.local.bairro}}\n                        </div>\n                      </div>\n                      {{ev.descricao}}\n                    </div>\n                  </div>\n                  </a>\n            </div>\n          </div>\n          \n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- Eventos -->\n  <clr-tab>\n    <button clrTabLink>Eventos</button>\n    <ng-template [(clrIfActive)]=\"eventsActive\">\n      <clr-tab-content>\n        <div class=\"clr-row\">\n          <div class=\"clr-col\">\n            <h4> {{ numEventos }} Eventos publicados </h4>\n          </div>\n          <div class=\"clr-col-auto\">\n            <button class=\"btn btn-sm btn-outline\" style=\"margin-top:1rem;\" routerLinkActive=\"active\"\n              routerLink=\"/ong/{{ ong.id }}/add-evento\">\n              <clr-icon shape=\"plus is-primary\"></clr-icon> Novo evento\n            </button>\n          </div>\n        </div>\n        <div class=\"clr-row\">\n          <div class=\"clr-col-12\">\n            <table class=\"table table-noborder\">\n              <thead>\n                <tr>\n                  <th class=\"left\">Título</th>\n                  <th>Cadastro</th>\n                  <th>ONG responsável</th>\n                  <th>Opções</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let event of eventos\">\n                  <td class=\"left\"><a>{{ event.nome }}</a></td>\n                  <td>{{ event.dataCriacao }}</td>\n                  <td><a>{{ ong.nome }}</a></td>\n                  <td>\n                    <div class=\"btn-group btn-link btn-sm\">\n                      <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}\">Ver</button>\n                      <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}/editar\">Editar</button>\n                      <button class=\"btn\" routerLinkActive=\"active\" routerLink=\"/evento/{{ event.id }}/excluir\">Deletar</button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n\n  <!-- Postagens -->\n  <!-- <clr-tab>\n    <button clrTabLink>Postagens</button>\n    <ng-template [(clrIfActive)]=\"postsActive\">\n      <clr-tab-content>\n        <div class=\"clr-row\">\n          <div class=\"clr-col\">\n            <h4> {{ numPostagens }} Postagens publicadas </h4>\n          </div>\n          <button class=\"clr-col-auto btn btn-sm btn-outline\" style=\"margin-top:1rem;\" routerLinkActive=\"active\"\n            routerLink=\"/ong/1/add-post\">\n            <clr-icon shape=\"plus is-primary\"></clr-icon> Nova postagem\n          </button>\n        </div>\n\n        <table class=\"table table-noborder\">\n          <thead>\n            <tr>\n              <th class=\"left\">Título</th>\n              <th>Data</th>\n              <th>ONG Responsável</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let post of postagens\">\n              <td class=\"left\"><a>{{ post }}</a></td>\n              <td>{{ data }}</td>\n              <td><a>Nome da ONG</a></td>\n              <td>\n                <div class=\"btn-group btn-link btn-sm\">\n                  <button class=\"btn\">Ver</button>\n                  <button class=\"btn\">Editar</button>\n                  <button class=\"btn\">Deletar</button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab> -->\n\n</clr-tabs>\n\n<!--<router-outlet></router-outlet>-->"

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

module.exports = "<div class=\"modal\">\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <h3 class=\"modal-title\">Editar evento</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form clrForm #eventForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <section novalidate class=\"form-block\">\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Nome</label>\n              <input clr-col-12 clr-col-md-6 clrInput type=\"text\" size=\"35\" [(ngModel)]=\"event.nome\" name=\"nome\"\n                required placeholder=\"Nome do Evento\" />\n            </clr-input-container>\n            <clr-textarea-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Descrição</label>\n              <textarea clr-col-12 clr-col-md-4 clrTextarea type=\"text\" size=\"35\" required [(ngModel)]=\"event.descricao\"\n                name=\"descricao\" placeholder=\"Descrição do Evento\"></textarea>\n            </clr-textarea-container>\n\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Data:</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"date\" [(ngModel)]=\"event.dataRealizacao\"\n                name=\"dataRealizacao\" size=\"35\" required placeholder=\"Data do evento\" />\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-2>Horário:</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"time\" [(ngModel)]=\"eventTimeTemp\" name=\"eventTimeTemp\"\n                size=\"35\" required placeholder=\"Horário do Evento\" />\n            </clr-input-container>\n\n            <div class=\"clr-form-control from-group\">\n              <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\">\n                <b>Imagem</b>\n              </label>\n              <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\n                <input #imageInput type=\"file\" accept=\"image/*\" (change)=\"imgChangeListener(imageInput)\">\n              </div>\n            </div>\n\n            <h3>Endereço do Evento</h3>\n\n            <clr-input-container class=\"form-group\">\n              <label>UF</label>\n              <input clrInput type=\"text\" size=\"10\" required placeholder=\"Inserir UF\" [(ngModel)]=\"event.local.uf\"\n                name=\"uf\" minlength=\"2\" maxlength=\"2\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              <clr-control-error *clrIfError=\"'minlength'\">UF deve ter 2 caracteres</clr-control-error>\n              <clr-control-error *clrIfError=\"'maxlength'\">UF deve ter 2 caracteres</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Cidade</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir Cidade\"\n                [(ngModel)]=\"event.local.cidade\" name=\"cidade\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>CEP</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir CEP\" [(ngModel)]=\"event.local.cep\"\n                name=\"cep\"  minlength=\"8\" maxlength=\"8\"/>\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n              <clr-control-error *clrIfError=\"'minlength'\">CEP deve ter 8 caracteres</clr-control-error>\n              <clr-control-error *clrIfError=\"'maxlength'\">CEP deve ter 8 caracteres</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Bairro</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir bairro\"\n                [(ngModel)]=\"event.local.bairro\" name=\"bairro\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Complemento 1</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir complemento\"\n                [(ngModel)]=\"event.local.complemento1\" name=\"complemento1\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Complemento 2</label>\n              <input clrInput type=\"text\" size=\"30\" placeholder=\"Inserir complemento\"\n                [(ngModel)]=\"event.local.complemento2\" name=\"complemento2\" />\n            </clr-input-container>\n          </section>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!eventForm.form.valid\" [clrLoading]=\"submitBtnState\"\n          (click)=\"onSubmit()\">Salvar</button>\n        <button class=\"btn btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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
            if (event.target.result.length > 100000)
                _this.toastr.error("A imagem deve ser menor que 100 Kb");
            else
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

module.exports = "<div class=\"modal\">\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <h3 class=\"modal-title\">Editar dados da ONG</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form clrForm #ongForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <section class=\"form-block\">\n            <clr-input-container class=\"form-group\">\n              <label>Usuário</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir usuário\"\n                [(ngModel)]=\"novaOng.username\" name=\"username\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-password-container class=\"form-group\">\n              <label>Senha</label>\n              <input clrPassword type=\"password\" style=\"width: 195px\" placeholder=\"Inserir nova senha\"\n                [(ngModel)]=\"novaOng.senha\" name=\"senha\" />\n            </clr-password-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Nome</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\" [(ngModel)]=\"novaOng.nome\"\n                name=\"ong\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-textarea-container class=\"form-group\">\n              <label>Descrição</label>\n              <textarea clrTextarea size=\"30\" required placeholder=\"Inserir descrição\"\n                [(ngModel)]=\"novaOng.descricao\" name=\"descricao\"></textarea>  \n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-textarea-container>\n\n            <clr-textarea-container class=\"form-group\">\n              <label>Doações</label>\n              <textarea clrTextarea size=\"30\" placeholder=\"Inserir informação sobre doações\" [(ngModel)]=\"novaOng.doacoes\"\n                name=\"doacoes\"></textarea>\n            </clr-textarea-container>\n\n            <clr-date-container class=\"form-group\">\n              <label>Data de fundação</label>\n              <input type=\"text\" clrDate [(ngModel)]=\"novaOng.dataFundacao\" name=\"fundacao\" style=\"width: 230px\">\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-date-container>\n\n            <div class=\"clr-form-control from-group\">\n              <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\"><b>Áreas</b></label>\n              <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\n                <ng-select [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\" [(ngModel)]=\"novaOng.areas\"\n                  name=\"areas\">\n                  <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                    <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\" name=\"id-{{index}}\" />\n                    {{item}}\n                  </ng-template>\n                </ng-select>\n              </div>\n            </div>\n\n            <div class=\"clr-form-control from-group\">\n              <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\">\n                <b>Imagem</b>\n              </label>\n              <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\n                <input #imageInput type=\"file\" accept=\"image/*\" (change)=\"imgChangeListener(imageInput)\">\n              </div>\n            </div>\n\n            <h3>Contato</h3>\n\n            <clr-input-container class=\"form-group\">\n              <label>Telefone</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"(DDD)XXXXX-XXXX\"\n                [(ngModel)]=\"novaOng.telefone\" name=\"telefone\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Email</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir email\" [(ngModel)]=\"novaOng.email\"\n                name=\"email\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Facebook</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir URL Facebook\"\n                [(ngModel)]=\"novaOng.urlFacebook\" name=\"urlFacebook\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Website</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir URL Website\"\n                [(ngModel)]=\"novaOng.urlWebsite\" name=\"urlWebsite\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <h3>Endereço</h3>\n\n            <clr-input-container class=\"form-group\">\n              <label>UF</label>\n              <input clrInput type=\"text\" size=\"10\" required placeholder=\"Inserir UF\" [(ngModel)]=\"novaOng.endereco.uf\"\n                name=\"uf\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Cidade</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir Cidade\"\n                [(ngModel)]=\"novaOng.endereco.cidade\" name=\"cidade\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>CEP</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir CEP\"\n                [(ngModel)]=\"novaOng.endereco.cep\" name=\"cep\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Bairro</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir bairro\"\n                [(ngModel)]=\"novaOng.endereco.bairro\" name=\"bairro\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Complemento 1</label>\n              <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir complemento\"\n                [(ngModel)]=\"novaOng.endereco.complemento1\" name=\"complemento1\" />\n              <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n            </clr-input-container>\n\n            <clr-input-container class=\"form-group\">\n              <label>Complemento 2</label>\n              <input clrInput type=\"text\" size=\"30\" placeholder=\"Inserir complemento\"\n                [(ngModel)]=\"novaOng.endereco.complemento2\" name=\"complemento2\" />\n            </clr-input-container>\n          </section>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"onSubmit()\" [clrLoading]=\"submitBtnState\">Salvar</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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
            _this.submitBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLoadingState"].DEFAULT;
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
            if (event.target.result.length > 100000)
                _this.toastr.error("A imagem deve ser menor que 100 Kb");
            else
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

module.exports = "<div class=\"modal\">\n    <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n                    <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n                </button>\n                <h3 class=\"modal-title\">Editar perfil</h3>\n            </div>\n            <div class=\"modal-body\">\n                <form clrForm>\n                    <section class=\"form-block\">\n                        <clr-input-container class=\"form-group\">\n                            <label>Usuário</label>\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir usuário\"\n                                [(ngModel)]=\"novoVoluntario.username\" name=\"username\" />\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                        </clr-input-container>\n\n                        <clr-password-container class=\"form-group\">\n                            <label>Senha</label>\n                            <input clrPassword type=\"password\" style=\"width: 195px\" placeholder=\"Inserir nova senha\"\n                                [(ngModel)]=\"novoVoluntario.senha\" name=\"senha\" />\n                        </clr-password-container>\n\n                        <clr-input-container class=\"form-group\">\n                            <label>Nome</label>\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir nome\"\n                                [(ngModel)]=\"novoVoluntario.nome\" name=\"nome\" />\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                            <clr-control-error *clrIfError=\"'minlength'\">Nome deve ter 6+ caracteres\n                            </clr-control-error>\n                        </clr-input-container>\n\n                        <clr-input-container class=\"form-group\">\n                            <label>Email</label>\n                            <input clrInput type=\"text\" size=\"30\" required placeholder=\"Inserir e-mail\"\n                                [(ngModel)]=\"novoVoluntario.email\" name=\"email\" />\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                        </clr-input-container>\n\n                        <clr-date-container class=\"form-group\">\n                            <label>Data de nascimento</label>\n                            <input type=\"date\" clrDate style=\"width: 230px\" [(ngModel)]=\"novoVoluntario.dataNascimento\"\n                                name=\"dataNascimento\" />\n                            <clr-control-error *clrIfError=\"'required'\">Este campo é requerido</clr-control-error>\n                        </clr-date-container>\n\n                        <div class=\"clr-form-control from-group\">\n                            <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\"><b>Áreas\n                                    de interesse</b></label>\n                            <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\n                                <ng-select [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\"\n                                    [(ngModel)]=\"novoVoluntario.areasInteressadas\" name=\"areasInteressadas\">\n                                    <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                        <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\"\n                                            name=\"id-{{index}}\" />\n                                        {{item}}\n                                    </ng-template>\n                                </ng-select>\n                            </div>\n                        </div>\n\n                        <div class=\"clr-form-control from-group\">\n                            <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\">\n                                <b>Imagem</b>\n                            </label>\n                            <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\n                                <input #imageInput type=\"file\" accept=\"image/*\"\n                                    (change)=\"imgChangeListener(imageInput)\">\n                            </div>\n                        </div>\n                    </section>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\"\n                    routerLink=\"..\">Cancelar</button>\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"onSubmit()\" [clrLoading]=\"submitBtnState\">Salvar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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
            if (event.target.result.length > 100000)
                _this.toastr.error("A imagem deve ser menor que 100 Kb");
            else
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

module.exports = "<div class=\"modal\">\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <h3 class=\"modal-title\">Filtrar Eventos</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form clrForm>\n          <section class=\"form-block\">\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-4>Nome</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome do Evento\" />\n            </clr-input-container>\n            <clr-input-container class=\"form-group\">\n              <label clr-col-12 clr-col-md-4>ONG</label>\n              <input clr-col-12 clr-col-md-4 clrInput type=\"text\" size=\"35\" required placeholder=\"Nome da Ong\" />\n            </clr-input-container>\n            \n            <div class=\"clr-form-control from-group\">\n              <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\"><b>Áreas</b></label>\n              <div class=\"clr-control-container\" style=\"max-width: 200px; margin-top: 5%\">\n                <ng-select [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\" name=\"areas\">\n                  <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                    <input id=\"item-{{index}}\" type=\"checkbox\" name=\"id-{{index}}\" />\n                    {{item}}\n                  </ng-template>\n                </ng-select>\n              </div>\n            </div>\n\n          </section>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\n        <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Filtrar</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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

module.exports = "<div class=\"clr-row\">\n  <!--<router-outlet></router-outlet>-->\n  <div class=\"clr-col-12\">\n    <div class=\"clr-row\">\n      <div class=\"clr-col\">\n        <h3>Eventos</h3>\n      </div>\n      <div *ngIf=\"auth?.currentUserValue?.tipo == 'ong'\" class=\"clr-col-auto\">\n        <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"add\"\n          style=\"margin: 1rem 0 0 auto; display: table;\">\n          <clr-icon shape=\"plus is-primary\"></clr-icon> Novo Evento\n        </button>\n      </div>\n      <!--<router-outlet></router-outlet>-->\n      <!-- <div class=\"clr-col-auto\">\n        <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"filtrar\"\n          style=\"margin: 1rem 0 0 auto; display: table;\">\n          <clr-icon shape=\"search is-primary\"></clr-icon> Filtrar Eventos\n        </button>\n      </div> -->\n    </div>\n  </div>\n\n  <div class=\"clr-row\">\n    <div class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\" *ngFor=\"let evento of eventos\">\n        <a routerLinkActive=\"active\" routerLink=\"/evento/{{evento.id}}\" class=\"card clickable\">\n          <div class=\"card-header clr-row\">\n            <div class=\"clr-col\">\n              {{evento.nome}}\n              <div *ngFor=\"let ong of ongs\">\n                  <div *ngIf=\"evento.idOng === ong.id\">\n                    <small>{{ ong.nome }}</small>\n                  </div>\n              </div>\n            </div>\n            <br>\n          </div>\n\n          <div class=\"card-img\" style=\"height: 200px\">\n            <img src=\"{{(evento && evento.img) ? evento.img : imgEventoPadrao }}\" alt=\"ong\" style=\"max-height:200px;object-fit: cover;\" />\n          </div>\n          <div class=\" card-block\">\n            <div class=\"card-text\" style=\"height: 100px\">\n              <div class=\"clr-row\" style=\"margin-bottom:5px;\">\n                <div class=\"clr-col-auto\">\n                  <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\n                  {{evento.dataRealizacao}}\n                </div>\n                <div class=\"clr-col-auto\">\n                  <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\n                  {{evento.local.bairro}}\n                </div>\n              </div>\n              {{evento.descricao}}\n            </div>\n          </div>\n          </a>\n    </div>\n  </div>\n\n</div>\n<router-outlet></router-outlet>"

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

module.exports = "<div class=\"modal static bump-down\">\n  <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n          <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <h3 class=\"modal-title\">Excluir evento</h3>\n      </div>\n      <strong>Você tem certeza que deseja excluir o evento selecionado?</strong>\n      <br>\n      <clr-icon shape=\"exclamation-circle\" size=\"22\" class=\"is-error\"></clr-icon> Esta ação será permanente.\n      <div class=\"modal-footer\">\n        <form clrForm #eventForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <button class=\"btn btn-outline-danger\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\n          <button type=\"submit\" class=\"btn btn-danger\" [clrLoading]=\"submitBtnState\"\n            (click)=\"onSubmit()\">Excluir</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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

module.exports = "<!--<router-outlet></router-outlet>-->\n<!-- Home do convidado -->\n<div *ngIf=\"auth?.currentUserValue == null\">\n  <app-convidado></app-convidado>\n</div>\n<!-- Home do voluntário -->\n<div *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\">\n  <app-timeline></app-timeline>\n</div>\n<!-- Home da ONG -->\n<div *ngIf=\"auth?.currentUserValue?.tipo == 'ong'\">\n  <app-dashboard-ong></app-dashboard-ong>\n</div>\n<!-- Home do administrador -->\n<div *ngIf=\"auth?.currentUserValue?.tipo == 'admin'\">\n  <app-dashboard-admin></app-dashboard-admin>\n</div>"

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

module.exports = "<div class=\"clr-row clr-justify-content-center\">\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Entrar\n      </div>\n      <div class=\"card-block\">\n        <div class=\"card-text\">\n          <form clrForm [formGroup]=\"loginForm\" clrLayout=\"horizontal\">\n\n              <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\n                <div class=\"alert-items\">\n                  <div class=\"alert-item static\">\n                    <div class=\"alert-icon-wrapper\">\n                      <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n                    </div>\n                    <span class=\"alert-text\">\n                      {{error}}\n                    </span>\n                  </div>\n                </div>\n              </div>\n\n              <clr-input-container class=\"form-group\">\n                <label>Usuário</label>\n                <input formControlName=\"username\" clrInput type=\"text\" size=35 required />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é obrigatório</clr-control-error>\n              </clr-input-container>\n\n              <clr-password-container class=\"form-group\">\n                <label>Senha</label>\n                <input formControlName=\"password\" clrPassword type=\"password\" size=30 required />\n                <clr-control-error *clrIfError=\"'required'\">Este campo é obrigatório</clr-control-error>\n              </clr-password-container>\n          </form>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button [disabled]=\"loginForm.invalid\" [clrLoading]=\"submitBtnState\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">\n          Entrar\n        </button>\n        <button class=\"btn btn-sm btn-link\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">Cancelar</button>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"modal\">\n    <div class=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button aria-label=\"Close\" class=\"close\" type=\"button\" routerLinkActive=\"active\" routerLink=\"..\">\n                    <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n                </button>\n                <h3 class=\"modal-title\">Filtrar ONGs</h3>\n            </div>\n            <div class=\"modal-body\">\n                <form clrForm>\n                    <section novalidate class=\"form-block\">\n                        <clr-input-container class=\"form-group\">\n                            <label clr-col-12 clr-col-md-4>Nome</label>\n                            <input clr-col-12 clr-col-md-4 [(ngModel)]=\"ong.nome\" clrInput type=\"text\" size=\"35\" required\n                                placeholder=\"Nome da ONG\" />\n                        </clr-input-container>\n                        \n                        <div class=\"clr-form-control from-group\">\n                            <label style=\"color: #000000; margin-left: -1.5%; margin-top: 5%; margin-right: 30%\"><b>Áreas</b></label>\n                            <div class=\"clr-control-container\" style=\"max-width: 250px; margin-top: 5%\">\n                            <ng-select [(ngModel)]=\"ong.areas\" [items]=\"areas\" [multiple]=\"true\" [closeOnSelect]=\"false\" name=\"areas\">\n                                <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\" name=\"id-{{index}}\" />\n                                {{item}}\n                                </ng-template>\n                            </ng-select>\n                            </div>\n                        </div>\n\n                    </section>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-outline\" type=\"button\" routerLinkActive=\"active\"\n                    routerLink=\"..\">Cancelar</button>\n                <button class=\"btn btn-primary\" type=\"button\" routerLinkActive=\"active\"\n                    routerLink=\"..\">Filtrar</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-backdrop\" aria-hidden=\"true\"></div>"

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

module.exports = "<div class=\"clr-row\">\n  <div class=\"clr-col-auto\">\n    <h3>ONGs</h3>\n  <!-- </div>\n  <div class=\"clr-col-6\">\n    <button class=\"btn btn-sm\" routerLinkActive=\"active\" routerLink=\"filtrar\"\n      style=\"margin: 1rem 0 0 auto; display: table;\">\n      <clr-icon shape=\"search is-primary\"></clr-icon> Filtrar ONGs\n    </button>\n  </div> -->\n</div>\n<div class=\"clr-row\">\n  <div class=\"clr-col-xl-3 clr-col-lg-4 clr-col-md-6 clr-col-12\" *ngFor=\"let ong of ongs\">\n      <a routerLinkActive=\"active\" routerLink=\"/ong/{{ong.id}}\" class=\"card clickable\">\n        <div class=\"card-img\" style=\"height: 220px\">\n          <img src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao }}\" alt=\"ong\" />\n        </div>\n        <div class=\"card-block\">\n          <div class=\"card-title\">\n            <b>{{ong.nome}}</b>\n          </div>\n          <p class=\"card-text short-description\" style=\"height: 120px\">\n            {{ong.descricao}}\n          </p>\n        </div>\n        <div class=\"card-footer\" style=\"height: 70px\">\n          <div *ngFor=\"let area of ong.areas\">\n            <a routerLinkActive=\"active\" routerLink=\".\" class=\"label clickable\">{{area}}</a>\n          </div>\n        </div>\n      </a>\n  </div>\n</div>\n<router-outlet></router-outlet>"

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

module.exports = "<div class=\"clr-row\">\n  <!-- Coluna da esquerda -->\n  <div class=\"clr-col-md-3\">\n    <!-- Card com informações da ONG-->\n    <div class=\"card\">\n      <div class=\"card-img\">\n        <img src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao}}\" alt=\"Logo ONG\">\n      </div>\n      <div class=\"card-header\">\n        <h2 style=\"text-align: center; margin: 0;\">{{ong.nome}}</h2>\n      </div>\n      <!-- Quem Somos -->\n      <div class=\"card-block\">\n        <div class=\"card-title\">\n          Quem somos\n        </div>\n        <div class=\"card-text\">\n          {{ong.descricao}}\n        </div>\n      </div>\n      <!-- Contato -->\n      <div class=\"card-block\">\n        <div class=\"card-title\">\n          Contato\n        </div>\n        <div class=\"card-text\">\n          <clr-icon shape=\"phone-handset\" class=\"is-info\"></clr-icon> <strong> Telefone: </strong>{{ong.telefone}}\n          <br>\n          <clr-icon shape=\"envelope\" class=\"is-info\"></clr-icon> <strong> E-mail: </strong>{{ong.email}}\n          <br>\n          <clr-icon shape=\"network-globe\" class=\"is-info\"></clr-icon> <strong> Website: </strong>\n          <a>{{ong.urlWebsite}}</a>\n          <br>\n          <clr-icon shape=\"network-globe\" class=\"is-info\"></clr-icon> <strong> Facebook: </strong>\n          <a>{{ong.urlFacebook}}</a>\n        </div>\n      </div>\n      <!-- Categorias -->\n      <div class=\"card-block\">\n        <div class=\"card-title\">\n          Áreas\n        </div>\n        <div class=\"card-text\" *ngFor=\"let area of ong.areas\">\n          <a class=\"label label-purple clickable\" routerLinkActive=\"active\" routerLink=\".\">{{area}}</a>\n        </div>\n      </div>\n      <!-- Categorias -->\n      <div *ngIf=\"ong.doacoes\" class=\"card-block\">\n        <div class=\"card-title\">\n          Doações\n        </div>\n        <div class=\"card-text\">\n          {{ong.doacoes}}\n        </div>\n      </div>\n      <!-- Botoes -->\n      <div class=\"card-footer\">\n        <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\" (click)=\"follow()\">\n          <clr-icon shape=\"bookmark\"></clr-icon> {{ textFollowUnfollow }}\n        </button>\n        <button class=\"btn btn-sm btn-link\">\n          <clr-icon shape=\"share\"></clr-icon> Compartilhar\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"auth?.currentUserValue?.tipo == 'ong' || auth?.currentUserValue?.tipo == 'admin'\" class=\"clr-row\">\n      <div class=\"clr-col-lg-1 clr-col-md-1 clr-col-12\">\n        <button class=\"btn btn-link\" routerLinkActive=\"active\" routerLink=\"editar\">Editar perfil</button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Coluna da direita -->\n  <div class=\"clr-col-md-9\">\n    <!-- Barra de navegacao-->\n    <clr-tabs>\n      <!-- Eventos -->\n      <clr-tab>\n        <button clrTabLink>Eventos</button>\n        <ng-template [(clrIfActive)]=\"eventosActive\">\n          <clr-tab-content>\n            <div class=\"clr-row\">\n              <div class=\"clr-col\">\n                <h3>Últimos eventos</h3>\n              </div>\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.tipo == 'ong' && auth?.currentUserValue?.idOng === ong.id\">\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\" routerLinkActive=\"active\"\n                  routerLink=\"add-evento\">\n                  Novo evento\n                </button>\n              </div>\n              <div class=\"clr-col-12\" *ngFor=\"let evento of eventos\">\n                <a routerLinkActive=\"active\" routerLink=\"/evento/{{evento.id}}\" class=\"card clickable\">\n                  <div class=\"card-header\">\n                    <div class=\"clr-row\">\n                      <div class=\"clr-col\">\n                        <clr-icon shape=\"calendar\"></clr-icon>\n                        {{evento.nome}}\n                      </div>\n                      <div class=\"clr-col-auto\">\n                        <span class=\"p4\">por</span>\n                        <span class=\"h2\">\n                          {{ong.nome}}\n                        </span>\n                        <img class=\"clr-col-12 clr-col-md-auto post-author-img\" src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao}}\" alt=\"ONG\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card-img\">\n                    <img src=\"{{(evento && evento.img) ? evento.img : imgEventoPadrao }}\" alt=\"ong\" style=\"max-height:300px;object-fit: cover;\" />\n                  </div>\n                  <div class=\" card-block\">\n                    <div class=\"card-text\">\n                      <div class=\"clr-row\" style=\"margin-bottom:5px;\">\n                        <div class=\"clr-col-auto\">\n                          <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\n                          {{evento.dataRealizacao}}\n                        </div>\n                        <div class=\"clr-col-auto\">\n                          <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\n                          {{evento.local.bairro}}\n                        </div>\n                        <div class=\"clr-col\"></div>\n                        <div class=\"clr-col-auto\">\n                          <div *ngFor=\"let area of evento.areas\">\n                            <span class=\"label\">{{area}}</span>\n                          </div>\n                        </div>\n                      </div>\n                      {{evento.descricao}}\n                    </div>\n                  </div>\n                  <div class=\"card-footer clr-row\">\n                    <div class=\"clr-col\">\n                      <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\">\n                        <clr-icon shape=\"heart\"></clr-icon>\n                        Favoritar\n                      </button>\n                    </div>\n                    <div class=\"clr-col-auto\">\n                      <span class=\"p8\" style=\"margin-top:0.5rem;\">\n                        Postado em {{evento.dataCriacao}}\n                      </span>\n                    </div>\n                  </div>\n                </a>\n              </div>\n            </div>\n          </clr-tab-content>\n        </ng-template>\n      </clr-tab>\n\n      <!-- Postagens \n      <clr-tab>\n        <button clrTabLink>Postagens</button>\n        <ng-template [(clrIfActive)]=\"postagensActive\">\n          <clr-tab-content>\n            <div class=\"clr-row\">\n              <div class=\"clr-col\">\n                <h3>Últimas postagens</h3>\n              </div>\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.tipo == 'ong'\">\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\" routerLinkActive=\"active\"\n                  routerLink=\"add-post\">\n                  Nova postagem\n                </button>\n              </div>\n              <div class=\"clr-col-12\">\n                <app-timeline-post></app-timeline-post>\n                <app-timeline-post></app-timeline-post>\n                <app-timeline-post></app-timeline-post>\n                <app-timeline-post></app-timeline-post>\n              </div>\n            </div>\n          </clr-tab-content>\n        </ng-template>\n      </clr-tab>\n-->\n      <!-- Seguidores -->\n      <clr-tab>\n        <button clrTabLink>Seguidores</button>\n        <ng-template [(clrIfActive)]=\"seguidoresActive\">\n          <clr-tab-content>\n            <h3> {{ numSeguidores }} Seguidores </h3>\n            <div class=\"clr-row\" *ngIf=\"numSeguidores > 0\">\n              <div class=\"clr-col-sm-12 clr-col-md-6\" *ngFor=\"let voluntario of voluntarios\">\n                <a routerLinkActive=\"active\" routerLink=\"/usuario/{{voluntario.id}}\" class=\"card clickable\">\n                  <div class=\"card-header\" style=\"height:auto; overflow:auto;\">\n                    <img class=\"seguidor-card\" src=\"{{voluntario.imgPerfil ? voluntario.imgPerfil : imgPerfilVoluntarioPadrao}}\" alt=\"profile-picture\" />\n                    <h3> {{ voluntario.nome }}</h3>\n                  </div>\n                </a>\n              </div>\n            </div>\n          </clr-tab-content>\n        </ng-template>\n      </clr-tab>\n\n      <!-- Galeria \n      <clr-tab>\n        <button clrTabLink>Galeria</button>\n        <ng-template [(clrIfActive)]=\"galeriaActive\">\n          <clr-tab-content>\n            <div class=\"clr-row\">\n              <div class=\"clr-col\">\n                <h3>Fotos</h3>\n              </div>\n              <div class=\"clr-col-auto\" *ngIf=\"auth?.currentUserValue?.tipo == 'ong'\">\n                <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\n                  Nova foto\n                </button>\n              </div>\n              <div class=\"clr-col-md-12\"></div>\n            </div>\n            <div class=\"clr-row\">\n              <div class=\"clr-col-md-6 clr-col-12\">\n                <a class=\"card card-img\">\n                  <img src=\"assets/images/galeria.jpg\" />\n                </a>\n              </div>\n              <div class=\"clr-col-md-6 clr-col-12\">\n                <a class=\"card card-img\">\n                  <img src=\"assets/images/galeria2.jpg\" />\n                </a>\n              </div>\n            </div>\n          </clr-tab-content>\n        </ng-template>\n      </clr-tab>\n      -->\n    </clr-tabs>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/perfil-ong/perfil-ong.component.scss":
/*!******************************************************!*\
  !*** ./src/app/perfil-ong/perfil-ong.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seguidor-card {\n  max-width: 80px;\n  max-height: 80px;\n  border-radius: 50%;\n  float: right;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: 0;\n  background-color: white;\n  box-shadow: 0 2px 3px #818181; }\n\n.post-author-img {\n  display: inline-block;\n  border-radius: 100%;\n  height: 1.5rem;\n  width: 1.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: -0.5rem -1.75rem -0.5rem 0;\n  box-shadow: 0 2px 3px #818181;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvcGVyZmlsLW9uZy9wZXJmaWwtb25nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsNkJBQXdDLEVBQUE7O0FBRzVDO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyw2QkFBd0M7RUFDeEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwtb25nL3BlcmZpbC1vbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VndWlkb3ItY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA4MHB4OyBcbiAgICBtYXgtaGVpZ2h0OiA4MHB4OyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2IoMTI5LCAxMjksIDEyOSk7XG59XG5cbi5wb3N0LWF1dGhvci1pbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IC0wLjVyZW0gLTEuNzVyZW0gLTAuNXJlbSAwO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2IoMTI5LCAxMjksIDEyOSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgIl19 */"

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
        if (this.usuario !== null) {
            this.voluntarioService.getVoluntario(this.usuario.idVoluntario).subscribe(function (vol) {
                _this.currentVoluntario = vol;
                _this.currentVoluntario.idsOngsSeguidas.forEach(function (id) {
                    if (id == _this.id_ong) {
                        _this.statusFollow = false;
                        _this.textFollowUnfollow = 'Deixar de seguir';
                    }
                });
            });
        }
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

module.exports = "<clr-tabs>\n\n  <clr-tab>\n    <button clrTabLink>Dados gerais</button>\n    <clr-tab-content>\n      <div class=\"clr-row\">\n        <div class=\"clr-col-lg-3 clr-col-md-3 clr-col-12\">\n          <div class=\"card\">\n            <div class=\"card-img\">\n              <img src=\"{{imgPerfil}}\" alt=\"avatar\">\n            </div>\n          </div>\n        </div>\n        <div class=\"clr-col-auto\">\n          <table>\n            <tbody>\n              <tr>\n                <td><h5><b>Nome</b></h5></td>\n                <td><h5 class=\"margin-data\">{{voluntario.nome}}</h5></td>\n              </tr>\n              <tr>\n                <td><h5><b>E-mail</b></h5></td>\n                <td><h5 class=\"margin-data\">{{voluntario.email}}</h5></td>\n              </tr>\n              <tr>\n                <td><h5><b>Data de nascimento</b></h5></td>\n                <td><h5 class=\"margin-data\">{{voluntario.dataNascimento}}</h5></td>\n              </tr>\n              <tr>\n                <td><h5><b>Áreas de interesse</b></h5></td>\n                <td>\n                  <div style=\"margin-top: 5%;\" class=\"margin-data\" *ngFor=\"let area of voluntario.areasInteressadas\">\n                    <a class=\"label clickable\" routerLinkActive=\"active\" routerLink=\".\">{{area}}</a>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario' || auth?.currentUserValue?.tipo == 'admin'\"\n        class=\"clr-row\">\n        <div>\n          <button class=\"btn btn-link\" routerLinkActive=\"active\" routerLink=\"editar\">Editar perfil</button>\n        </div>\n      </div>\n    </clr-tab-content>\n  </clr-tab>\n\n  <clr-tab>\n    <button clrTabLink>Participação em eventos</button>\n    <clr-tab-content>\n\n      <h3> {{ numEventosConfirmados }} eventos confirmados </h3>\n      <div class=\"clr-row\" *ngIf=\"numEventosConfirmados > 0\">\n        <div class=\"clr-col-xl-4 clr-col-lg-6 clr-col-md-6 clr-col-12\" *ngFor=\"let evento of eventos\">\n          <a routerLinkActive=\"active\" routerLink=\"/evento/{{evento.id}}\" class=\"card clickable\">\n            <div class=\"card-header clr-row\" style=\"height: 70px\">\n              <div class=\"clr-col\">\n                {{evento.nome}}\n              </div>\n              <br>\n            </div>\n  \n            <div class=\"card-img\" style=\"height: 200px\">\n              <img src=\"{{(evento && evento.img) ? evento.img : imgEventoPadrao }}\" alt=\"ong\" style=\"max-height:200px;object-fit: cover;\" />\n            </div>\n            <div class=\" card-block\">\n              <div class=\"card-text\" style=\"height: 100px\">\n                <div class=\"clr-row\" style=\"margin-bottom:5px;\">\n                  <div class=\"clr-col-auto\">\n                    <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\n                    {{evento.dataRealizacao}}\n                  </div>\n                  <div class=\"clr-col-auto\">\n                    <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\n                    {{evento.local.bairro}}\n                  </div>\n                </div>\n                {{evento.descricao}}\n              </div>\n            </div>\n          </a>\n          </div>\n      </div>\n\n\n    </clr-tab-content>\n  </clr-tab>\n\n  <clr-tab>\n    <button clrTabLink>ONGs seguidas</button>\n    <clr-tab-content>\n\n      <h3> {{ numOngsSeguidas }} ONGs seguidas </h3>\n      <div class=\"clr-row\" *ngIf=\"numOngsSeguidas > 0\">\n        <div class=\"clr-col-sm-12 clr-col-md-6\" *ngFor=\"let ong of ongs\">\n          <a routerLinkActive=\"active\" routerLink=\"/ong/{{ong.id}}\" class=\"card clickable\">\n            <div class=\"card-header\" style=\"height:auto; overflow:auto;\">\n              <img class=\"seguidor-card\" src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao }}\" alt=\"ONG\" />\n              <h3> {{ ong.nome }}</h3>\n            </div>\n          </a>\n        </div>\n      </div>\n\n\n    </clr-tab-content>\n  </clr-tab>\n\n</clr-tabs>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/perfil/perfil.component.scss":
/*!**********************************************!*\
  !*** ./src/app/perfil/perfil.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-data {\n  margin-left: 5%; }\n\n.seguidor-card {\n  max-width: 80px;\n  max-height: 80px;\n  border-radius: 50%;\n  float: right;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: 0;\n  background-color: white;\n  box-shadow: 0 2px 3px #818181; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsU0FBUztFQUNULHVCQUF1QjtFQUN2Qiw2QkFBd0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLWRhdGEge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLnNlZ3VpZG9yLWNhcmQge1xuICAgIG1heC13aWR0aDogODBweDsgXG4gICAgbWF4LWhlaWdodDogODBweDsgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiKDEyOSwgMTI5LCAxMjkpO1xufSJdfQ== */"

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
        this.imgEventoPadrao = 'assets/images/evento-default.jpg';
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

module.exports = "<a routerLinkActive=\"active\" routerLink=\"/evento/a12b3c\" class=\"card clickable\">\n  <div class=\"card-header clr-row\">\n    <div class=\"clr-col\">\n      <clr-icon shape=\"calendar\"></clr-icon>\n      Nome do Evento\n    </div>\n    <div class=\"clr-col-auto\">\n      <span class=\"p4\">por</span>\n      <span class=\"h2\">\n        Nome da ONG\n      </span>\n      <img class=\"clr-col-12 clr-col-md-auto post-author-img\" src=\"assets/images/ong.png\" alt=\"ONG\">\n    </div>\n  </div>\n  <div class=\"card-img\">\n    <img src=\"assets/images/evento.jpg\" alt=\"ong\" style=\"max-height:300px;object-fit: cover;\" />\n  </div>\n  <div class=\" card-block\">\n    <div class=\"card-text\">\n      <div class=\"clr-row\" style=\"margin-bottom:5px;\">\n        <div class=\"clr-col-auto\">\n          <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\n          24/08/2018\n        </div>\n        <div class=\"clr-col-auto\">\n          <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\n          Setor Sudoeste\n        </div>\n        <div class=\"clr-col\"></div>\n        <div class=\"clr-col-auto\">\n          <span class=\"label\">Animais</span>\n          <span class=\"label\">Meio ambiente</span>\n        </div>\n      </div>\n      He was charismatic, magnetic, electric and everybody knew it.<br>\n      When he walked in every woman's head turned, everyone stood up to talk to him.<br>\n      He was like this hybrid, this mix of a man who couldn't contain himself.\n    </div>\n  </div>\n  <div class=\"card-footer clr-row\">\n    <div class=\"clr-col\">\n      <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\">\n        <clr-icon shape=\"heart\"></clr-icon>\n        Favoritar\n      </button>\n    </div>\n    <div class=\"clr-col-auto\">\n      <span class=\"p8\" style=\"margin-top:0.5rem;\">\n        Postado às 18:35 em 21/08/1998\n      </span>\n    </div>\n  </div>\n</a>\n<!--<router-outlet></router-outlet>-->"

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

module.exports = "<div class=\"card\">\n  <div class=\"card-header clr-row\">\n    <div class=\"clr-col\">\n      <clr-icon shape=\"talk-bubbles\"></clr-icon>\n      Nome da Postagem\n    </div>\n    <div class=\"clr-col-auto\">\n      <span class=\"p4\">por</span>\n      <strong class=\"h2\">\n        Nome da ONG\n      </strong>\n      <img class=\"clr-col-12 clr-col-md-auto post-author-img\" src=\"assets/images/ong.png\" alt=\"ONG\">\n    </div>\n  </div>\n  <div class=\"card-block\">\n    <div class=\"card-text\">\n      He was charismatic, magnetic, electric and everybody knew it.<br>\n      When he walked in every woman's head turned, everyone stood up to talk to him.<br>\n      He was like this hybrid, this mix of a man who couldn't contain himself.\n    </div>\n  </div>\n  <div class=\"card-footer clr-row\">\n    <div class=\"clr-col\">\n      <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\">\n        <clr-icon shape=\"heart\"></clr-icon>\n        Favoritar\n      </button>\n    </div>\n    <div class=\"clr-col-auto\">\n      <span class=\"p8\" style=\"margin-top:0.5rem;\">\n        Postado às 18:35 em 21/08/1998\n      </span>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"clr-row\">\n  <router-outlet></router-outlet>\n  <div class=\"clr-col-12\">\n    <h3>Eventos das ONGs que você seguiu</h3>\n  </div>\n  <div class=\"clr-col-12\" *ngIf=\"eventos.length !== 0; else elseTimeline\">\n    <div *ngFor=\"let evento of eventos\">\n      <a routerLinkActive=\"active\" routerLink=\"/evento/{{ evento.id }}\" class=\"card clickable\">\n        <div class=\"card-header clr-row\">\n          <div class=\"clr-col\">\n            <clr-icon shape=\"calendar\"></clr-icon>\n            {{ evento.nome }}\n          </div>\n          <div class=\"clr-col-auto\">\n            <span class=\"p4\">por</span>\n            <span *ngFor=\"let ong of ongs\">\n              <span class=\"h2\" *ngIf=\"evento.idOng === ong.id\">\n                {{ ong.nome }}\n                <img class=\"clr-col-12 clr-col-md-auto post-author-img\"\n                src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao }}\" alt=\"ONG\">\n              </span>\n            </span>\n          </div>\n        </div>\n        <div class=\"card-img\">\n          <img src=\"{{(evento && evento.img) ? evento.img : imgEventoPadrao }}\" alt=\"ong\"\n            style=\"max-height:300px;object-fit: cover;\" />\n        </div>\n        <div class=\" card-block\">\n          <div class=\"card-text\">\n            <div class=\"clr-row\" style=\"margin-bottom:5px;\">\n              <div class=\"clr-col-auto\">\n                <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon>\n                {{ evento.dataRealizacao }}\n              </div>\n              <div class=\"clr-col-auto\">\n                <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon>\n                {{ evento.local.bairro }}\n              </div>\n              <div class=\"clr-col\"></div>\n              <div class=\"clr-col-auto\" *ngFor=\"let area of evento.areas\">\n                <span class=\"label\">{{ area }}</span>\n              </div>\n            </div>\n            {{ evento.descricao }}\n          </div>\n        </div>\n        <div class=\"card-footer clr-row\">\n          <div class=\"clr-col\">\n            <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\">\n              <clr-icon shape=\"heart\"></clr-icon>\n              Favoritar\n            </button>\n          </div>\n          <div class=\"clr-col-auto\">\n            <span class=\"p8\" style=\"margin-top:0.5rem;\">\n              Postado em {{ evento.dataCriacao }}\n            </span>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n  <ng-template #elseTimeline>\n    <div class=\"clr-col-12\">\n      <h5>Nenhum evento</h5>\n    </div>\n  </ng-template>\n  <!-- <button class=\"btn btn-sm btn-outline\" style=\"margin: 1rem auto;\">\n    Carregar mais antigos\n  </button> -->\n\n  <div *ngIf=\"auth?.currentUserValue?.tipo == 'ong'\">\n    <button class=\"btn btn-primary btn-icon btnLateralSuspenso\" routerLinkActive=\"active\" routerLink=\"addPostagem\"\n      title=\"Nova postagem\">\n      <clr-icon shape=\"plus\"></clr-icon>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/timeline/timeline.component.scss":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnLateralSuspenso {\n  margin-right: 12px;\n  border-radius: 50% !important;\n  position: fixed;\n  bottom: 40px;\n  right: 80px;\n  width: 60px;\n  height: 60px;\n  box-shadow: 2px 2px 10px #808080;\n  font-size: 30px; }\n\n.btnLateralSuspenso:hover {\n  box-shadow: 4px 4px 20px #808080;\n  transition: .3s linear all; }\n\n.post-author-img {\n  display: inline-block;\n  border-radius: 100%;\n  height: 1.5rem;\n  width: 1.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  margin: -0.5rem -1.75rem -0.5rem 0;\n  box-shadow: 0 2px 3px #818181;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvYW9wZWRyby9EZXNrdG9wL2l2b2x1bnRlZXIvU2lzdGVtYS9pdm9sdW50ZWVyL3NyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsNkJBQTRCO0VBQzVCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGVBQ0osRUFBQTs7QUFFQTtFQUNJLGdDQUFnQztFQUNoQywwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLDZCQUF3QztFQUN4Qyx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkxhdGVyYWxTdXNwZW5zbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICBib3R0b206IDQwcHg7XG4gICAgcmlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMzBweFxufVxuXG4uYnRuTGF0ZXJhbFN1c3BlbnNvOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMjBweCAjODA4MDgwO1xuICAgIHRyYW5zaXRpb246IC4zcyBsaW5lYXIgYWxsO1xufVxuXG4ucG9zdC1hdXRob3ItaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAtMC41cmVtIC0xLjc1cmVtIC0wLjVyZW0gMDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiKDEyOSwgMTI5LCAxMjkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuICAiXX0= */"

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

module.exports = "<h2>\n  {{ event.nome }}\n</h2>\n<div class=\"clr-row\">\n\n  <div class=\"clr-col\">\n    <div class=\"card-img\">\n      <img src=\"{{(event && event.img) ? event.img : imgEventoPadrao }}\" alt=\"ong\" style=\"max-height:400px;object-fit: cover;\" />\n    </div>\n  </div>\n\n  <div class=\"clr-break-row\"></div>\n\n  <!-- Coluna da esquerda -->\n  <div class=\"clr-col-sm-12 clr-col-md-auto\">\n    <div class=\"clr-row\">\n      <div class=\"clr-col\">\n        <!-- Card com informações-->\n        <a routerLinkActive=\"active\" routerLink=\"/ong/{{ ong.id }}\" class=\"card clickable\">\n          <div class=\"card-header\" style=\"height:auto; overflow:auto;\">\n            <span class=\"p4\">Realização</span> {{ ong.nome }} <img class=\"ong-card\" src=\"{{(ong && ong.imgPerfil) ? ong.imgPerfil : imgPerfilOngPadrao}}\" />\n          </div>\n        </a>\n        <div class=\"card\">\n          <div class=\"card-block\">\n            <div class=\"card-title\">\n              Informações\n            </div>\n            <div class=\"card-text\">\n              <clr-icon shape=\"map-marker\" class=\"is-info\"></clr-icon> <strong> Local:</strong> {{ event.local.bairro }}\n              <br>\n              <clr-icon shape=\"calendar\" class=\"is-info\"></clr-icon> <strong> Data:</strong> {{ eventoDataTemp }}\n              <br>\n              <clr-icon shape=\"clock\" class=\"is-info\"></clr-icon> <strong> Horário:</strong> {{ eventoTimeTemp }}\n            </div>\n          </div>\n          <div class=\"card-block\" *ngIf=\"event?.areas && event.areas.length > 0\">\n            <div class=\"card-title\">\n              Áreas\n            </div>\n            <div class=\"card-text\" *ngFor=\"let area of event.areas\">\n              <a class=\"label label-purple clickable\" routerLinkActive=\"active\" routerLink=\".\">{{area}}</a>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <button *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\" class=\"btn btn-sm btn-link\">\n              <clr-icon shape=\"heart\"></clr-icon> Favoritar\n            </button>\n            <button class=\"btn btn-sm btn-link\">\n              <clr-icon shape=\"share\"></clr-icon> Compartilhar\n            </button>\n          </div>\n        </div>\n        <!-- Confirmar interesse -->\n        <div class=\"clr-row\" *ngIf=\"auth?.currentUserValue?.tipo == 'voluntario'\">\n          <div class=\"clr-col\">\n            <div class=\"card\">\n              <div class=\"card-block\">\n                <a class=\"btn btn-primary btn-block\" (click)=\"interest()\">{{textInterest}}</a>\n                <p *ngIf=\"event.idsVoluntariosConfirmados > 0; else elseEvento\">{{ event.idsVoluntariosConfirmados.length }} pessoa(s) confirmaram interesse</p>\n                <ng-template #elseEvento>\n                  <p>Ninguém confirmou interesse</p>\n                </ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Editar/Deletar evento-->\n        <div *ngIf=\"auth?.currentUserValue?.tipo == 'admin' || (auth?.currentUserValue?.tipo == 'ong' && auth?.currentUserValue?.idOng === ong.id)\" class=\"clr-row\">\n          <div class=\"clr-col-auto\">\n            <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"editar\"\n              style=\"margin: 1rem 0 0 auto;\">\n              <clr-icon shape=\"edit is-primary\"></clr-icon> Editar Evento\n            </button>\n          </div>\n          <div class=\"clr-col-auto\">\n            <button class=\"btn btn-sm btn-link\" routerLinkActive=\"active\" routerLink=\"excluir\"\n              style=\"margin: 1rem 0 0 auto;\">\n              <clr-icon shape=\"trash is-primary\"></clr-icon> Excluir Evento\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Coluna da direita -->\n  <div class=\"clr-col\">\n    <!-- Descrição -->\n    <h3><strong>Descrição:</strong></h3>\n    <h4> {{ event.descricao}}</h4>\n  </div>\n</div>\n\n<br>\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var VerEventoComponent = /** @class */ (function () {
    function VerEventoComponent(eventService, ongService, auth, router, toastr, route, voluntarioService) {
        var _this = this;
        this.eventService = eventService;
        this.ongService = ongService;
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.voluntarioService = voluntarioService;
        this.imgPerfilOngPadrao = 'assets/images/ong-default.png';
        this.imgEventoPadrao = 'assets/images/evento-default.jpg';
        this.event = new _models__WEBPACK_IMPORTED_MODULE_5__["Event"]();
        this.ong = new _models__WEBPACK_IMPORTED_MODULE_5__["Ong"]();
        this.usuario = new _models__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
        this.currentVoluntario = new _models__WEBPACK_IMPORTED_MODULE_5__["Voluntario"]();
        this.error = null;
        // Ação a ser tomada ao se pressionar o botão "Confirmar interesse"
        this.statusInterest = null;
        // Texto que aparece junto ao botão de confirmar.
        this.textInterest = null;
        this.route.params.subscribe(function (params) {
            _this.idEvento = params.id;
        });
    }
    VerEventoComponent.prototype.ngOnInit = function () {
        this.statusInterest = true;
        this.textInterest = "Confirmar interesse";
        this.loadCurrentVoluntario();
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
    VerEventoComponent.prototype.loadCurrentVoluntario = function () {
        var _this = this;
        this.auth.currentUser.subscribe(function (data) {
            _this.usuario = data;
        });
        if (this.usuario !== null) {
            this.voluntarioService.getVoluntario(this.usuario.idVoluntario).subscribe(function (vol) {
                _this.currentVoluntario = vol;
                _this.currentVoluntario.idsEventosConfirmados.forEach(function (id) {
                    if (id == _this.idEvento) {
                        _this.statusInterest = false;
                        _this.textInterest = 'Remover interesse no evento';
                    }
                });
            });
        }
    };
    VerEventoComponent.prototype.interest = function () {
        var _this = this;
        var statusInterestString = String(this.statusInterest);
        this.voluntarioService.subscribeOnEvent(this.idEvento, statusInterestString)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            if (data) {
                if (_this.statusInterest) {
                    _this.toastr.success('Você confirmou interesse neste evento');
                    _this.statusInterest = false;
                    _this.textInterest = 'Remover interesse no evento';
                }
                else {
                    _this.toastr.success('Você removeu seu interesse no evento');
                    _this.statusInterest = true;
                    _this.textInterest = 'Confirmar interesse';
                }
                _this.patchEvento();
                _this.loadCurrentVoluntario();
            }
            (function (error) {
                _this.error = JSON.stringify(error);
                _this.toastr.error(_this.error);
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
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_2__["VoluntariosService"]])
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

module.exports = __webpack_require__(/*! /home/joaopedro/Desktop/ivolunteer/Sistema/ivolunteer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map