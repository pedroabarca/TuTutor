import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { RegisterComponent } from './register.component';
import { IntroStepperComponent } from './steppers/intro/intro-stepper.component';
import { NameStepperComponent } from './steppers/name/name-stepper.component';
import { PhoneStepperComponent } from './steppers/phone/phone-stepper.component';
import { GenderStepperComponent } from './steppers/gender/gender-stepper.component';
import { EmailStepperComponent } from './steppers/email/email-stepper.component';
import { PhotoStepperComponent } from './steppers/photo/photo-stepper.component';
import { PasswordStepperComponent } from './steppers/password/password-stepper.component';

@NgModule({
  imports: [CommonModule, MdlModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [RegisterComponent, IntroStepperComponent, NameStepperComponent, GenderStepperComponent, PhoneStepperComponent, EmailStepperComponent, PhotoStepperComponent, PasswordStepperComponent],
  exports: [RegisterComponent],
  providers: []
})
export class RegisterModule { }
