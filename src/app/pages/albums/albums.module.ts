import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlbumsPage } from './albums.page';
import { AlbumsResolver } from './albums.resolver';

const routes: Routes = [
  {
    path: '',
    component: AlbumsPage,
    resolve: { albums: AlbumsResolver },
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AlbumsPage],
})
export class AlbumsPageModule {}
