import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MdlModule } from 'angular2-mdl';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'email-stepper',
  templateUrl: './email-stepper.component.html',
  styleUrls: ['./email-stepper.component.css']
})

export class EmailStepperComponent implements OnInit, OnDestroy {

  form:FormGroup;
  userChangesSubscription:Subscription;
  email:string;

  constructor(private router:Router, private userService:UserService, private formBuilder:FormBuilder) {
    console.log(userService.getEmail());
  }

  ngOnInit() {
    this.buildForm();
    this.subscribe();
    this.getUserProperties();
  }
  ngOnDestroy():void {
    this.unsubscribe();
  }
  subscribe():void {
    this.userChangesSubscription = this.userService.isChanged$.subscribe(
      user => {
        console.log(user);
        this.email = user.email;
      }
    );
  }
  unsubscribe():void {
    if(this.userChangesSubscription !== undefined) this.userChangesSubscription.unsubscribe();
  }
  buildForm():void {
    this.form = this.formBuilder.group({
      'data' : [this.email, [
        Validators.required,
        Validators.pattern('[a-z]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*.([a-z]{2,15})')
      ]]
    });
  }
  getUserProperties():void {
    this.email = this.userService.getEmail();
    console.log(this.userService.getEmail());
  }
  setUserProperties():void {
    this.userService.setEmail(this.email);
  }
  printInfo():void {
    console.log(this.userService.getEmail());
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/first-name');
  }
  previousStepper():void {
    this.router.navigateByUrl('register');
  }
}
