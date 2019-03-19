import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import * as faker from 'faker';

import { AlbumsResolver } from './albums.resolver';
import { AlbumService } from 'src/app/api/album.service';

describe('AlbumsResolver', () => {
  let resolver: AlbumsResolver;
  let albumServiceSpy;

  beforeEach(() => {
    albumServiceSpy = jasmine.createSpyObj('AlbumService', {
      getUserAlbums: of([]),
    });

    TestBed.configureTestingModule({
      providers: [{ provide: AlbumService, useValue: albumServiceSpy }],
    });

    resolver = TestBed.get(AlbumsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should query User Albums from route params', () => {
    // Generate random route.
    const userId = faker.random.uuid();
    const route = new ActivatedRouteSnapshot();
    route.params = { userId };

    resolver.resolve(route);
    expect(albumServiceSpy.getUserAlbums).toHaveBeenCalledWith(userId);
  });
});
