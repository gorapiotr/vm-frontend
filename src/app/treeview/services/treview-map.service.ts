import {Injectable} from '@angular/core';
import {TreeItem, TreeviewItem} from 'ngx-treeview';
import {PositionElement} from '../models/treview.model';

@Injectable()
export class TreviewMapService {
  constructTree(rows: string[][]): TreeviewItem[] {


    //sasd

    rows = [
      ['a', 'a.a', 'a.a.a', 'a.a.a.a', 'a.a.a.a.a'],
      ['b', 'b.b', 'b.b.b', 'b.b.b.b', 'b.b.b.b.b'],
      ['', '', '', 'f.f', 'f.f.f'],
      ['c', 'c.c', '', '', ''],
      ['', 'c.d', '', '', ''],
      ['', 'c.e', 'c.e.e', '', '']
    ];

    console.log(JSON.stringify(this.listToTree(this.prepareTreeStructureAsArray(rows))));


    //Remove headers
    rows.shift();

    const tree: TreeItem[] = this.listToTree(this.prepareTreeStructureAsArray(rows));

    return this.treeToTreeviewTree(tree);
  }

  prepareTreeStructureAsArray(rows: string[][]): PositionElement[] {
    let positionsList: PositionElement[] = [];
    for (let i = 0; i < rows.length; i++) {
      if (!this.rowIsEmpty(rows[i])) {
        positionsList = positionsList.concat(this.prepareRow(rows, i));
      }
    }
    return positionsList;
  }

  rowIsEmpty(row: string[]): boolean {
    return row.filter(item => item !== '').length === 0;
  }

  prepareRow(rows: string[][], index: number): PositionElement[] {
    return this.prepareRowPositions(rows, index, rows[index].length - 1);
  }

  prepareRowPositions(rows: string[][], index: number, counter: number, branch: PositionElement[] = []): PositionElement[] {

    if (counter < 0) {
      return branch;
    }

    if (counter === 0 && rows[index][counter]) {
      branch.push(this.preparePositionElement(rows[index][counter], '0'));
      return branch;
    }

    if (rows[index][counter]) {
      const parentId: string = rows[index][counter - 1] ? rows[index][counter - 1] : this.findParent(rows, index, counter);
      branch.push(this.preparePositionElement(rows[index][counter], parentId));
    }

    return this.prepareRowPositions(rows, index, --counter, branch);
  }

  preparePositionElement(id: string, parentId: string): PositionElement {
    return {
      id: id,
      text: id,
      value: id,
      parentId: parentId,
      children: []
    } as PositionElement;
  }

  findParent(rows: string[][], index: number, counter: number): string {
    if (rows[index - 1][counter - 1]) {
      return rows[index - 1][counter - 1];
    } else {
      return this.findParent(rows, --index, counter);
    }
  }

  listToTree(list: PositionElement[]): TreeItem[] {
    const map: { [key: string]: number } = {};
    const roots: TreeItem[] = [];
    let node: PositionElement = {} as PositionElement;

    for (let i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
    }

    for (let i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId !== '0') {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }

    return roots;
  }

  treeToTreeviewTree(roots: TreeItem[]): TreeviewItem[] {
    return roots.map((item: TreeItem) => new TreeviewItem(item));
  }

}
