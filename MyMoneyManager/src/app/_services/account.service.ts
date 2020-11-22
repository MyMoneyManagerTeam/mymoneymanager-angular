import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserAccount} from '../_models/account.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<UserAccount> {
    return this.httpClient.get<UserAccount>(`${environment.apiUrl}/api/account/get`);
  }
}
