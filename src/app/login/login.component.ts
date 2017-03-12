import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
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
  userInfoSubscription:Subscription;
  user:User;

  constructor(private angularFire:AngularFire, private router:Router) {
    this.user = new User();
  }

  ngOnInit() {
    this.subscribe();
  }
  ngOnDestroy():void {
    this.unsubscribe();
  }
  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if(auth !== null)
          this.postSignIn(auth);
      }
    );
  }
  unsubscribe():void {
    this.authSubscription.unsubscribe();
    this.userInfoSubscription.unsubscribe();
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
  postSignIn(auth:any):void {
    this.checkUserPermissions(auth);
  }
  checkUserPermissions(auth:any):void {
    let url = '/users/' + auth.uid;
    let user = this.angularFire.database.object(url);
    this.userInfoSubscription = user.subscribe(snapshot => {
      this.nextPage(snapshot.is_admin, snapshot.is_tutor);
    });
  }
  nextPage(isAdmin:boolean, isTutor:boolean):void {
    if(isAdmin)
      this.router.navigateByUrl('admin/home');
    else if(isTutor)
      this.router.navigateByUrl('tutor/home');
    else
      this.router.navigateByUrl('student/home');
  }
  signOut():void {
    this.angularFire.auth.logout();
  }
}
