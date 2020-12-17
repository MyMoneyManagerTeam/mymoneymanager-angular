import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UsersWithAccount} from "../_models/user-with-account";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  query(): Observable<UsersWithAccount> {
      return this.httpClient.get<UsersWithAccount>(`${environment.apiUrl}/api/Auth/Query`);
  }
}
