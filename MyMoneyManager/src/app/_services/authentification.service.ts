import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../_models/user.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(mail: string, password: string): any {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/auth/authenticate`, {Mail : mail, Password : password})
      .pipe(map(user => {
        user.picture = 'data:image/jpeg;base64,' + user.picture;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }
  logout(): void {
    // on enleve l'utilisateur du local storage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  signin(user: User): any {
    console.log(JSON.stringify(user));
    return this.httpClient.post<any>(`${environment.apiUrl}/api/auth/signin`,
      user)
      .pipe(map(msg => {
        return msg;
      }));
  }
}
