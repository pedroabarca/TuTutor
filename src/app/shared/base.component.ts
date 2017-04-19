import { Component } from '@angular/core';
import { MdlSnackbarService } from 'angular2-mdl';

@Component({
  selector: 'app-base',
})

export class BaseComponent {

  errors = {};

  constructor(protected snackBar: MdlSnackbarService) {}

  showMessage(message:string):void {
    this.snackBar.showSnackbar({
      message: message,
    });
  }
  showErrorMessage(key:string):void {
    console.log(key);
    this.snackBar.showSnackbar({
      message: this.errors[key].value,
    });
  }

}