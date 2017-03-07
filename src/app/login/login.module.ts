import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, MdlModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
