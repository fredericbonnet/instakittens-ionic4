import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Album } from 'src/app/api/album.model';
import { AlbumService } from 'src/app/api/album.service';

@Injectable({
  providedIn: 'root',
})
export class AlbumsResolver implements Resolve<Album[]> {
  constructor(private albumService: AlbumService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Album[]> {
    const userId = route.paramMap.get('userId');
    return this.albumService.getUserAlbums(userId);
  }
}
