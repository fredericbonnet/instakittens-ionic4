import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhotoPage } from './photo.page';
import { PhotoResolver } from './photo.resolver';

const routes: Routes = [
  {
    path: '',
    component: PhotoPage,
    resolve: { photo: PhotoResolver },
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PhotoPage],
})
export class PhotoPageModule {}
