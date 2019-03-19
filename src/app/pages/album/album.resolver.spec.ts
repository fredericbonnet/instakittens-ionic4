import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import * as faker from 'faker';

import { AlbumResolver } from './album.resolver';
import { AlbumService } from 'src/app/api/album.service';

describe('AlbumResolver', () => {
  let resolver: AlbumResolver;
  let albumServiceSpy;

  beforeEach(() => {
    albumServiceSpy = jasmine.createSpyObj('AlbumService', {
      getUserAlbum: of({}),
    });

    TestBed.configureTestingModule({
      providers: [{ provide: AlbumService, useValue: albumServiceSpy }],
    });

    resolver = TestBed.get(AlbumResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should query User Album from route params', () => {
    // Generate random route.
    const userId = faker.random.uuid();
    const albumId = faker.random.uuid();
    const route = new ActivatedRouteSnapshot();
    route.params = { userId, albumId };

    resolver.resolve(route);
    expect(albumServiceSpy.getUserAlbum).toHaveBeenCalledWith(userId, albumId);
  });
});
