//REsponsável por criar o modelo de dados do banco de dados segundo a biblioteca mongoose
import mongoose from "mongoose";

const heroisSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {
      type: String,
      required: [true, "O campo NOME é obrigatório."],
    },
    alter_ego: {
      type: String,
      required: [true, "O campo ALTER EGO é obrigatório."],
    },
    profissao: { type: String },
    genero: { type: String },
    estado_civil: { type: String },
    primeira_aparicao: {
      type: String,
      required: [true, "O campo PRIMEIRA APARIÇÃO é obrigatório."],
    },
  },
  {
    versionKey: false,
  }
);

const heroi = mongoose.model("herois", heroisSchema);

export default heroi;
