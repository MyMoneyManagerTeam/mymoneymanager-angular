import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../_models/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  uploadImage(image: File, jwt: string): any {
    const formData: FormData = new FormData();
    formData.append('picture', image);
    return this.httpClient.post<any>(`${environment.apiUrl}/api/Auth/UploadImage`, formData, {
      headers: new HttpHeaders({Authorization: `Bearer ${jwt}`
      })
    });
  }

  signin(user: User): any {
    const formData: FormData = new FormData();
    formData.append('picture', user.picture);
    return this.httpClient.post<any>(`${environment.apiUrl}/api/Auth/Signin`, {
      mail: user.mail,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      country: user.country,
      area: user.area,
      address: user.address,
      zip: user.zip,
      city: user.city,
      picture: null
    })
      .pipe(map(msg => {
        this.uploadImage(user.picture as File, msg.token).subscribe(value => {}, error => console.log(error));
      }));
  }
}
