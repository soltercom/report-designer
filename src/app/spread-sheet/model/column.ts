export class Column {
  constructor(private _num: number, private _width: number = 0) {}

  set width(w: number) {
    this._width = w;
  }
  get width() {
    return this._width;
  }
  get widthPx() {
    return `${this._width}px`;
  }

  get num() {
    return this._num;
  }

}
