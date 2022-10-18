
export class ModuloRoutes{
  constructor(express, model){
    this.router = express.Router();
    this.model = model;
    this.setRoute();
  }

  setRoute(){
    this.router.get('/home', this.home.bind(this));
    this.router.get('/admin', this.admin.bind(this));
    this.router.get('/dev', this.dev.bind(this));
    this.router.get('/funPublic', this.funPublic.bind(this));
    this.router.get('/noticia', this.noticia.bind(this));
    this.router.get('/desarrollo', this.desarrollo.bind(this));
  }

  async home(req, res){
    try {
      let result = await this.model.home();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async admin(req, res){
    try {
      let result = await this.model.admin();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async dev(req, res){
    try {
      let result = await this.model.dev();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async funPublic(req, res){
    try {
      let result = await this.model.funPublic();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async noticia(req, res){
    try {
      let result = await this.model.noticia();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async desarrollo(req, res){
    try {
      let result = await this.model.desarrollo();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

}