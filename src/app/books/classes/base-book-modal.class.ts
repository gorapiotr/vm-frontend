import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Directive, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BooksDictionariesService} from '../services/books-dictionaries.service';
import {Observable} from 'rxjs';

@Directive()
export abstract class BaseBookModalClass implements OnInit{

  modalData: any;
  form: FormGroup;
  categories$: Observable<any>;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _activeModal: NgbActiveModal,
    private readonly _booksDictionariesService: BooksDictionariesService
    ) {
  }

  ngOnInit(): void {
    this._createForm();
    this.categories$ = this._booksDictionariesService.getCategories()
  }

  dismiss(): void {
    this._activeModal.dismiss();
  }

  save(): void {
    this._activeModal.close(this.form.getRawValue());
  }

  private _createForm() {
    this.form = this._fb.group({
      name: [this.modalData?.name ?? null, [Validators.required]],
      isbn: [this.modalData?.isbn ?? null, [Validators.required]],
      categories: [this.modalData?.categories.map((item: any) => item.id) ?? null]
    });
  }
}
