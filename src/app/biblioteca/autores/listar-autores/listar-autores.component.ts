import { AutorService } from './../autor/autor.service';
import { Autor } from './../autor/autor.interface';


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.css']
})
export class ListarAutoresComponent implements OnInit {

  autores: Autor[] = [];
  erroAoListar: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private autorService: AutorService) { }

  ngOnInit(): void {
      this.listarAutores();
  }

  listarAutores(){
    this.autorService.listarAutores().subscribe(listando => {
      this.autores = listando
    }, (error)=>{
      this.erroAoListar = "Nenhum Autor encontrado."
    });
  }

  deletaAutores(id: number){
    this.autorService.deletaAutor(id).subscribe(
      (res)=>{
        this.listarAutores()
      }
    )
  }



}
