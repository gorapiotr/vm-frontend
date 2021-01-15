import { Component, OnInit } from '@angular/core';
import {BaseCellClass} from '../../../shared/classes/base-cell.class';

@Component({
  selector: 'app-actions-cell',
  templateUrl: './actions-cell.component.html',
  styleUrls: ['./actions-cell.component.scss']
})
export class ActionsCellComponent extends BaseCellClass {

  openRemoveModal(): void {
    this.parmas.context.componentParent.openRemoveModal(this.parmas.data);
  }

  openEditModal(): void {
    this.parmas.context.componentParent.openEditModal(this.parmas.data);
  }
}
