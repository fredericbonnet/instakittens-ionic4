import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getUser(userId) {
    return this.http.get<User>(`${environment.apiUrl}/users/${userId}`);
  }
}
