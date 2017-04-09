import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase';
import { MdlModule } from 'angular2-mdl';
import { StepperComponent } from '../../../shared/stepper.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'photo-stepper',
  templateUrl: './photo-stepper.component.html',
  styleUrls: ['./photo-stepper.component.css']
})

export class PhotoStepperComponent extends StepperComponent implements OnInit {

  @ViewChild('photo') photoElement:ElementRef; 
  photo:string;
  preview:string;

  ngOnInit() {
    this.subscribe();
  }
  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if(auth !== null) {
          let image = this.userService.getPhotoUrl();
          if(image === undefined) {
            this.preview = this.setImage(auth);
            this.photo = this.preview;
          }
          else {
            if(typeof(image) === 'object')
              this.loadImage(image);
          }
        }
      }
    );
  }
  setUserProperties():void {
    this.userService.setPhotoUrl(this.photo);
  }
  setImage(auth:any):any {
    if(auth.provider === 2)
      return auth.facebook.photoURL;
    else if(auth.provider === 3)
      return auth.google.photoURL;
    else
      return './assets/img/user_default.png';
  }
  loadImage(file:any):void {
    let reader:FileReader = new FileReader();
    reader.onloadend = () => {
      this.preview = reader.result;
    }
    reader.readAsDataURL(file);
  }
  onChange(event):void {
    this.photo = event.srcElement.files[0];
    this.userService.setPhotoUrl(this.photo);
    let reader:FileReader = new FileReader();
    reader.onloadend = () => {
      this.preview = reader.result;
    }
    reader.readAsDataURL(event.srcElement.files[0]);
    console.log(this.photo);
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
    this.router.navigateByUrl('register/phone');

  }
  nextStepper():void {
    this.setUserProperties();
    this.router.navigateByUrl('register/password');
  }
}
