import { StudentHomeComponent } from './student-home.component';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MdlModule],
  declarations: [StudentHomeComponent],
  exports: [StudentHomeComponent]
})
export class StudentHomeModule { }
