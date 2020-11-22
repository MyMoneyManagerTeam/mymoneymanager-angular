import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Jar, Jars} from '../../../../_models/jar.model';
import {MatDialog} from '@angular/material/dialog';
import {JarDeleteDialogComponent} from './jar-delete-dialog/jar-delete-dialog.component';
import {JarModifyDialogComponent} from './jar-modify-dialog/jar-modify-dialog.component';

@Component({
  selector: 'app-jars-list',
  templateUrl: './jars-list.component.html',
  styleUrls: ['./jars-list.component.css']
})
export class JarsListComponent implements OnInit {
  @Input() jars: Jars;
  @Output() update: EventEmitter<Jar> = new EventEmitter<Jar>();
  @Output() delete: EventEmitter<Jar> = new EventEmitter<Jar>();
  @Output() create: EventEmitter<Jar> = new EventEmitter<Jar>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDeleteDialog(jar: Jar): void {
    const dialogRef = this.dialog.open(JarDeleteDialogComponent, {
      width: '250px',
      data: jar
    });
    dialogRef.afterClosed().subscribe(value => {
      if (value === 'ok') {
        this.deleteJar(jar);
      }
    });
  }
  openModifyDialog(jar: Jar): void {
    const dialogRef = this.dialog.open(JarModifyDialogComponent, {
      width: '250px',
      data: jar
    });
    dialogRef.afterClosed().subscribe(value => {
      console.log(jar);
      this.updateJar(jar);
    });
  }



  updateJar(jar: Jar): void {
    this.update.emit(jar);
  }
  deleteJar(jar: Jar): void {
    this.delete.emit(jar);
  }
  createJar(jar: Jar): void {
    this.create.emit(jar);
  }

}
