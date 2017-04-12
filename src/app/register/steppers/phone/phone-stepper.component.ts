import { Component, OnInit } from '@angular/core';
import { Validators }  from '@angular/forms';
import { StepperComponent } from '../../../shared/stepper.component';

@Component({
  selector: 'phone-stepper',
  templateUrl: './phone-stepper.component.html',
  styleUrls: ['./phone-stepper.component.css']
})

export class PhoneStepperComponent extends StepperComponent implements OnInit {

  phone:number;

  ngOnInit() {
    this.buildForm();
    this.getUserProperties();
  }
  buildForm():void {
    this.form = this.formBuilder.group({
      'data' : [this.phone, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern('[0-9]+')
      ]]
    });
  }
  getUserProperties():void {
    this.phone = this.userService.getPhone();
  }
  setUserProperties():void {
    this.userService.setPhone(this.phone);
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/photo');
  }
  previousStepper():void {
    this.router.navigateByUrl('register/gender');
  }
}
