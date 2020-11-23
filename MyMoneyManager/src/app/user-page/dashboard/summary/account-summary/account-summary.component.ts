import {Component, Input, OnInit} from '@angular/core';
import {UserAccount} from '../../../../_models/account.model';
import {Jars} from '../../../../_models/jar.model';
import {JarService} from '../../../../_services/jar.service';
import {AccountService} from '../../../../_services/account.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  @Input() currentAccount: UserAccount = {availableBalance: 0, balance: 0, id: ''};
  @Input() jars: Jars = [];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  getGoalCount(): number {
    return this.jars.filter(value => {
      if (value.max === 0) {
        return false;
      }
      return value.balance >= value.max;
    }).length;
  }

  copyString(): void {
    this.snackBar.open('L\'Id a été copié dans le presse-papier', 'Ok', {
      duration: 2000,
    });
  }
}
