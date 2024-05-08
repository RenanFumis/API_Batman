// Importando o express e fazendo a conexão com o banco de dados
import express from "express";
import connectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";


const conexao = await connectDataBase();

conexao.on("error", (erro) => console.error("Erro na conexão", erro));
conexao.once("open", () =>
  console.log("Conexão no Banco estabelecida com sucesso")
);

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);
export default app;
