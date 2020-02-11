import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread-sheet',
  templateUrl: './spread-sheet.component.html',
  styleUrls: ['./spread-sheet.component.css']
})
export class SpreadSheetComponent implements OnInit {

  cols: string[] = [];
  rows: string[] = [];

  constructor() {
    for (let i = 1; i <= 200; i++) {
      this.cols.push(i.toString());
      this.rows.push(i.toString());
    }
  }

  ngOnInit() {
  }

}
