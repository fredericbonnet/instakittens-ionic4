import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { of } from 'rxjs';

import { CommentPage } from './comment.page';
import { CommentService } from 'src/app/api/comment.service';

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
  let component: CommentPage;
  let fixture: ComponentFixture<CommentPage>;
  let commentServiceSpy;

  beforeEach(async(() => {
    commentServiceSpy = jasmine.createSpyObj('CommentService', {
      getUserComment: of({}),
    });
    TestBed.configureTestingModule({
      declarations: [CommentPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: CommentService, useValue: commentServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
