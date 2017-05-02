import { Component } from '@angular/core';
import { MdlSnackbarService } from 'angular2-mdl';

@Component({
  selector: 'app-base',
})

export class BaseComponent {

  errors = {};

  constructor(protected snackBar: MdlSnackbarService) {}

  showErrorMessage(key:string):void {
    this.snackBar.showSnackbar({
      message: this.errors[key].value,
    });
  }
}