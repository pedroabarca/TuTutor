import { Component, OnInit } from '@angular/core';
import { Validators }  from '@angular/forms';
import { StepperComponent } from '../../../shared/stepper.component';

@Component({
  selector: 'gender-stepper',
  templateUrl: './gender-stepper.component.html',
  styleUrls: ['./gender-stepper.component.css']
})

export class GenderStepperComponent extends StepperComponent implements OnInit {

  gender:string;

  ngOnInit() {
    this.buildForm();
    this.getUserProperties();
  }
  buildForm():void {
    this.form = this.formBuilder.group({
      'data' : [this.gender, [
        Validators.required,
      ]]
    });
  }
  getUserProperties():void {
    console.log(this.userService.getGender());
    this.gender = this.userService.getGender();
  }
  setUserProperties():void {
    this.userService.setGender(this.gender);
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/phone');
  }
  previousStepper():void {
    this.router.navigateByUrl('register/name');
  }
}
