import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AngularFire } from 'angularfire2';
import { MdlSnackbarService } from 'angular2-mdl';
import { User } from '../models/user';
import { BaseComponent } from './base.component';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user',
})

export class UserComponent extends BaseComponent implements OnInit, OnDestroy {

  authSubscription:Subscription;
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
        if(auth === null)
          this.router.navigateByUrl('');
        else {
          console.log(auth);
        }
      }
    );
  }
  getImage(auth:any):void {
    let storageRef = firebase.storage().ref(auth.uid);
    storageRef.getDownloadURL()
    .then((url) => {
      this.user.photo = url;
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  unsubscribe():void {
    this.authSubscription.unsubscribe();
  }
  setUserMetaData(auth:any):void {
    console.log(auth);
    this.getImage(auth);
    //this.setImage(auth);
  }
  setImage(auth:any):any {
    if(auth.provider === 2)
      this.user.photo = auth.facebook.photoURL;
    else if(auth.provider === 3)
      this.user.photo = auth.google.photoURL;
    else
      this.user.photo = '../../assets/img/user_default.png';
  }
  signOut():void {
    this.angularFire.auth.logout();
  }
}