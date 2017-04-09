import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MdlModule } from 'angular2-mdl';
import { StepperComponent } from '../../../shared/stepper.component';
import { UserService } from '../../../services/user.service';

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
    this.name = this.userService.getFirstName();
  }
  setUserProperties():void {
    this.userService.setFirstName(this.name);
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/gender');
  }
  previousStepper():void {
    this.router.navigateByUrl('register/email');
  }
}
