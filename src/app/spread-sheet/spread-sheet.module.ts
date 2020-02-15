import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './components/properties/properties.component';
import { MaterialModule } from '../material/material.module';
import { ContainerComponent } from './components/container/container.component';
import { SpreadSheetComponent } from './components/spread-sheet/spread-sheet.component';
import { CellPropertiesComponent } from './components/cell-properties/cell-properties.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PropertiesComponent,
    ContainerComponent,
    SpreadSheetComponent,
    CellPropertiesComponent
  ],
  exports: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SpreadSheetModule { }
