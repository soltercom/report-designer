import { Position } from './position';
import { Column } from './column';
import { Row } from './row';

export enum CellType {
  Text,
  Parameter
}

export interface CellProps {
  text: string;
  type: CellType;
}

export class Cell {
  private _props: CellProps;

  static emptyCell(row: Row, col: Column): Cell {
    return new Cell(new Position(row, col));
  }
  static updateCell(cell: Cell, newProps: CellProps): Cell {
    const newCell = new Cell(cell.position);
    newCell._props = {
      text: newProps.text || cell._props.text,
      type: newProps.type || cell._props.type
    };
    return newCell;
  }

  get position() {
    return this._position;
  }
  get text() {
    return this._props.text;
  }
  get type() {
    return this._props.type;
  }

  constructor(private _position: Position) {
    this._props = {
      text: '',
      type: CellType.Text
    };
  }

  isEqualRowAndColumn(row: Row, column: Column): boolean {
    return this.position.isEqualRowAndColumn(row, column);
  }

}
