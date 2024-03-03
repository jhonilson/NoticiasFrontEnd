import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Add missing import statement
import { Observable } from 'rxjs';
import { NewsResponse } from '../model/news-response';
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  //url: string = 'http://localhost:8080/noticias?limit=4&sort=publishedAt&start=1';
  url: string = 'http://localhost:8080/noticias';

  constructor(
    private http: HttpClient
  ) { }

  getNoticias(limit: number, offset: number, sort: string): Observable<NewsResponse> {
    console.log(this.url + `?limit=${limit}&sort=${sort}&offset=${offset}`);
    return this.http.get<NewsResponse>(this.url + `?limit=${limit}&sort=${sort}&offset=${offset}`);
   // return this.http.get<Noticia[]>(this.url);
  }

  getnoticiasBytitle(limit: string, start: number, sort: string, search: string): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(this.url + `/byTitle?limit=${limit}&sort=${sort}&start=${start}&search=${search}`);
  }

}
