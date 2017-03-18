import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdlModule } from 'angular2-mdl';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'password-stepper',
  templateUrl: './password-stepper.component.html',
  styleUrls: ['./password-stepper.component.css']
})

export class PasswordStepperComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;
  password:string;

  constructor(private router:Router, private userService:UserService) {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }

  ngOnInit() {
    this.getUserProperties();
  }
  getUserProperties():void {
    this.firstName = this.userService.getFirstName();
    this.lastName = this.userService.getLastName();
    this.email = this.userService.getEmail();
    this.password = this.userService.getPassword();
  }
  setUserProperties():void {
    this.userService.setPassword(this.password);
    this.userService.userHasChanged();
  }
  nextStepper():void {
    this.setUserProperties();
    //this.router.navigateByUrl('register/email');
  }
}
