//CONEXION A LA BASE DE DATOS
import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';

export default async (): Promise<Db> => {
  mongoose.set('useFindAndModify', false);
  const conection = await mongoose.connect(config.dataBaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  return conection.connection.db;
};
