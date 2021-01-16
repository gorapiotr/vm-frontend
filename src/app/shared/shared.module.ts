import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgGridModule} from 'ag-grid-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbAlertModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgSelectModule} from '@ng-select/ng-select';
import {TreeviewModule} from 'ngx-treeview';
import {Papa} from 'ngx-papaparse';
import {ServerErrorsInterceptor} from './interceptors/server-errors.interceptor';
import {MainInterceptor} from './interceptors/main.interceptor';
import {HandleErrorService} from './services/handle-error.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    TreeviewModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    NgbAlertModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    TreeviewModule
  ],
  providers: [
    Papa,
    NgbModal,
    HandleErrorService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ServerErrorsInterceptor,
    multi:true
    },
    {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}]
})
export class SharedModule { }
