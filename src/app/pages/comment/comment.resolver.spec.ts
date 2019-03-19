import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import * as faker from 'faker';

import { CommentResolver } from './comment.resolver';
import { CommentService } from 'src/app/api/comment.service';

describe('CommentResolver', () => {
  let resolver: CommentResolver;
  let commentServiceSpy;

  beforeEach(() => {
    commentServiceSpy = jasmine.createSpyObj('CommentService', {
      getPhotoComment: of({}),
      getUserComment: of({}),
    });

    TestBed.configureTestingModule({
      providers: [{ provide: CommentService, useValue: commentServiceSpy }],
    });

    resolver = TestBed.get(CommentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should query Photo Comment from route params', () => {
    // Generate random route.
    const userId = faker.random.uuid();
    const albumId = faker.random.uuid();
    const photoId = faker.random.uuid();
    const commentId = faker.random.uuid();
    const route = new ActivatedRouteSnapshot();
    route.params = { userId, albumId, photoId, commentId };

    resolver.resolve(route);
    expect(commentServiceSpy.getPhotoComment).toHaveBeenCalledWith(
      userId,
      albumId,
      photoId,
      commentId
    );
  });
  it('should query User Comment from route params', () => {
    // Generate random route.
    const userId = faker.random.uuid();
    const commentId = faker.random.uuid();
    const route = new ActivatedRouteSnapshot();
    route.params = { userId, commentId };

    resolver.resolve(route);
    expect(commentServiceSpy.getUserComment).toHaveBeenCalledWith(
      userId,
      commentId
    );
  });
});
