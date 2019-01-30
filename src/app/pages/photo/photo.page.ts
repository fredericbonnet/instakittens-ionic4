import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PhotoService } from '../../api/photo.service';
import { Photo } from '../../api/photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  userId;
  albumId;
  photoId;
  photo$: Observable<Photo>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.photo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.userId = params.get('userId');
        this.albumId = params.get('albumId');
        this.photoId = params.get('photoId');
        return this.photoService.getAlbumPhoto(
          this.userId,
          this.albumId,
          this.photoId
        );
      })
    );
  }
}
