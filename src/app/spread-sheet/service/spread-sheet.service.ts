import { Injectable } from '@angular/core';
import { Row } from '../model/row';
import { Column } from '../model/column';

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

  constructor() {
    for (let i = 1; i <= SpreadSheetService.MAX_COL; i++) {
      this._columns.push(new Column(i, 100));
    }
    for (let i = 1; i < SpreadSheetService.MAX_ROW; i++) {
      this._rows.push(new Row(i, 20));
    }
  }

  get columns() {
    return this._columns;
  }
  get rows() {
    return this._rows;
  }

  addColumnWidth(num: number, width: number) {
    this._columns[num - 1].width += width;
  }

  getColumnDragPosition(num: number): { x: number, y: number } {
    let res = SpreadSheetService.ROW_HEADER_WIDTH + 1.2;
    for (let i = 1; i <= Math.min(num, this._columns.length); i++) {
      res += (this._columns[i - 1].width + .8);
    }
    return {x: res, y: 0};
  }

}

