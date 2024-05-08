import mongoose from "mongoose";

function manipuladorDeErros(erro, req, res, next){
  if (erro instanceof mongoose.Error.CastError){
    res.status(400).send({ message: "Um ou mais parâmetros são inválidos."})
  }else{
    res.status(500).send({ message: `ERROR: Erro interno de Servidor.` });
  }
}

export default manipuladorDeErros;
