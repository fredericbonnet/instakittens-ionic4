import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

import { PhotoPage } from './photo.page';

const routes: Routes = [
  {
    path: 'users/:userId/albums/:albumId/photos/:photoId',
    component: PhotoPage,
  },
];

describe('PhotoPage', () => {
  let component: PhotoPage;
  let fixture: ComponentFixture<PhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
