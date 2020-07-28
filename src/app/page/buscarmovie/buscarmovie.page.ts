import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemoviedbService } from '../../service/themoviedb.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-buscarmovie',
  templateUrl: './buscarmovie.page.html',
  styleUrls: ['./buscarmovie.page.scss'],
})
export class BuscarmoviePage implements OnInit {
  name:string;
  textobuscar = "" ;
  numberPage:number=1;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private themoviedbService:ThemoviedbService) { }
  listmovies : any[] = [];
  nombrebusqueda:string;
  buscar( event ){
    console.log(event);
    this.textobuscar = event.detail.value; 
  }
  ngOnInit() {
    this.showMovies(event);
  }
  showMovies(event){
    if(this.name!=this.nombrebusqueda){
      this.listmovies.length=0;
      this.nombrebusqueda=this.name;
      this.numberPage=1;
    }
    this.themoviedbService.getMovies(/*this.name, this.numberPage*/).then(data => {//debugger
      for (let i = 0; i < data["results"].length; i++) {
        this.listmovies.push(data["results"][i]);   
      }//debugger
      if (this.listmovies.length == 200) {
        event.target.disabled = true;
      }
      this.numberPage++;
      event.target.complete();
    }).catch((err) => {//debugger
    });
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  
}
