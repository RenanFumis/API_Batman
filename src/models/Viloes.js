//Responsável por criar o modelo de vilões segundo a biblioteca mongoose
import mongoose from "mongoose";

const viloesSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {
      type: String,
      required: [true, "O campo NOME é obrigatório."]
    },
    alter_ego: {
      type: String,
      required: [true, "O campo ALTER EGO é obrigatório."]
    },
    profissao: { type: String },
    genero: { type: String },
    estado_civil: { type: String },
    primeira_aparicao: {
      type: String,
      required: [true, "O campo PRIMEIRA APARIÇÃO é obrigatório."]
    },
  },
  {
    versionKey: false,
  }
);

const vilao = mongoose.model("viloes", viloesSchema);

export default vilao;
