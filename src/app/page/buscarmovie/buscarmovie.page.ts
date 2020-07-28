import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemoviedbService } from '../../service/themoviedb.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-buscarmovie',
  templateUrl: './buscarmovie.page.html',
  styleUrls: ['./buscarmovie.page.scss'],
})
export class BuscarmoviePage implements OnInit {
  //name:string;
  textobuscar = "" ;
  //numberPage:number=1;
  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private themoviedbService:ThemoviedbService) { }
  listmovies : any[] = [];
  nombrebusqueda:string;
  buscar( event ){
    console.log(event);
    this.textobuscar = event.detail.value; 
  }
  ngOnInit() {
    console.log(this.listmovies);
    this.themoviedbService.getMovies().subscribe(data =>{
      for (let i = 0; i < data["results"].length; i++) {
        this.listmovies.push(data["results"][i]);   
      }
    });
    //this.showMovies(event);
  }
  /*showMovies(event){
    this.themoviedbService.getMovies().then(data => {//debugger
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
  }*/ 
  
}
