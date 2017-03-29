import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import * as firebase from 'firebase';
import { MdlModule } from 'angular2-mdl';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'photo-stepper',
  templateUrl: './photo-stepper.component.html',
  styleUrls: ['./photo-stepper.component.css']
})

export class PhotoStepperComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;
  phone:number;
  photo:string;

  constructor(private router:Router, private userService:UserService, private formBuilder:FormBuilder) {
    this.photo = './assets/img/user_default.png'
  }

  ngOnInit() {
    this.buildForm();
    this.getUserProperties();
  }
  buildForm():void {
  }
  getUserProperties():void {
    this.firstName = this.userService.getFirstName();
    this.lastName = this.userService.getLastName();
    this.email = this.userService.getEmail();
    this.phone = this.userService.getPhone();
  }
  setUserProperties():void {
    this.userService.setPhotoUrl(this.photo);
    //this.userService.registerHasFinished();
  }
  onChange(event):void {
    this.photo = event.srcElement.files[0].name;
    let reader:FileReader = new FileReader();
    reader.onloadend = (image) => {
      this.photo = reader.result;
      console.log(this.photo);
    }
    reader.readAsDataURL(event.srcElement.files[0]);
  }
  previousStepper():void {
    this.router.navigateByUrl('register/last-name');
  }
  nextStepper():void {
    //this.setUserProperties();
    //this.router.navigateByUrl('register/email');
  }
}
