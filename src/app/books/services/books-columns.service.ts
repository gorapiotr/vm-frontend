import {ColDef} from 'ag-grid-community';
import {Injectable} from '@angular/core';
import {ActionsCellComponent} from '../atoms/actions-cell/actions-cell.component';
import {CategoriesCellComponent} from '../atoms/categories-cell/categories-cell.component';

@Injectable()
export class BooksColumnsService {
  getColumns(): ColDef[] {
    return [
      {
        headerName: 'Akcje',
        minWidth: 100,
        maxWidth: 100,
        pinned: 'left',
        resizable: false,
        sortable: false,
        cellRendererFramework: ActionsCellComponent
      },
      {
        headerName: 'Nazwa',
        field: 'name',
        width: 30
      },
      {
        headerName: 'ISBN',
        field: 'isbn',
        width: 20,
      },
      {
        headerName: 'Kategorie',
        field: 'categories',
        width: 20,
        cellRendererFramework: CategoriesCellComponent
      }
    ];
  }
}
