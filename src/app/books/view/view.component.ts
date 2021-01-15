import {Component, OnInit} from '@angular/core';
import {BooksService} from '../services/books.service';
import {BooksColumnsService} from '../services/books-columns.service';
import {ColDef} from 'ag-grid-community';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {RemoveModalComponent} from '../components/remove-modal/remove-modal.component';
import {BookModalComponent} from '../components/book-modal/book-modal.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [BooksService, BooksColumnsService]
})
export class ViewComponent implements OnInit {

  columnDefs: ColDef[] = [];
  rows: any[] = [];

  gridOptions = {
    defaultColDef: {
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      filter: true,
      resizable: true,
    },
    domLayout: 'autoHeight',
    animateRows: true,
    context: {
      componentParent: this
    }
  };

  constructor(
    private readonly _dataService: BooksService,
    private readonly _columnService: BooksColumnsService,
    private readonly _modalService: NgbModal
  ) {
  }

  ngOnInit(): void {

    this._getData();
    this._getColumns();
  }

  openRemoveModal({id}: { id: number }) {
    const modal: NgbModalRef = this._modalService.open(RemoveModalComponent);

    modal.result.then(
      () => {
        this._dataService.removeBook(id).subscribe(() => {
          this._getData();
        });
      });
  }


  openAddModal() {
    const modal: NgbModalRef = this._modalService.open(BookModalComponent);

    modal.result.then(
      (payload: any) => {
        this._dataService.addBook(payload).subscribe(() => {
          this._getData();
        });
      });
  }

  openEditModal(book: any) {
    const modal: NgbModalRef = this._modalService.open(BookModalComponent);

    modal.componentInstance.modalData = book;

    modal.result.then(
      (payload: any) => {
        this._dataService.editBook(book.id, payload).subscribe(() => {
          this._getData();
        });
      });
  }

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }

  private _getData(): void {
    this._dataService.getBooks().subscribe((res) => {
      this.rows = res;
    });
  }

  private _getColumns(): void {
    this.columnDefs = this._columnService.getColumns();
  }
}
