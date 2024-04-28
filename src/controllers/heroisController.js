import heroi from "../models/Herois.js";

class HeroisController {

  static async listarHerois(req, res){
    try{
      const listarHerois = await heroi.find({});
      res.status(200).json(listarHerois);
    }catch (error){
      res.status(500).json({message: `${error.message} - Falha ao listar os herois`})
    }
  }

  // static async listarHeroiPorId(req, res){
  //   try{
  //     const id = req.params.id;
  //     const heroiEncontrado = await heroi.findById(id);
  //     res.status(200).json(heroiEncontrado);
  //   }catch (error){
  //     res.status(500).json({message: `${error.message} - Falha ao listar o heroi`})
  //   }
  // }

  // static async adicionarHeroi(req, res){
  //   try{
  //     const novoHeroi = await heroi.create(req.body);
  //     res.status(201).json({message: "Heroi adicionado com sucesso", heroi: novoHeroi});
  //   }catch (error){
  //     res.status(500).json({message: `${error.message} - Falha ao adicionar o heroi`})
  //   }
  // }


};

export default HeroisController;