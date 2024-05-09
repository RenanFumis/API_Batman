//Classe responsável por controlar as requisições dos vilões
import NaoEncontrado from "../Erros/NaoEncontrado.js";
import vilao from "../models/Viloes.js";

class ViloesController {

  static async listarViloes(req, res, next){
    try{
      const listarViloes = await vilao.find({});
      res.status(200).json(listarViloes);
    }catch (erro){
      next(erro);
    }
  }

  static async listarVilaoPorId(req, res, next){
    try{
      const id = req.params.id;
      const vilaoEncontrado = await vilao.findById(id);
      if(vilaoEncontrado !== null){
        res.status(200).json(vilaoEncontrado);
      }else{
        next(new NaoEncontrado("Vilão não encontrado"))
      }
    }catch (erro){
      next(erro);
    }
  }

  static async adicionarVilao(req, res, next){
    try{
      const novoVilao = await vilao.create(req.body);
      res.status(201).json({message: "Vilão adicionado com sucesso", vilao: novoVilao});
    }catch (erro){
      next(erro);
    }
  }

  static async atualizarVilao(req, res, next){
    try{
      const id = req.params.id;
      const vilaoUpdate = await vilao.findByIdAndUpdate(id, req.body);

      if(vilaoUpdate !== null){
        res.status(200).json({message: "Vilão atualizado com sucesso"});
      }else{
        next(new NaoEncontrado("Vilão não encontrado"));
      }
      
    }catch (erro){
      next(erro);
    }
  }

  static async excluirVilão(req, res, next){
    try{
      const id = req.params.id;
      const vilaoEliminado = await vilao.findByIdAndDelete(id);

      if(vilaoEliminado !== null){
        res.status(200).json({message: "Vilão excluido com sucesso"});
      }else{
        next(new NaoEncontrado("Vilão não encontrado"));
      }
      
    }catch (erro){
      next(erro);
    }
  }
  static  listarViloesPorFiltro = async (req, res, next) =>{
    try{
      const { nome, alter_ego, profissao } = req.query;
      const busca = {};
      //para fazer a buca http://localhost:3000/viloes/busca?nome=
      if(nome) busca.nome = nome;
      //para fazer a buca http://localhost:3000/viloes/busca?alter_ego=
      if(alter_ego) busca.alter_ego = alter_ego;
      //http://localhost:3000/viloes/busca?profissao=
      if(profissao) busca.profissao = profissao;

      const viloesResultado = await vilao.find(busca);

      res.status(200).send(viloesResultado);
    }catch(erro){
      next(erro);
    }
  }
};

export default ViloesController;