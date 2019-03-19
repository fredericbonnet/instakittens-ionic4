import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/testing/utils.spec';
import { of } from 'rxjs';
import * as faker from 'faker';

import { AlbumsPage } from './albums.page';
import { Album } from '../../api/album.model';
import { fakeAlbum } from '../../api/album.model.spec';

const routes: Routes = [
  {
    path: 'users/:userId/albums',
    component: AlbumsPage,
  },
];

describe('AlbumsPage', () => {
  let userId;
  let albums: Album[];
  let component: AlbumsPage;
  let fixture: ComponentFixture<AlbumsPage>;
  let albumListDE: DebugElement;
  let albumTitlesDE: DebugElement[];
  let albumLinksDE: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsPage, RouterLinkDirectiveStub],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Generate random album list and pass as route data.
    userId = faker.random.uuid();
    const nb = faker.random.number(50);
    albums = [];
    for (let i = 0; i < nb; i++) {
      albums.push({ ...fakeAlbum(), user_id: userId });
    }
    const route = TestBed.get(ActivatedRoute);
    route.snapshot.params = { userId };
    route.data = of({ albums });

    fixture = TestBed.createComponent(AlbumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    albumListDE = fixture.debugElement.query(
      By.css('[data-testid="album-list"]')
    );
    albumTitlesDE = fixture.debugElement.queryAll(
      By.css('[data-testid="album-title"]')
    );
    albumLinksDE = fixture.debugElement.queryAll(
      By.css('[data-testid="album-link"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an Album list', () => {
    expect(albumListDE).toBeDefined();
    expect(albumTitlesDE.length).toEqual(albums.length);
    for (let i = 0; i < albums.length; i++) {
      const album: Album = albums[i];
      const albumTitleDE: DebugElement = albumTitlesDE[i];
      expect(albumTitleDE.nativeElement.textContent).toEqual(album.title);
    }
  });

  it('should have links to all Albums', () => {
    expect(albumLinksDE.length).toEqual(albums.length);
    for (let i = 0; i < albums.length; i++) {
      const album: Album = albums[i];
      const albumLinkDE: DebugElement = albumLinksDE[i];
      const routerLink = albumLinkDE.injector.get(RouterLinkDirectiveStub);
      expect(routerLink.linkParams).toEqual([
        '/users',
        userId,
        'albums',
        album.id,
      ]);
    }
  });
});
