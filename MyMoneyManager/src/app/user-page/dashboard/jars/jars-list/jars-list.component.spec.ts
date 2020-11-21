import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarsListComponent } from './jars-list.component';

describe('JarsListComponent', () => {
  let component: JarsListComponent;
  let fixture: ComponentFixture<JarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JarsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
