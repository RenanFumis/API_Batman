import express from "express";
import connectDataBase from "./config/dbConnect.js";
// import heroi from "./models/Herois.js";
import routes from "./routes/index.js";

const conexao = await connectDataBase();

conexao.on("error", (erro) => console.error("Erro na conexão", erro));
conexao.once("open", () => console.log("Conexão no Banco estabelecida com sucesso"));

const app = express();
app.use(express.json());
routes(app);

app.get("/", (req, res) => {
  res.status(200).send("Criado por Bob Kane e escritor Bill Finger, Batman eh um personagem de quadrinhos publicado pela DC Comics em 1939");
})


app.get("/herois", async (req, res) => {
  const heroisLista = await heroi.find({});
  res.status(200).json(heroisLista);
})

app.get("/herois", async (req, res) => {
  const listarHerois = await heroi.find({});
      res.status(200).json(listarHerois);
})

app.post("/herois", (req, res) => {
  herois.push(req.body);
  res.status(201).send("Heroi adicionado com sucesso");
});

app.get("/herois/:id", (req, res) => {
  const index = buscarHeroi(req.params.id);
  res.status(200).json(herois[index]);
});

app.put("/herois/:id", (req, res) => {
  const index = buscarHeroi(req.params.id);
  herois[index] = req.body;
  res.status(202).send("Heroi atualizado com sucesso");
});

app.delete("/herois/:id", (req, res) => {
  const index = buscarHeroi(req.params.id);
  herois.splice(index, 1);
  res.status(204);
});

app.get("/viloes", (req, res) => {
  res.status(200).send("Lista de viloes do universo Batman");
});

export default app;
