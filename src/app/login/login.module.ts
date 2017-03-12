import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { LoginComponent } from './login.component';


@NgModule({
  imports: [CommonModule, FormsModule, MdlModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
