import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cell } from '../../../model/cell';

@Component({
  selector: 'app-normal-cell',
  templateUrl: './normal-cell.component.html',
  styleUrls: ['./normal-cell.component.css']
})
export class NormalCellComponent implements OnInit {

  @Input() cell: Cell;
  @Input() selected: boolean;
  @Output() cellSelected = new EventEmitter<Cell>();

  constructor() { }

  ngOnInit() {
  }

  selectCell() {
    this.cellSelected.emit(this.cell);
  }

}
