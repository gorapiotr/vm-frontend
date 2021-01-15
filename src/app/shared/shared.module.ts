import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgGridModule} from 'ag-grid-angular';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AgGridModule
  ]
})
export class SharedModule { }
