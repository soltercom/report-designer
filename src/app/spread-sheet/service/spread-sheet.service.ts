import { Injectable } from '@angular/core';
import { Row } from '../model/row';
import { Column } from '../model/column';
import { Cell } from '../model/cell';

@Injectable({
  providedIn: 'root'
})
export class SpreadSheetService {

  static readonly MAX_COL = 200;
  static readonly MAX_ROW = 200;
  static readonly ROW_HEADER_WIDTH = 30;
  static readonly COL_HEADER_HEIGHT = 20;

  private readonly _rows: Row[] = [];
  private readonly _columns: Column[] = [];
  private readonly _cells: Cell[] = [];

  constructor() {
    for (let i = 1; i <= SpreadSheetService.MAX_COL; i++) {
      this._columns.push(new Column(i, 100));
    }
    for (let i = 1; i < SpreadSheetService.MAX_ROW; i++) {
      this._rows.push(new Row(i, 20));
    }
    for (let row = 1; row <= SpreadSheetService.MAX_ROW; row++) {
      for (let col = 1; col <= SpreadSheetService.MAX_COL; col++) {
        this._cells.push(new Cell(this.getRow(row), this.getColumn(col)));
      }
    }
  }

  get columns() {
    return this._columns;
  }
  get rows() {
    return this._rows;
  }

  getRow(num: number): Row {
    return this.rows[num - 1];
  }
  getColumn(num: number): Column {
    return this.columns[num - 1];
  }

  addColumnWidth(num: number, width: number) {
    this.columns[num - 1].width += width;
  }

  addRowHeight(num: number, height: number) {
    this.rows[num - 1].height += height;
  }

  getCell(row: Row, column: Column): Cell {
    const index = this._cells.findIndex((cell) => cell.name === Cell.nameTemplate(row, column));
    if (index >= -1) {
      return this._cells[index];
    } else {
      return null;
    }
  }

  getColumnDragPosition(num: number): { x: number, y: number } {
    let res = SpreadSheetService.ROW_HEADER_WIDTH + 1.2;
    for (let i = 1; i <= Math.min(num, this._columns.length); i++) {
      res += (this._columns[i - 1].width + .8);
    }
    return {x: res, y: 0};
  }

  getRowDragPosition(num: number): {x: number, y: number } {
    let res = SpreadSheetService.COL_HEADER_HEIGHT;
    for (let i = 1; i <= Math.min(num, this._rows.length); i++) {
      res += (this._rows[i - 1].height + .8);
    }
    return {x: 0, y: res};
  }
}

