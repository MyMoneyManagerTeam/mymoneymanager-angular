import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySandboxComponent } from './display-sandbox.component';

describe('DisplaySandboxComponent', () => {
  let component: DisplaySandboxComponent;
  let fixture: ComponentFixture<DisplaySandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySandboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
