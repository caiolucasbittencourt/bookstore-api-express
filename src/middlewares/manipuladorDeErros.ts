import type { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import NotFoundError from "../errors/NotFoundError.js";

function manipuladorDeErros(
  erro: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos." });
  } else if (erro instanceof mongoose.Error.ValidationError) {
    const mensagensErro: string = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join("; ");
    res.status(400).send({ message: `Os seguintes erros foram encontrados: ${mensagensErro}` });
  } else if (erro instanceof NotFoundError) {
    res.status(erro.status).send({ message: erro.message });
  } else {
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export default manipuladorDeErros;
