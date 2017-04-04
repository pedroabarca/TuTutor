import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'password-stepper',
  templateUrl: './password-stepper.component.html',
  styleUrls: ['./password-stepper.component.css']
})

export class PasswordStepperComponent implements OnInit {

  form:FormGroup;
  password:string;

  constructor(private router:Router, private userService:UserService, private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.getUserProperties();
  }
  buildForm():void {
    this.form = this.formBuilder.group({
      'data' : [this.password, [
        Validators.required,
        Validators.minLength(6),
      ]]
    });
  }
  getUserProperties():void {
    this.password = this.userService.getPassword();
  }
  setUserProperties():void {
    this.userService.setPassword(this.password);
    this.userService.registerHasFinished();
  }
  previousStepper():void {
    this.router.navigateByUrl('register/last-name');
  }
  nextStepper():void {
    //this.setUserProperties();
    //this.router.navigateByUrl('register/email');
  }
}
