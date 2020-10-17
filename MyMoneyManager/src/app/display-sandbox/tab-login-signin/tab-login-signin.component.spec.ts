import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLoginSigninComponent } from './tab-login-signin.component';

describe('TabLoginSigninComponent', () => {
  let component: TabLoginSigninComponent;
  let fixture: ComponentFixture<TabLoginSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabLoginSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLoginSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
