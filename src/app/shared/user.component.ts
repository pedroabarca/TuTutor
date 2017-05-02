import { Component, OnDestroy } from '@angular/core';
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

export class UserComponent extends BaseComponent implements OnDestroy {

  authSubscription:Subscription;
  userInfoSubscription:Subscription;
  user:User;

  constructor(protected angularFire:AngularFire, protected router:Router, protected snackBar:MdlSnackbarService) {
    super(snackBar);
    this.user = new User();
  }
  ngOnDestroy():void {
    this.unsubscribe();
  }
  getImage(auth:any):void {
    let url = '/users/' + auth.uid;
    let user = this.angularFire.database.object(url);
    this.userInfoSubscription = user.subscribe(snapshot => {
      this.user = snapshot;
      if (this.user.photo === undefined) {
        console.log('Getting image from Storage')
        let storageRef = firebase.storage().ref(auth.uid);
        storageRef.getDownloadURL()
        .then((url) => {
          this.user.photo = url;
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    });
  }
  unsubscribe():void {
    if(this.authSubscription !== undefined) this.authSubscription.unsubscribe();
    if(this.userInfoSubscription !== undefined) this.userInfoSubscription.unsubscribe();
  }
  setUserMetaData(auth:any):void {
    this.getImage(auth);
  }
  signOut():void {
    this.angularFire.auth.logout();
  }
}