import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MdlModule } from 'angular2-mdl';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'name-stepper',
  templateUrl: './name-stepper.component.html',
  styleUrls: ['./name-stepper.component.css']
})

export class NameStepperComponent implements OnInit {

  form:FormGroup;
  userChangesSubscription:Subscription;
  email:string;
  firstName:string;

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
        Validators.minLength(3),
        Validators.pattern('[[A-Za-z]([A-Za-z ]+)$')
      ]]
    });
  }
  getUserProperties():void {
    this.email = this.userService.getEmail();
    this.firstName = this.userService.getFirstName();
  }
  setUserProperties():void {
    this.userService.setFirstName(this.firstName);
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/last-name');
  }
  previousStepper():void {
    this.router.navigateByUrl('register/email');
  }
}
