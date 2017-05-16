import { Component, OnInit } from '@angular/core';
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

export class RegisterComponent extends AuthComponent implements OnInit {

  userChangesSubscription: Subscription;
  stepImg: string;
  private userId: string;
  private provider: number;
  constructor(protected angularFire: AngularFire, protected router: Router,
              protected snackBar: MdlSnackbarService, private userService: UserService) {
    super(angularFire, router, snackBar);

  }

  ngOnInit(): void {
    this.subscribe();
  }
  subscribe(): void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if (auth !== null) {
          this.verifyUserData(auth);
          this.userId = auth.uid;
        }
      }
    );
    this.userChangesSubscription = this.userService.isFinished$.subscribe(
      user => {
        this.user = user;
        if (this.userId === undefined) {
          this.createUser();
        } else {
          this.createUserRecord(this.userId);
        }}
    );
  }
  verifyUserData(auth: any): void {
    if (auth.provider === 2) {
      this.userService.setEmail(auth.facebook.email);
    }else if (auth.provider === 3) {
      this.userService.setEmail(auth.google.email);
    }}
  createUser(): void {
    this.angularFire.auth.createUser({
      email: this.user.email,
      password: this.user.password
    })
    .then((response) => { this.createUserRecord(response.uid); })
    .catch((error: any) => { this.showErrorMessage(error.code); });
  }
  uploadUserPhoto(userId: string): void {
    console.log('Pro');
    if (typeof(this.user.photo) === 'object') {
      const storageRef = firebase.storage().ref(userId);
      storageRef.put(this.user.photo)
      .then((snapshot) => {
        this.userService.clearProperties();
        this.router.navigateByUrl('student/home');
      })
      .catch(function(error) {
        console.log(error);
      });
    } else {
      this.userService.clearProperties();
      this.router.navigateByUrl('student/home');
    }
  }
  createUserRecord(userId: string): void {
    const users = this.angularFire.database.list('/users');
    users.update(userId, this.user)
    .then(() => this.uploadUserPhoto(userId));
  }
  unsubscribe(): void {
    if (this.authSubscription !== undefined) {this.authSubscription.unsubscribe(); }
    if (this.userInfoSubscription !== undefined) {this.userInfoSubscription.unsubscribe(); }
    if (this.userChangesSubscription !== undefined) {this.userChangesSubscription.unsubscribe(); }
  }
}
