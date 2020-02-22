import { Position } from './position';
import { Column } from './column';
import { Row } from './row';
import { Range } from './range';

export enum CellType {
  Empty,
  Text,
  Parameter
}

export interface CellProps {
  text: string;
  type: CellType;
}

export class Cell {
  private _range: Range;
  private _props: CellProps;

  static createCell(row: Row, col: Column): Cell {
    return new Cell(new Position(row, col));
  }
  static updateProps(cell: Cell, newProps: CellProps): Cell {
    const newCell = new Cell(cell.position);
    newCell._props = {
      text: newProps.text || cell._props.text,
      type: newProps.type || cell._props.type
    };
    newCell._range = cell._range;
    return newCell;
  }
  static updateRange(cell: Cell, newRange: Range): Cell {
    const newCell = new Cell(cell.position);
    newCell._props = cell.props;
    newCell._range = newRange;
    return newCell;
  }
  static emptyCell(cell: Cell): Cell {
    const newCell = new Cell(cell.position);
    cell._props.type = CellType.Empty;
    return newCell;
  }

  get position() {
    return this._position;
  }
  get rowIndex() {
    return this.position.rowIndex;
  }
  get columnIndex() {
    return this.position.columnIndex;
  }
  get text() {
    return this._props.text;
  }
  get type() {
    return this._props.type;
  }
  get formattedText() {
    switch (this._props.type) {
      case CellType.Parameter: {
        return `<${this._props.text}>`;
      }
      default:
        return this._props.text;
    }
  }
  get props() {
    return this._props;
  }
  get range() {
    return this._range;
  }
  get rowspan() {
    return this.range.rowspan;
  }
  get colspan() {
    return this.range.colspan;
  }

  constructor(private _position: Position) {
    this._range = Range.oneRange();
    this._props = {
      text: '',
      type: CellType.Text
    };
  }

  isEqualRowAndColumn(rowIndex: number, columnIndex: number): boolean {
    return this.position.isEqualRowAndColumn(rowIndex, columnIndex);
  }

}
