import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../_services/authentification.service';
import {User} from '../../_models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthentificationService) { }

  ngOnInit(): void {
  }

  getUser(): User {
    return this.authService.currentUserValue;
  }
}
