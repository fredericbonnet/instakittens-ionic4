import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlbumPage } from './album.page';
import { AlbumResolver } from './album.resolver';

const routes: Routes = [
  {
    path: '',
    component: AlbumPage,
    resolve: { album: AlbumResolver },
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AlbumPage],
})
export class AlbumPageModule {}
