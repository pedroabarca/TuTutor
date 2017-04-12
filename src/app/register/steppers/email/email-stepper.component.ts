import { Component, OnInit } from '@angular/core';
import { Validators }  from '@angular/forms';
import { StepperComponent } from '../../../shared/stepper.component';

@Component({
  selector: 'email-stepper',
  templateUrl: './email-stepper.component.html',
  styleUrls: ['./email-stepper.component.css'],
})

export class EmailStepperComponent extends StepperComponent implements OnInit {

  email:string;

  ngOnInit() {
    this.subscribe();
    this.buildForm();
  }
  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
          if(auth !== null) this.email = auth.auth.email;
      }
    );
  }
  buildForm():void {
    this.form = this.formBuilder.group({
      'data' : [this.email, [
        Validators.required,
        Validators.pattern('[a-z]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*.([a-z]{2,15})')
      ]]
    });
  }
  setUserProperties():void {
    this.userService.setEmail(this.email);
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/name');
  }
  previousStepper():void {
    this.router.navigateByUrl('register');
  }
}
