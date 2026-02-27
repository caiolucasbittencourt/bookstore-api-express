# Bookstore API Express

![NodeJS](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

Uma API REST construída com Node.js, Express e Mongoose. Este projeto serve como back-end para um sistema de livraria, permitindo o gerenciamento de livros e autores.

## Tecnologias

- **Node.js 22** (Ambiente de execução JavaScript)
- **Express** (Framework para construção de APIs)
- **Mongoose** (ODM para modelagem de dados com o MongoDB)
- **MongoDB** (Banco de dados NoSQL)
- **Docker** (Containerização)
- **ESLint** (Linting de código)
- **Prettier** (Formatação de código)

### Funcionalidades

- **CRUD de Livros:** Criação, leitura, atualização e remoção de livros.
- **CRUD de Autores:** Gerenciamento de autores.
- **Busca:** Localização de livros e autores por ID.
- **Relacionamentos:** Associação de dados entre livros e autores.

### Pré-requisitos

- Node.js 22+ (ou use o arquivo `.nvmrc`)
- MongoDB (local ou Atlas)
- Docker (opcional)

### Instalação

```bash
git clone https://github.com/caiolucasbittencourt/bookstore-api-express.git
cd bookstore-api-express
npm install
```

### Configuração

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```bash
cp .env.example .env
```

Configure a variável `DB_CONNECTION_STRING` com sua string de conexão do MongoDB.

### Executando

#### Desenvolvimento (local)

```bash
npm run dev
```

#### Produção

```bash
npm start
```

#### Docker

```bash
npm run docker:up      # Inicia os containers
npm run docker:down    # Para os containers
npm run docker:logs    # Visualiza logs da API
npm run docker:build   # Rebuild da imagem
```

### Scripts

| Script                 | Descrição                                  |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Inicia o servidor com hot-reload (nodemon) |
| `npm start`            | Inicia o servidor em produção              |
| `npm run lint`         | Executa o ESLint                           |
| `npm run lint:fix`     | Corrige erros do ESLint automaticamente    |
| `npm run format`       | Formata o código com Prettier              |
| `npm run format:check` | Verifica formatação sem alterar            |
| `npm run docker:up`    | Sobe os containers Docker                  |
| `npm run docker:down`  | Para os containers Docker                  |

### Rotas

#### Base

| Método | Rota | Descrição                  |
| ------ | ---- | -------------------------- |
| GET    | `/`  | Retorna informações da API |

**Exemplo de resposta:**

```json
{
  "name": "Bookstore API",
  "version": "1.0.0",
  "description": "API REST para gerenciamento de livros e autores",
  "endpoints": {
    "livros": "/livros",
    "autores": "/autores"
  },
  "documentation": "https://github.com/caiolucasbittencourt/bookstore-api-express"
}
```

#### Livros

| Método | Rota          | Descrição                   |
| ------ | ------------- | --------------------------- |
| GET    | `/livros`     | Lista todos os livros       |
| GET    | `/livros/:id` | Busca um livro por ID       |
| POST   | `/livros`     | Cadastra um novo livro      |
| PUT    | `/livros/:id` | Atualiza um livro existente |
| DELETE | `/livros/:id` | Remove um livro             |

#### Autores

| Método | Rota           | Descrição                   |
| ------ | -------------- | --------------------------- |
| GET    | `/autores`     | Lista todos os autores      |
| GET    | `/autores/:id` | Busca um autor por ID       |
| POST   | `/autores`     | Cadastra um novo autor      |
| PUT    | `/autores/:id` | Atualiza um autor existente |
| DELETE | `/autores/:id` | Remove um autor             |
