import { NgModule } from '@angular/core';
import {BooksRoutingModule} from './books-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ViewComponent} from './view/view.component';



@NgModule({
  declarations: [ViewComponent],
  imports: [
    SharedModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
