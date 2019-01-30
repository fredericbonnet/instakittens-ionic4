import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { of } from 'rxjs';

import { CommentsPage } from './comments.page';
import { CommentService } from 'src/app/api/comment.service';

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

describe('CommentsPage', () => {
  let component: CommentsPage;
  let fixture: ComponentFixture<CommentsPage>;
  let commentServiceSpy;

  beforeEach(async(() => {
    commentServiceSpy = jasmine.createSpyObj('CommentService', {
      getUserComments: of([]),
    });
    TestBed.configureTestingModule({
      declarations: [CommentsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: CommentService, useValue: commentServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
