# Pizzaria E-commerce Fullstack

Este é um projeto de e-commerce fullstack para uma pizzaria, desenvolvido com React, Node.js e TypeScript. O projeto é dividido em duas partes: o frontend e o backend.

## Tecnologias Utilizadas

- **Frontend**: React, Next.js, TailwindCSS, Axios, React Toastify, JWT Decode, Sass
- **Backend**: Node.js, Express, Prisma, JWT, Bcrypt, Multer
- **Banco de Dados**: PostgreSQL

## Estrutura do Projeto

```
pizzaria/
├── backend/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── tsconfig.json
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   └── src/
│       ├── routes.ts
│       ├── server.ts
│       ├── @types/
│       ├── config/
│       ├── controllers/
│       ├── middlewares/
│       ├── prisma/
│       └── services/
└── frontend/
    ├── .gitignore
    ├── next-env.d.ts
    ├── next.config.js
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── public/
    ├── src/
    └── styles/
```

## Funcionalidades

### Backend

- **Autenticação**: Registro e login de usuários com JWT.
- **Gerenciamento de Produtos**: Criação, listagem e remoção de produtos.
- **Gerenciamento de Categorias**: Criação e listagem de categorias.
- **Gerenciamento de Pedidos**: Criação, listagem, atualização e remoção de pedidos e itens de pedidos.
- **Upload de Imagens**: Upload de imagens para produtos usando Multer.

### Frontend

- **Autenticação**: Formulários de login e registro de usuários.
- **Dashboard**: Painel de controle para gerenciar produtos, categorias e pedidos.
- **Notificações**: Notificações de sucesso e erro usando React Toastify.

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- PostgreSQL

### Configuração do Backend

1. Clone o repositório e navegue até a pasta `backend`:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    cd pizzaria/backend
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Configure o arquivo `.env` com as variáveis de ambiente necessárias:
    ```
    DATABASE_URL=postgresql://<usuario>:<senha>@<host>:<porta>/<database>
    JWT_SECRET=<sua_chave_secreta>
    ```

4. Execute as migrações do Prisma para criar as tabelas no banco de dados:
    ```sh
    npx prisma migrate dev
    ```

5. Inicie o servidor:
    ```sh
    npm run dev
    ```

### Configuração do Frontend

1. Navegue até a pasta `frontend`:
    ```sh
    cd ../frontend
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```

4. Abra o navegador e acesse `http://localhost:3000`.
