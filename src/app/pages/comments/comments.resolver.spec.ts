import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommentsResolver } from './comments.resolver';
import { CommentService } from 'src/app/api/comment.service';

describe('CommentsResolver', () => {
  let commentServiceSpy;

  beforeEach(() => {
    commentServiceSpy = jasmine.createSpyObj('CommentService', {
      getPhotoComments: of([]),
      getUserComments: of([]),
    });
    TestBed.configureTestingModule({
      providers: [{ provide: CommentService, useValue: commentServiceSpy }],
    });
  });

  it('should be created', () => {
    const service: CommentsResolver = TestBed.get(CommentsResolver);
    expect(service).toBeTruthy();
  });
});
