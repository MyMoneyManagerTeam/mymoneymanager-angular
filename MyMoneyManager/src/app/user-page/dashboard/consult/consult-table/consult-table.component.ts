import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Transactions} from '../../../../_models/transaction.model';
import {TransactionService} from '../../../../_services/transaction.service';
import {MatPaginator} from '@angular/material/paginator';
import {observable, of, pipe} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-consult-table',
  templateUrl: './consult-table.component.html',
  styleUrls: ['./consult-table.component.css']
})
export class ConsultTableComponent implements AfterViewInit {
  transactionData: Transactions = [];
  isLoadingResults = false;
  resultsLength = 15;
  displayedColumns: string[] = ['transactionDate', 'emitterId', 'receiverId', 'emitterName', 'receiverName', 'description', 'amount'];
  transactionNumber: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private transactionService: TransactionService) { }


  ngAfterViewInit(): void {
    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.transactionService.query(this.resultsLength, this.paginator.pageIndex, 0);
        }),
        map(data => {
          this.isLoadingResults = false;
          this.transactionNumber = data.totalCount;
          return data.userTransactions;
        }),
        catchError(err => {
          console.log(err);
          this.isLoadingResults = false;
          return of([]);
        })
      ).subscribe(data => this.transactionData = data);
  }

}
