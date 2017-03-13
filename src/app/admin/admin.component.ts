import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserComponent } from '../shared/user.component';

@Component({
  selector: 'app-admin',
})

export class AdminComponent extends UserComponent {

  userInfoSubscription:Subscription;

  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if(auth === null)
          this.router.navigateByUrl('');
        else {
          this.checkUserPermissions(auth);
          this.setUserMetaData(auth);
        }
      }
    )
  }
  checkUserPermissions(auth:any):void {
    let url = '/users/' + auth.uid;
    let user = this.angularFire.database.object(url);
    this.userInfoSubscription = user.subscribe(snapshot => {
      if(!snapshot.is_admin) this.router.navigateByUrl('');
    });
  }
  unsubscribe():void {
    this.userInfoSubscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }
}
