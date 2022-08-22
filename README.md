# AnaSiqueiraFrontEnd

Para iniciar o projeto precisa-se ter os seguintes softwares instalados;

VSC, Eclipse, MySQL Workbench e Postman;

Primeiramente se inicia a API com o Eclipse, a API que ultilizamos pode ser encontrada aqui (https://github.com/aceleragep/biblioteca.git)
Na pasta onde for baixada, devera se abrir a Prompt de comando e dar o seguinte comando "npm start"
Nessa API precisa alterar o '@CrossOrigin' dos controllers para '@CrossOrigin(origins = "http://localhost:4200/")'
Abrir já o MySQL e rodar a aplicação da API;

Após fazer isso, podemos adicionar Autores e Livros usando as seguintes URL's em POST no Postman (http://localhost:8080/api/autores) com o seguinte comando em "Body", "Raw" selecionado como "JSON" { "nome": "Exemplo",
   "biografia": "Exemplo" } e (localhost:8080/api/livros) com o comando em "Body", "Raw" selecionado como "JSON" dessa forma { "titulo": "Exemplo",   "anoLancamento": "Exemplo", "autor": "Exemplo" }.

Após fazer esses passos no VSC abrimos o projeto e caso não haja a framework Angular na maquina, deverá instalar com o comando "npm i @angular/cli", também se instala pela prompt de comando.
Junto com ele, pode se instalar o bootstrap com o comando   "npm i bootstrap".

Ao abrir o projeto, pode se abrir um terminal novo e dar o comando "ng serve", após isso para acessar a lista de autores vá até a URL "http://localhost:4200/listar-autores" e para ir ao formulário de registro, basta clicar em "Registrar Autores", e para acessar a lista de livros vá até a URL "http://localhost:4200/listar-livros" e para ir ao formulário de registro, basta clicar em "Registrar Livros".

