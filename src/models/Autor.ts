import mongoose from "mongoose";

interface IAutor {
  id?: mongoose.Types.ObjectId;
  name: string;
  nationality?: string;
}

type AutorDocument = mongoose.HydratedDocument<IAutor>;

const autorSchema: mongoose.Schema<IAutor> = new mongoose.Schema<IAutor>(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    nationality: { type: String, required: false },
  },
  { versionKey: false },
);

const autor: mongoose.Model<IAutor> = mongoose.model<IAutor>(
  "autores",
  autorSchema,
);

export { autor, autorSchema };
export type { AutorDocument, IAutor };
