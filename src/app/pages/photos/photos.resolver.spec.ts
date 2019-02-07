import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PhotosResolver } from './photos.resolver';
import { PhotoService } from 'src/app/api/photo.service';

describe('PhotosResolver', () => {
  let photoServiceSpy;

  beforeEach(() => {
    photoServiceSpy = jasmine.createSpyObj('PhotoService', {
      getAlbumPhotos: of([]),
    });
    TestBed.configureTestingModule({
      providers: [{ provide: PhotoService, useValue: photoServiceSpy }],
    });
  });

  it('should be created', () => {
    const service: PhotosResolver = TestBed.get(PhotosResolver);
    expect(service).toBeTruthy();
  });
});
