import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-charts',
  templateUrl: './account-charts.component.html',
  styleUrls: ['./account-charts.component.css']
})
export class AccountChartsComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90, 105], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
