import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service'


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [ServiceService]
})
export class MyHomeComponent implements OnInit {

  movies: Object[];

  constructor(public moviesService: ServiceService ){ }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

}
