import mongoose from "mongoose";
import { setServers } from "node:dns/promises";

// Set DNS servers to resolve MongoDB SRV records
try {
  setServers(["1.1.1.1", "8.8.8.8"]);
} catch (error) {
  console.log("Error setting DNS servers", error);
}

const mongodbUrl = process.env.MONGODB_URL;

if(!mongodbUrl){
  throw new Error('db error');
}

let cached = global.mongoose;
if(!cached){
  cached = global.mongoose = {conn: null, promise: null}
}

const connectDB = async () => {
  if(cached.conn){
    return cached.conn;
  }
  if(!cached.promise){
    cached.promise = mongoose.connect(mongodbUrl).then((conn) => conn.connection);
  }
  try {
    const conn = await cached.promise;
    return conn;
  } catch (error) {
    console.error(error);
  }
}

export default connectDB;
