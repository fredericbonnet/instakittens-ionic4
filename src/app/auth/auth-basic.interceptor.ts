import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

/**
 * HTTP Basic authentication interceptor.
 *
 * Automatically adds Authorization header to outgoing HTTP requests if
 * there is valid authentication data in AuthService.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthBasicInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authData = this.authService.loadAuthData();
    if (authData) {
      // Add Authorization: Basic authentication header.
      const { username, password } = authData;
      const authorization = 'Basic ' + btoa(username + ':' + password);
      request = request.clone({
        setHeaders: { authorization },
      });
    }

    return next.handle(request);
  }
}
