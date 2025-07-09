# NLW Agents - Rocketseat

Projeto desenvolvido durante a trilha Node.js do evento **Next Level Week (NLW)** promovido pela [Rocketseat](https://www.rocketseat.com.br/), com o objetivo de construir uma API REST moderna com autenticação, banco de dados e boas práticas de desenvolvimento backend.

## 🧠 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript.
- **Fastify** – Framework web leve e eficiente para Node.js.
- **Drizzle ORM** – ORM para TypeScript com foco em simplicidade e performance.
- **PostgreSQL** – Banco de dados relacional utilizado na aplicação.
- **Zod** – Validação de esquemas de dados.
- **dotenv** – Gerenciamento de variáveis de ambiente.
- **ESLint / Prettier** – Padronização e formatação de código.
- **TypeScript** – Tipagem estática e robustez no desenvolvimento.

## 🧩 Padrões de Projeto e Organização

- **Estrutura em camadas**: separação clara entre rotas, controladores e serviços.
- **Validações com Zod** para segurança e consistência da entrada de dados.
- **Migrations com Drizzle Kit** para controle de versão do banco de dados.
- **Configuração via `.env`** para facilitar a portabilidade e segurança do projeto.

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+
- PostgreSQL instalado e em execução
- `pnpm` ou `npm` como gerenciador de pacotes

### 1. Clone o repositório

```bash
git clone https://github.com/yruamkaffer/NLW-Agents.git
cd NLW-Agents/server
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` com base no `.env.example` e insira suas credenciais do banco de dados:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/database
PORT=3333
```

### 4. Execute as migrations

```bash
npx drizzle-kit push
```

### 5. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

A API estará disponível em: `http://localhost:3333`

## 📁 Estrutura do Projeto

```bash
src/
├── routes/         # Definição das rotas da aplicação
├── controllers/    # Lógica das requisições
├── services/       # Regras de negócio
├── schemas/        # Validação com Zod
├── lib/            # Configuração do banco e utilitários
```

## 📄 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

Desenvolvido com 💜 durante o **NLW da Rocketseat** por [@yruamkaffer](https://github.com/yruamkaffer)
