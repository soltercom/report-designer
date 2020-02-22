import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullCellComponent } from './null-cell.component';

describe('NullCellComponent', () => {
  let component: NullCellComponent;
  let fixture: ComponentFixture<NullCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
