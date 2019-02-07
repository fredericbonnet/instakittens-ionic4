import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.albumId = this.route.snapshot.paramMap.get('albumId');
    this.photoId = this.route.snapshot.paramMap.get('photoId');
    this.photo$ = this.route.data.pipe(map(data => data.photo));
  }
}
