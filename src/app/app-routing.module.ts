import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviesinfoComponent } from './moviesinfo/moviesinfo.component';

const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movies/:id', component: MoviesinfoComponent},
  {path: '*', component: MoviesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
