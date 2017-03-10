import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MdlModule } from 'angular2-mdl';

@NgModule({
  imports: [CommonModule, FormsModule, LoginRoutingModule, MdlModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
