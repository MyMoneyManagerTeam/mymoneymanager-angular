import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPNavBarComponent } from './hp-nav-bar.component';

describe('HPNavBarComponent', () => {
  let component: HPNavBarComponent;
  let fixture: ComponentFixture<HPNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HPNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
