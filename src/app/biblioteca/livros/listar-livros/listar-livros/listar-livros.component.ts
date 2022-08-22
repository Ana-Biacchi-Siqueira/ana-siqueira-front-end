import { LivroService } from './../../livro.service';
import { Livro } from './../../livro.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  livros: Livro[] = [];
  erroAoListar: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private livroService: LivroService) { }

  ngOnInit(): void {
      this.listarLivros();
  }

  listarLivros(){
    this.livroService.listarLivros().subscribe(listando => {
      this.livros = listando
    }, (error)=>{
      this.erroAoListar = "Nenhum Livro encontrado."
    });
  }

  deletaLivros(id: number){
    this.livroService.deletaLivros(id).subscribe(
      (res)=>{
        this.listarLivros()
      }
    )
  }



}
