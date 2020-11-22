import { Component, OnInit } from '@angular/core';
import {UserAccount} from '../../../../_models/account.model';
import {Jars} from '../../../../_models/jar.model';
import {JarService} from '../../../../_services/jar.service';
import {AccountService} from '../../../../_services/account.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  public currentAccount: UserAccount = {availableBalance: 0, balance: 0, id: ''};
  public jars: Jars = [];

  constructor(private jarService: JarService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.jarService.query().subscribe(value => {
      this.jars = value;
    });
    this.accountService.get().subscribe(value => {
      this.currentAccount = value;
    });
  }

  getGoalCount(): number {
    return this.jars.filter(value => {
      if (value.max === 0) {
        return false;
      }
      return value.balance >= value.max;
    }).length;
  }
}
