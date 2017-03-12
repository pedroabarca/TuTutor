import { Component } from '@angular/core';
import { TutorComponent } from '../tutor.component';

@Component({
  selector: 'app-tutor-home',
  templateUrl: './tutor-home.component.html',
  styleUrls: ['./tutor-home.component.css']
})
export class TutorHomeComponent extends TutorComponent {

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
