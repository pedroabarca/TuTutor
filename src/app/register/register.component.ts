import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AngularFire } from 'angularfire2';
import { MdlSnackbarService } from 'angular2-mdl';
import { AuthComponent } from '../shared/auth.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent extends AuthComponent {

  userChangesSubscription:Subscription;

  constructor(protected angularFire:AngularFire, protected router:Router, protected snackBar:MdlSnackbarService, private userService:UserService) {
    super(angularFire, router, snackBar);
  }

  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if(auth !== null)
          this.postSignIn(auth);
      }
    );
    this.userChangesSubscription = this.userService.userChange$.subscribe(
      user => {
        console.log(user);
        this.user = user;
      }
    );
  }
  unsubscribe():void {
    if (this.authSubscription !== undefined) this.authSubscription.unsubscribe();
    if (this.userInfoSubscription !== undefined) this.userInfoSubscription.unsubscribe();
    if (this.userChangesSubscription !== undefined) this.userChangesSubscription.unsubscribe();
  }
}
