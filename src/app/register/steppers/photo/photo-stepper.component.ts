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

  photo:string;
  preview:string;

  constructor(private router:Router, private userService:UserService, private formBuilder:FormBuilder) {
    this.preview = './assets/img/user_default.png';
  }

  ngOnInit() {
    this.buildForm();
    this.getUserProperties();
  }
  buildForm():void {
  }
  getUserProperties():void {
  }
  setUserProperties():void {
    this.userService.setPhotoUrl(this.photo);
  }
  onChange(event):void {
    this.photo = event.srcElement.files[0];
    let reader:FileReader = new FileReader();
    reader.onloadend = () => {
      this.preview = reader.result;
    }
    reader.readAsDataURL(event.srcElement.files[0]);
    /*let storageRef = firebase.storage().ref('images');
    storageRef.put(this.photo)
    .then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    })
    .catch(function(error) {
      console.log('Error!!');
      console.log(error);
    });*/
  }
  previousStepper():void {
    this.router.navigateByUrl('register/last-name');
  }
  uploadPhoto():void {
  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/password');
  }
}
