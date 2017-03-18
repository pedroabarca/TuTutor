import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AngularFire } from 'angularfire2';
import { MdlSnackbarService } from 'angular2-mdl';
import { BaseComponent } from './base.component';
import { User } from '../models/user';

@Component({
  selector: 'app-auth',
})

export class AuthComponent extends BaseComponent implements OnInit, OnDestroy {

  errors = {'auth/user-not-found': { value: 'Usuario y/o contraseña incorrectas'}, 'auth/wrong-password': { value: 'Usuario y/o contraseña incorrectas'}, 'auth/invalid-email': { value: 'Formato de correo electrónico incorrecto' } };
  authSubscription:Subscription;
  userInfoSubscription:Subscription;
  user:User;

  constructor(protected angularFire:AngularFire, protected router:Router, protected snackBar:MdlSnackbarService) {
    super(snackBar);
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
    if (this.authSubscription !== undefined) this.authSubscription.unsubscribe();
    if (this.userInfoSubscription !== undefined) this.userInfoSubscription.unsubscribe();
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
}