import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

export abstract class BaseCellClass implements ICellRendererAngularComp{
  parmas: ICellRendererParams;

  agInit(params: ICellRendererParams): void {
    this.parmas = params;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
