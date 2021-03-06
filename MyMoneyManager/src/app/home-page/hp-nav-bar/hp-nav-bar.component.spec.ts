import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpNavBarComponent } from './hp-nav-bar.component';

describe('HpNavBarComponent', () => {
  let component: HpNavBarComponent;
  let fixture: ComponentFixture<HpNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
