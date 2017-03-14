import { Component } from '@angular/core';
import { AuthComponent } from '../shared/auth.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent extends AuthComponent { }
