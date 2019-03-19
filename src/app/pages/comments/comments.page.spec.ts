import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/testing/utils.spec';
import { of } from 'rxjs';
import * as faker from 'faker';

import { CommentsPage } from './comments.page';
import { Comment } from '../../api/comment.model';
import { fakeComment } from '../../api/comment.model.spec';

const routes: Routes = [
  {
    path: 'users/:userId/albums/:albumId/photos/:photoId/comments',
    component: CommentsPage,
  },
  {
    path: 'users/:userId/comments',
    component: CommentsPage,
  },
];

describe('CommentsPage (Photo Comments)', () => {
  let userId, albumId, photoId;
  let comments: Comment[];
  let component: CommentsPage;
  let fixture: ComponentFixture<CommentsPage>;
  let commentListDE: DebugElement;
  let commentMessagesDE: DebugElement[];
  let commentLinksDE: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsPage, RouterLinkDirectiveStub],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Generate random comment list and pass as route data.
    userId = faker.random.uuid();
    albumId = faker.random.uuid();
    photoId = faker.random.uuid();
    const nb = faker.random.number(50);
    comments = [];
    for (let i = 0; i < nb; i++) {
      comments.push({ ...fakeComment(), user_id: userId, photo_id: photoId });
    }
    const route = TestBed.get(ActivatedRoute);
    route.snapshot.params = { userId, albumId, photoId };
    route.data = of({ comments });

    fixture = TestBed.createComponent(CommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    commentListDE = fixture.debugElement.query(
      By.css('[data-testid="comment-list"]')
    );
    commentMessagesDE = fixture.debugElement.queryAll(
      By.css('[data-testid="comment-message"]')
    );
    commentLinksDE = fixture.debugElement.queryAll(
      By.css('[data-testid="comment-link"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Comment list', () => {
    expect(commentListDE).toBeDefined();
    expect(commentMessagesDE.length).toEqual(comments.length);
    for (let i = 0; i < comments.length; i++) {
      const comment: Comment = comments[i];
      const commentMessageDE: DebugElement = commentMessagesDE[i];
      expect(commentMessageDE.nativeElement.textContent).toEqual(
        comment.message
      );
    }
  });

  it('should have links to all Photo Comments', () => {
    expect(commentMessagesDE.length).toEqual(comments.length);
    for (let i = 0; i < comments.length; i++) {
      const comment: Comment = comments[i];
      const commentLinkDE: DebugElement = commentLinksDE[i];
      const routerLink = commentLinkDE.injector.get(RouterLinkDirectiveStub);
      expect(routerLink.linkParams).toEqual([
        '/users',
        userId,
        'albums',
        albumId,
        'photos',
        photoId,
        'comments',
        comment.id,
      ]);
    }
  });
});

describe('CommentsPage (User Comments', () => {
  let userId;
  let comments: Comment[];
  let component: CommentsPage;
  let fixture: ComponentFixture<CommentsPage>;
  let commentListDE: DebugElement;
  let commentMessagesDE: DebugElement[];
  let commentLinksDE: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsPage, RouterLinkDirectiveStub],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Generate random comment list and pass as route data.
    userId = faker.random.uuid();
    const nb = faker.random.number(50);
    comments = [];
    for (let i = 0; i < nb; i++) {
      comments.push({ ...fakeComment(), user_id: userId });
    }
    const route = TestBed.get(ActivatedRoute);
    route.snapshot.params = { userId };
    route.data = of({ comments });

    fixture = TestBed.createComponent(CommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    commentListDE = fixture.debugElement.query(
      By.css('[data-testid="comment-list"]')
    );
    commentMessagesDE = fixture.debugElement.queryAll(
      By.css('[data-testid="comment-message"]')
    );
    commentLinksDE = fixture.debugElement.queryAll(
      By.css('[data-testid="comment-link"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Comment list', () => {
    expect(commentListDE).toBeDefined();
    expect(commentMessagesDE.length).toEqual(comments.length);
    for (let i = 0; i < comments.length; i++) {
      const comment: Comment = comments[i];
      const commentMessageDE: DebugElement = commentMessagesDE[i];
      expect(commentMessageDE.nativeElement.textContent).toEqual(
        comment.message
      );
    }
  });

  it('should have links to all User Comments', () => {
    expect(commentMessagesDE.length).toEqual(comments.length);
    for (let i = 0; i < comments.length; i++) {
      const comment: Comment = comments[i];
      const commentLinkDE: DebugElement = commentLinksDE[i];
      const routerLink = commentLinkDE.injector.get(RouterLinkDirectiveStub);
      expect(routerLink.linkParams).toEqual([
        '/users',
        userId,
        'comments',
        comment.id,
      ]);
    }
  });
});
