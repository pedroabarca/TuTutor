import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	authSubscription:Subscription;

  constructor(private angularFire:AngularFire) { }

  ngOnInit() {
  }

}
