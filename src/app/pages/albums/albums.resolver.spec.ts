import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AlbumsResolver } from './albums.resolver';
import { AlbumService } from 'src/app/api/album.service';

describe('AlbumsResolver', () => {
  let albumServiceSpy;

  beforeEach(() => {
    albumServiceSpy = jasmine.createSpyObj('AlbumService', {
      getUserAlbums: of([]),
    });
    TestBed.configureTestingModule({
      providers: [{ provide: AlbumService, useValue: albumServiceSpy }],
    });
  });

  it('should be created', () => {
    const service: AlbumsResolver = TestBed.get(AlbumsResolver);
    expect(service).toBeTruthy();
  });
});
