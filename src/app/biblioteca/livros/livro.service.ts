import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment.prod';
import { Livro } from './livro.interface';

const APIURL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  constructor(
    private http: HttpClient,
    private router: Router) {}

  listarLivros() : Observable<any>{
    return this.http.get(`${APIURL}/livros`).pipe(map(listando => {
      return listando as Livro[];
    }));
  }

  cadastraLivros(livros: Livro): Observable<Livro>{
    var infos = {
      "id": livros.id,
      "nome": livros.titulo,
      "biografia": livros.anoLancamento,
      "autor": livros.autor
    }
    return this.http.post(`${APIURL}/livros/criaLivro`, infos).pipe(
      map(resultado => {
        return resultado as Livro;
      })
    );
  }

  deletaLivros(id: number) : Observable<any> {
    return this.http.delete(`${APIURL}/livros/${id}`).pipe(map(deletando => {
      return deletando as Livro[];

      }))}}

