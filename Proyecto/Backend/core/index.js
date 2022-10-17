import { config } from "../config/default.js";
import {Server} from "./server.js"


function main(config){
  const server = new Server(config)
  server.start();
}


main(config);