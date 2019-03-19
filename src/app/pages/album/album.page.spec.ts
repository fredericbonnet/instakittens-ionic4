import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/testing/utils.spec';
import { of } from 'rxjs';
import * as faker from 'faker';

import { AlbumPage } from './album.page';
import { Album } from '../../api/album.model';
import { fakeAlbum } from '../../api/album.model.spec';

const routes: Routes = [
  {
    path: 'users/:userId/albums/:albumId',
    component: AlbumPage,
  },
];

describe('AlbumPage', () => {
  let userId, albumId;
  let album: Album;
  let component: AlbumPage;
  let fixture: ComponentFixture<AlbumPage>;
  let albumTitleDE: DebugElement;
  let photosLinkDE: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumPage, RouterLinkDirectiveStub],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Generate random album and pass as route data.
    userId = faker.random.uuid();
    album = { ...fakeAlbum(), user_id: userId };
    albumId = album.id;
    const route = TestBed.get(ActivatedRoute);
    route.snapshot.params = { userId, albumId };
    route.data = of({ album });

    fixture = TestBed.createComponent(AlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    albumTitleDE = fixture.debugElement.query(
      By.css('[data-testid="album-title"]')
    );
    photosLinkDE = fixture.debugElement.query(
      By.css('[data-testid="photos-link"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Album info', () => {
    expect(albumTitleDE).toBeDefined();
  });

  it('should have a link to Album Photos', () => {
    expect(photosLinkDE).toBeDefined();
    const routerLink = photosLinkDE.injector.get(RouterLinkDirectiveStub);
    expect(routerLink.linkParams).toEqual([
      '/users',
      userId,
      'albums',
      albumId,
      'photos',
    ]);
  });
});
