import { Injectable } from '@angular/core';
import { Row } from '../model/row';
import { Column } from '../model/column';
import { Cell, CellProps } from '../model/cell';

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
  private readonly cells: Cell[][] = [];

  get rows() {
    return this._rows;
  }
  get columns() {
    return this._columns;
  }
  get rowWidthPx() {
    return `${this._columns.reduce((acc, cur) => acc + cur.width, 0)}px`;
  }

  constructor() {
    for (let i = 1; i <= SpreadSheetService.MAX_ROW; i++) {
      this.rows.push(new Row(i, 20));
    }
    for (let i = 1; i <= SpreadSheetService.MAX_COL; i++) {
      this.columns.push(new Column(i, 100));
    }
    for (let i = 0; i < SpreadSheetService.MAX_ROW; i++) {
      this.cells[i] = [];
      for (let j = 0; j < SpreadSheetService.MAX_COL; j++) {
        this.cells[i].push(Cell.createCell(this.rows[i], this.columns[j]));
      }
    }
  }

  addColumnWidth(num: number, width: number) {
    this.columns[num - 1].width += width;
  }

  addRowHeight(num: number, height: number) {
    this.rows[num - 1].height += height;
  }

  getCell(rowIndex: number, columnIndex: number): Cell {
    return this.cells[rowIndex][columnIndex];
  }

  getColumnDragPosition(num: number): { x: number, y: number } {
    let res = SpreadSheetService.ROW_HEADER_WIDTH;
    for (let i = 1; i <= Math.min(num, this.columns.length); i++) {
      res += this.columns[i - 1].width;
    }
    return {x: res, y: 0};
  }

  getRowDragPosition(num: number): {x: number, y: number } {
    let res = SpreadSheetService.COL_HEADER_HEIGHT;
    for (let i = 1; i <= Math.min(num, this.rows.length); i++) {
      res += this.rows[i - 1].height;
    }
    return {x: 0, y: res};
  }

  updateCell(cell: Cell, props: CellProps): Cell {
    const newCell = Cell.updateProps(cell, props);
    this.cells[cell.rowIndex][cell.columnIndex] = newCell;
    return newCell;
  }

}

