import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarsFormComponent } from './jars-form.component';

describe('JarsFormComponent', () => {
  let component: JarsFormComponent;
  let fixture: ComponentFixture<JarsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JarsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JarsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
