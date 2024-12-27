import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_URL:string = 'http://www.omdbapi.com/?';
  private API_KEY:string = '&apikey=225bcbb9';

  constructor(private http:HttpClient) { }

  getMovie(id : string){
    return this.http.get<any>(`${this.API_URL}i=${id}${this.API_KEY}`)

  }

  getMovies(searchTerm : string): Observable<any> {
    return this.http.get(`${this.API_URL}&s=${searchTerm}${this.API_KEY}`);
  }
}
