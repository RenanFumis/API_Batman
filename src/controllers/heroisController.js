//Responsável por controlar as requisições feitas para a API relacionadas aos herois
import NaoEncontrado from "../Erros/NaoEncontrado.js";
import heroi from "../models/Herois.js";

class HeroisController {
  static async listarHerois(req, res, next) {
    try {
      const listarHerois = await heroi.find({});
      res.status(200).json(listarHerois);
    } catch (erro) {
      next(erro)
    }
  }

  static async listarHeroiPorId(req, res, next) {
    try {
      const id = req.params.id;
      const heroiEncontrado = await heroi.findById(id);
      if(heroiEncontrado !== null){
        res.status(200).json(heroiEncontrado);
      }else{
        next(new NaoEncontrado("Heroi não encontrado"))
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async adicionarHeroi(req, res, next) {
    try {
      const novoHeroi = await heroi.create(req.body);
      res
        .status(201)
        .json({ message: "Heroi adicionado com sucesso", heroi: novoHeroi });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarHeroi(req, res, next) {
    try {
      const id = req.params.id;
      const heroiUpdate = await heroi.findByIdAndUpdate(id, req.body);

      if(heroiUpdate !== null){
        res.status(200).json({ message: "Heroi atualizado com sucesso" });
      }else{
        next(new NaoEncontrado("Heroi não encontrado"));
      }
      res.status(200).json({ message: "Heroi atualizado com sucesso" });
    } catch (erro) {
      next(erro);
    }
  }

  static async excluirHeroi(req, res, next) {
    try {
      const id = req.params.id;
      const heroiEliminado = await heroi.findByIdAndDelete(id);

      if(heroiEliminado !== null){
        res.status(200).json({ message: "Heroi excluido com sucesso" });
      }else{
        next(new NaoEncontrado("Heroi não encontrado"));
      }
      
    } catch (erro) {
      next(erro);
    }
  }
}

export default HeroisController;
