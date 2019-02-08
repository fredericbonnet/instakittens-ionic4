import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'users',
    loadChildren: './pages/users/users.module#UsersPageModule',
  },
  {
    path: 'users/:userId',
    loadChildren: './pages/user/user.module#UserPageModule',
  },
  {
    path: 'users/:userId/albums',
    loadChildren: './pages/albums/albums.module#AlbumsPageModule',
  },
  {
    path: 'users/:userId/albums/:albumId',
    loadChildren: './pages/album/album.module#AlbumPageModule',
  },
  {
    path: 'users/:userId/albums/:albumId/photos',
    loadChildren: './pages/photos/photos.module#PhotosPageModule',
  },
  {
    path: 'users/:userId/albums/:albumId/photos/:photoId',
    loadChildren: './pages/photo/photo.module#PhotoPageModule',
  },
  {
    path: 'users/:userId/albums/:albumId/photos/:photoId/comments',
    loadChildren: './pages/comments/comments.module#CommentsPageModule',
  },
  {
    path: 'users/:userId/albums/:albumId/photos/:photoId/comments/:commentId',
    loadChildren: './pages/comment/comment.module#CommentPageModule',
  },
  {
    path: 'users/:userId/comments',
    loadChildren: './pages/comments/comments.module#CommentsPageModule',
  },
  {
    path: 'users/:userId/comments/:commentId',
    loadChildren: './pages/comment/comment.module#CommentPageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
