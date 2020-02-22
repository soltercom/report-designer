import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './components/properties/properties.component';
import { MaterialModule } from '../material/material.module';
import { ContainerComponent } from './components/container/container.component';
import { SpreadSheetComponent } from './components/spread-sheet/spread-sheet.component';
import { CellPropertiesComponent } from './components/cell-properties/cell-properties.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColumnHeaderCellComponent } from './components/cells/column-header-cell/column-header-cell.component';
import { NullCellComponent } from './components/cells/null-cell/null-cell.component';
import { RowHeaderCellComponent } from './components/cells/row-header-cell/row-header-cell.component';
import { NormalCellComponent } from './components/cells/normal-cell/normal-cell.component';

@NgModule({
  declarations: [
    PropertiesComponent,
    ContainerComponent,
    SpreadSheetComponent,
    CellPropertiesComponent,
    ColumnHeaderCellComponent,
    NullCellComponent,
    RowHeaderCellComponent,
    NormalCellComponent
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
