import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MdlModule } from 'angular2-mdl';
import { StepperComponent } from '../../../shared/stepper.component';
import { UserService } from '../../../services/user.service';

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
    this.router.navigateByUrl('register/name');
  }
}
