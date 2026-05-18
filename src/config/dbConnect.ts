import mongoose, { type Connection } from "mongoose";

async function conectaBanco(): Promise<Connection> {
  mongoose.connect(process.env.DB_CONNECTION_STRING as string);

  return mongoose.connection;
}

export default conectaBanco;
