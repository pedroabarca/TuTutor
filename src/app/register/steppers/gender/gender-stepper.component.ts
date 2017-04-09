import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { StepperComponent } from '../../../shared/stepper.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'gender-stepper',
  templateUrl: './gender-stepper.component.html',
  styleUrls: ['./gender-stepper.component.css']
})

export class GenderStepperComponent extends StepperComponent implements OnInit {

  lastName:string;

  ngOnInit() {
    this.buildForm();
    this.getUserProperties();
  }
  buildForm():void {
    this.form = this.formBuilder.group({
      'data' : [this.lastName, [
        Validators.required,
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
    this.router.navigateByUrl('register/name');
  }
}
