import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviesinfo',
  standalone: false,
  
  templateUrl: './moviesinfo.component.html',
  styleUrl: './moviesinfo.component.css'
})
export class MoviesinfoComponent implements OnInit{
  movie: any;

  constructor(private movieService: MovieService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.showMovie();
  }

  showMovie(){
    this.movieService.getMovie(this.route.snapshot.paramMap.get('id')).subscribe(movie => {
      this.movie = movie;
      console.log("Did we get this movie?");
      console.log(movie);
    })
  }
}
