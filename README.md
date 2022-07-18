<h1 align="center">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-rH0GPtVj8WzUruBjcKp02IZM9GFSnVUFg&usqp=CAU">
</h1>

<h3 align="right">Contatos</h3>
<div align="right">
<a href="https://www.linkedin.com/in/ednilsonfragoso/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>   
<a href="https://instagram.com/sirfragoso/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
<a href = "mailto:edfragoso78@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>

<h2>🎬TEMA</h2>
<p align ="justify-all">Rick and Morty (em português Rick e Morty) é uma série de animação adulta norte-americana de comédia e ficção científica criada por Justin Roiland e Dan Harmon para o bloco de programação noturno Adult Swim, exibido no canal Cartoon Network.</p>
<p>A série estreou em 2 de dezembro de 2013 e acompanha as perigosas aventuras do cientista alcoólatra Rick e seu neto Morty, que divide seu tempo entre a vida familiar e viagens interdimensionais. Em 2016, suas duas primeiras temporadas foram lançadas na Netflix com a dublagem brasileira realizada pelo estúdio Dubbing Company, de Campinas, com tradução de Carlos Freires, e também foi transmitida nos canais pagos TBS, I.Sat e TNT Séries, atualmente é exibida no Brasil pelo canal Warner Channel desde 4 de maio de 2020 com a estreia do bloco do Adult Swim no canal. Em agosto de 2015, o Adult Swim renovou a série para uma terceira temporada de 10 episódios, que estreou no dia 1 de abril de 2017 com o resto da temporada programada para ir ao ar durante o verão do mesmo ano.</p>

🔎*Fonte:*[wikipedia](https://pt.wikipedia.org/wiki/Rick_and_Morty)


<h2>📝Descrição</h2>

<p>Projeto final do 3º módulo de estudos do curso de desenvolvedor full stack da escola BlueEdTech.</p>
<p>Essa API consiste em suprir o frontEnd com tela de cadastrar usuários, login, listar todos os personagens cadastrados em um banco de dados, tela de busca por um único personagem utilizando um ID(chave de identificação), tela para cadastro, tela para editar e deletar um personagem.</p>

<p>API estruturada seguindo parão MVC-(Model-View-Controller)</p>

**MODEL**   |           **VIEW**                  | **CONTROLLER**
:----------:| :---------------------------------: | :-------------------:
Gerencia dados e lógica de negócios | Controla o layout e a exibição | Encaminha comandos para o modelo e exibe as peças. 
        

<h2>🖥Tecnologias Utilizadas</h2>           

**[NodeJs](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction)**

**[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**

**[Express](https://expressjs.com/pt-br/)**

**[MongoDb-Atlas](https://www.mongodb.com/atlas)**


**<h2>🎯EndPoints</h2>**

**<h3>Usuários</h3>**

* **POST** --> _Cadastrar novo usuário_
* **GET** --> _Lista todos usuários cadastrados_

**<h3>Autenticação</h3>**

* **POST** --> Login

**<h3>Personagens</h3>**

* **GET**    --> _Busca de todos os personagens de uma lista._
* **GET**    --> _Busca de um personagem por ID._
* **POST**   --> _Adicionar um novo personagem a lista._
* **PUT**    --> _Editar um personagem selecionado por ID._
* **DELETE** --> _Excluir um personagem selecionado por ID._

[📝 SWAGGER](https://api-rickandmortyp2.herokuapp.com/api-docs/)

<h2>⚙Configurações</h2>
<p>Para utilizar essa aplicação é necessário antes fazer intalações das dependências de desenvolvimento, você poderá instalar de duas maneiras uma delas é  instalando todas de uma única vez, separando por virgulas após o comando "npm i", abra seu terminal no vsCode, pode utilizar o atalho "Control + aspas simples", e digite o comando a seguir...</p>

>*npm i init -y*, *express*, *nodemon -D*,  *cors*, *prettierrc*, *dotenv*, *bcryptjs*, *jsonwebtoken*, *mongoose*,  *swagger-ui-express*

**Instalando as Dependências individualmente**

<p>Passo a passo</p>

**Iniciando o Node_modules**

~~~javascript
npm init -y
~~~

**Instalando o framework**

~~~javascript
npm i express
~~~

**Instalando a biblioteca**

~~~javascript
npm i npm nodemon -D
~~~

</b>

**Compartilhamento de recursos** 

~~~javascript
npm i cors
~~~

**Formatador de código**

~~~javascript
npm i prettierrc
~~~

**Biblioteca bcryptjs para encriptar as senhas dos usuários**

~~~javascript
npm i bcryptjs
~~~

**Variável de ambiente**

~~~javascript
npm i dotenv
~~~

>*Na raiz do projeto crie um arquivo chamado `.env` e adicione duas variáveis, uma para conexão com o BD mongoose onde deve adicionar a URL do seu BD e outra variável chamada `SECRET` que guardará a chave secreta à definir por vc desenvolvedor. Exemplo no arquivo [.env.example](https://github.com/edfragoso/API-RickAndMortyP2/blob/main/.env.example)*

**Biblioteca jsonwebtoken para gerar os tokens**

~~~javascript
npm i jsonwebtoken
~~~

**Biblioteca banco de dados mongoose**

~~~javascript
npm i mongoose
~~~

**Documentação**

~~~javascript
npm i swagger-ui-express
~~~

**Alteração de arquivo na documentação**

<p>Na pasta swagger, abra o arquivo swagger.json logo no inicio na parte dos servers retire a primeira URL com a description "API Herokuapp" ou substitua por a sua caso tenha feito o deploy no Heroku.</p>

~~~
"servers": [
    {
      "url": "https://api-rickandmortyp2.herokuapp.com/",
      "description": "API Herokuapp"
    },
    {
      "url": "http://localhost:3001/",
      "description": "INTERNAL - testing"
    }
  ],
~~~

<p>Após isso abra seu terminal e digite...</p>

`npm run dev`

<p>Logo após iniciar o servidor deverá aparecer a menssagem...</p>

~~~
[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node index index.js`
Server Running in http:3001
mongodb connected

~~~

<p>Se essa informação apareceu, abra seu navegador e na barra de endereço digite localhost:3001/api-docs, se tudo ocorreu bem voce deve visualizar o swagger.</p>


❗ **[Linceça](https://github.com/edfragoso/API-RickAndMorty/blob/main/LICENSE)** 


<h3>🙏Agradecimentos</h3>
👨‍🏫 Professores:

* [Marcus Silva](https://www.linkedin.com/in/marcusvinysilva)
* [Renato Nakamura](https://www.linkedin.com/in/renato-nakamura/)
* [Thiago Lima (ThiCode)]( https://www.linkedin.com/in/thicode/)
* [Maria Eduarda(DUDA)](https://www.linkedin.com/in/maria-eduarda-de-ara%C3%BAjo-cardoso)
* [Leonardo Fleck]( https://www.linkedin.com/in/leonardo-kf/)
* [Bruno Sallum](https://www.linkedin.com/in/bruno-sallum/) 


