import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemoviedbService } from '../../service/themoviedb.service';
import { IonInfiniteScroll, IonicRouteStrategy } from '@ionic/angular';
@Component({
  selector: 'app-buscarmovie',
  templateUrl: './buscarmovie.page.html',
  styleUrls: ['./buscarmovie.page.scss'],
})
export class BuscarmoviePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private themoviedbService:ThemoviedbService) { }
  listmovies: any[]= [];
  textoBuscar = '';
  ngOnInit() {
    this.themoviedbService.getMovies().subscribe(data => {
      console.log(data);
      this.listmovies=data;
    });
  }
  buscar(event){
    console.log(event);
    this.textoBuscar = event.detail.value;
  }
}
