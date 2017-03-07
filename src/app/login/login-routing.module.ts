import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/', component: LoginComponent }
    ])
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }