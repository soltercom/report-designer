import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCellComponent } from './normal-cell.component';

describe('NormalCellComponent', () => {
  let component: NormalCellComponent;
  let fixture: ComponentFixture<NormalCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
