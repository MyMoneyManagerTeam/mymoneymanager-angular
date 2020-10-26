import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthentificationService} from '../_services/authentification.service';
import {catchError} from 'rxjs/operators';
import {AlertService} from '../_services/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authentificationService: AuthentificationService, private alertService: AlertService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // on deco si erreur 401 envoyee par l'API
        this.authentificationService.logout();
        location.reload();
      }
      if (err.status === 404) {
        this.alertService.error('erreur 404', {autoClose: true, keepAfterRouteChange: true});
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
