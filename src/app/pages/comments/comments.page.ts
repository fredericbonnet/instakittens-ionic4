import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CommentService } from '../../api/comment.service';
import { Comment } from '../../api/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  userId;
  albumId;
  photoId;
  comments$: Observable<Comment[]>;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.comments$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.userId = params.get('userId');
        this.albumId = params.get('albumId');
        this.photoId = params.get('photoId');
        if (this.albumId && this.photoId) {
          return this.commentService.getPhotoComments(
            this.userId,
            this.albumId,
            this.photoId
          );
        } else {
          return this.commentService.getUserComments(this.userId);
        }
      })
    );
  }
}
