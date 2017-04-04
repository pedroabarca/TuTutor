import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { StepperComponent } from '../../../shared/stepper.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'last-name-stepper',
  templateUrl: './surname-stepper.component.html',
  styleUrls: ['./surname-stepper.component.css']
})

export class SurNameStepperComponent extends StepperComponent implements OnInit {

  lastName:string;

  ngOnInit() {
    this.buildForm();
    this.getUserProperties();
  }
  buildForm():void {
    this.form = this.formBuilder.group({
      'data' : [this.lastName, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[[A-Za-z]([A-Za-z ]+)$')
      ]]
    });
  }
  getUserProperties():void {
    this.lastName = this.userService.getLastName();
  }
  setUserProperties():void {
    this.userService.setLastName(this.lastName);
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/phone');
  }

  previousStepper():void {
    this.router.navigateByUrl('register/first-name');
  }
}
