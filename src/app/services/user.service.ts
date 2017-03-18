import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private userChange = new Subject<User>();
  userChange$ = this.userChange.asObservable();
  user:User;

  constructor() {
    this.user = new User();
  }

  userHasChanged():void {
    this.userChange.next(this.user);
  }
  setEmail(email:string):void {
    this.user.email = email;
  }
  getEmail():string {
    return this.user.email;
  }
  setPassword(password:string):void {
    this.user.password = password;
  }
  getPassword():string {
    return this.user.password;
  }
  setFirstName(firstName:string):void {
    this.user.firstName = firstName;
  }
  getFirstName():string {
    return this.user.firstName;
  }
  setLastName(lastName:string):void {
    this.user.lastName = lastName;
  }
  getLastName():string {
    return this.user.lastName;
  }
  setPhotoUrl(photoUrl:string):void {
    this.user.photoUrl = photoUrl;
  }
  getPhotoUrl():string {
    return this.user.photoUrl;
  }
  setIsAdmin(isAdmin:boolean):void {
    this.user.isAdmin = isAdmin;
  }
  getIsAdmin():boolean {
    return this.user.isAdmin;
  }
  setIsTutor(isTutor:boolean):void {
    this.user.isTutor = isTutor;
  }
  getIsTutor():boolean {
    return this.user.isTutor;
  }

}
