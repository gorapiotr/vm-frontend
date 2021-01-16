import {TreeItem} from 'ngx-treeview';

export interface PositionElement extends TreeItem {
  id: string;
  text: string;
  value: string;
  parentId: string;
  children: PositionElement[];
}
