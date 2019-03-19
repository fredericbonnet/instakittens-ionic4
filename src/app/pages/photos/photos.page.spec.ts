import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/testing/utils.spec';
import { of } from 'rxjs';
import * as faker from 'faker';

import { PhotosPage } from './photos.page';
import { Photo } from '../../api/photo.model';
import { fakePhoto } from '../../api/photo.model.spec';

const routes: Routes = [
  {
    path: 'photos/:photoId/albums/:albumId/photos',
    component: PhotosPage,
  },
];

describe('PhotosPage', () => {
  let userId, albumId;
  let photos: Photo[];
  let component: PhotosPage;
  let fixture: ComponentFixture<PhotosPage>;
  let photoListDE: DebugElement;
  let photoTitlesDE: DebugElement[];
  let photoLinksDE: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosPage, RouterLinkDirectiveStub],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Generate random photo list and pass as route data.
    userId = faker.random.uuid();
    albumId = faker.random.uuid();
    const nb = faker.random.number(50);
    photos = [];
    for (let i = 0; i < nb; i++) {
      photos.push({ ...fakePhoto(), album_id: albumId });
    }
    const route = TestBed.get(ActivatedRoute);
    route.snapshot.params = { userId, albumId };
    route.data = of({ photos });

    fixture = TestBed.createComponent(PhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    photoListDE = fixture.debugElement.query(
      By.css('[data-testid="photo-list"]')
    );
    photoTitlesDE = fixture.debugElement.queryAll(
      By.css('[data-testid="photo-title"]')
    );
    photoLinksDE = fixture.debugElement.queryAll(
      By.css('[data-testid="photo-link"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Photo list', () => {
    expect(photoListDE).toBeDefined();
    expect(photoTitlesDE.length).toEqual(photos.length);
    for (let i = 0; i < photos.length; i++) {
      const photo: Photo = photos[i];
      const photoTitleDE: DebugElement = photoTitlesDE[i];
      expect(photoTitleDE.nativeElement.textContent).toEqual(photo.title);
    }
  });

  it('should have links to all Photos', () => {
    expect(photoLinksDE.length).toEqual(photos.length);
    for (let i = 0; i < photos.length; i++) {
      const photo: Photo = photos[i];
      const photoLinkDE: DebugElement = photoLinksDE[i];
      const routerLink = photoLinkDE.injector.get(RouterLinkDirectiveStub);
      expect(routerLink.linkParams).toEqual([
        '/users',
        userId,
        'albums',
        albumId,
        'photos',
        photo.id,
      ]);
    }
  });
});
