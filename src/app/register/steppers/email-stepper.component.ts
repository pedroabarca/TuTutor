import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdlModule } from 'angular2-mdl';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'email-stepper',
  templateUrl: './email-stepper.component.html',
  styleUrls: ['./email-stepper.component.css']
})

export class EmailStepperComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;

  constructor(private router:Router, private userService:UserService) {}

  ngOnInit() {
    this.getUserProperties();
  }
  getUserProperties():void {
    this.firstName = this.userService.getFirstName();
    this.lastName = this.userService.getLastName();
    this.email = this.userService.getEmail();
  }
  setUserProperties():void {
    this.userService.setEmail(this.email);
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/password');
  }
}
