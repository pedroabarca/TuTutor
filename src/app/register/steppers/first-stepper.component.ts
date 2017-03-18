import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'first-stepper',
  templateUrl: './first-stepper.component.html',
  styleUrls: ['./first-stepper.component.css']
})

export class FirstStepperComponent {

  constructor(private router:Router) {}

  nextStepper():void {
    this.router.navigateByUrl('register/first-name');
  }
}
