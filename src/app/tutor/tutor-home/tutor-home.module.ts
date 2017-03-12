import { TutorHomeComponent } from './tutor-home.component';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MdlModule],
  declarations: [TutorHomeComponent],
  exports: [TutorHomeComponent]
})
export class TutorHomeModule { }
