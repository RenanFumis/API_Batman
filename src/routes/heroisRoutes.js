//Responsável pelas rotas da aplicação referente aos heróis
import express from "express";
import HeroisController from "../controllers/heroisController.js";

const routes = express.Router();

routes.get("/herois", HeroisController.listarHerois);
routes.get("/herois/:id", HeroisController.listarHeroiPorId);
routes.post("/herois", HeroisController.adicionarHeroi);
routes.put("/herois/:id", HeroisController.atualizarHeroi);
routes.delete("/herois/:id", HeroisController.excluirHeroi);

export default routes;
