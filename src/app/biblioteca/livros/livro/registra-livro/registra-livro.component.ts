import { Router } from '@angular/router';
import { LivroService } from './../../livro.service';
import { Livro } from './../../livro.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registra-livro',
  templateUrl: './registra-livro.component.html',
  styleUrls: ['./registra-livro.component.css']
})
export class RegistraLivroComponent {


  livros: Livro[] = [];
  registraForm!: FormGroup;
  formHeader: string = 'Registra Autor';
  nomeAutor: string = '';

  erroAoCriarAutor: string ='';
  sucessoAoCriarAutor: string ='';
  alertaService: any;

  constructor(private livroService: LivroService, private router: Router, private cadastrarForm: FormBuilder) { }

  ngOnInit(): void {
      this.registraForm = this.cadastrarForm.group({
        id: ['', Number],
        titulo: ['',[Validators.required]],
        anoLancamento: ['',[Validators.required]],
        autor: ['',[Validators.required]]
      });
    }

    cadastraLivro(){
      const infos = this.registraForm.getRawValue() as Livro;
    this.livroService.cadastraLivros(infos).subscribe({
      next: data =>{
        console.log(data, "O livro foi cadastrado.");
      }, error: erro=>{
        console.log(erro, "Não foi possível cadastrar o livro.")
      }
      }
    )
    this.router.navigate(['listar-livros'])};

}


