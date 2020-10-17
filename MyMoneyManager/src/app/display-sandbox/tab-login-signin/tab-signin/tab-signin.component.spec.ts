import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSigninComponent } from './tab-signin.component';

describe('TabSigninComponent', () => {
  let component: TabSigninComponent;
  let fixture: ComponentFixture<TabSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
