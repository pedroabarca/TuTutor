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
        if(auth === null)
          this.router.navigateByUrl('');
        else {
          console.log(auth);
        }
      }
    );
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
      console.log(this.user.photo);
    });
  }
  unsubscribe():void {
    this.authSubscription.unsubscribe();
    this.userInfoSubscription.unsubscribe();
  }
  setUserMetaData(auth:any):void {
    this.getImage(auth);
  }
  signOut():void {
    this.angularFire.auth.logout();
  }
}