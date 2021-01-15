import { NgModule } from '@angular/core';
import { ViewComponent } from './view/view.component';
import {SharedModule} from '../shared/shared.module';
import {TreviewRoutingModule} from './treview-routing.module';



@NgModule({
  declarations: [ViewComponent],
  imports: [
    TreviewRoutingModule,
    SharedModule
  ]
})
export class TreeviewModule { }
