import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdlModule } from 'angular2-mdl';
import { RegisterComponent } from './register.component';
import { FirstStepperComponent } from './steppers/first-stepper.component';

@NgModule({
  imports: [CommonModule, MdlModule, RouterModule],
  declarations: [RegisterComponent, FirstStepperComponent],
  exports: [RegisterComponent]
})
export class RegisterModule { }
