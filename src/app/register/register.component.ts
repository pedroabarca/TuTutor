import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AngularFire } from 'angularfire2';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit, OnDestroy {

  authSubscription:Subscription;
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
  }
  postSignIn(auth:any):void {
    this.checkUserPermissions(auth);
  }

}
