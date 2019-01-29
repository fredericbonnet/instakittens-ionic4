import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getAlbumPhotos(userId, albumId) {
    return this.http.get<Photo[]>(
      `${environment.apiUrl}/users/${userId}/albums/${albumId}/photos`
    );
  }

  getAlbumPhoto(userId, albumId, photoId) {
    return this.http.get<Photo>(
      `${
        environment.apiUrl
      }/users/${userId}/albums/${albumId}/photos/${photoId}`
    );
  }
}
