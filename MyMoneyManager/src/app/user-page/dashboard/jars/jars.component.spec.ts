import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarsComponent } from './jars.component';

// @ts-ignore
describe('JarsComponent', () => {
  let component: JarsComponent;
  let fixture: ComponentFixture<JarsComponent>;

  // @ts-ignore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JarsComponent ]
    })
    .compileComponents();
  });

  // @ts-ignore
  beforeEach(() => {
    fixture = TestBed.createComponent(JarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // @ts-ignore
  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
