import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AutorService } from './../autor.service';
import { Autor } from './../autor.interface';

@Component({
  selector: 'app-registra-autor',
  templateUrl: './registra-autor.component.html',
  styleUrls: ['./registra-autor.component.css']
})
export class RegistraAutorComponent implements OnInit {

  autores: Autor[] = [];
  registraForm!: FormGroup;
  formHeader: string = 'Registra Autor';
  nomeAutor: string = '';

  erroAoCriarAutor: string ='';
  sucessoAoCriarAutor: string ='';
  alertaService: any;

  constructor(private autorService: AutorService, private router: Router, private cadastrarForm: FormBuilder) { }

  ngOnInit(): void {
      this.registraForm = this.cadastrarForm.group({
        id: ['', Number],
        nome: ['',[Validators.required]],
        biografia: ['',[Validators.required]]
      });
    }

    cadastraAutor(){
      const infos = this.registraForm.getRawValue() as Autor;
    this.autorService.cadastraAutor(infos).subscribe({
      next: data=>{
        console.log(data, "O autor foi cadastrado.");
      }, error: erro=>{
        console.log(erro, "Não foi possível cadastrar o autor.")
      }
      }
    )
    this.router.navigate(['listar-autores'])};

}
