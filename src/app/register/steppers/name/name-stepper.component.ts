import { Component, OnInit } from '@angular/core';
import { Validators }  from '@angular/forms';
import { StepperComponent } from '../../../shared/stepper.component';

@Component({
  selector: 'name-stepper',
  templateUrl: './name-stepper.component.html',
  styleUrls: ['./name-stepper.component.css']
})

export class NameStepperComponent extends StepperComponent implements OnInit {

  name:string;

  ngOnInit() {
    this.buildForm();
    this.getUserProperties();
  }
  buildForm():void {
    this.form = this.formBuilder.group({
      'data' : [this.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[[A-Za-z]{3,} ([A-Za-z ]{4,})$')
      ]]
    });
  }
  getUserProperties():void {
    this.name = this.userService.getName();
  }
  setUserProperties():void {
    this.userService.setName(this.name);
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/gender');
  }
  previousStepper():void {
    this.router.navigateByUrl('register/email');
  }
}
