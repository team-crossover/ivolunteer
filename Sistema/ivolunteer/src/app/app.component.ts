import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './_services';
import { Usuario } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iVolunteer';

  isAuthenticated = false;
  userTipo = '';
  userName = '???'
  urlProfile = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthenticationService
  ) {

    auth.currentUser.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.userTipo = user.tipo;
        if (this.userTipo == "voluntario")
          this.urlProfile = "/usuario/" + user.idVoluntario;
        else if (this.userTipo == "ong")
          this.urlProfile = "/ong/" + user.idOng;
        else
          this.urlProfile = null;

        this.userName = user.username;
        if (this.userTipo == "ong") {
          auth.getCurrentUserOng().subscribe(ong => {
            this.userName = ong.nome;
          })
        } else if (this.userTipo == "voluntario") {
          auth.getCurrentUserVoluntario().subscribe(voluntario => {
            this.userName = voluntario.nome;
          })
        }

      } else {
        this.isAuthenticated = false;
        this.userTipo = null;
        this.userName = '???';
        this.urlProfile = null;
      }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
