import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../_services/authentification.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  userFirstName: string;

  constructor(private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
    this.userFirstName = this.authentificationService.currentUserValue.firstName;
  }

}
