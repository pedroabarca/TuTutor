import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  authSubscription:Subscription;

  constructor(private angularFire:AngularFire, private router:Router) { }

  ngOnInit() {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth =>
        {
          if(auth === null)
            this.router.navigateByUrl('');
        }
    );
  }
  ngOnDestroy():void {
    this.authSubscription.unsubscribe();
  }
  signOut():void {
    this.angularFire.auth.logout();
  }
}
