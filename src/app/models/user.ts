export class User {

  email:string;
  password:string;
  firstName:string;
  lastName:string;
  phone:number;
  photoUrl:string;
  isAdmin:boolean;
  isTutor:boolean;

  constructor() {
    this.isAdmin = false;
    this.isTutor = false;
  }
}