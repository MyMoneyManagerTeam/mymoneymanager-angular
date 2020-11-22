import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarModifyDialogComponent } from './jar-modify-dialog.component';

describe('JarModifyDialogComponent', () => {
  let component: JarModifyDialogComponent;
  let fixture: ComponentFixture<JarModifyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JarModifyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JarModifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
