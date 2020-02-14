import { Column } from './column';
import { Row } from './row';

export enum CellType {
  Text,
  Parameter
}

export class Cell {
  private readonly _row: Row;
  private readonly _column: Column;
  private _text: string;
  private _type: CellType;

  public static nameTemplate = (row: Row, column: Column) => `${row.num}:${column.num}`;
  public static isEqual = (cell1: Cell, cell2: Cell) => cell1.name === cell2.name;

  get name() {
    return Cell.nameTemplate(this._row, this._column);
  }

  constructor(row: Row, column: Column) {
    this._row = row;
    this._column = column;
    this._text = '';
    this._type = CellType.Text;
  }

  isEqualRowAndColumn(row: Row, column: Column): boolean {
    return this.name === Cell.nameTemplate(row, column);
  }

}
