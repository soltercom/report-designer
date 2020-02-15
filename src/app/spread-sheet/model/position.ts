import { Row } from './row';
import { Column } from './column';

export class Position {

  get row() {
    return this._row;
  }
  get column() {
    return this._column;
  }
  get name() {
    return Position.nameTemplate(this._row, this._column);
  }

  public static nameTemplate = (row: Row, column: Column) => `${row.num}:${column.num}`;
  public static isEqual = (pos1: Position, pos2: Position) => pos1.name === pos2.name;

  constructor(private readonly _row: Row, private readonly _column: Column) {}

  isEqualRowAndColumn(row: Row, column: Column): boolean {
    return this.name === Position.nameTemplate(row, column);
  }

}
