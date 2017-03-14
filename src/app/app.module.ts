import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { MdlModule } from 'angular2-mdl';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Import our classes modules */
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { AdminHomeModule } from './admin/admin-home/admin-home.module';
import { TutorHomeModule } from './tutor/tutor-home/tutor-home.module';
import { StudentHomeModule } from './student/student-home/student-home.module';

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyD2cLxr5v0oASEZcasQ1Bh4eUhbxZ8_9N4',
  authDomain: 'tutorias-56a56.firebaseapp.com',
  databaseURL: 'https://tutorias-56a56.firebaseio.com',
  storageBucket: 'tutorias-56a56.appspot.com',
  messagingSenderId: '267431761911'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, HttpModule, MdlModule, AppRoutingModule, LoginModule, RegisterModule, AdminHomeModule, TutorHomeModule, StudentHomeModule, AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
