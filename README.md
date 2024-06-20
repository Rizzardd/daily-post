
# Daily Post

Daily Post é uma aplicação moderna desenvolvida seguindo o padrão de arquitetura MVC (Model-View-Controller). A aplicação é dividida em duas principais partes: a API, construída com NestJS, que atua como o Controller e Model, e o frontend, desenvolvido com React, que representa a View. Este projeto utiliza diversas tecnologias modernas para oferecer uma experiência robusta e escalável.


## Stack utilizada

[Turbo Repo](https://turbo.build/repo): Gestão de Monorepo para possibilitar trabalhar e versionar tanto o React quanto o NestJS dentro do mesmo repositório.

[NestJS](https://docs.nestjs.com): Framework MVC para prover as APIs usadas no projeto, atuando como Controller e Model na arquitetura MVC.

[React](https://react.dev):  Framework de Frontend responsável pela construção das telas, representando a View no padrão MVC.

[MongoDB](https://www.mongodb.com):   Banco de Dados baseado em documentos, No-SQL (hospedado no Atlas Mongo).

[ChakraUI](https://v2.chakra-ui.com): Framework de UI para facilitar e aprimorar o uso de estilos no React.

[Tanstack/Router](https://tanstack.com/router/latest) Componente para gerenciar páginas na visão do cliente.

[React-Query](https://tanstack.com/query/latest): Assistente de requisição e gestão de cache para React.

[Zustand](https://zustand-demo.pmnd.rs): Gestão de estados para o cliente.
## Instalação

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou o [Node.js](https://nodejs.org/) e o [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable/)
- Você tem um ambiente de desenvolvimento configurado.


Instale daily-post com yarn

```bash
 git clone https://github.com/Rizzardd/daily-post
```

Instalando Dependências
Navegue até a pasta do projeto e instale as dependências usando o Yarn:

```bash
cd daily-post
yarn i
```

Rodando o Servidor
Para rodar o servidor, abra a pasta daily-post-api e execute o comando:

```bash
cd daily-post-api
yarn start:dev
```

Rodando a Aplicação Web
Para rodar a aplicação web, abra a pasta daily-post-web e execute o comando:

```bash
cd daily-post-web
yarn dev
```


## Executando o Aplicativo

1. Inicie o servidor:

   ```bash
   yarn start:dev
   ```
2. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000):

3. Inicie o servidor web de desenvolvimento:
```bash
yarn dev
``` 
obs: o NestJS abre a porta de servidor geralmente como: [http://localhost:5173/](http://localhost:5173/)


## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:
- `yarn i` : Instala as depen dependências do projeto.
- `yarn start:dev` : Inicia o servidor.
- `yarn dev` : Inicia o servidor web.




## Uso/Exemplos

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


[logo daily post](https://github.com/Rizzardd/daily-post/assets/87292423/594b8a63-dd9d-4d2f-8419-0890f698bb4e)

