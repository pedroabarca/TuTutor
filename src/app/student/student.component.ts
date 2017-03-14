import { Component } from '@angular/core';
import { UserComponent } from '../shared/user.component';

@Component({
  selector: 'app-student',
})

export class StudentComponent extends UserComponent {

  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if(auth === null)
          this.router.navigateByUrl('');
        else {
          this.setUserMetaData(auth);
        }
      }
    );
  }
}
