# API Rest do Universo Batman

<p>Esta API permite realizar operações CRUD (Create, Read, Update, Delete) com personagens do universo HQ de Batman. Você pode adicionar, visualizar, atualizar e excluir informações sobre personagens entre elas nome, alter ego, estado civil, profissão, gênero e primeira aparição nas HQs.</p>

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- Dotenv

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/RenanFumis/api-batman.git
```


2. Instale as dependências do projeto:

```bash
cd api-batman
npm install
```
3. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

```bash
MONGODB_URI=SUA_URL_DE_CONEXÃO_COM_O_MONGODB_ATLAS
```
4. Inicie o servidor:
```bash
npm start
```
## Endpoints

- GET /characters: Retorna uma lista de todos os personagens.
- GET /characters/:id: Retorna informações de um personagem específico pelo ID.
- POST /characters: Adiciona um novo personagem.
- PUT /characters/:id: Atualiza as informações de um personagem existente pelo ID.
- DELETE /characters/:id: Exclui um personagem pelo ID.


## Exemplo de Dados

```json
{
  "name": "Bruce Wayne",
  "alterEgo": "Batman",
  "maritalStatus": "Solteiro",
  "occupation": "Empresário, Filantropo",
  "gender": "Masculino",
  "firstAppearance": "Detective Comics #27"
}
```

## Testes
Os testes de requisição podem ser feitos utilizando o Postman ou qualquer outra ferramenta de sua preferência.

