import app from "./src/app.js";

const PORT = 3000;

const rotas = {
  // "/": "Criado por Bob Kane e escritor Bill Finger, Batman eh um personagem de quadrinhos publicado pela DC Comics em 1939",
  "/herois": "Lista de herois do universo Batman",
  "/viloes": "Lista de viloes do universo Batman",
};

app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3000");
});
