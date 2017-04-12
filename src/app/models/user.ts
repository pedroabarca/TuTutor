export class User {

  email:string;
  password:string;
  name:string;
  gender:string;
  phone:number;
  photo:string;
  isAdmin:boolean;
  isTutor:boolean;

  constructor() {
    this.isAdmin = false;
    this.isTutor = false;
  }
}