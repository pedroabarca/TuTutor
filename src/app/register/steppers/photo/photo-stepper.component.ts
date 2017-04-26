import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators }  from '@angular/forms';
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
  provider:number;

  ngOnInit() {
    this.subscribe();
  }
  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if(auth !== null) {
          this.provider = auth.provider;
          let image = this.userService.getPhotoUrl();
          if(image === undefined) {
            this.preview = this.setImage(auth);
            this.photo = this.preview;
          }
          else {
            if(typeof(image) === 'object')
              this.loadImage(image);
            else {
              this.preview = './assets/img/user_default.png';
              this.photo = './assets/img/user_default.png';
            }
          }
        } else {
          let image = this.userService.getPhotoUrl();
          if(typeof(image) === 'object')
            this.loadImage(image);
          else {
            this.preview = './assets/img/user_default.png';
            this.photo = './assets/img/user_default.png';
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
      return auth.auth.photoURL;
    else if(auth.provider === 3)
      return auth.auth.photoURL;
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
  }
  previousStepper():void {
    this.router.navigateByUrl('register/phone');
  }
  nextStepper():void {
    this.setUserProperties();
    if (this.provider === 2 || this.provider === 3) {
      this.userService.registerHasFinished();
    } else
      this.router.navigateByUrl('register/password');
  }
}
