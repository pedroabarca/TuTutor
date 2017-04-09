import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IntroStepperComponent } from './register/steppers/intro/intro-stepper.component';
import { NameStepperComponent } from './register/steppers/name/name-stepper.component';
import { PhoneStepperComponent } from './register/steppers/phone/phone-stepper.component';
import { EmailStepperComponent } from './register/steppers/email/email-stepper.component';
import { GenderStepperComponent } from './register/steppers/gender/gender-stepper.component';
import { PhotoStepperComponent } from './register/steppers/photo/photo-stepper.component';
import { PasswordStepperComponent } from './register/steppers/password/password-stepper.component';
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
            path: '', component: IntroStepperComponent
          },
          {
            path: 'email', component: EmailStepperComponent
          },
          {
            path: 'name', component: NameStepperComponent
          },
          {
            path: 'gender', component: GenderStepperComponent
          },
          {
            path: 'phone', component: PhoneStepperComponent
          },
          {
            path: 'photo', component: PhotoStepperComponent
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
