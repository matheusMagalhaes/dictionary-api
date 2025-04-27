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

---------------------------------------------------------------------------


**Decisões e por que?: **
- **Node + Express**
Optei pelo Node devido a simplicidade e praticidade na hora de construir uma API leve, principalmente monolítico. Como o teste era de certo modo simples, node me parece uma solução mais eficiente em menos tempo.

- **PostgreSQL**
Decidi por um banco relacional porque os tipos de dados são mais estruturados e mais simples, não vi necessidade por um banco NoSQL ate porque os tipos de dados são do mesmo tipo. Escolhi o PostgreSQL em relação ao MySql por ter mais experiência com o PostgreSQL e tambem por ser mais fácil de trabalhar(um gosto mais pessoal talvez).

- **Docker**
Utilizei o Docker também pela facilidade de configuração e garantia que a aplicação rode em qualquer máquina, já que isolar a infraestrutura em container ajuda a reduzir os problemas de configuração.

--------------------------------------------------------------------------------------------
A **princípio**, a ideia era construir um mini sisteminha que salvasse o histórico de buscas por usuário.

**requisitos que criei:**
- Separar os usuários.
- Identificá-los de maneira segura e prática.

Para atender, já me veio na mente que eu precisava autenticar meu usuário por token, utilizei o JWT pela praticidade e também porque faria mais sentido com o contexto. Dessa forma, optei por gerar os tokens no momento do registro para que cada pesquisa de termo ou histórico pudesse ser autenticada e vinculado ao respectivo usuário. 

