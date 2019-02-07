import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from 'src/app/api/photo.model';
import { PhotoService } from 'src/app/api/photo.service';

@Injectable({
  providedIn: 'root',
})
export class PhotosResolver implements Resolve<Photo[]> {
  constructor(private photoService: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Photo[]> {
    const userId = route.paramMap.get('userId');
    const albumId = route.paramMap.get('albumId');
    return this.photoService.getAlbumPhotos(userId, albumId);
  }
}
