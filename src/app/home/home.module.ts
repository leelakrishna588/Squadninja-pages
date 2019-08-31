import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import { SectionsModule } from '../sections/sections.module';
@NgModule({
  declarations: [HomeComponent],
  exports:[HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SectionsModule
  ]
})
export class HomeModule { }
 