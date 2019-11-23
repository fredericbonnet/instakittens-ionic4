import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersPageModule),
  },
  {
    path: 'users/:userId',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule),
  },
  {
    path: 'users/:userId/albums',
    loadChildren: () => import('./pages/albums/albums.module').then(m => m.AlbumsPageModule),
  },
  {
    path: 'users/:userId/albums/:albumId',
    loadChildren: () => import('./pages/album/album.module').then(m => m.AlbumPageModule),
  },
  {
    path: 'users/:userId/albums/:albumId/photos',
    loadChildren: () => import('./pages/photos/photos.module').then(m => m.PhotosPageModule),
  },
  {
    path: 'users/:userId/albums/:albumId/photos/:photoId',
    loadChildren: () => import('./pages/photo/photo.module').then(m => m.PhotoPageModule),
  },
  {
    path: 'users/:userId/albums/:albumId/photos/:photoId/comments',
    loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsPageModule),
  },
  {
    path: 'users/:userId/albums/:albumId/photos/:photoId/comments/:commentId',
    loadChildren: () => import('./pages/comment/comment.module').then(m => m.CommentPageModule),
  },
  {
    path: 'users/:userId/comments',
    loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsPageModule),
  },
  {
    path: 'users/:userId/comments/:commentId',
    loadChildren: () => import('./pages/comment/comment.module').then(m => m.CommentPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
