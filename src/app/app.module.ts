import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD2cLxr5v0oASEZcasQ1Bh4eUhbxZ8_9N4",
  authDomain: "tutorias-56a56.firebaseapp.com",
  databaseURL: "https://tutorias-56a56.firebaseio.com",
  storageBucket: "tutorias-56a56.appspot.com",
  messagingSenderId: "267431761911"
};

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, MdlModule, AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
