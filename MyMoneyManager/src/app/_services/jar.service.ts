import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Jar, Jars} from '../_models/jar.model';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JarService {

  constructor(private httpClient: HttpClient) { }

  query(): Observable<Jars> {
    //
    return this.httpClient.get<Jars>(`${environment.apiUrl}/api/jar/query`);
  }
  create(jar: Jar): Observable<Jar> {
    //
    return this.httpClient.post<Jar>(`${environment.apiUrl}/api/jar/create`, jar);
  }
  update(jar: Jar): Observable<boolean> {
    //
    return this.httpClient.put<boolean>(`${environment.apiUrl}/api/jar/update`, jar);
  }
  delete(jar: Jar): Observable<boolean>{
    //
    return this.httpClient.delete<boolean>(`${environment.apiUrl}/api/jar/delete/${jar.id}`);
  }
}
