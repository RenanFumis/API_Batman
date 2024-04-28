import heroi from "../models/Herois.js";

class HeroisController {

  static async listarHerois(req, resp){
    const listarHerois = await heroi.find({});
      res.status(200).json(herois);
  }
};

export default HeroisController;