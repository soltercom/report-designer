import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ], exports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
