//Responsável por definir as rotas da aplicação referente aos vilões
import express from "express";
import ViloesController from "../controllers/viloesController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/viloes", ViloesController.listarViloes, paginar);
routes.get("/viloes/busca", ViloesController.listarViloesPorFiltro);
routes.get("/viloes/:id", ViloesController.listarVilaoPorId);
routes.post("/viloes", ViloesController.adicionarVilao);
routes.put("/viloes/:id", ViloesController.atualizarVilao);
routes.delete("/viloes/:id", ViloesController.excluirVilão);

export default routes;
