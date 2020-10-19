import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpHomeComponent } from './hp-home.component';

describe('HpHomeComponent', () => {
  let component: HpHomeComponent;
  let fixture: ComponentFixture<HpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
