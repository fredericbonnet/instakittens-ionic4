import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AlbumService } from '../../api/album.service';
import { Album } from '../../api/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {
  userId;
  albums$: Observable<Album[]>;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.albums$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.userId = params.get('userId');
        return this.albumService.getUserAlbums(this.userId);
      })
    );
  }
}
