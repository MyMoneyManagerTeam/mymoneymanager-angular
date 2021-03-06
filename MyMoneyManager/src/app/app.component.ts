import { Component } from '@angular/core';
import {AlertService} from './_services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyMoneyManager';
  constructor(private alertService: AlertService) {
  }
}
