import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Jar} from '../../../../../_models/jar.model';

@Component({
  selector: 'app-jar-modify-dialog',
  templateUrl: './jar-modify-dialog.component.html',
  styleUrls: ['./jar-modify-dialog.component.css']
})
export class JarModifyDialogComponent {

  constructor( public dialogRef: MatDialogRef<JarModifyDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Jar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
