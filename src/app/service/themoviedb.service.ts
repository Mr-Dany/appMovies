import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {
  constructor(private http: HttpClient) { }
  getMovies(nameMovie:string,page:number) {
    let url='https://api.themoviedb.org/3/search/movie?api_key=ed10bd8c6a2daeb3b35740779b186c66&language=en-US&query='+nameMovie+'&page='+page+'&include_adult=false';
    return new Promise((resolve,rejects) => {
      this.http.get(url)
      .subscribe(data => {
        resolve(data);
        }, (error) => {
          rejects (error);
        });
    });
  }
}
