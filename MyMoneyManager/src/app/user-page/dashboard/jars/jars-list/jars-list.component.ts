import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Jar, Jars} from '../../../../_models/jar.model';

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
  constructor() { }

  ngOnInit(): void {
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
