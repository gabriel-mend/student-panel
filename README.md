<h1 align="center">student-panel 👨‍🎓</h1>
<h2 align="center">Painel de gerenciamento de cursos e estudantes</h2>

<img src="https://user-images.githubusercontent.com/49095200/134911666-eb53302e-7ccb-4ef6-aef4-1f991389dce9.png" />

# 💬 Sobre o projeto
student-panel - É um sistema para gerenciamento de estudantes e cursos, onde seu objetivo e dar liberdade para o admin listar, deletar, editar e criar cursos e estudantes. 

## Tecnologias utilizadas
### Frontend
* [Reactjs](https://pt-br.reactjs.org)
* [Nextjs](https://nextjs.org)
* [Typescript](https://www.typescriptlang.org/)
* [Styled Components](https://styled-components.com/)
### Backend
* [Knex](https://knexjs.org)
* [Express](https://expressjs.com/pt-br/)
* [Nodejs](https://nodejs.org/en/)

## 🚀 Como executar o projeto

- Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
- Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).
- Instale **[Yarn](https://yarnpkg.com/)** para ter uma melhor experiência quando for executar a aplicação.
- Ter o banco de dados **[postgres](https://www.postgresql.org)**.

### :octocat: Faça o clone do projeto

```bash
# Clone este repositório
$ git clone <https://github.com/loadingGabriel/student-panel>

# Acesse a pasta do projeto no terminal/cmd
$ cd student-panel

```

### 🎲 Rodando banco de dados

```bash

# Entre no postgres

# Crie um usuário e senha
$ CREATE USER student_panel WITH ENCRYPTED PASSWORD 'student_panel';

# Crie um banco de dados e passe acesso ao seu user
$ CREATE DATABASE student_panel OWNER student_panel;

```

### ⚙ Rodando o backend da aplicação

```bash

# Entre na pasta backend
$ cd backend

# Instale as dependências
$ yarn install

# Execute as migrations
$ yarn knex migrate:latest 

# Execute as seeds
$ yarn knex seed:run

# Iniciar servidor 
$ yarn start

# O servidor inciará na porta:3333
```

### 💻 Rodando a aplicação web

```bash

# Entre na pasta frontend
$ cd frontend

# Instale as dependências
$ yarn install

# Execute a aplicação 
$ yarn dev

# O aplicação inciará (geralmente) na porta:3000 - acesse <http://localhost:3000>
```

## 👨🏻‍🚀 Sobre mim
<a href="https://www.linkedin.com/in/gabriel-mendonca-pereira/">
 <img style="border-radius:50%" width="100px; "src="https://avatars0.githubusercontent.com/u/49095200?s=460&u=27a77c43fff5eab61be02a3fedfd7db554145981&v=4"/>
 <p>Gabriel Mendonça Pereira</p>
</a>
