import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, MdlModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
