import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserAccount, UserAccountToApi} from '../_models/account.model';
import {environment} from '../../environments/environment';
import {Jar} from "../_models/jar.model";
import {UserWithAccount} from "../_models/user-with-account";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<UserAccount> {
    return this.httpClient.get<UserAccount>(`${environment.apiUrl}/api/account/get`);
  }

  update(account: UserAccountToApi): Observable<boolean>{
    return this.httpClient.put<boolean>(`${environment.apiUrl}/api/Account/ModifyBalance`,account);
  }

}
