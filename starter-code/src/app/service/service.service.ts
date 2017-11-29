import { Injectable } from '@angular/core';
import { movies } from '../../sample-movies';

@Injectable()

export class ServiceService {

  movies: Array<any> = movies;

  constructor() { }

  getMovies():Array<any> {
    return this.movies
  }

  getMovie(id) {
    return this.movies.filter(movie => movie.id == id)[0];
  }
}
