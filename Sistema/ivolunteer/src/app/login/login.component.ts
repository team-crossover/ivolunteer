import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { first } from 'rxjs/operators';
import { ClrLoadingState } from '@clr/angular';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  submitted = false;
  loading = false;
  returnUrl: string;
  error: string;

  submitBtnState = ClrLoadingState.DEFAULT;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitBtnState = ClrLoadingState.LOADING;
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.submitBtnState = ClrLoadingState.SUCCESS;
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.submitBtnState = ClrLoadingState.DEFAULT
          this.error = error;
          this.loading = false;
        });
  }
}
