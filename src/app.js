import express from "express";

const app = express();
app.use(express.json());//middleware do express para permitir o uso do req.body

const herois =[
  {
    id: 1,
    nome: "Batman",
    alter_ego: "Bruce Wayne",
    profissao: "Empresario",
    genero: "Masculino",
    estado_civil: "Solteiro",
    primeira_aparicao: "Detective Comics #27"
  },
  {
    id: 2,
    nome: "Robin",
    alter_ego: "Richard John Grayson",
    profissao: "Advogado",
    genero: "Masculino",
    estado_civil: "Solteiro",
    primeira_aparicao: "Detective Comics #38",
  },
  {
    id: 3,
    nome: "Comissário Gordon",
    alter_ego: "James Gordon",
    profissao: "Policial",
    genero: "Masculino",
    estado_civil: "Casado",
    primeira_aparicao: "Detective Comics #27",
  }
]

function buscarHeroi(id){
  return herois.findIndex(heroi => heroi.id === Number(id));

}

app.get("/", (req, res)=> {
  res.status(200).send("Criado por Bob Kane e escritor Bill Finger, Batman eh um personagem de quadrinhos publicado pela DC Comics em 1939");
})

app.get("/herois", (req, res)=> {
  res.status(200).json(herois);
});

app.post("/herois", (req, res)=> {
  herois.push(req.body)
  res.status(201).send("Heroi adicionado com sucesso");
});

app.get("/herois/:id", (req, res) =>{
  const index = buscarHeroi(req.params.id);
  res.status(200).json(herois[index]);
})

app.get("/viloes", (req, res)=> {
  res.status(200).send("Lista de viloes do universo Batman");
});

export default app;