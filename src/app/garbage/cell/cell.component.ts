import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  value: string;

  constructor() { }

  ngOnInit() {
  }

  onKeyDown($event) {
    console.log($event);
  }

  onContextMenu() {
    console.log('ok');
    return false;
  }

}
