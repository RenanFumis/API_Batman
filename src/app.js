import express from "express";

const app = express();

app.get("/", (req, res)=> {
  res.status(200).send("Criado por Bob Kane e escritor Bill Finger, Batman eh um personagem de quadrinhos publicado pela DC Comics em 1939");
})

app.get("/herois", (req, res)=> {
  res.status(200).send("Lista de herois do universo Batman");
});

app.get("/viloes", (req, res)=> {
  res.status(200).send("Lista de viloes do universo Batman");
});

export default app;