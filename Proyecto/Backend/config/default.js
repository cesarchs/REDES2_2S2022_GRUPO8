import dotenv from 'dotenv';

/**
 * Variables de entorno
 */

const env = dotenv.config();

export const config={
  api:{
    hostname: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    name: process.env.NAME || 'api-node'
  },
  mongo:{
    uri: `mongodb://${process.env.adminMongo}:${process.env.passwordMongo}@${process.env.hostMongo}:27017/REDES2_PROY`
  }
}