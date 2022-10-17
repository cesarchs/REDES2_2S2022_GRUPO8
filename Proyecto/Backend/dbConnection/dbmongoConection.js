import mongoose from 'mongoose';
import { config } from '../config/default.js';

export const mongodb = async () => {
  try {
    const db = await mongoose.connect(config.mongo.uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`Mongodb connect ${db.connection.host}`)
  } catch (error) {
    console.log(error);  
  }
}