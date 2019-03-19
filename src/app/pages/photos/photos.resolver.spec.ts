import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import * as faker from 'faker';

import { PhotosResolver } from './photos.resolver';
import { PhotoService } from 'src/app/api/photo.service';

describe('PhotosResolver', () => {
  let resolver: PhotosResolver;
  let photoServiceSpy;

  beforeEach(() => {
    photoServiceSpy = jasmine.createSpyObj('PhotoService', {
      getAlbumPhotos: of([]),
    });

    TestBed.configureTestingModule({
      providers: [{ provide: PhotoService, useValue: photoServiceSpy }],
    });

    resolver = TestBed.get(PhotosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should query Album Photos from route params', () => {
    // Generate random route.
    const userId = faker.random.uuid();
    const albumId = faker.random.uuid();
    const route = new ActivatedRouteSnapshot();
    route.params = { userId, albumId };

    resolver.resolve(route);
    expect(photoServiceSpy.getAlbumPhotos).toHaveBeenCalledWith(
      userId,
      albumId
    );
  });
});
