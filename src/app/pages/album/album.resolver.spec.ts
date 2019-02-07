import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AlbumResolver } from './album.resolver';
import { AlbumService } from 'src/app/api/album.service';

describe('AlbumResolver', () => {
  let albumServiceSpy;

  beforeEach(() => {
    albumServiceSpy = jasmine.createSpyObj('AlbumService', {
      getUserAlbum: of({}),
    });
    TestBed.configureTestingModule({
      providers: [{ provide: AlbumService, useValue: albumServiceSpy }],
    });
  });

  it('should be created', () => {
    const service: AlbumResolver = TestBed.get(AlbumResolver);
    expect(service).toBeTruthy();
  });
});
