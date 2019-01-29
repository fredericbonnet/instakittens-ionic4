import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Album } from './album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getUserAlbums(userId) {
    return this.http.get<Album[]>(
      `${environment.apiUrl}/users/${userId}/albums`
    );
  }
  getUserAlbum(userId, albumId) {
    return this.http.get<Album>(
      `${environment.apiUrl}/users/${userId}/albums/${albumId}`
    );
  }
}
