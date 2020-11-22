import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Jar} from '../../../../../_models/jar.model';

@Component({
  selector: 'app-jar-delete-dialog',
  templateUrl: './jar-delete-dialog.component.html',
  styleUrls: ['./jar-delete-dialog.component.css']
})
export class JarDeleteDialogComponent {

  constructor( public dialogRef: MatDialogRef<JarDeleteDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Jar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
