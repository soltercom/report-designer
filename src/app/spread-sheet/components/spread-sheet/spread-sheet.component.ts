import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread-sheet',
  templateUrl: './spread-sheet.component.html',
  styleUrls: ['./spread-sheet.component.css']
})
export class SpreadSheetComponent implements OnInit {

  cols: number[] = [];
  rows: number[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 25; i++) {
      this.cols.push(i);
      this.rows.push(i);
    }
  }

}
