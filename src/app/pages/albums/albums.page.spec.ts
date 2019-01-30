import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { of } from 'rxjs';

import { AlbumsPage } from './albums.page';
import { AlbumService } from 'src/app/api/album.service';

const routes: Routes = [
  {
    path: 'users/:userId/albums',
    component: AlbumsPage,
  },
];

describe('AlbumsPage', () => {
  let component: AlbumsPage;
  let fixture: ComponentFixture<AlbumsPage>;
  let albumServiceSpy;

  beforeEach(async(() => {
    albumServiceSpy = jasmine.createSpyObj('AlbumService', {
      getUserAlbums: of([]),
    });
    TestBed.configureTestingModule({
      declarations: [AlbumsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: AlbumService, useValue: albumServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
