import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { of } from 'rxjs';

import { PhotoPage } from './photo.page';
import { PhotoService } from 'src/app/api/photo.service';

const routes: Routes = [
  {
    path: 'users/:userId/albums/:albumId/photos/:photoId',
    component: PhotoPage,
  },
];

describe('PhotoPage', () => {
  let component: PhotoPage;
  let fixture: ComponentFixture<PhotoPage>;
  let photoServiceSpy;

  beforeEach(async(() => {
    photoServiceSpy = jasmine.createSpyObj('PhotoService', {
      getAlbumPhoto: of({}),
    });
    TestBed.configureTestingModule({
      declarations: [PhotoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: PhotoService, useValue: photoServiceSpy }],
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
