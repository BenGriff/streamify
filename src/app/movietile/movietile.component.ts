import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movietile',
  standalone: false,
  
  templateUrl: './movietile.component.html',
  styleUrl: './movietile.component.css'
})
export class MovietileComponent implements OnInit{
@Input('movie') movie:any;

  ngOnInit(): void {
    console.log("Received Movie:", this.movie);
  }

  getImage(){
    this.movie.Poster;
  }  

}
