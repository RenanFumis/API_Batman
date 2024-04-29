//Classe responsável por controlar as requisições dos vilões
import vilao from "../models/Viloes.js";

class ViloesController {

  static async listarViloes(req, res){
    try{
      const listarViloes = await vilao.find({});
      res.status(200).json(listarViloes);
    }catch (error){
      res.status(500).json({message: `${error.message} - Falha ao listar os vilões`})
    }
  }

  static async listarVilaoPorId(req, res){
    try{
      const id = req.params.id;
      const vilaoEncontrado = await vilao.findById(id);
      res.status(200).json(vilaoEncontrado);
    }catch (error){
      res.status(500).json({message: `${error.message} - Falha na requisição do vilão`})
    }
  }

  static async adicionarVilao(req, res){
    try{
      const novoVilao = await vilao.create(req.body);
      res.status(201).json({message: "Heroi adicionado com sucesso", vilao: novoVilao});
    }catch (error){
      res.status(500).json({message: `${error.message} - Falha ao adicionar o vilão`})
    }
  }

  static async atualizarVilao(req, res){
    try{
      const id = req.params.id;
      await vilao.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Vilão atualizado com sucesso"});
    }catch (error){
      res.status(500).json({message: `${error.message} - Falha na requisição do heroi`})
    }
  }

  static async excluirVilão(req, res){
    try{
      const id = req.params.id;
      await vilao.findByIdAndDelete(id);
      res.status(200).json({message: "Vilão excluido com sucesso"});
    }catch (error){
      res.status(500).json({message: `${error.message} - Falha ao excluir o vilão`})
    }
  }
};

export default ViloesController;