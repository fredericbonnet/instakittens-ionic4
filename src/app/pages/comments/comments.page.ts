import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.albumId = this.route.snapshot.paramMap.get('albumId');
    this.photoId = this.route.snapshot.paramMap.get('photoId');
    this.comments$ = this.route.data.pipe(map(data => data.comments));
  }
}
