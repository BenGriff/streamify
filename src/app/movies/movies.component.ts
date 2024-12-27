import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  standalone: false,
  
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
  movies:any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    
  }

  getMovies(searchTerm : string) {
    this.movieService.getMovies(searchTerm).subscribe(response => {
      console.log(response);
      this.movies = response.Search;
    })
  }
}
