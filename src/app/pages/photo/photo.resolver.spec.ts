import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PhotoResolver } from './photo.resolver';
import { PhotoService } from 'src/app/api/photo.service';

describe('PhotoResolver', () => {
  let photoServiceSpy;

  beforeEach(() => {
    photoServiceSpy = jasmine.createSpyObj('PhotoService', {
      getAlbumPhoto: of({}),
    });
    TestBed.configureTestingModule({
      providers: [{ provide: PhotoService, useValue: photoServiceSpy }],
    });
  });

  it('should be created', () => {
    const service: PhotoResolver = TestBed.get(PhotoResolver);
    expect(service).toBeTruthy();
  });
});
