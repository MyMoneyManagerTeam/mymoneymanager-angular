import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpConnectionComponent } from './hp-connection.component';

describe('HpConnectionComponent', () => {
  let component: HpConnectionComponent;
  let fixture: ComponentFixture<HpConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
