import { Injectable } from '@angular/core';
import { movies } from '../sample-movies';

@Injectable()

export class ServiceService {

  movies: Array<any> = movies;

  constructor() { }

  getMovies():Array<any> {
    return this.movies
  }

  getMovie(id) {
    this.movies.forEach((movie)=>{
      if (movie.id == id) {
        return movie
      }
    })
  }
}
