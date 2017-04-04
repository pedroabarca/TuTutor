import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MdlModule } from 'angular2-mdl';
import { StepperComponent } from '../../../shared/stepper.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'email-stepper',
  templateUrl: './email-stepper.component.html',
  styleUrls: ['./email-stepper.component.css']
})

export class EmailStepperComponent extends StepperComponent implements OnInit, OnDestroy {

  email:string;

  ngOnInit() {
    this.subscribe();
    this.buildForm();
  }
  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if(auth !== null)
          this.email = auth.auth.email;
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
    this.router.navigateByUrl('register/first-name');
  }
  previousStepper():void {
    this.router.navigateByUrl('register');
  }
}
