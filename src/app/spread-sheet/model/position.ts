import { Row } from './row';
import { Column } from './column';

export class Position {

  get row() {
    return this._row;
  }
  get rowIndex() {
    return this.row.num - 1;
  }
  get column() {
    return this._column;
  }
  get columnIndex() {
    return this.column.num - 1;
  }
  get name() {
    return Position.nameTemplate(this._row, this._column);
  }

  public static nameTemplate = (row: Row, column: Column) => `${row.num}:${column.num}`;
  public static isEqual = (pos1: Position, pos2: Position) => pos1.name === pos2.name;

  constructor(private readonly _row: Row, private readonly _column: Column) {}

  isEqualRowAndColumn(rowIndex: number, columnIndex: number): boolean {
    return this.rowIndex === rowIndex && this.columnIndex === columnIndex;
  }

}
