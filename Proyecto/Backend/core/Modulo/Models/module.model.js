import mongoose from "mongoose";
/*
const homeSchema = new mongoose.Schema({
  img: {type: String, required: true}
});

const adminSchema = new mongoose.Schema({
  nombreAdmin: {type: String, required: true},
  descripcion: {type: String, required: true},
  img: {type: String, required: true}
});

const devSchema = new mongoose.Schema({
  nombre: {type: String, required: true},
  rol: {type: String, required: true},
  carnet: {type: String, required: true},
  curso: {type: String, required: true}
});

const funPublicSchema = new mongoose.Schema({
  nombreFuncion: {type: String, required: true},
  descripcion: {type: String, required: true},
  img: {type: String, required: true}
});

const noticiaSchema = new mongoose.Schema({
  nombreNoticia: {type: String, required: true},
  descripcion: {type: String, required: true}
});

const desarrolloSchema = new mongoose.Schema({
  cantidad: {type: Number, required: true},
  tipo: {type: String, required: true},
  Fecha: {type: String, required: true}
});


const homeModel = mongoose.model('dataProyecto', homeSchema);
const adminModel = mongoose.model('dataProyecto', adminSchema);
const devModel = mongoose.model('dataProyecto', devSchema);
const funPulicModel = mongoose.model('dataProyecto', funPublicSchema);
const noticiaModel = mongoose.model('dataProyecto', noticiaSchema);
const desarrolloModel = mongoose.model('dataProyecto', desarrolloSchema);*/

const dataSchema = new mongoose.Schema({
  tipo: {type: Number}
});

const dataModel = mongoose.model('informacion', dataSchema);


export class ModuleModels{
  constructor(){

  }

  async home(){
    let result = await dataModel.find({tipo: 1});
    return result;
  }

  async admin(){
    let result = await dataModel.find({tipo: 2});
    return result;
  }

  async dev(){
    let result = await dataModel.find({tipo: 3});
    return result;
  }
  
  async funPublic(){
    let result = await dataModel.find({tipo: 4});
    return result;
  }
  
  async noticia(){
    let result = await dataModel.find({tipo: 5});
    return result;
  }

  async desarrollo(){
    let result = await dataModel.find({tipo: 6});
    return result;
  }

}