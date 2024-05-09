//Responsável por controlar as requisições feitas para a API relacionadas aos herois
import NaoEncontrado from "../Erros/NaoEncontrado.js";
import heroi from "../models/Herois.js";

class HeroisController {
  static async listarHerois(req, res, next) {
    try {
      const listarHerois = await heroi.find({});
      res.status(200).json(listarHerois);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarHeroiPorId(req, res, next) {
    try {
      const id = req.params.id;
      const heroiEncontrado = await heroi.findById(id);
      if (heroiEncontrado !== null) {
        res.status(200).json(heroiEncontrado);
      } else {
        next(new NaoEncontrado("Heroi não encontrado"));
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

      if (heroiUpdate !== null) {
        res.status(200).json({ message: "Heroi atualizado com sucesso" });
      } else {
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

      if (heroiEliminado !== null) {
        res.status(200).json({ message: "Heroi excluido com sucesso" });
      } else {
        next(new NaoEncontrado("Heroi não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static listarHeroiPorFiltro = async (req, res, next) => {
    try {
      const { nome, alter_ego, profissao } = req.query;

      //utilizando o regex do mongoose para fazer a busca mais organica
      const busca = {};
      //aqui fazemos a busca por nome e/ou alter_ego
      //para fazer a buca http://localhost:3000/herois/busca?nome=
      if (nome) busca.nome = { $regex: nome, $options: "i" };
      //para fazer a buca http://localhost:3000/herois/busca?alter_ego=
      if (alter_ego) busca.alter_ego = { $regex: alter_ego, $options: "i" };
      //http://localhost:3000/herois/busca?profissao=
      if (profissao) busca.profissao = { $regex: profissao, $options: "i" };

      const heroiResultado = await heroi.find(busca);

      //caso não encontre nenhum heroi com o filtro especificado
      if(heroiResultado.length === 0){

        //verifica qual valor foi passado para o filtro
        let valorPassado = nome ? "nome" : alter_ego ? "alter_ego" : profissao ? "profissao" : "";

        //retorna uma mensagem com o valor não encontrado no filtro
        return res.status(404).send({ message: `Nenhum herói registrado com o valor ${valorPassado ? valorPassado : "de busca"} '${req.query[valorPassado] ? req.query[valorPassado].toUpperCase() : ""}' especificado.` });
      
      }
      res.status(200).send(heroiResultado);
    } catch (erro) {
      next(erro);
    }
  };
}

export default HeroisController;
