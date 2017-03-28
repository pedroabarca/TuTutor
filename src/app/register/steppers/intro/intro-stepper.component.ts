import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'intro-stepper',
  templateUrl: './intro-stepper.component.html',
  styleUrls: ['./intro-stepper.component.css']
})

export class IntroStepperComponent {

  constructor(private router:Router) {}

  nextStepper():void {
    this.router.navigateByUrl('register/email');
  }
}
