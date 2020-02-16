import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { SpreadSheetService } from '../../service/spread-sheet.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Cell } from '../../model/cell';

@Component({
  selector: 'app-spread-sheet',
  templateUrl: './spread-sheet.component.html',
  styleUrls: ['./spread-sheet.component.css']
})
export class SpreadSheetComponent implements OnInit {

  private tableFocused = false;

  @Input() selectedCell: Cell;
  @Output() cellSelected = new EventEmitter<Cell>();

  @HostListener('window:keydown', ['$event'])
  onKeyDown($event: KeyboardEvent) {
    if (this.tableFocused) {
      $event.preventDefault();
      this.moveCell($event.key);
    }
  }

  constructor(public ssService: SpreadSheetService) { }

  ngOnInit() {
  }

  onTableEnter() {
    this.tableFocused = true;
  }

  onTableLeave() {
    this.tableFocused = false;
  }

  onColumnDragEnded($event: CdkDragEnd, num: number) {
    this.ssService.addColumnWidth(num, $event.distance.x);
  }

  onRowDragEnded($event: CdkDragEnd, num: number) {
    this.ssService.addRowHeight(num, $event.distance.y);
  }

  selectCell(rowIndex: number, columnIndex: number) {
    if (rowIndex < 0 || columnIndex < 0) { return; }
    this.selectedCell = this.ssService.getCell(rowIndex, columnIndex);
    this.cellSelected.emit(this.selectedCell);
  }

  getFormattedText(rowIndex: number, columnIndex: number): string {
    const cell = this.ssService.getCell(rowIndex, columnIndex);
    return cell ? cell.formattedText : '';
  }

  isSelected(rowIndex: number, columnIndex: number): boolean {
    return this.selectedCell && this.selectedCell.isEqualRowAndColumn(rowIndex, columnIndex);
  }

  moveCell(key: string) {
    if (!this.selectedCell) { return; }
    let rowIndex = this.selectedCell.rowIndex;
    let columnIndex = this.selectedCell.columnIndex;
    switch (key) {
      case 'ArrowLeft': {
        this.selectCell(rowIndex, --columnIndex);
        break;
      }
      case 'ArrowUp': {
        this.selectCell(--rowIndex, columnIndex);
        break;
      }
      case 'ArrowRight': {
        this.selectCell(rowIndex, ++columnIndex);
        break;
      }
      case 'ArrowDown': {
        this.selectCell(++rowIndex, columnIndex);
        break;
      }
    }
  }
}
