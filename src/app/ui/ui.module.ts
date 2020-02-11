import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MaterialModule } from '../material/material.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpreadSheetModule } from '../spread-sheet/spread-sheet.module';

@NgModule({
  declarations: [MainHeaderComponent, MainLayoutComponent, MainFooterComponent, DashboardComponent],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SpreadSheetModule
  ]
})
export class UiModule { }
