import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { RegisterComponent } from './register.component';
import { IntroStepperComponent } from './steppers/intro/intro-stepper.component';
import { NameStepperComponent } from './steppers/name/name-stepper.component';
import { SurNameStepperComponent } from './steppers/surname/surname-stepper.component';
import { PhoneStepperComponent } from './steppers/phone/phone-stepper.component';
import { EmailStepperComponent } from './steppers/email/email-stepper.component';
import { PasswordStepperComponent } from './steppers/password/password-stepper.component';
import { UserService } from '../services/user.service';

@NgModule({
  imports: [CommonModule, MdlModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [RegisterComponent, IntroStepperComponent, NameStepperComponent, SurNameStepperComponent, PhoneStepperComponent, EmailStepperComponent, PasswordStepperComponent],
  exports: [RegisterComponent],
  providers: [UserService]
})
export class RegisterModule { }
