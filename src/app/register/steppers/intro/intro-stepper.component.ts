import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-stepper',
  templateUrl: './intro-stepper.component.html',
  styleUrls: ['./intro-stepper.component.css']
})

export class IntroStepperComponent {
  @Input('stepImg') img;
  constructor(private router: Router) {
    this.img = 'email.svg';
  }

  nextStepper(): void {
    this.router.navigateByUrl('register/email');
  }
}
