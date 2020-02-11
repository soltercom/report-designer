import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent} from 'rxjs';
import { debounceTime, filter, map, mapTo, repeat, repeatWhen, scan, skipUntil, switchMap, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-flexcontainer',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.css']
})
export class FlexContainerComponent implements OnInit {

  private _divider = 0;
  private _lpWidth = 0;
  private _rpWidth = 0;
  private _dHeight = 0;

  get divider() { return this._divider; }
  get lpWidth() { return this._lpWidth; }
  get rpWidth() { return this._rpWidth; }
  get dHeight() { return this._dHeight; }
  set divider(d: number) {
    const w = this.elem('flex-container').clientWidth;
    const h = this.elem('flex-container').clientHeight;
    this._dHeight = h;
    this._lpWidth = d;
    this._rpWidth = w - d - 20;
    this._divider = d;
  }

  private elem = (id: string) => document.getElementById(id) as HTMLElement;

  private test() {
    const mdEvent$ = fromEvent(this.elem('divider'), 'mousedown');
    const muEvent$ = fromEvent(this.elem('divider'), 'mouseup');
    const moEvent$ = fromEvent(this.elem('flex-container'), 'mouseout');
    const mmEvent$ = fromEvent(this.elem('flex-container'), 'mousemove');

    mdEvent$.pipe(
      switchMap((start: MouseEvent) => mmEvent$.pipe(
        map((move: MouseEvent) => {
          move.preventDefault();
          return move.clientX - start.offsetX;
        }),
        takeUntil(muEvent$),
        takeUntil(moEvent$)
      ))
    ).subscribe(this.dividerMove.bind(this));
  }

  private dividerMove(x: number) {
    this.divider = x;
  }

  constructor() {}

  ngOnInit() {
    this.divider = Math.ceil(0.7 * this.elem('flex-container').clientWidth);
    this.test();
  }
}
