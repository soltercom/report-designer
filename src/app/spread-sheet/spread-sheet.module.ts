import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadSheetComponent } from '../garbage/spread-sheet/spread-sheet.component';
import { CellComponent } from '../garbage/cell/cell.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { FlexContainerComponent } from '../garbage/flex-container/flex-container.component';
import { MaterialModule } from '../material/material.module';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
    declarations: [SpreadSheetComponent, CellComponent, PropertiesComponent, FlexContainerComponent, ContainerComponent],
  exports: [
    SpreadSheetComponent,
    PropertiesComponent,
    FlexContainerComponent,
    ContainerComponent
  ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class SpreadSheetModule { }
