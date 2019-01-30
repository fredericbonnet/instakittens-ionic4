import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PhotoService } from '../../api/photo.service';
import { Photo } from '../../api/photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  userId;
  albumId;
  photos$: Observable<Photo[]>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.photos$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.userId = params.get('userId');
        this.albumId = params.get('albumId');
        return this.photoService.getAlbumPhotos(this.userId, this.albumId);
      })
    );
  }
}
