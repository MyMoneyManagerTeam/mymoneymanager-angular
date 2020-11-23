import {Component, Input, OnInit} from '@angular/core';
import {Jars} from '../../../../_models/jar.model';
import {UserAccount} from '../../../../_models/account.model';
import {AccountService} from '../../../../_services/account.service';
import {JarService} from '../../../../_services/jar.service';

@Component({
  selector: 'app-account-charts',
  templateUrl: './account-charts.component.html',
  styleUrls: ['./account-charts.component.css']
})
export class AccountChartsComponent implements OnInit {


  @Input() doughnutChartData = Array(100);
  @Input() doughnutChartLabels = [];
  @Input() doughnutChartColors = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90, 105], label: 'Series B'},
  ];
  public doughnutChartType = 'doughnut';
  private jars: any;
  private currentAccount: any;


  constructor(private accountService: AccountService, private jarService: JarService) { }

  ngOnInit(): void { // Appel aux observeurs ici car bug de couleur à travers les Input, comprend pas pq
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
