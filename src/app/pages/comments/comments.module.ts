import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CommentsPage } from './comments.page';
import { CommentsResolver } from './comments.resolver';

const routes: Routes = [
  {
    path: '',
    component: CommentsPage,
    resolve: { comments: CommentsResolver },
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CommentsPage],
})
export class CommentsPageModule {}
