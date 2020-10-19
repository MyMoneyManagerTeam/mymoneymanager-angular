import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpContactComponent } from './hp-contact.component';

describe('HpContactComponent', () => {
  let component: HpContactComponent;
  let fixture: ComponentFixture<HpContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
