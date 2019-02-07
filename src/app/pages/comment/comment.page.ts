import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.albumId = this.route.snapshot.paramMap.get('albumId');
    this.photoId = this.route.snapshot.paramMap.get('photoId');
    this.commentId = this.route.snapshot.paramMap.get('commentId');
    this.comment$ = this.route.data.pipe(map(data => data.comment));
  }
}
