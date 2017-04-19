import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AngularFire } from 'angularfire2';
import { MdlSnackbarService } from 'angular2-mdl';
import { AuthComponent } from '../shared/auth.component';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css' ]
})

export class RegisterComponent extends AuthComponent {

  userChangesSubscription:Subscription;

  constructor(protected angularFire:AngularFire, protected router:Router, protected snackBar:MdlSnackbarService, private userService:UserService) {
    super(angularFire, router, snackBar);
  }

  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if(auth !== null) {
          this.verifyUserData(auth);
        }
      }
    );
    this.userChangesSubscription = this.userService.isFinished$.subscribe(
      user => {
        console.log(user);
        this.user = user;
        this.createUser();
      }
    );
  }
  verifyUserData(auth:any):void {
    if(auth.provider === 2)
      this.userService.setEmail(auth.facebook.email);
    else if(auth.provider === 3)
      this.userService.setEmail(auth.google.email);
  }
  createUser():void {
    this.angularFire.auth.createUser({
      email: this.user.email,
      password: this.user.password
    })
    .then((response) => { this.uploadUserPhoto(response.uid) })
    .catch((error:any) => { this.showErrorMessage(error.code) });
  }
  uploadUserPhoto(userId:string):void {
    let storageRef = firebase.storage().ref(userId);
    storageRef.put(this.user.photo)
    .then((snapshot) => {
      this.createUserRecord(userId);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  createUserRecord(userId:string):void {
    console.log(userId);
    console.log(this.user);
    let users = this.angularFire.database.list('/users');
    users.update(userId, this.user)
    .then(() => this.router.navigateByUrl('student/home'));
  }
  unsubscribe():void {
    if (this.authSubscription !== undefined) this.authSubscription.unsubscribe();
    if (this.userInfoSubscription !== undefined) this.userInfoSubscription.unsubscribe();
    if (this.userChangesSubscription !== undefined) this.userChangesSubscription.unsubscribe();
  }
}
