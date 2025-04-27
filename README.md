📚 ** Dictionary API** 


API simples para pesquisa de definições de palavras em inglês com cadastro de usuários, autenticação JWT e histórico de pesquisas. 

A API conta com o  [Free Dictionary API]([url](https://dictionaryapi.dev/)), webservice de consulta de palavras utilizando como fonte para as definções

💻 Tecnologias

 - Node.js

- Express.js

 - PostgreSQL

 - Docker (opcional)

 - JWT para autenticação

 - Axios para requisições HTTP

---------------------------------------------------------------------------
⚙ Instalação: 

1 - Clone o repositório
```
git clone https://github.com/seu-usuario/seu-repositorio.git

```
2 - Instalação de dependências
```
npm install

```
3 - Crie um arquivo .env na raiz do projeto
```
DB_USER=dictionary_user
DB_HOST=localhost
DB_NAME=dictionary_db
DB_PASSWORD=sua_senha
DB_PORT=5432
SECRET_KEY=chave_secreta
````
4 - Rode o projeto 
````
npm run dev 
````
ou 
````
npm start
````


🔐 Autenticação
- Registre um usuário
````
POST /auth/register
Body: { "name": "um_nome" }
````
- será gerado um token, envie o token no header Authorization: Bearer {token} para acessar rotas protegidas.


🕹 Funcionalidades
Cadastro de usuário fictício:
````
POST /auth/register
`````

Pesquisa uma palavra no webservice (requer autenticação com token jwt):
````
GET /dictionary-api/definition/:word
````
Após a pesquisa, a palavra é salva na tabela de histórico do banco de dados junto com o id de usuário


💾Banco de dados : 

- Tabela users:
  ```
  id:integer(PK)
  name:string(unico)

  ````
- Tabela word_history:
  ```
  id: integer(PK)
  word: string
  searched_at timestamp
  user_id
  
  ````

🐳 Docker:

1 - buil da imagem e subir o container

````
docker-compose up --build
````

2 - servidor rodando em :
````
http://localhost:3000
````
  
