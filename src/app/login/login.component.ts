import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AngularFire } from 'angularfire2';
import { MdlSnackbarService } from 'angular2-mdl';
import { AuthProviders, AuthMethods } from 'angularfire2';
import { AuthComponent } from '../shared/auth.component';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends AuthComponent {

  form:FormGroup;

  constructor(protected angularFire:AngularFire, protected router:Router, protected snackBar:MdlSnackbarService, protected formBuilder:FormBuilder) {
    super(angularFire, router, snackBar);
  }
  ngOnInit() {
    this.subscribe();
    this.buildForm();
  }
  buildForm():void {
    this.form = this.formBuilder.group({
      'email' : [this.user.email, [
        Validators.required,
        Validators.pattern('[a-z]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*.([a-z]{2,15})')
      ]],
      'password' : [this.user.password, [
        Validators.required
      ]],
    });
  }
  emailAuth():void {
    this.angularFire.auth.login({
      email: this.user.email,
      password: this.user.password,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    })
    .then((auth:any) => { this.postSignIn(auth) })
    .catch((error:any) => { this.showErrorMessage(error.code) });
  }
  googleAuth():void {
    this.angularFire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
    .then((auth:any) => { this.postSignIn(auth) })
    .catch((error:any) => { this.showErrorMessage(error.code) });
  }
  facebookAuth():void {
    this.angularFire.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    })
    .then((auth:any) => { this.postSignIn(auth) })
    .catch((error:any) => { this.showErrorMessage(error.code) });
  }
  register():void {
    this.router.navigateByUrl('register');
  }
}
