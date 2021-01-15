import { NgModule } from '@angular/core';
import {BooksRoutingModule} from './books-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ViewComponent} from './view/view.component';
import { ActionsCellComponent } from './atoms/actions-cell/actions-cell.component';
import { CategoriesCellComponent } from './atoms/categories-cell/categories-cell.component';
import { RemoveModalComponent } from './components/remove-modal/remove-modal.component';
import {BooksDictionariesService} from './services/books-dictionaries.service';
import { BookModalComponent } from './components/book-modal/book-modal.component';



@NgModule({
  declarations: [ViewComponent, ActionsCellComponent, CategoriesCellComponent, RemoveModalComponent, BookModalComponent],
  imports: [
    SharedModule,
    BooksRoutingModule
  ],
  providers: [BooksDictionariesService]
})
export class BooksModule { }
