import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { AngularFire } from 'angularfire2';
import { MdlModule } from 'angular2-mdl';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'stepper-stepper'
})

export class StepperComponent implements OnInit, OnDestroy {

  authSubscription:Subscription;
  form:FormGroup;
  user = new User();

  constructor(protected angularFire:AngularFire, protected router:Router, protected userService:UserService, protected formBuilder:FormBuilder) {}

  ngOnInit() {
    this.subscribe();
  }
  ngOnDestroy():void {
    this.unsubscribe();
  }
  subscribe():void {
  }
  unsubscribe():void {
    if(this.authSubscription !== undefined) this.authSubscription.unsubscribe();
  }
}