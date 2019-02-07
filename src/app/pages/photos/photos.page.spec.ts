import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

import { PhotosPage } from './photos.page';

const routes: Routes = [
  {
    path: 'users/:userId/albums/:albumId/photos',
    component: PhotosPage,
  },
];

describe('PhotosPage', () => {
  let component: PhotosPage;
  let fixture: ComponentFixture<PhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
