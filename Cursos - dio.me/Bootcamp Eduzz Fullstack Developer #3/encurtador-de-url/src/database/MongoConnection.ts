import mongoose     from "mongoose";
import { config } from '../config/Constants'

export class MongoConnection {
  public async connect(): Promise<void>{
    try{
      await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log('Conectado na DB')
    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }
  }
}

