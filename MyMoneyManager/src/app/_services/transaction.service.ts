import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Jar, Jars} from '../_models/jar.model';
import {environment} from '../../environments/environment';
import {Transaction, TransactionFromAPI} from '../_models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  query(num: number, page: number, days: number): Observable<TransactionFromAPI> {
    //
    return this.httpClient.get<TransactionFromAPI>(`${environment.apiUrl}/api/transaction/query/?number=${num}&page=${page}&days=${days}`);
  }
  create(transaction: Transaction): Observable<Transaction> {
    //
    return this.httpClient.post<Transaction>(`${environment.apiUrl}/api/transaction/create`, transaction);
  }
}
