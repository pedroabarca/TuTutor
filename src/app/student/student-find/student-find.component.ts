import { Component } from '@angular/core';
import { StudentComponent } from '../student.component';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-student-find',
  templateUrl: './student-find.component.html',
  styleUrls: ['./student-find.component.css']
})
export class StudentFindComponent extends StudentComponent {

  tutors:FirebaseListObservable<any>;
  private filter:string;

  subscribe():void {
    this.authSubscription = this.angularFire.auth.subscribe(
      auth => {
        if(auth === null)
          this.router.navigateByUrl('');
        else {
          this.setUserMetaData(auth);
          this.getTutors();
        }
      }
    );
  }
  getTutors():void {
    this.tutors = this.angularFire.database.list('/users');
  }
  filterTutor():void {
    this.tutors = this.angularFire.database.list('/users', {
      query: {
        orderByChild: 'name',
        startAt: this.filter
      }
    });
  }
  onBlur(event):void {
    this.filterTutor();
  }
}
