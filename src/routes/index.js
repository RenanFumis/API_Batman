//Responsável por definir as rotas da aplicação sendo a porta de entrada para as rotas de heróis e vilões
import express from "express";
import herois from "./heroisRoutes.js";
import viloes from "./viloesRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send(`
      <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%">
    <div style="width: 500px">
    <h1>O Batman</h1>
    <p>Batman é um dos ícones mais reconhecíveis da cultura pop, mas sua criação é uma história fascinante por si só. Criado por Bob Kane e Bill Finger, o personagem fez sua primeira aparição em "Detective Comics #27" em 1939. Originalmente concebido como uma resposta ao sucesso do Superman, Batman rapidamente se destacou como um herói único.</p>
    <p>Bruce Wayne, o homem por trás da máscara, testemunhou o assassinato de seus pais quando criança, um evento que o motivou a buscar justiça. Ele se torna o vigilante Batman, jurando lutar contra o crime em Gotham City. Ao contrário de outros super-heróis da época, Batman não tem superpoderes, mas confia em sua inteligência, habilidades físicas e vasta riqueza para combater o crime.</p>
    <p>A estética sombria de Gotham e o alter ego de Bruce Wayne como um playboy bilionário adicionam camadas à complexidade do personagem. Além disso, o surgimento de seus icônicos vilões, como o Coringa, o Pinguim e a Mulher-Gato, ajudou a solidificar o status duradouro do Batman como um dos maiores super-heróis de todos os tempos.</p>
    <p>Desde sua criação, Batman inspirou inúmeras adaptações em quadrinhos, televisão, filmes e outras formas de mídia, garantindo seu lugar como um dos pilares da cultura popular moderna.</p>
    </div>
    </div>
    `);
  });
  app.use(express.json(), herois, viloes);
};

export default routes;
