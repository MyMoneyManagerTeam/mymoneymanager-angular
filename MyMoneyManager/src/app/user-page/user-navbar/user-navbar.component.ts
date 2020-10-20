import {Component, HostListener, OnInit} from '@angular/core';
import {AuthentificationService} from '../../_services/authentification.service';
import {AlertService} from '../../_services/alert.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  isCollapsed = true;

  constructor(private authentificationService: AuthentificationService, private alertService: AlertService) { }

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event): void {
    const result = confirm('Les changements apportés pourraient ne pas être sauvegardés.');
    if (result) {
      event.returnValue = true;
    }
    event.returnValue = false; // on reste sur la page
  }

  ngOnInit(): void {
  }

  toggleNav(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logout(): void {
    this.authentificationService.logout();
    this.alertService.success('Vous êtes maintenant déconnecté', {autoClose: true, keepAfterRouteChange: true});
  }
}
