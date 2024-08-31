## Alguns casos de testes da Collection Go REST API

# `https://gorest.co.in/`


### 1) <u>Caso de Teste:</u> Criar Novo USER - Dados Válidos (Happy Path)

**Objetivo:**  
Verificar a criação de um novo USER com dados válidos e com o token de autorização, garantindo que o USER seja criado corretamente e que um ID de USER seja gerado.

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "{{userName}}",
        "email": "{{userEmail}}",
        "status": "{{userStatus}}",
        "gender": "{{userGender}}"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `201 Created`.
- O novo USER deve ser criado com os dados fornecidos, e os detalhes devem ser salvos corretamente no banco de dados.
- O registro deve conter com os seguintes campos: `id`, `name`, `email`, `gender`, e `status`.
- Um ID de USER único deve ser gerado e retornado na resposta para identificar o novo usuário.

---

### 2) <u>Caso de Teste:</u> Criar Novo USER - Sem Token 

**Objetivo:**  
Testar a criação de um novo USER sem fornecer um token de autorização e verificar se o sistema retorna a resposta adequada indicando falha na autenticação.

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "{{userName}}",
        "email": "{{userEmail}}",
        "status": "{{userStatus}}",
        "gender": "{{userGender}}"
    }
    ```
- **Cabeçalhos:** Nenhum token de autorização fornecido.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `401 Unauthorized`.
- A resposta deve incluir uma mensagem clara indicando "Authentication Failed".

---

### 3) <u>Caso de Teste:</u> Criar Nov</u USER - Email Já Utilizado 

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER com um email que já está registrado no sistema.

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "John Doe",
        "email": "existingemail@teste.com.br",  // Email já existente
        "status": "active",
        "gender": "male"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem clara indicando que o "Email has already been taken".

---

### 4) <u>Caso de Teste:</u> Criar Novo USER - Campo "Name" Vazio 

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER sem fornecer o campo obrigatório "name".

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "",
        "email": "janedoe2@example.com",
        "status": "active",
        "gender": "female"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem indicando que o "Field": "name", "message": "can't be blank".

---
## 5) <u>Caso de Teste:</u> Criar Novo USER - Campo "Email" Vazio (Caminho Negativo)

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER com o campo obrigatório "email" deixado vazio.

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "John Doe",
        "email": "",  // Campo "email" vazio
        "status": "active",
        "gender": "male"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem indicando que o "Field": "email", "message": "can't be blank".
  
---
### 6) <u>Caso de Teste :</u> Criar Novo USER - Campo "Status" Vazio 

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER sem preencher o campo obrigatório "status".

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "status": "",
        "gender": "male"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem indicando que o "Field": "status", "message": "can't be blank".

---

### 7) <u>Caso de Teste:</u> Criar Novo USER - Campo "Gender" Vazio 

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER sem preencher o campo obrigatório "gender".

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "Jane Doe",
        "email": "janedoe@example.com",
        "status": "active",
        "gender": ""
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem indicando que o "Field": "gender", "message": "can't be blank, can be male or female".

---
### 8) <u>Caso de Teste:</u> Criar Novo USER - Email Inválido 

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER com um email em formato inválido.

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "Jane Doe",
        "email": "invalidemailformat",  // Formato de email inválido
        "status": "active",
        "gender": "female"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem indicando que o "Field": "email", "message": "is invalid".

---

#### 9) <u>Caso de Teste:</u> Criar Novo USER - Valor Inválido para o Campo "Status" 

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER com um valor inválido para o campo "status".

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "status": "false",  // Valor inválido para o campo "status" que apenas aceita active ou inactive
        "gender": "male"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem indicando que que "Field": "status", "message": "can't be blank"

---
### 10) <u>Caso de Teste:</u> Criar Novo USER - Valor Inválido para o Campo "Gender" 

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER com um valor inválido para o campo "gender".

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "Jane Doe",
        "email": "janedoe@example.com",
        "status": "active",
        "gender": "girl"  // Valor inválido para o campo "gender"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem indicando que "Field": "gender", "message": "can't be blank, can be male or female"
  
---

### 11) <u>Caso de Teste:</u> Criar Novo USER - Campo "Name" Ausente

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER sem fornecer o campo obrigatório "name".

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        // "name": "John Doe",  // Campo "name" ausente
        "email": "johndoe@example.com",
        "status": "active",
        "gender": "male"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem indicando que "Field": "name", "message": "can't be blank".

---
### 12) <u>Caso de Teste:</u> Criar Novo USER - Campo "Email" Ausente

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER sem fornecer o campo obrigatório "email".

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "John Doe",
        // "email": "johndoe@example.com",  // Campo "email" ausente
        "status": "active",
        "gender": "male"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem indicando que "Field": "email", "message": "can't be blank".

----

### 13) <u>Caso de Teste:</u> Criar Novo USER - Campo "Status" Ausente 

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER sem fornecer o campo obrigatório "status".

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "Jane Doe",
        "email": "janedoe@example.com",
        // "status": "active",  // Campo "status" ausente
        "gender": "female"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem indicando que "Field": "status", "message": "can't be blank".

---
### 14) <u>Caso de Teste:</u> Criar Novo USER - Campo "Gender" Ausente 

**Objetivo:**  
Verificar o comportamento da API ao tentar criar um USER sem fornecer o campo obrigatório "gender".

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "Jane Doe",
        "email": "janedoe@example.com",
        "status": "active"
        // "gender": "female"  // Campo "gender" ausente
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir uma mensagem indicando que "Field": "status", "message": "can't be blank, can be male or female".
 
---

### 15) <u>Caso de Teste</u> 6: Criar Novo USER - Todos os Campos Ausentes 

**Objetivo:**  
Testar o comportamento do sistema quando uma requisição é feita sem nenhum campo obrigatório para a criação de um novo USER.

**Cenário de Teste:**  
- **Método:** POST
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Corpo da Requisição (JSON):**
    ```json
    {
    // "name": "{{userName}}",
    // "email": "{{userEmail}}",
    // "status": "{{userStatus}}"
    // "gender": "{{userGender}}"  
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `422 Unprocessable Entity`.
- A resposta deve incluir mensagens indicando cada campo com a "message": "can't be blank ou a "message": "can't be blank, can be male or female".
  
---

### 16) <u>Caso de Teste:</u> Users - Obter Todos os USERS (Happy Path)

**Objetivo:**  
Verificar se é possível recuperar a lista de todos os usuários com uma requisição válida.

**Cenário de Teste:**  
- **Método:** GET
- **Endpoint:** `https://gorest.co.in/public/v2/users`
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `200 OK`.
- - A resposta deve conter uma lista de usuários com os seguintes campos: `id`, `name`, `email`, `gender`, e `status`.

---
### 17) <u>Caso de Teste:</u> Users - Obter Todos os Usuários com Parâmetro de Página (Happy Path)

**Objetivo:**  
Verificar se a API retorna corretamente uma lista de usuários ao buscar todos os usuários com o parâmetro de página especificado.

**Cenário de Teste:**  
- **Método:** GET
- **Endpoint:** `https://gorest.co.in/public/v2/users?page=5`

**Cabeçalhos:**  
Inclui o token de autorização necessário.

**Corpo da Requisição:**  
Não aplicável (requisição GET).

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `200 OK`.
- A resposta deve conter uma lista de usuários paginada que inclui os seguintes campos: `id`, `name`, `email`, `gender`, e `status`.
- A lista deve corresponder à página correspondente dos resultados da busca de usuários.


---
### 18) <u>Caso de Teste:</u> Users - Pesquisar Usuários por Nome (Happy Path)

**Objetivo:**  
Verificar se a API retorna corretamente a lista de usuários ao buscar pelo nome.

**Cenário de Teste:**  
- **Método:** GET
- **Endpoint:** `https://gorest.co.in/public/v2/users?name={userName}`

**Cabeçalhos:**  
Inclui o token de autorização necessário.

**Corpo da Requisição:**  
Não aplicável (requisição GET).

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `200 OK`.
- A resposta deve conter uma lista de usuários com os seguintes campos: `id`, `name`, `email`, `gender`, e `status`.
- Todos os usuários na resposta devem corresponder ao nome especificado na busca.
  
---
### 19) <u>Caso de Teste:</u> Users - Obter Usuário por ID Válido (Happy Path)

**Objetivo:**  
Verificar se a API retorna corretamente os detalhes de um usuário ao buscar por um ID válido.

**Cenário de Teste:**  
- **Método:** GET
- **Endpoint:** `https://gorest.co.in/public/v2/users/{userId}`

**Cabeçalhos:**  
Inclui o token de autorização necessário.

**Corpo da Requisição:**  
Não aplicável (requisição GET).

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `200 OK`.
- A resposta deve conter os detalhes do usuário com os seguintes campos: `id`, `name`, `email`, `gender`, e `status`.
- Os dados retornados devem corresponder ao ID especificado na solicitação.

---
### 20) <u>Caso de Teste:</u> Users - Obter Usuário por ID Inválido

**Objetivo:**  
Verificar se a API retorna a resposta correta ao tentar obter um usuário com um ID inválido.

**Cenário de Teste:**  
- **Método:** GET
- **Endpoint:** `https://gorest.co.in/public/v2/users/1785497894528`

**Cabeçalhos:**  
Inclui o token de autorização necessário.

**Corpo da Requisição:**  
Não aplicável (requisição GET).

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `404 Not Found`.
- A resposta deve incluir uma mensagem indicando "message": "Resource not found"

---

### 21) <u>Caso de Teste:</u> Users - Obter Usuário por ID Inválido de Texto (Caminho Negativo)

**Objetivo:**  
Verificar se a API retorna a resposta correta ao tentar obter um usuário utilizando um ID inválido de texto.

**Cenário de Teste:**  
- **Método:** GET
- **Endpoint:** `https://gorest.co.in/public/v2/users/test` (com `userId` como uma string inválida "test")

**Cabeçalhos:**  
Inclui o token de autorização necessário.

**Corpo da Requisição:**  
Não aplicável (requisição GET).

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `404 Not Found`.
- A resposta deve incluir uma mensagem indicando "message": "Resource not found"
  
---

### 22) <u>Caso de Teste:</u> Users - Obter Usuário por ID Inválido com Caracteres Especiais (Caminho Negativo)

**Objetivo:**  
Verificar se a API retorna a resposta correta ao tentar obter um usuário utilizando um ID inválido contendo caracteres especiais.

**Cenário de Teste:**  
- **Método:** GET
- **Endpoint:** `https://gorest.co.in/public/v2/users/@#$` (com `userId` contendo caracteres especiais "@#$")

**Cabeçalhos:**  
Inclui o token de autorização necessário.

**Corpo da Requisição:**  
Não aplicável (requisição GET).

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `404 Not Found`.
- A resposta deve incluir uma mensagem indicando "message": "Resource not found"

---

### 23) <u>Caso de Teste:</u> USER -  Atualizar USER "Name" (Happy Path)

**Objetivo:**  
Verificar se a API permite a atualização correta dos detalhes de um usuário existente.

**Cenário de Teste:**  
- **Método:** PUT
- **Endpoint:** `https://gorest.co.in/public/v2/users/{userId}`
- **Corpo da Requisição (JSON):**
  
    ```json
    {
        "name": "João Pedro",
        "email": "{{userEmail}}",
        "status": "{{userStatus}}",
        "gender": "{{userGender}}"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `200 OK`.
- O novo USER deve ser editado com o dado fornecido, e os detalhes devem ser salvos corretamente no banco de dados.
- O response deve conter com os seguintes campos: `id`, `name`, `email`, `gender`, e `status`.

---

### 24) <u>Caso de Teste:</u> USER -  Atualizar USER "Name" (Happy Path)

**Objetivo:**  
Verificar se a API permite a atualização correta dos detalhes de um usuário existente.

**Cenário de Teste:**  
- **Método:** PATH
- **Endpoint:** `https://gorest.co.in/public/v2/users/{userId}`
- **Corpo da Requisição (JSON):**
 
    ```json
    {
        "name": "João Pedro"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `200 OK`.
- O novo USER deve ser editado com o dado fornecido, e os detalhes devem ser salvos corretamente no banco de dados.
- O response deve conter com os seguintes campos: `id`, `name`, `email`, `gender`, e `status`.

---

### 25) <u>Caso de Teste:</u> USER - Deletar Usuário por ID Válido (Happy Path)

**Objetivo:**  
Verificar se a API permite a exclusão correta de um usuário existente por um ID válido.

**Cenário de Teste:**  
- **Método:** `DELETE`
- **Endpoint:** `https://gorest.co.in/public/v2/users/{userId}`

**Cabeçalhos:**   Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- Retornar HTTP `204 No Content`.
- O usuário é excluído com sucesso e não pode mais ser recuperado.

**Exemplo de Resposta Esperada:**  
Resposta vazia com o status `204 No Content`.

---

### 26) <u>Caso de Teste:</u> Criar Novo Post - Dados Válidos (Happy Path)

**Objetivo:**  

Verificar a criação de um novo Post com dados válidos, garantindo que o Post seja criado corretamente e que um ID de Post seja gerado.

**Cenário de Teste:**  
- **Método:** `POST`
- **Endpoint:** `https://gorest.co.in/public/v2/users/{userId}/posts`
- **Corpo da Requisição (JSON):**
- 
    ```json
    {
        "title": "{{postTitle}}",
        "body": "{{postBody}}"
    }
    ```
- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `201 Created`.
- O novo Post deve ser criado com os dados fornecidos, e os detalhes devem ser salvos corretamente no banco de dados.
- O registro deve conter os seguintes campos: `id`, `user_id`, `title`, e `body`.
- Um ID de Post único deve ser gerado e retornado na resposta para identificar o novo Post.

---
### 27) <u>Caso de Teste:</u> Posts - Obter Posts por ID de Usuário Válido (Happy Path)

**Objetivo:**  
Verificar se a API permite a recuperação correta dos posts de um usuário existente utilizando um ID de usuário válido.

**Cenário de Teste:**  
- **Método:** `GET`
- **Endpoint:** `https://gorest.co.in/public/v2/users/{userId}/posts`

**Cabeçalhos:**  
- Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `200 OK`.
- A resposta deve conter uma lista de posts associados ao usuário especificado.
- Cada registro de post deve conter os seguintes campos: `id`, `user_id`, `title`, e `body`.

**Exemplo de Resposta Esperada:**
```json
{
  "id": 151365,
  "user_id": 7372562,
  "title": "voluptatem aut eum",
  "body": "Et corporis suscipit autem possimus illo qui quidem."
}
 ```
---

### 27) <u>Caso de Teste:</u> Posts - Caso de Teste:</u> Atualizar Título do Post (Happy Path)

**Objetivo:**  
Verificar se a API permite a atualização correta do título de um post existente utilizando um ID de post válido.

**Cenário de Teste:**  
- **Método:** `PATCH`
- **Endpoint:** `https://gorest.co.in/public/v2/posts/{postId}`

**Corpo da Requisição (JSON):**
```json
{
  "title": "{{postTitle}}"
}
 ```
 - **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `200 Created`.
- O Post deve deve ser editado com os dados fornecidos, e os detalhes devem ser salvos corretamente no banco de dados.
- O registro deve conter os seguintes campos: `id`, `user_id`, `title`, e `body`.
- Os dados retornados devem corresponder ao ID especificado na solicitação.

---

### 28) <u>Caso de Teste:</u> Adicionar Comentário a um Post (Happy Path)

**Objetivo:**  
Verificar se a API permite a adição correta de um comentário a um post existente utilizando um ID de post válido.

**Cenário de Teste:**  
- **Método:** `POST`
- **Endpoint:** `https://gorest.co.in/public/v2/posts/{postId}/comments`

**Corpo da Requisição (JSON):**
```json
{
  "name": "{{commentName}}",
  "email": "{{commentEmail}}",
  "body": "{{commentBody}}"
}
```

- **Cabeçalhos:** Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `201 Created`.
- O novo Comment deve ser criado com os dados fornecidos, e os detalhes devem ser salvos corretamente no banco de dados.
- O registro deve conter os seguintes campos: `id`, `post_id`, `name`, `email`, e `body`.
- Um ID de Comment único deve ser gerado e retornado na resposta para identificar o novo Post.

### 29) <u>Caso de Teste:</u> Obter Comentário por ID de Post Válido (Happy Path)

**Objetivo:**  
Verificar se a API permite a recuperação correta dos comentários associados a um post existente utilizando um ID de post válido.

**Cenário de Teste:**  
- **Método:** `GET`
- **Endpoint:** `https://gorest.co.in/public/v2/comments?post_id={postId}`

**Cabeçalhos:**  
- Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `200 OK`.
- A resposta deve conter uma lista de comentários associados ao ID de post especificado.
- Cada registro de comentário deve conter os seguintes campos: `id`, `post_id`, `name`, `email`, e `body`.

**Exemplo de Resposta Esperada:**
```json
{
  "id": 119037,
  "post_id": 152003,
  "name": "Albin",
  "email": "America98@hotmail.com",
  "body": "Quo sunt assumenda rem tempora debitis nostrum ratione praesentium velit."
}
```
---

### 30) <u>Caso de Teste:</u> Excluir Comentário por ID de Comentário Válido (Happy Path)

**Objetivo:**  
Garantir que a API exclua corretamente um comentário existente quando fornecido um ID de comentário válido.

**Cenário de Teste:**  
- **Método:** `DELETE`
- **Endpoint:** `https://gorest.co.in/public/v2/comments/{commentId}`

**Cabeçalhos:**  
- Inclui o token de autorização necessário.

**Pré-condições:**
- Um comentário existente com um ID válido (`commentId`) deve estar presente no banco de dados.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `204 No Content`.
- O comentário correspondente ao `commentId` deve ser excluído com sucesso e não deve mais estar disponível em consultas subsequentes.

---

### 31) <u>Caso de Teste:</u> Criar Novo Todo (Happy Path)

**Objetivo:**  
Verificar se a API permite a criação de um novo "todos" com dados válidos, garantindo que ele seja salvo corretamente e que um ID único seja gerado.

**Cenário de Teste:**  
- **Método:** `POST`
- **Endpoint:** `https://gorest.co.in/public/v2/users/{userId}/todos`

**Corpo da Requisição (JSON):**
```json
{
  "title": "{{todosTitle}}",
  "due_on": "{{todosDate}}",
  "status": "{{todosStatus}}"
}
```
**Cabeçalhos:**  
- Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `201 Created`.
- O novo Todos deve ser criado com os dados fornecidos, e os detalhes devem ser salvos corretamente no banco de dados.
- O registro deve conter os seguintes campos: `id`, `user_id`, `title`, `due_on`, e `status`.
- Um ID de todos único deve ser gerado e retornado na resposta para identificar o novo Post.
- Deve ser validado e interpretado o formatovalor `due_on`
- Deve ser feita uma validação de schema


```json
        const schema = {
            "type": "object",
            "properties": {
                "id": { "type": "integer" },
                "user_id": { "type": "integer" },
                "title": { "type": "string" },
                "due_on": { 
                    "type": "string", 
                    "format": "date-time" 
            },
                "status": { 
                    "type": "string", 
                    "enum": ["pending", "completed"] 
                }
            },
            "required": ["id", "user_id", "title", "due_on", "status"]
        };


        pm.test('Schema is valid', function () {
            pm.response.to.have.jsonSchema(schema);
        });

```
---
### 32) <u>Caso de Teste:</u> Validar Schema, Campo `due_on`, e Status `completed` para Todos (Happy Path)

**Objetivo:**  
Verificar se a API retorna todos os "todos" com um schema válido, se pelo menos um "todo" possui status `completed`, e se o campo `due_on` está em um formato válido.

**Cenário de Teste:**  
- **Método:** `GET`
- **Endpoint:** `https://gorest.co.in/public/v2/todos`

**Cabeçalhos:**  
- Inclui o token de autorização necessário.

**Critérios de Aceitação:**
- O sistema deve retornar um código de status HTTP `200 OK`.

1. **Validação de Schema:**  
- Verificar se o resultado segue o schema esperado

2. **Validação de Status:**  
- Pelo menos um dos itens na resposta deve ter o status `completed`.
- Pelo menos um dos itens na resposta deve ter o status `pending`.

3. **Validação do due_on:**  
- Verificar se o campo due_on está em formato de data ISO 8601 (`YYYY-MM-DDTHH:MM:SSZ`).
  
**Exemplo de Resposta Esperada:**
```json
[
  {
    "id": 60498,
    "user_id": 7375300,
    "title": "fuga aliquam iusto",
    "due_on": "2024-09-17T12:04:44.353+05:30",
    "status": "pending"
  },
  {
    "id": 60495,
    "user_id": 7374989,
    "title": "Suppellex alo delinquo tertius at absconditus magnam et.",
    "due_on": "2024-09-06T00:00:00.000+05:30",
    "status": "completed"
  }
]
```
