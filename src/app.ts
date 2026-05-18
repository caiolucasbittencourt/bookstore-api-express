import "express-async-errors";
import express from "express";
import type { Express } from "express";
import conectaBanco from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

const conexao = await conectaBanco();

conexao.on("error", (erro: Error): void =>
  console.error(`❌ MongoDB connection error: ${erro}`),
);

conexao.once("open", () => console.log("✅ MongoDB connected"));

const app: Express = express();
routes(app);

app.use(manipuladorDeErros);

export default app;
