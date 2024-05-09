# API Rest do Universo Batman

<p>Esta API permite realizar operações CRUD (Create, Read, Update, Delete) com personagens do universo HQ de Batman. Você pode adicionar, visualizar, atualizar e excluir informações sobre personagens entre elas nome, alter ego, estado civil, profissão, gênero e primeira aparição nas HQs.</p>
<p>Foram criadas duas rotas /herois e /viloes. Ambas foram criadas separadamente para que o usuário possa escolherr entre os dois lados e navegar nos registros de cada um separadamente.</p>

## Versão
  <p>Versão 1.1.0</p>

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

- GET /herois ou viloes: Retorna uma lista de todos os personagens.
- GET /herois ou viloes/:id: Retorna informações de um personagem específico pelo ID.
- POST /herois ou viloes: Adiciona um novo personagem.
- PUT /herois ou viloes/:id: Atualiza as informações de um personagem existente pelo ID.
- DELETE /herois ou viloes/:id: Exclui um personagem pelo ID.
- GET /herois ou viloes/busca?nome=: Busca personagem pelo nome.
- GET /herois ou viloes/busca?alter_ego=: Busca personagem pelo alter ego.
- GET /herois ou viloes/busca?profissao=: Busca personagem pela profissão.
- GET /herois?pagina=: Retorna uma página de heróis com paginação.
- GET /viloes?pagina=: Retorna uma página de vilões com paginação.
- GET /herois ou viloes?&limite=: Define o limite de personagens por página na busca de dele.
- GET /herois ou viloes?ordenacao=: Ordena os personagens por campo e ordem especificados.

## Exemplo da URL
```bash
http://localhost:3000/herois/busca?nome=bruce
\\o retorno será as informações do Bruce Wayne

http://localhost:3000/vilao/busca?alter_ego=coringa
\\o retorno será as informações do Coringa

```

## Exemplo de Dados

```json
{
  "nome": "Bruce Wayne",
  "alter_ego": "Batman",
  "estado_civil": "Solteiro",
  "profissao": "Empresário",
  "genero": "Masculino",
  "primeira_aparicao": "Detective Comics #27"
}
```

## Testes
Os testes de requisição podem ser feitos utilizando o Postman ou qualquer outra ferramenta de sua preferência.

