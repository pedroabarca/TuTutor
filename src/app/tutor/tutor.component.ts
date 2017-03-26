import { Component } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { Subscription } from 'rxjs/Subscription';
import { UserComponent } from '../shared/user.component';

@Component({
  selector: 'app-admin',
})

export class TutorComponent extends UserComponent {

  userInfoSubscription:Subscription;
  view:string = 'month';
  viewDate: Date = new Date();
  events = [];

  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if(auth === null)
          this.router.navigateByUrl('');
        else {
          this.verifyUserData(auth);
          this.setUserMetaData(auth);
        }
      }
    )
  }
  verifyUserData(auth:any):void {
    let url = '/users/' + auth.uid;
    let user = this.angularFire.database.object(url);
    this.userInfoSubscription = user.subscribe(snapshot => {
      if(!snapshot.isTutor) this.router.navigateByUrl('');
    });
  }
  unsubscribe():void {
    this.userInfoSubscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }
}
