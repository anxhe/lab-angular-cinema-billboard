import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  providers: [ServiceService]
})
export class MyMovieComponent implements OnInit {

  moviesId: number;
  movie: any;

  constructor(public moviesService: ServiceService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe((params) => this.moviesId = Number(params['id']));
    this.movie = this.moviesService.getMovie(this.moviesId);
  }
}
