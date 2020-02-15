import { Injectable } from '@angular/core';
import { Row } from '../model/row';
import { Column } from '../model/column';
import { Cell, CellProps } from '../model/cell';
import { Position } from '../model/position';

@Injectable({
  providedIn: 'root'
})
export class SpreadSheetService {

  static readonly MAX_COL = 200;
  static readonly MAX_ROW = 200;
  static readonly ROW_HEADER_WIDTH = 30;
  static readonly COL_HEADER_HEIGHT = 20;

  private readonly rows: Row[] = [];
  private readonly columns: Column[] = [];
  private readonly cells: Cell[] = [];

  constructor() {
    for (let i = 1; i <= SpreadSheetService.MAX_COL; i++) {
      this.columns.push(new Column(i, 100));
    }
    for (let i = 1; i < SpreadSheetService.MAX_ROW; i++) {
      this.rows.push(new Row(i, 20));
    }
    for (const row of this.rows) {
      for (const col of this.columns) {
        this.cells.push(Cell.emptyCell(row, col));
      }
    }
  }

  addColumnWidth(num: number, width: number) {
    this.columns[num - 1].width += width;
  }

  addRowHeight(num: number, height: number) {
    this.rows[num - 1].height += height;
  }

  getCell(row: Row, column: Column): Cell {
    const position = new Position(row, column);
    const index = this.cells.findIndex((cell) => Position.isEqual(cell.position, position));
    if (index >= -1) {
      return this.cells[index];
    } else {
      return null;
    }
  }

  getColumnDragPosition(num: number): { x: number, y: number } {
    let res = SpreadSheetService.ROW_HEADER_WIDTH + 1.2;
    for (let i = 1; i <= Math.min(num, this.columns.length); i++) {
      res += (this.columns[i - 1].width + .8);
    }
    return {x: res, y: 0};
  }

  getRowDragPosition(num: number): {x: number, y: number } {
    let res = SpreadSheetService.COL_HEADER_HEIGHT;
    for (let i = 1; i <= Math.min(num, this.rows.length); i++) {
      res += (this.rows[i - 1].height + .8);
    }
    return {x: 0, y: res};
  }

  updateCell(cell: Cell, props: CellProps): Cell {
    const newCell = Cell.updateCell(cell, props);
    const index = this.cells.findIndex((item) => Position.isEqual(item.position, cell.position));
    if (index >= -1) {
      return this.cells[index] = newCell;
    }
    return newCell;
  }

}

