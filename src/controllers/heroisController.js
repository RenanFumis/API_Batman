//Responsável por controlar as requisições feitas para a API relacionadas aos herois
import heroi from "../models/Herois.js";

class HeroisController {
  static async listarHerois(req, res) {
    try {
      const listarHerois = await heroi.find({});
      res.status(200).json(listarHerois);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao listar os herois` });
    }
  }

  static async listarHeroiPorId(req, res) {
    try {
      const id = req.params.id;
      const heroiEncontrado = await heroi.findById(id);
      res.status(200).json(heroiEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na requisição do heroi` });
    }
  }

  static async adicionarHeroi(req, res) {
    try {
      const novoHeroi = await heroi.create(req.body);
      res
        .status(201)
        .json({ message: "Heroi adicionado com sucesso", heroi: novoHeroi });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao adicionar o heroi` });
    }
  }

  static async atualizarHeroi(req, res) {
    try {
      const id = req.params.id;
      await heroi.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Heroi atualizado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na requisição do heroi` });
    }
  }

  static async excluirHeroi(req, res) {
    try {
      const id = req.params.id;
      await heroi.findByIdAndDelete(id);
      res.status(200).json({ message: "Heroi excluido com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao excluir o heroi` });
    }
  }
}

export default HeroisController;
