import { Component, OnInit } from '@angular/core';
import {Jars} from '../../../_models/jar.model';
import {UserAccount} from '../../../_models/account.model';
import {JarService} from '../../../_services/jar.service';
import {AccountService} from '../../../_services/account.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  public jars: Jars = [];
  public currentAccount: UserAccount = {availableBalance: 0, balance: 0, id: 'NA'};

  public doughnutChartData = [];
  public doughnutChartLabels = [];
  public doughnutChartColors = [];
  constructor(private jarService: JarService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.get().subscribe(account => {
      this.currentAccount = account;
      this.jarService.query().subscribe(value => {
        this.jars = value;
        this.doughnutChartData = this.jars.map(jar => {
          return jar.balance;
        });
        this.doughnutChartLabels = this.jars.map(jar => {
          return jar.name;
        });
        this.doughnutChartData.push(this.currentAccount.availableBalance);
        this.doughnutChartLabels.push('Argent disponnible');
      });
    });
  }


}
