import { ThemoviedbService } from './../../service/themoviedb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  detailMovies:any = [];
  idMovie: string;
  constructor(private themoviedbService:ThemoviedbService, private router:ActivatedRoute ) { }
  ngOnInit() {
    this.idMovie=this.router.snapshot.paramMap.get('id');
    this.getDetailMovie();
    //console.log("id",this.router.snapshot.paramMap.get('id'));
  }
  getDetailMovie(){
    this.themoviedbService.getMoviesDetail(this.idMovie).then(data => {
      this.detailMovies = data;
      debugger
    }).catch(error => {
    });
  }

}
