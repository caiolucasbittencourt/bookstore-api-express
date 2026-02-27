# Bookstore API Express

![NodeJS](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

Uma API REST construída com Node.js, Express e Mongoose. Este projeto serve como back-end para um sistema de livraria, permitindo o gerenciamento de livros e autores.

## Tecnologias

- **Node.js** (Ambiente de execução JavaScript)
- **Express** (Framework para construção de APIs)
- **Mongoose** (ODM para modelagem de dados com o MongoDB)
- **MongoDB** (Banco de dados NoSQL)
- **Dotenv** (Gerenciamento de variáveis de ambiente)

### Funcionalidades

- **CRUD de Livros:** Criação, leitura, atualização e remoção de livros.
- **CRUD de Autores:** Gerenciamento de autores.
- **Busca:** Localização de livros e autores por ID.
- **Relacionamentos:** Associação de dados entre livros e autores.

### Pré-requisitos

- Node.js
- MongoDB

### Instalação

```bash
git clone https://github.com/caiolucasbittencourt/bookstore-api-express.git
cd bookstore-api-nodejs
npm install
npm run dev
