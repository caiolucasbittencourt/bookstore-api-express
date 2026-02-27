import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) =>
    res.status(200).json({
      name: "Bookstore API",
      version: "1.0.0",
      description: "API REST para gerenciamento de livros e autores",
      endpoints: {
        livros: "/livros",
        autores: "/autores",
      },
      documentation:
        "https://github.com/caiolucasbittencourt/bookstore-api-express",
    }),
  );

  app.use(express.json(), livros, autores);
};

export default routes;
