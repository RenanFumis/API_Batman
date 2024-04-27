import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Criado por Bob Kane e escritor Bill Finger, Batman eh um personagem de quadrinhos publicado pela DC Comics em 1939",
  "/herois": "Lista de herois do universo Batman",
  "/viloes": "Lista de viloes do universo Batman",
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url] || "Rota nao encontrada");
});

server.listen(PORT, () => {
  console.log("Servidor rodando na porta 3000");
});
