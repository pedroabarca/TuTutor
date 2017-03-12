import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { TutorHomeComponent } from './tutor/tutor-home/tutor-home.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'admin/home', component: AdminHomeComponent },
      { path: 'tutor/home', component: TutorHomeComponent },
      { path: 'student/home', component: StudentHomeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
