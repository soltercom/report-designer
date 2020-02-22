import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnHeaderCellComponent } from './col-header-cell.component';

describe('ColHeaderCellComponent', () => {
  let component: ColumnHeaderCellComponent;
  let fixture: ComponentFixture<ColumnHeaderCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnHeaderCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
