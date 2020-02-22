export class Range {

  get rowspan() {
    return this._rowspan;
  }
  get colspan() {
    return this._colspan;
  }

  static oneRange() {
    return new Range(1, 1);
  }
  static createRange(rowspan: number, colspan: number) {
    return new Range(rowspan, colspan);
  }

  constructor(private readonly _rowspan: number, private readonly _colspan: number) {}
}
