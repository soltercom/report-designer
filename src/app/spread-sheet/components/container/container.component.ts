import { Component, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ContainerComponent implements OnInit {

  private _curX = 0;
  private _w = 0;
  private _ratio = 0;

  get w() {
    return this._w;
  }
  set w(value) {
    this._w = this.elem('flex-container').clientWidth;
  }
  get wLeft() {
    return this.w + this.curX;
  }
  get wRight() {
    return -this.curX;
  }
  get dragPosition() {
    return {x: this.curX, y: 0};
  }
  set curX(value) {
    this._curX = value;
  }
  get curX() {
    return this._curX;
  }
  set ratio(value) {
    this._ratio = this.w === 0 ? 0 : (this.w + this.curX) / this.w;
  }
  get ratio() {
    return this._ratio;
  }

  constructor() {}

  ngOnInit() {
    this.w = 0;
    this.curX = -Math.ceil( this.w / 2);
    this.ratio = 0;
  }

  private elem = (id: string) => document.getElementById(id) as HTMLElement;

  onDragEnded($event: CdkDragEnd) {
    this.curX += $event.distance.x;
    this.ratio = 0;
  }

  onResize($event) {
    this.w = 0;
    this.curX = Math.ceil(this.w * this.ratio - this.w);
  }

}
