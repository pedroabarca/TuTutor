import { AdminHomeComponent } from './admin-home.component';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MdlModule],
  declarations: [AdminHomeComponent],
  exports: [AdminHomeComponent]
})
export class AdminHomeModule { }
