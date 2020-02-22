import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowHeaderCellComponent } from './row-header-cell.component';

describe('RowHeaderCellComponent', () => {
  let component: RowHeaderCellComponent;
  let fixture: ComponentFixture<RowHeaderCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowHeaderCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
