import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UsersWithAccount} from "../_models/user-with-account";
import {Observable} from "rxjs";
import {User} from "../_models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  query(): Observable<UsersWithAccount> {
      return this.httpClient.get<UsersWithAccount>(`${environment.apiUrl}/api/Auth/Query`);
  }

  update(user: User): Observable<boolean>{
    return this.httpClient.put<boolean>(`${environment.apiUrl}/api/Auth/UpdatePrivileges`, user);
  }
}
