# Sistema ReprogramaBank API

Este é um sistema bancário simples desenvolvido usando NestJS, que inclui funcionalidades para gerenciar clientes, contas bancárias e gerentes.

## Rotas Disponíveis

### Clientes

- **GET /clientes**
    - Retorna todos os clientes cadastrados.

- **GET /clientes/:id**
    - Retorna um cliente específico pelo ID.

- **POST /clientes/criar**
    - Cria um novo cliente. Exemplo do corpo da requisição:
  ```json
  {
    "cliente": {
      "nomeCompleto": "João Silva",
      "endereco": "Rua Exemplo, 123",
      "telefone": "123456789",
      "contas": [],
      "gerente": {
        "nomeCompleto": "Maria Gerente",
        "clientes": []
      }
    }
  }

- **PUT /clientes/**
    - Atualiza um cliente existente pelo ID. Exemplo do corpo da requisição:
  ```json
  {
    "cliente": {
      "nomeCompleto": "Jo Silva",
      "endereco": "Rua Exemplo, 123",
      "telefone": "123456789",
      "contas": [],
      "gerente": {
        "nomeCompleto": "Maria Gerente",
        "clientes": []
      }
    }
  }
  


- **DELETE /clientes/:id**
    - Remove um cliente específico pelo ID.

### Contas

- **GET /contas**
    - Retorna todos as contas cadastrados.

- **GET /contas/:id**
    - Retorna uma conta específica pelo ID.

- **POST /contas/criar**
    - Cria um nova conta. Exemplo do corpo da requisição:
  ```json
  {
  "contaBancaria": {
    "saldo": 1500,
    "cliente": {
      "nomeCompleto": "Maria Silva",
      "endereco": "Rua das Flores, 123",
      "telefone": "(11) 98765-4321",
      "contas": [],
      "gerente": {
        "nomeCompleto": "João Gerente",
        "clientes": []
      }
    },
    "tipo": "Corrente"
  }

- **PUT /contas/:id**
    - Atualiza uma conta existente pelo ID. Exemplo do corpo da requisição:
  ```json
  {
  "contaBancaria": {
    "saldo": 1500,
    "cliente": {
      "nomeCompleto": "Maria Silva",
      "endereco": "Rua das Flores, 123",
      "telefone": "(11) 98765-4321",
      "contas": [],
      "gerente": {
        "nomeCompleto": "João Gerente",
        "clientes": []
      }
    },
    "tipo": "Poupanca"
  }





- **DELETE /contas/:id**
    - Remove uma conta específica pelo ID.

### Gerentes

- **GET /gerentes**
    - Retorna todos os gerentes cadastrados.

- **GET /gerentes/:id**
    - Retorna um gerente específico pelo ID.

- **POST /gerentes/criar**
    - Cria um novo gerente. Exemplo do corpo da requisição:
  ```json
  {
  "gerente": {
    "nomeCompleto": "Angelina",
    "clientes": []
  }



- **PUT /gerentes/:id**
    - Atualiza uma gerente existente pelo ID. Exemplo do corpo da requisição:
  ```json
  {
  "gerente": {
    "nomeCompleto": "Gabriel Silva",
    "clientes": []
  }

- **DELETE /gerentes/:id**
    - Remove um gerente específico pelo ID.

