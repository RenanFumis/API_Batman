import ErroBase from './ErroBase.js';

class RequisicaoIncorreta extends ErroBase{
  constructor (mensagem = "Um ou mais campos são inválidos"){
    super( mensagem, 400)
  }
}

export default RequisicaoIncorreta;
