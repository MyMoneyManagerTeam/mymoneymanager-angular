import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPresentationComponent } from './hp-presentation.component';

describe('HpPresentationComponent', () => {
  let component: HpPresentationComponent;
  let fixture: ComponentFixture<HpPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
