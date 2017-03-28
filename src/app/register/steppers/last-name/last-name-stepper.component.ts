import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'last-name-stepper',
  templateUrl: './last-name-stepper.component.html',
  styleUrls: ['./last-name-stepper.component.css']
})

export class LastNameStepperComponent implements OnInit {

  form:FormGroup;
  email:string;
  firstName:string;
  lastName:string;

  constructor(private router:Router, private userService:UserService, private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.getUserProperties();
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
    this.lastName = this.userService.getLastName();
  }
  setUserProperties():void {
    this.userService.setLastName(this.lastName);
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/password');
  }

  previousStepper():void {
    this.router.navigateByUrl('register/first-name');
  }
}
