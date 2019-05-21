import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iVolunteer';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService
  ) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
