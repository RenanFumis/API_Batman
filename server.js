// Desc: Arquivo principal da aplicação onde é feita a conexão com o banco de dados e a inicialização do servidor.
import "dotenv/config.js";
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3000");
});
