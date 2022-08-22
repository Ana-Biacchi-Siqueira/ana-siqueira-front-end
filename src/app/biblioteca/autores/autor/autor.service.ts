import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';


import { environment } from 'src/environments/environment';
import { Autor } from './autor.interface';

const APIURL = environment.api_url;

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  constructor(
    private http: HttpClient,
    private router: Router) {}

  listarAutores() : Observable<any>{
    return this.http.get(`${APIURL}/autores`).pipe(map(listando => {
      return listando as Autor[];
    }));
  }

  cadastraAutor(autores: Autor): Observable<Autor>{
    var infos = {
      "id": autores.id,
      "nome": autores.nome,
      "biografia": autores.biografia
    }
    return this.http.post(`${APIURL}/autores/criaAutores`, infos).pipe(
      map(resultado => {
        return resultado as Autor;
      })
    );
  }

  deletaAutor(id: number) : Observable<any> {
    return this.http.delete(`${APIURL}/autores/${id}`).pipe(map(deletando => {
      return deletando as Autor[];

      }))}}

