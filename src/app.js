import "express-async-errors";
import express from "express";
import conectaBanco from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

const conexao = await conectaBanco();

conexao.on("error", (erro) =>
  console.log("Erro de conexão com o banco de dados: " + erro),
);

conexao.once("open", () =>
  console.log("Conexão com o banco de dados estabelecida com sucesso"),
);

const app = express();
routes(app);

app.use(manipuladorDeErros);

export default app;
