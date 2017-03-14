import { Component } from '@angular/core';
import { AuthProviders, AuthMethods } from 'angularfire2';
import { AuthComponent } from '../shared/auth.component';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends AuthComponent {

  emailAuth():void {
    this.angularFire.auth.login({
      email: this.user.email,
      password: this.user.password,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    })
    .then((() => { this.postSignIn }))
    .catch((error:any) => { this.showErrorMessage(error.code) });
  }
  googleAuth():void {
    this.angularFire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
    .then(() => { this.postSignIn })
    .catch((error:any) => { this.showErrorMessage(error.code) });
  }
  facebookAuth():void {
    this.angularFire.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    })
    .then(() => { this.postSignIn })
    .catch((error:any) => { this.showErrorMessage(error.code) });
  }
  register():void {
    this.router.navigateByUrl('register');
  }
}
