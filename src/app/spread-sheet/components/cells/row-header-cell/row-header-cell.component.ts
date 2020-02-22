import { Component, Input, OnInit } from '@angular/core';
import { Row } from '../../../model/row';

@Component({
  selector: 'app-row-header-cell',
  templateUrl: './row-header-cell.component.html',
  styleUrls: ['./row-header-cell.component.css']
})
export class RowHeaderCellComponent implements OnInit {

  @Input() row: Row;

  constructor() { }

  ngOnInit() {
  }

}
