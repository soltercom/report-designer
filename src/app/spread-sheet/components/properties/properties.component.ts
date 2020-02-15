import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cell, CellProps } from '../../model/cell';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  @Input() cell: Cell;
  @Output() cellUpdated = new EventEmitter<CellProps>();

  constructor() { }

  ngOnInit() {
  }

  onCellUpdated(props: CellProps) {
    this.cellUpdated.emit(props);
  }

}
