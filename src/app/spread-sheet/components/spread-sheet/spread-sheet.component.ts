import { Component, OnInit } from '@angular/core';
import { SpreadSheetService } from '../../service/spread-sheet.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-spread-sheet',
  templateUrl: './spread-sheet.component.html',
  styleUrls: ['./spread-sheet.component.css']
})
export class SpreadSheetComponent implements OnInit {

  constructor(public ssService: SpreadSheetService) { }

  ngOnInit() {
  }

  onColumnDragEnded($event: CdkDragEnd, num: number) {
    this.ssService.addColumnWidth(num, $event.distance.x);
  }
}
