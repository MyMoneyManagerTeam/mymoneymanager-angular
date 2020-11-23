import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultTableComponent } from './consult-table.component';

describe('ConsultTableComponent', () => {
  let component: ConsultTableComponent;
  let fixture: ComponentFixture<ConsultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
