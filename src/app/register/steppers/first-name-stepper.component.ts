import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdlModule } from 'angular2-mdl';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'first-name-stepper',
  templateUrl: './first-name-stepper.component.html',
  styleUrls: ['./first-name-stepper.component.css']
})

export class FirstNameStepperComponent implements OnInit {

  firstName:string;

  constructor(private router:Router, private userService:UserService) {
    this.firstName = '';
  }

  ngOnInit() {
    this.getUserProperties();
  }
  getUserProperties():void {
    this.firstName = this.userService.getFirstName();
  }
  setUserProperties():void {
    this.userService.setFirstName(this.firstName);
    this.userService.userHasChanged();
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/last-name');
  }
}
