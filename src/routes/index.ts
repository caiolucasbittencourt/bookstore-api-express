import express from 'express';
import type { Express, Request, Response } from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';

const routes = (app: Express): void => {
  app.route('/').get((_req: Request, res: Response): void => {
    res.status(200).json({
      name: 'Catálogo de Livraria',
      version: '1.0.0',
      description: 'API REST para gerenciamento de livros e autores',
      endpoints: {
        livros: '/livros',
        autores: '/autores',
      },
      documentation: 'https://github.com/caiolucasbittencourt/catalogo-de-livraria',
    });
  });

  app.use(express.json(), livros, autores);
};

export default routes;
