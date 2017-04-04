import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MdlModule } from 'angular2-mdl';
import { UserService } from '../services/user.service';

@Component({
  selector: 'stepper-stepper'
})

export class StepperComponent implements OnInit, OnDestroy {

  form:FormGroup;
  userChangesSubscription:Subscription;

  constructor(private router:Router, private userService:UserService, private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.subscribe();
  }
  ngOnDestroy():void {
    this.unsubscribe();
  }
  subscribe():void {
    this.userChangesSubscription = this.userService.isChanged$.subscribe(
      user => {
        console.log(user);
      }
    );
  }
  unsubscribe():void {
    if(this.userChangesSubscription !== undefined) this.userChangesSubscription.unsubscribe();
  }
}