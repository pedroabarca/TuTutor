import { Component } from '@angular/core';
import { StudentComponent } from '../student.component';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent extends StudentComponent { }
