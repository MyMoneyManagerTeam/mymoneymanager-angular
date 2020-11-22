import { Component, OnInit } from '@angular/core';
import {Jar, Jars} from '../../../_models/jar.model';
import {JarService} from '../../../_services/jar.service';
import {AlertService} from '../../../_services/alert.service';

@Component({
  selector: 'app-jars',
  templateUrl: './jars.component.html',
  styleUrls: ['./jars.component.css']
})
export class JarsComponent implements OnInit {

  public jarsList: Jars = [];

  constructor(private jarService: JarService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadJars();
  }

  // METHODES APPELANT LE JAR SERVICE POUR LES REQUETES API
  loadJars(): void {
    this.jarService.query().subscribe(value => {
      this.jarsList = value;
    }, error => this.alertService.error('Impossible de charger les Jars'));
  }
  createJar(jar: Jar): void {
    this.jarService.create(jar).subscribe(value => this.jarsList.push(value),
      error => {
        this.alertService.error('Impossible de créer un Jar');
      });
  }
  updateJar(jar: Jar): void {
    this.jarService.update(jar).subscribe(value => {}, error => {
      this.alertService.error('Impossible de mettre à jour le Jar');
    });
  }
  deleteJar(jar: Jar): void {
    this.jarService.delete(jar).subscribe(value => this.jarsList = this.jarsList.filter(value1 => {
      // tslint:disable-next-line:triple-equals
      return !(value1 == jar);
    }));
  }


}
