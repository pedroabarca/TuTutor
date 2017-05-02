import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserComponent } from '../shared/user.component';

@Component({
  selector: 'app-student',
})

export class StudentComponent extends UserComponent implements OnInit {

  ngOnInit():void {
    this.subscribe();
  }
  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if(auth === null)
          this.router.navigateByUrl('');
        else
          this.setUserMetaData(auth);
      }
    );
  }
}
