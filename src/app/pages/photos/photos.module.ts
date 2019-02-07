import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhotosPage } from './photos.page';
import { PhotosResolver } from './photos.resolver';

const routes: Routes = [
  {
    path: '',
    component: PhotosPage,
    resolve: { photos: PhotosResolver },
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PhotosPage],
})
export class PhotosPageModule {}
