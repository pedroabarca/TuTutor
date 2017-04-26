import { Component, OnInit } from '@angular/core';
import { Validators }  from '@angular/forms';
import { StepperComponent } from '../../../shared/stepper.component';

@Component({
  selector: 'password-stepper',
  templateUrl: './password-stepper.component.html',
  styleUrls: ['./password-stepper.component.css']
})

export class PasswordStepperComponent extends StepperComponent implements OnInit {

  password:string;

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
    console.log(this.userService);
    this.userService.setPassword(this.password);
    console.log(this.userService);
    this.userService.registerHasFinished();
  }
  previousStepper():void {
    this.router.navigateByUrl('register/photo');
  }
  nextStepper():void {
    this.setUserProperties();
  }
}
