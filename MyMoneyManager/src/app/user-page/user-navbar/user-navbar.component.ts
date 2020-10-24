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
