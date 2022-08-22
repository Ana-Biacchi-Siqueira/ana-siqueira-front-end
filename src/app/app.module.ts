import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AutorService } from './biblioteca/autores/autor/autor.service';
import { EditaAutorComponent } from './biblioteca/autores/autor/edita-autor/edita-autor/edita-autor.component';
import { RegistraAutorComponent } from './biblioteca/autores/autor/registra-autor/registra-autor.component';
import { ListarAutoresComponent } from './biblioteca/autores/listar-autores/listar-autores.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistraLivroComponent } from './biblioteca/livros/livro/registra-livro/registra-livro.component';
import { ListarLivrosComponent } from './biblioteca/livros/listar-livros/listar-livros/listar-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAutoresComponent,
    EditaAutorComponent,
    RegistraAutorComponent,
    RegistraLivroComponent,
    ListarLivrosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
