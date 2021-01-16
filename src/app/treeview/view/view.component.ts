import {Component, OnInit, ViewChild} from '@angular/core';
import {TreeviewConfig, TreeviewItem} from 'ngx-treeview';
import {Papa, ParseResult} from 'ngx-papaparse';
import {Subject} from 'rxjs';
import {TreviewMapService} from '../services/treview-map.service';
import {BaseComponentClass} from '../../shared/classes/base-component.class';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [
    TreviewMapService,
  ]
})
export class ViewComponent extends BaseComponentClass implements OnInit {
  @ViewChild('uploads') uploads: Component;
  items: TreeviewItem[];
  values: number[];
  parsed$: Subject<string[][]> = new Subject<string[][]>();
  config: TreeviewConfig = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 500
  });

  constructor(
    private readonly _papa: Papa,
    private readonly _treviewMapService: TreviewMapService,
  ) {
    super();
  }

  previewFile(files: FileList | null): void {
    if(files && files[0]) {
      this._parseCsvToArray(files[0] as File);
    }
  }

  ngOnInit(): void {
    this._subscribeToParseCsv();
  }

  onFilterChange(value: string): void {
    console.log('filter:', value);
  }

  private _parseCsvToArray(file: File): void {
    this._papa.parse(file,{
      complete: (result: ParseResult) => {
        this.parsed$.next(result?.data as string[][]);
      }
    });
  }

  private _subscribeToParseCsv(): void {
    this.parsed$
      .pipe(
        takeUntil(this.finish$)
      )
      .subscribe((res: string[][]) => {
        this.items = this._treviewMapService.constructTree((res));
      });
  }
}
