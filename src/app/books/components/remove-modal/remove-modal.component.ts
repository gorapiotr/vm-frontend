import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.scss']
})
export class RemoveModalComponent implements OnInit {

  constructor(private readonly _activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  save(): void {
    this._activeModal.close();
  }

  dismiss(): void {
    this._activeModal.dismiss();
  }
}
