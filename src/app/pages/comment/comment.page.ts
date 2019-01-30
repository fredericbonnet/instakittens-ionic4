import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CommentService } from '../../api/comment.service';
import { Comment } from '../../api/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {
  userId;
  albumId;
  photoId;
  commentId;
  comment$: Observable<Comment>;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.comment$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.userId = params.get('userId');
        this.albumId = params.get('albumId');
        this.photoId = params.get('photoId');
        this.commentId = params.get('commentId');
        if (this.albumId && this.photoId) {
          return this.commentService.getPhotoComment(
            this.userId,
            this.albumId,
            this.photoId,
            this.commentId
          );
        } else {
          return this.commentService.getUserComment(
            this.userId,
            this.commentId
          );
        }
      })
    );
  }
}
