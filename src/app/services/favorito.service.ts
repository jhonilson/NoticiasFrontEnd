import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../model/noticia';
import { ResponseFavorito } from '../model/response-favorito';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  url: string = 'http://localhost:8080/favoritos';

  constructor(
    private http: HttpClient
  ) { }

  getFavoritos(offset:number, pageSize:number, field:string): Observable<ResponseFavorito> {
    console.log(this.url + '/paginacion?offset='+offset+'&pageSize='+pageSize+'&field='+field);

    return this.http.get<ResponseFavorito>(this.url + '/paginacion?offset='+offset+'&pageSize='+pageSize+'&field='+field);
  }

  addFavorito(noticia: Noticia){
    console.log(JSON.stringify(noticia) );
    return this.http.post<Noticia>(this.url, noticia);
  }

  deleteFavorito(id: number): Observable<Noticia> {
    console.log('delete: ' + this.url+"/"+id);

    return this.http.delete<Noticia>(this.url + '/'+id);
  }

  getFavorito(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(this.url + `/${id}`);
  }

  getFavoritoByTitle(offset:number, pageSize:number, field:string, cadena:string): Observable<ResponseFavorito> {
    console.log(this.url + '/buscar?offset='+offset+'&pageSize='+pageSize+'&field='+field+'&cadena='+cadena);

    return this.http.get<ResponseFavorito>(this.url + '/buscar?offset='+offset+'&pageSize='+pageSize+'&field='+field+'&cadena='+cadena);
  }
}
