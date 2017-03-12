import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { User } from '../models/user';

@Component({
  selector: 'app-admin',
})

export class TutorComponent implements OnInit, OnDestroy {

  authSubscription:Subscription;
  user:User;

  constructor(protected angularFire:AngularFire, protected router:Router) {
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
        if(auth === null)
          this.router.navigateByUrl('');
      }
    );
  }
  unsubscribe():void {
    this.authSubscription.unsubscribe();
  }
  setUserMetaData(auth:any) {
    this.setImage(auth);
  }
  setImage(auth:any):any {
    if(auth.provider === 2)
      this.user.photoUrl = auth.facebook.photoURL;
    else if(auth.provider === 3)
      this.user.photoUrl = auth.google.photoURL;
    else
      this.user.photoUrl = 'assets/img/user_default.png';
  }
  signOut():void {
    this.angularFire.auth.logout();
  }
}
