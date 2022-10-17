import express from "express";
import cors from "cors";


import { moduloModule } from "./Modulo";
import { mongodb } from "../dbConnection/dbmongoConection";

export class Server{
  constructor(config){
    this._api = express();
    this._hostname = config.api.hostname;
    this._port = config.api.port;
    this._name = config.api.name;
    this.setMiddlewares();
    this.setRoutes();
  }

  setMiddlewares(){
    this._api.use(cors());
    this._api.use(express.json({limit: '50mb'}));
    this._api.use(express.urlencoded({extended:true}));
  }

  setRoutes(){
    this._api.use('/api', moduloModule());
    this._api.use('/', (req, res)=>{
      res.json({message: "Welcome to init"});
    })
  }

  start(){
    try {
      this._api.listen(this._port,()=>{
        console.log(`${this._name} server is running on http://${this._hostname}:${this._port}`);
      })
    } catch (error) {
      console.log(error);
    }
  }

}