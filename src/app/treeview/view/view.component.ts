import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {TreeviewConfig, TreeviewItem} from 'ngx-treeview';
import {Papa} from 'ngx-papaparse';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [
    BookService
  ]
})
export class ViewComponent implements OnInit {
  dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 500
  });

  constructor(
    private service: BookService,
    private papa: Papa
  ) { }

  previewFile(files: File[]) {

      this.papa.parse(files[0],{
        complete: (result) => {
          console.log('Parsed: ', result?.data);
        }
      });
  }

  ngOnInit(): void {
    this.items = this.service.getBooks();
  }

  onFilterChange(value: string): void {
    console.log('filter:', value);
  }
}
