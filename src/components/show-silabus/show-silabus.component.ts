import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface Course2Node {
  name: string;
  children?: Course2Node[];
}

const TREE_DATA: Course2Node[] = [
  {
    name: 'Mathematics',
    children: [{name: 'plas'}, {name: 'modole'}, {name: 'grafs'}],
  },
  {
    name: 'Programming',
    children: [
      {
        name: 'C++',
        children: [{name: 'oop'}, {name: 'string'}],
      },
      {
        name: 'Angular',
        children: [{name: 'forms'}, {name: 'material'}],
      },
    ],
  },
  
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-show-silabus',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule,CommonModule],
  templateUrl: './show-silabus.component.html',
  styleUrl: './show-silabus.component.css'
})
export class ShowSilabusComponent {
private _transformer = (node: Course2Node, level: number) => {
  return {
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level: level,
  };
};

treeControl = new FlatTreeControl<ExampleFlatNode>(
  node => node.level,
  node => node.expandable,
);

treeFlattener = new MatTreeFlattener(
  this._transformer,
  node => node.level,
  node => node.expandable,
  node => node.children,
);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

constructor() {
  this.dataSource.data = TREE_DATA;
}

hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
