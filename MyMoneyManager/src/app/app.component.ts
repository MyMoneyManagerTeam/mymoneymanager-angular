import { Component } from '@angular/core';
import {AlertComponent} from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyMoneyManager';
  alerts: any[] = [{
    type: 'success',
    msg: `Salut, je suis une alerte. (Ajoutée: ${new Date().toLocaleTimeString()})`,
    timeout: 5000
  }];

  add(): void {
    this.alerts.push({
      type: 'info',
      msg: `L\'alerte se ferme dans 5 secondes (Ajoutée: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
