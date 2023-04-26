import mongoose, { ConnectionOptions } from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

mongoose.Promise = global.Promise;

const mongoConnection = async (): Promise<void> => {
  const options: ConnectionOptions = { useNewUrlParser: true };
  const url = process.env.DB_CONN_STRING;


  await mongoose.connect(<string>url, options);
  console.log("MongoDB connection ok");
  
};

export { mongoConnection };