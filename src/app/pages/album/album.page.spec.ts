import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { of } from 'rxjs';

import { AlbumPage } from './album.page';
import { AlbumService } from 'src/app/api/album.service';

const routes: Routes = [
  {
    path: 'users/:userId/albums/:albumId',
    component: AlbumPage,
  },
];

describe('AlbumPage', () => {
  let component: AlbumPage;
  let fixture: ComponentFixture<AlbumPage>;
  let albumServiceSpy;

  beforeEach(async(() => {
    albumServiceSpy = jasmine.createSpyObj('AlbumService', {
      getUserAlbum: of({}),
    });
    TestBed.configureTestingModule({
      declarations: [AlbumPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: AlbumService, useValue: albumServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
