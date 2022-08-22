import { RegistraLivroComponent } from './biblioteca/livros/livro/registra-livro/registra-livro.component';
import { ListarLivrosComponent } from './biblioteca/livros/listar-livros/listar-livros/listar-livros.component';
import { RegistraAutorComponent } from './biblioteca/autores/autor/registra-autor/registra-autor.component';
import { ListarAutoresComponent } from './biblioteca/autores/listar-autores/listar-autores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'cadastrar-livros',
  component: RegistraLivroComponent,
},
{
  path: 'listar-autores',
  component: ListarAutoresComponent,
},
{
  path: 'listar-livros',
  component: ListarLivrosComponent,
},
{
    path: 'cadastrar-autores',
    component: RegistraAutorComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
