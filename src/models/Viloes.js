import mongoose from "mongoose";

const viloesSchema = new mongoose.Schema(
  {
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    alter_ego: {type: String, required: true},
    profissao: {type: String},
    genero: {type: String},
    estado_civil: {type: String},
    primeira_aparicao: {type: String, required: true},
  },
  {
    versionKey: false,
  }
)

const vilao = mongoose.model("viloes", viloesSchema);

export default vilao;