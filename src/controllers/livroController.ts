import type { NextFunction, Request, Response } from "express";
import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";
import type { AutorDocument, IAutor } from "../models/Autor.js";
import type { ILivro, LivroDocument } from "../models/Livro.js";
import NotFoundError from "../errors/NotFoundError.js";

type IdParams = {
  id: string;
};

type LivroRequestBody = Pick<ILivro, "title" | "price" | "pages">;
type LivroUpdateBody = Partial<LivroRequestBody>;
type LivroCreateBody = LivroRequestBody & {
  autor: string;
};
type LivroComAutor = LivroRequestBody & {
  autor?: string;
  author: IAutor;
};

class LivroController {
  static async listarLivros(
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<void> {
    const listaLivros: LivroDocument[] = await livro.find({});
    res.status(200).json(listaLivros);
  }

  static async listarLivroPorId(
    req: Request<IdParams>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const id: string = req.params.id;
    const livroEncontrado: LivroDocument | null = await livro.findById(id);
    if (livroEncontrado) {
      res.status(200).json(livroEncontrado);
    } else {
      next(new NotFoundError("Livro não encontrado."));
    }
  }

  static async cadastrarLivro(
    req: Request<Record<string, never>, unknown, LivroCreateBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const novoLivro: LivroCreateBody = req.body;
    const autorEncontrado: AutorDocument | null = await autor.findById(
      novoLivro.autor,
    );
    if (autorEncontrado) {
      const livroCriado: LivroComAutor = {
        ...novoLivro,
        author: autorEncontrado.toObject(),
      };
      delete livroCriado.autor;
      const livroSalvo: LivroDocument = await livro.create(livroCriado);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso", livro: livroSalvo });
    } else {
      next(new NotFoundError("Autor não encontrado."));
    }
  }

  static async atualizarLivro(
    req: Request<IdParams, unknown, LivroUpdateBody>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const id: string = req.params.id;
    const livroAtualizado: LivroDocument | null = await livro.findByIdAndUpdate(
      id,
      req.body,
    );
    if (livroAtualizado) {
      res.status(200).json({ message: "Livro atualizado com sucesso" });
    } else {
      next(new NotFoundError("Livro não encontrado."));
    }
  }

  static async deletarLivro(
    req: Request<IdParams>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const id: string = req.params.id;
    const livroDeletado: LivroDocument | null =
      await livro.findByIdAndDelete(id);
    if (livroDeletado) {
      res.status(200).json({ message: "Livro deletado com sucesso" });
    } else {
      next(new NotFoundError("Livro não encontrado."));
    }
  }
}

export default LivroController;
