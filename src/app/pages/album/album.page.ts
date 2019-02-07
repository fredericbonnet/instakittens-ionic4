import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.albumId = this.route.snapshot.paramMap.get('albumId');
    this.album$ = this.route.data.pipe(map(data => data.album));
  }
}
