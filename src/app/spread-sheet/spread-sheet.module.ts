import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './components/properties/properties.component';
import { MaterialModule } from '../material/material.module';
import { ContainerComponent } from './components/container/container.component';
import { SpreadSheetComponent } from './components/spread-sheet/spread-sheet.component';

@NgModule({
  declarations: [
    PropertiesComponent,
    ContainerComponent,
    SpreadSheetComponent
  ],
  exports: [
    ContainerComponent
  ],
  imports: [
      CommonModule,
      MaterialModule
  ]
})
export class SpreadSheetModule { }
