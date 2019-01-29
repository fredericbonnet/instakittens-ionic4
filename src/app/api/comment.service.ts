import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getPhotoComments(userId, albumId, photoId) {
    return this.http.get<Comment[]>(
      `${
        environment.apiUrl
      }/users/${userId}/albums/${albumId}/photos/${photoId}/comments`
    );
  }
  getPhotoComment(userId, albumId, photoId, commentId) {
    return this.http.get<Comment>(
      `${
        environment.apiUrl
      }/users/${userId}/albums/${albumId}/photos/${photoId}/comments/${commentId}`
    );
  }

  getUserComments(userId) {
    return this.http.get<Comment[]>(
      `${environment.apiUrl}/users/${userId}/comments`
    );
  }
  getUserComment(userId, commentId) {
    return this.http.get<Comment>(
      `${environment.apiUrl}/users/${userId}/comments/${commentId}`
    );
  }
}
