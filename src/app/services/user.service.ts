import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private isFinished = new Subject<User>();
  private isChanged = new Subject<User>();
  isFinished$ = this.isFinished.asObservable();
  isChanged$ = this.isFinished.asObservable();
  user:User = new User();

  constructor() {}

  registerHasFinished():void {
    this.isFinished.next(this.user);
  }
  propertyHasCHanged():void {
  }
  setEmail(email:string):void {
    this.user.email = email;
    this.propertyHasCHanged();
  }
  getEmail():string {
    return this.user.email;
  }
  setPassword(password:string):void {
    this.user.password = password;
    this.propertyHasCHanged();
  }
  getPassword():string {
    return this.user.password;
  }
  setName(name:string):void {
    this.user.name = name;
    this.propertyHasCHanged();
  }
  getName():string {
    return this.user.name;
  }
  setGender(gender:string):void {
    this.user.gender = gender;
    this.propertyHasCHanged();
  }
  getLastName():string {
    return this.user.gender;
  }
  setPhone(phone:number):void {
    this.user.phone = phone;
    this.propertyHasCHanged();
  }
  getPhone():number {
    return this.user.phone;
  }
  setPhotoUrl(photoUrl:string):void {
    this.user.photo = photoUrl;
    this.propertyHasCHanged();
  }
  getPhotoUrl():string {
    return this.user.photo;
  }
  setIsAdmin(isAdmin:boolean):void {
    this.user.isAdmin = isAdmin;
    this.propertyHasCHanged();
  }
  getIsAdmin():boolean {
    return this.user.isAdmin;
  }
  setIsTutor(isTutor:boolean):void {
    this.user.isTutor = isTutor;
    this.propertyHasCHanged();
  }
  getIsTutor():boolean {
    return this.user.isTutor;
  }
}
