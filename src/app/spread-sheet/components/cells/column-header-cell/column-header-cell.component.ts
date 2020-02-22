import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../../../model/column';

@Component({
  selector: 'app-column-header-cell',
  templateUrl: './column-header-cell.component.html',
  styleUrls: ['./column-header-cell.component.css']
})
export class ColumnHeaderCellComponent implements OnInit {

  @Input() column: Column;

  constructor() { }

  ngOnInit() {
  }

}
