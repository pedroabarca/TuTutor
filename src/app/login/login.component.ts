import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { User } from '../models/user';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

	authSubscription:Subscription;
  user:User;

  constructor(private angularFire:AngularFire, private router:Router) {
    this.user = new User();
  }

  ngOnInit() {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth =>
        {
          if(auth !== null)
            this.postSignIn();
        }
    );
  }
  ngOnDestroy():void {
    this.authSubscription.unsubscribe();
  }
  emailAuth():void {
    this.angularFire.auth.login({
      email: this.user.email,
      password: this.user.password,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    }).then((() => { this.postSignIn }));
  }
  googleAuth():void {
    this.angularFire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then(() => { this.postSignIn })
  }
  facebookAuth():void {
    this.angularFire.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then(() => { this.postSignIn })
  }
  postSignIn():void {
    this.router.navigateByUrl('home');
  }
  signOut():void {
    this.angularFire.auth.logout();
  }
}
