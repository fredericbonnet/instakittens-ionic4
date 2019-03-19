import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import * as faker from 'faker';

import { CommentPage } from './comment.page';
import { Comment } from '../../api/comment.model';
import { fakeComment } from '../../api/comment.model.spec';

const routes: Routes = [
  {
    path: 'users/:userId/albums/:albumId/photos/:photoId/comments/:commentId',
    component: CommentPage,
  },
  {
    path: 'users/:userId/comments/:commentId',
    component: CommentPage,
  },
];

describe('CommentPage', () => {
  let userId, albumId, photoId, commentId;
  let comment: Comment;
  let component: CommentPage;
  let fixture: ComponentFixture<CommentPage>;
  let commentMessageDE: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Generate random comment list and pass as route data.
    userId = faker.random.uuid();
    albumId = faker.random.uuid();
    photoId = faker.random.uuid();
    comment = { ...fakeComment(), user_id: userId, photo_id: photoId };
    commentId = comment.id;
    const route = TestBed.get(ActivatedRoute);
    route.snapshot.params = { userId, albumId, photoId, commentId };
    route.data = of({ comment });

    fixture = TestBed.createComponent(CommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    commentMessageDE = fixture.debugElement.query(
      By.css('[data-testid="comment-message"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Comment info', () => {
    expect(commentMessageDE).toBeDefined();
  });
});
