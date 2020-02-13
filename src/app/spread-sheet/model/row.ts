export class Row {
  constructor(private _num: number, private _height: number = 0) {}

  get height() {
    return this._height;
  }
  set height(h: number) {
    this._height = h;
  }

  get heightPx() {
    return `${this._height}px`;
  }

  get num() {
    return this._num;
  }
}
