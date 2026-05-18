import type { NextFunction, Request, Response } from "express";
import { autor } from "../models/Autor.js";
import type { AutorDocument, IAutor } from "../models/Autor.js";
import NotFoundError from "../errors/NotFoundError.js";

type IdParams = {
  id: string;
};

type AutorRequestBody = Pick<IAutor, "name" | "nationality">;
type AutorUpdateBody = Partial<AutorRequestBody>;

class AutorController {
  static async listarAutores(
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<void> {
    const listaAutores: AutorDocument[] = await autor.find({});
    res.status(200).json(listaAutores);
  }

  static async listarAutorPorId(
    req: Request<IdParams>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const id: string = req.params.id;
    const autorEncontrado: AutorDocument | null = await autor.findById(id);
    if (autorEncontrado) {
      res.status(200).json(autorEncontrado);
    } else {
      next(new NotFoundError("Autor não encontrado."));
    }
  }

  static async cadastrarAutor(
    req: Request<Record<string, never>, unknown, AutorRequestBody>,
    res: Response,
    _next: NextFunction,
  ): Promise<void> {
    const novoAutor: AutorDocument = await autor.create(req.body);
    res
      .status(201)
      .json({ message: "Autor cadastrado com sucesso", autor: novoAutor });
  }

  static async atualizarAutor(
    req: Request<IdParams, unknown, AutorUpdateBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const id: string = req.params.id;
    const autorAtualizado: AutorDocument | null = await autor.findByIdAndUpdate(
      id,
      req.body,
    );
    if (autorAtualizado) {
      res.status(200).json({ message: "Autor atualizado com sucesso" });
    } else {
      next(new NotFoundError("Autor não encontrado."));
    }
  }

  static async deletarAutor(
    req: Request<IdParams>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const id: string = req.params.id;
    const autorDeletado: AutorDocument | null =
      await autor.findByIdAndDelete(id);
    if (autorDeletado) {
      res.status(200).json({ message: "Autor deletado com sucesso" });
    } else {
      next(new NotFoundError("Autor não encontrado."));
    }
  }
}

export default AutorController;
