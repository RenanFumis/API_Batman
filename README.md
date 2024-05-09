# API Rest do Universo Batman

<p>A API Rest do Universo Batman é composta por uma estrutura organizada que facilita a interação com os dados relacionados aos personagens desse universo. Dentro dessa estrutura, destacam-se várias pastas essenciais:</p>

1. **Controllers**: Nesta pasta, encontram-se dois arquivos que contêm classes destinadas à manipulação de operações CRUD de acordo com as necessidades específicas de interação.

2. **Erros**: Aqui, é possível lidar com diferentes tipos de erros, proporcionando uma experiência de usuário mais robusta. Esses erros incluem:
   - Erro de servidor (500)
   - Erro de busca de um item (404)
   - Erro de requisição devido a campos inválidos (400)
   - Erro de validação de dados, caso um campo obrigatório seja submetido em branco.

3. **Middlewares**: Esta pasta é responsável pela manipulação de erros e pela implementação da paginação, que controla o número de itens exibidos por página.

4. **Models**: Aqui residem os modelos ou esquemas (schemas) dos dados que devem ser incluídos, proporcionando uma estrutura organizada para a representação dos dados.

5. **Routes**: Esta pasta centraliza as rotas de interação, que incluem os métodos HTTP GET, POST, PUT, PATCH e DELETE. Isso permite uma gestão centralizada e clara das operações disponíveis na API.

<p>Essa arquitetura é altamente ajustável e pode ser adaptada para atender diversas necessidades de uma API Rest, como o cadastro de usuários, funcionários, produtos, entre outros. Sua flexibilidade e organização fornecem uma base sólida para o desenvolvimento e expansão da API para diferentes contextos e funcionalidades.</p>

## Versão
  <p>Versão 1.1.0</p>
  <p>Foram criadas duas rotas de URL, cada uma implementando as operações CRUD (Create, Read, Update, Delete): <code>/herois</code> e <code>/viloes</code>. Essas rotas permitem que o usuário escolha entre os dois lados e navegue nos registros de cada um individualmente.</p>

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

### Exemplo da URL
```plaintext
http://localhost:3000/herois/busca?nome=bruce
(o retorno será as informações do Bruce Wayne)

http://localhost:3000/vilao/busca?alter_ego=coringa
(o retorno será as informações do Coringa)

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

