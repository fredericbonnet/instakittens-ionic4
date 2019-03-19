import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import * as faker from 'faker';

import { PhotoResolver } from './photo.resolver';
import { PhotoService } from 'src/app/api/photo.service';

describe('PhotoResolver', () => {
  let resolver: PhotoResolver;
  let photoServiceSpy;

  beforeEach(() => {
    photoServiceSpy = jasmine.createSpyObj('PhotoService', {
      getAlbumPhoto: of({}),
    });

    TestBed.configureTestingModule({
      providers: [{ provide: PhotoService, useValue: photoServiceSpy }],
    });

    resolver = TestBed.get(PhotoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should query Album Photo from route params', () => {
    // Generate random route.
    const userId = faker.random.uuid();
    const albumId = faker.random.uuid();
    const photoId = faker.random.uuid();
    const route = new ActivatedRouteSnapshot();
    route.params = { userId, albumId, photoId };

    resolver.resolve(route);
    expect(photoServiceSpy.getAlbumPhoto).toHaveBeenCalledWith(
      userId,
      albumId,
      photoId
    );
  });
});
