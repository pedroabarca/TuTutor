import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentFindComponent } from './student-find/student-find.component';

@NgModule({
  imports: [CommonModule, MdlModule, RouterModule, FormsModule],
  declarations: [StudentHomeComponent, StudentFindComponent],
  exports: [StudentHomeComponent]
})
export class StudentModule { }
