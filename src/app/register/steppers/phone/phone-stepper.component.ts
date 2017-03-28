import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MdlModule } from 'angular2-mdl';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'phone-stepper',
  templateUrl: './phone-stepper.component.html',
  styleUrls: ['./phone-stepper.component.css']
})

export class PhoneStepperComponent implements OnInit {

  form:FormGroup;
  userChangesSubscription:Subscription;
  firstName:string;
  lastName:string;
  email:string;
  phone:number;

  constructor(private router:Router, private userService:UserService, private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.subscribe();
    this.getUserProperties();
  }
  subscribe():void {
    this.userChangesSubscription = this.userService.isFinished$.subscribe(
      user => {
        this.email = user.email;
        this.firstName = user.firstName;
        this.phone = user.phone;
      }
    );
  }
  unsubscribe():void {
    if(this.userChangesSubscription !== undefined) this.userChangesSubscription.unsubscribe();
  }
  buildForm():void {
    this.form = this.formBuilder.group({
      'data' : [this.firstName, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern('[0-9]+')
      ]]
    });
  }
  getUserProperties():void {
    this.firstName = this.userService.getFirstName();
    this.lastName = this.userService.getLastName();
    this.email = this.userService.getEmail();
  }
  setUserProperties():void {
    this.userService.setPhone(this.phone);
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/password');
  }
  previousStepper():void {
    this.router.navigateByUrl('register/email');
  }
}
