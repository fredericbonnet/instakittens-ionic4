import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/** Local storage key for authentication data */
const AUTHDATA_KEY = 'instakittens-auth-data';

/**
 * Authentication service.
 *
 * Stores authentication data in local storage for persistence.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /** Last navigated URL for login page redirection */
  private lastUrl;

  constructor(private router: Router, private http: HttpClient) {
    // Record the last navigated URL.
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Remember URL.
        this.lastUrl = event.url;
      }
    });
  }

  /** Retrieve current authentication data. */
  loadAuthData() {
    return JSON.parse(localStorage.getItem(AUTHDATA_KEY));
  }

  /** Store given authentication data. */
  storeAuthData(authData) {
    localStorage.setItem(AUTHDATA_KEY, JSON.stringify(authData));
  }

  /** Clear currently stored authentication data. */
  clearAuthData() {
    localStorage.removeItem(AUTHDATA_KEY);
  }

  /**
   * Go to the login page, passing the last navigated URL as query parameter
   * for redirection upon success.
   */
  openLoginPage() {
    return this.router.navigate(['/login'], {
      queryParams: { redirect: this.lastUrl },
    });
  }

  /**
   * Call authentication endpoint.
   */
  auth(username: string, password: string) {
    // Store the given credentials; the below request shoud have the
    // Authorization header set by the HTTP interceptor.
    this.storeAuthData({ username, password });
    return this.http.get(`${environment.apiUrl}/auth`).pipe(
      catchError(err => {
        // Clear previously stored credentials.
        this.clearAuthData();
        return throwError(err);
      })
    );
  }
}
