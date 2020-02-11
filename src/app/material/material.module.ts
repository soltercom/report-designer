import { NgModule } from '@angular/core';
import { MatDividerModule, MatGridListModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    DragDropModule
  ], exports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    DragDropModule
  ]
})
export class MaterialModule { }
