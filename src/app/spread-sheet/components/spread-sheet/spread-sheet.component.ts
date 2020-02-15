import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpreadSheetService } from '../../service/spread-sheet.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Cell } from '../../model/cell';
import { Row } from '../../model/row';
import { Column } from '../../model/column';

@Component({
  selector: 'app-spread-sheet',
  templateUrl: './spread-sheet.component.html',
  styleUrls: ['./spread-sheet.component.css']
})
export class SpreadSheetComponent implements OnInit {

  @Input()
  selectedCell: Cell;

  @Output()
  cellSelected = new EventEmitter<Cell>();

  constructor(public ssService: SpreadSheetService) { }

  ngOnInit() {
  }

  onColumnDragEnded($event: CdkDragEnd, num: number) {
    this.ssService.addColumnWidth(num, $event.distance.x);
  }

  onRowDragEnded($event: CdkDragEnd, num: number) {
    this.ssService.addRowHeight(num, $event.distance.y);
  }

  selectCell(row: Row, column: Column) {
    this.selectedCell = this.ssService.getCell(row, column);
    this.cellSelected.emit(this.selectedCell);
  }

  isSelected(row: Row, column: Column): boolean {
    return this.selectedCell && this.selectedCell.isEqualRowAndColumn(row, column);
  }
}
