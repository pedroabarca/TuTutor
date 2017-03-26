import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { MdlModule } from 'angular2-mdl';
import { TutorHomeComponent } from './tutor-home.component';


@NgModule({
  imports: [CommonModule, MdlModule, CalendarModule.forRoot()],
  declarations: [TutorHomeComponent],
  exports: [TutorHomeComponent],
  providers: []
})
export class TutorHomeModule { }
