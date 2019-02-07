import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginRequiredError, AccessDeniedError } from './errors';

/**
 * HTTP authentication error interceptor.
 *
 * Rethrows 401 and 403 errors as custom error types.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        const message = err.error.message || err.statusText;
        switch (err.status) {
          case 401:
            return throwError(new LoginRequiredError(message));

          case 403:
            return throwError(new AccessDeniedError(message));

          default:
            return throwError(err);
        }
      })
    );
  }
}
