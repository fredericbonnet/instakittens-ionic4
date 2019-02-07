import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.albumId = this.route.snapshot.paramMap.get('albumId');
    this.photos$ = this.route.data.pipe(map(data => data.photos));
  }
}
