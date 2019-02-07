import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Comment } from 'src/app/api/comment.model';
import { CommentService } from 'src/app/api/comment.service';

@Injectable({
  providedIn: 'root',
})
export class CommentsResolver implements Resolve<Comment[]> {
  constructor(private commentService: CommentService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Comment[]> {
    const userId = route.paramMap.get('userId');
    const albumId = route.paramMap.get('albumId');
    const photoId = route.paramMap.get('photoId');
    if (albumId && photoId) {
      return this.commentService.getPhotoComments(userId, albumId, photoId);
    } else {
      return this.commentService.getUserComments(userId);
    }
  }
}
