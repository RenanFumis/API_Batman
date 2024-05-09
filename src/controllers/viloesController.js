//Classe responsável por controlar as requisições dos vilões
import NaoEncontrado from "../Erros/NaoEncontrado.js";
import vilao from "../models/Viloes.js";
import RequisicaoIncorreta from "../Erros/RequisicaoIncorreta.js";

class ViloesController {
  static async listarViloes(req, res, next) {
    try {
      const buscaViloes = vilao.find({});
      req.resultado = buscaViloes;
      next();
    } catch (erro) {
      next(erro);
    }
  }

  static async listarVilaoPorId(req, res, next) {
    try {
      const id = req.params.id;
      const vilaoEncontrado = await vilao.findById(id);
      if (vilaoEncontrado !== null) {
        res.status(200).json(vilaoEncontrado);
      } else {
        next(new NaoEncontrado("Vilão não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async adicionarVilao(req, res, next) {
    try {
      const novoVilao = await vilao.create(req.body);
      res
        .status(201)
        .json({ message: "Vilão adicionado com sucesso", vilao: novoVilao });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarVilao(req, res, next) {
    try {
      const id = req.params.id;
      const vilaoUpdate = await vilao.findByIdAndUpdate(id, req.body);

      if (vilaoUpdate !== null) {
        res.status(200).json({ message: "Vilão atualizado com sucesso" });
      } else {
        next(new NaoEncontrado("Vilão não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async excluirVilão(req, res, next) {
    try {
      const id = req.params.id;
      const vilaoEliminado = await vilao.findByIdAndDelete(id);

      if (vilaoEliminado !== null) {
        res.status(200).json({ message: "Vilão excluido com sucesso" });
      } else {
        next(new NaoEncontrado("Vilão não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }
  static listarViloesPorFiltro = async (req, res, next) => {
    try {
      const { nome, alter_ego, profissao } = req.query;
      const busca = {};
      if (nome) busca.nome = { $regex: nome, $options: "i" };
      if (alter_ego) busca.alter_ego = { $regex: alter_ego, $options: "i" };
      if (profissao) busca.profissao = { $regex: profissao, $options: "i" };

      const viloesResultado = await vilao.find(busca);

      if(viloesResultado.length === 0){

        let valorPassado = nome ? "nome" : alter_ego ? "alter_ego" : profissao ? "profissao" : "";

        return res.status(404).send({message:
          `Nenhum vilão registrado com o valor ${valorPassado ? valorPassado : "de busca"} '${req.query[valorPassado] ? req.query[valorPassado].toUpperCase() : ""}' especificado.`
        })
      }


      res.status(200).send(viloesResultado);
    } catch (erro) {
      next(erro);
    }
  };
}

export default ViloesController;
