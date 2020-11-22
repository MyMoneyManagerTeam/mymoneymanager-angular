import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarDeleteDialogComponent } from './jar-delete-dialog.component';

describe('JarDeleteDialogComponent', () => {
  let component: JarDeleteDialogComponent;
  let fixture: ComponentFixture<JarDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JarDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JarDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
