import mongoose from "mongoose";
import { autorSchema, type IAutor } from "./Autor.js";

interface ILivro {
  id?: mongoose.Types.ObjectId;
  title: string;
  price: number;
  pages?: number;
  author?: IAutor;
}

type LivroDocument = mongoose.HydratedDocument<ILivro>;

const livroSchema: mongoose.Schema<ILivro> = new mongoose.Schema<ILivro>(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    pages: { type: Number, required: false },
    author: autorSchema,
  },
  { versionKey: false },
);

const livro: mongoose.Model<ILivro> = mongoose.model<ILivro>(
  "livros",
  livroSchema,
);

export default livro;
export type { ILivro, LivroDocument };
