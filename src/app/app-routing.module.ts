import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FirstStepperComponent } from './register/steppers/first-stepper.component';
import { FirstNameStepperComponent } from './register/steppers/first-name-stepper.component';
import { LastNameStepperComponent } from './register/steppers/last-name-stepper.component';
import { EmailStepperComponent } from './register/steppers/email-stepper.component';
import { PasswordStepperComponent } from './register/steppers/password-stepper.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { TutorHomeComponent } from './tutor/tutor-home/tutor-home.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent,
        children: [
          {
            path: '', component: FirstStepperComponent
          },
          {
            path: 'first-name', component: FirstNameStepperComponent
          },
          {
            path: 'last-name', component: LastNameStepperComponent
          },
          {
            path: 'email', component: EmailStepperComponent
          },
          {
            path: 'password', component: PasswordStepperComponent
          }
        ]
      },
      { path: 'admin/home', component: AdminHomeComponent },
      { path: 'tutor/home', component: TutorHomeComponent },
      { path: 'student/home', component: StudentHomeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
