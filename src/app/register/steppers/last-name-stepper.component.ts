import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdlModule } from 'angular2-mdl';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'last-name-stepper',
  templateUrl: './last-name-stepper.component.html',
  styleUrls: ['./last-name-stepper.component.css']
})

export class LastNameStepperComponent implements OnInit {

  firstName:string;
  lastName:string;

  constructor(private router:Router, private userService:UserService) {}

  ngOnInit() {
    this.getUserProperties();
  }
  getUserProperties():void {
    this.firstName = this.userService.getFirstName();
    this.lastName = this.userService.getLastName();
  }
  setUserProperties():void {
    this.userService.setLastName(this.lastName);
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/email');
  }
}
