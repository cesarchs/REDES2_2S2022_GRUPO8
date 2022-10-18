import mongoose from "mongoose";

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


const homeModel = mongoose.model('REDES2_PROY', homeSchema);
const adminModel = mongoose.model('REDES2_PROY', adminSchema);
const devModel = mongoose.model('REDES2_PROY', devSchema);
const funPulicModel = mongoose.model('REDES2_PROY', funPublicSchema);
const noticiaModel = mongoose.model('REDES2_PROY', noticiaSchema);
const desarrolloModel = mongoose.model('REDES2_PROY', desarrolloSchema);

export class ModuleModels{
  constructor(){

  }

  async home(){
    let result = await homeModel.find({});
    return result;
  }

  async admin(){
    let result = await adminModel.find({});
    return result;
  }

  async dev(){
    let result = await devModel.find({});
    return result;
  }
  
  async funPublic(){
    let result = await funPulicModel.find({});
    return result;
  }
  
  async noticia(){
    let result = await noticiaModel.find({});
    return result;
  }

  async desarrollo(){
    let result = await desarrolloModel.find({});
    return result;
  }

}