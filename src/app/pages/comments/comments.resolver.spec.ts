import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import * as faker from 'faker';

import { CommentsResolver } from './comments.resolver';
import { CommentService } from 'src/app/api/comment.service';

describe('CommentsResolver', () => {
  let resolver: CommentsResolver;
  let commentServiceSpy;

  beforeEach(() => {
    commentServiceSpy = jasmine.createSpyObj('CommentService', {
      getPhotoComments: of([]),
      getUserComments: of([]),
    });

    TestBed.configureTestingModule({
      providers: [{ provide: CommentService, useValue: commentServiceSpy }],
    });

    resolver = TestBed.get(CommentsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should query Photo Comments from route params', () => {
    // Generate random route.
    const userId = faker.random.uuid();
    const albumId = faker.random.uuid();
    const photoId = faker.random.uuid();
    const route = new ActivatedRouteSnapshot();
    route.params = { userId, albumId, photoId };

    resolver.resolve(route);
    expect(commentServiceSpy.getPhotoComments).toHaveBeenCalledWith(
      userId,
      albumId,
      photoId
    );
  });
  it('should query User Comments from route params', () => {
    // Generate random route.
    const userId = faker.random.uuid();
    const route = new ActivatedRouteSnapshot();
    route.params = { userId };

    resolver.resolve(route);
    expect(commentServiceSpy.getUserComments).toHaveBeenCalledWith(userId);
  });
});
