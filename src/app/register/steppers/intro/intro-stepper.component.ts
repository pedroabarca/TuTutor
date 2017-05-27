import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-stepper',
  templateUrl: './intro-stepper.component.html',
  styleUrls: ['./intro-stepper.component.css']
})
export class IntroStepperComponent {
  @Input('stepImg') stepImg: string;
  constructor(private router: Router) {
    this.stepImg = 'email.svg';
  }


  nextStepper(): void {
    this.router.navigateByUrl('register/email');
  }
}
