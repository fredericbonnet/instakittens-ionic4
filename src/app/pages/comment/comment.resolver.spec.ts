import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommentResolver } from './comment.resolver';
import { CommentService } from 'src/app/api/comment.service';

describe('CommentResolver', () => {
  let commentServiceSpy;

  beforeEach(() => {
    commentServiceSpy = jasmine.createSpyObj('CommentService', {
      getPhotoComment: of({}),
      getUserComment: of({}),
    });
    TestBed.configureTestingModule({
      providers: [{ provide: CommentService, useValue: commentServiceSpy }],
    });
  });

  it('should be created', () => {
    const service: CommentResolver = TestBed.get(CommentResolver);
    expect(service).toBeTruthy();
  });
});
