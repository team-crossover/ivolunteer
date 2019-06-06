import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services';

/**
 * Evita que usuários possam acessar páginas caso não estejam logados ou com a role adequada.
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if (route.data) {
            const currentUser = this.authenticationService.currentUserValue;
            if (route.data.requiresGuest) {
                if (currentUser) {
                    this.router.navigate(['/home']);
                    return false;
                }
            } else if (route.data.requiresRoles) {
                if (!currentUser || !route.data.requiresRoles.includes(currentUser.tipo.toLowerCase())) {
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                }
            }
        }

        return true;
    }
}