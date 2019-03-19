import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/testing/utils.spec';
import { of } from 'rxjs';
import * as faker from 'faker';

import { PhotoPage } from './photo.page';
import { Photo } from '../../api/photo.model';
import { fakePhoto } from '../../api/photo.model.spec';

const routes: Routes = [
  {
    path: 'users/:userId/albums/:albumId/photos/:photoId',
    component: PhotoPage,
  },
];

describe('PhotoPage', () => {
  let userId, albumId, photoId;
  let photo: Photo;
  let component: PhotoPage;
  let fixture: ComponentFixture<PhotoPage>;
  let photoTitleDE: DebugElement;
  let commentsLinkDE: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoPage, RouterLinkDirectiveStub],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Generate random photo and pass as route data.
    userId = faker.random.uuid();
    albumId = faker.random.uuid();
    photo = { ...fakePhoto(), album_id: albumId };
    photoId = photo.id;
    const route = TestBed.get(ActivatedRoute);
    route.snapshot.params = { userId, albumId, photoId };
    route.data = of({ photo });

    fixture = TestBed.createComponent(PhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    photoTitleDE = fixture.debugElement.query(
      By.css('[data-testid="photo-title"]')
    );
    commentsLinkDE = fixture.debugElement.query(
      By.css('[data-testid="comments-link"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Photo info', () => {
    expect(photoTitleDE).toBeDefined();
  });

  it('should have a link to Photo Comments', () => {
    expect(commentsLinkDE).toBeDefined();
    const routerLink = commentsLinkDE.injector.get(RouterLinkDirectiveStub);
    expect(routerLink.linkParams).toEqual([
      '/users',
      userId,
      'albums',
      albumId,
      'photos',
      photoId,
      'comments',
    ]);
  });
});
