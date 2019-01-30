import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AlbumService } from '../../api/album.service';
import { Album } from '../../api/album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  userId;
  albumId;
  album$: Observable<Album>;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.album$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.userId = params.get('userId');
        this.albumId = params.get('albumId');
        return this.albumService.getUserAlbum(this.userId, this.albumId);
      })
    );
  }
}
