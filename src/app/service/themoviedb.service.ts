import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {
  constructor(private http: HttpClient) { }
  getMovies() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
