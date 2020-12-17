import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../_services/user.service";
import {UsersWithAccount, UserWithAccount} from "../../../_models/user-with-account";
import {HttpClient} from "@angular/common/http";
import {AlertService} from "../../../_services/alert.service";
import {AccountService} from "../../../_services/account.service";
import {UserAccount, UserAccountToApi} from "../../../_models/account.model";
import {User} from "../../../_models/user.model";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  usersWithAccount: UsersWithAccount = [];
  constructor(private userRepository: UserService, private accounRepository: AccountService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    // METHODES APPELANT LE USER SERVICE POUR LES REQUETES API
      this.userRepository.query().subscribe(value => {
        this.usersWithAccount = value;},
          error => this.alertService.error('Impossible de charger les utilisateurs'));
  }

  updateBalance(account: UserAccountToApi) {
    this.accounRepository.update(account).subscribe();
  }

  updatePrivileges(user: User) {
    this.userRepository.update(user).subscribe();
  }
}
