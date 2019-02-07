import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Album } from 'src/app/api/album.model';
import { AlbumService } from 'src/app/api/album.service';

@Injectable({
  providedIn: 'root',
})
export class AlbumResolver implements Resolve<Album> {
  constructor(private albumService: AlbumService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Album> {
    const userId = route.paramMap.get('userId');
    const albumId = route.paramMap.get('albumId');
    return this.albumService.getUserAlbum(userId, albumId);
  }
}
