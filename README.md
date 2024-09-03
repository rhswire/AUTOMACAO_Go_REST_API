# Projeto de Automação de Testes da API Go REST

#### Bem-vindo ao meu projeto!

- [Respostas] ([respostas.md](https://github.com/rhswire/AUTOMACAO_Go_REST_API/blob/main/respostas.md))
- [Casos_de_Teste] ([casos_de_teste.md](https://github.com/rhswire/AUTOMACAO_Go_REST_API/blob/main/casos_de_teste.md))


## API Go REST

## [**https://gorest.co.in/**](https://gorest.co.in/)

## Git e GitHub

No Git e GitHub, realize as seguintes etapas:

#### **Instalar e Configurar uma conta no Git** 

Instale e Configure uma conta no Git. Para saber mais, [acesse o Git](https://git-scm.com/download/win).

#### **Para clonar o meu repositório do Git no computador**

 ```sh default
 git clone git@github.com:rhswire/AUTOMACAO_Go_REST_API.git
 ```

#### **Verificando se tem alterações no repositório Git e baixar para o repositório local**

 ```sh default
 git pull
 ```

## Instalação do Newman via CLI
```bash
    npm install -g newman
    npm install -g newman-reporter-htmlextra
```

## Execução com Newman via CLI
```bash
    newman run Go_REST_API.postman_collection.json -e goRest.postman_environment.json -g goRest.postman_globals.json
```

## Execução com Report html extra via CLI
```bash
    newman run Go_REST_API.postman_collection.json -e goRest.postman_environment.json -g goRest.postman_globals.json -r htmlextra
```

## Instalar o Postman

Instale o Postman no computador. Para mais informações acesse o [site](https://www.postman.com/downloads/)

## Importar a Collection e as Variáveis Globais e de Ambiente no Postman:

1. Crie um Workspace no Postman caso não tenha. Para mais informações, acesse o [site](https://www.softwaretestinghelp.com/postman-collections-import-export-generate-code/).
2. Importe os três arquivos JSON. Para mais informações, acesse o [site](https://www.softwaretestinghelp.com/postman-collections-import-export-generate-code/).

## Instale o K6 no computador

- Instale o K6 no computador. Para mais informasções, acesse [site](https://k6.io/docs/get-started/installation/)
- Configure o PATH do k6.exe nas Variaveis de Ambiente do Sistema
  
## Execução K6 via CLI
```bash
    k6 run test.js
```
## Uso do Bearer Token

Antes de rodar os testes da API no Postman e no Newman pela CLI é necessário gerar um Bearer Token pessoal no [site](https://gorest.co.in/) e salvar dentro da variável de ambiente "token" no Postman.

Para rodar na pipeline, como o token é pessoal, criei uma variável secreta no GitHub e chamei no arquivo de configuração yml do GitHub Action, tanto nos testes de Postman quanto no teste do K6.

## Projeto Desenvolvido por: 
 | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/93127535" width=90><br/><sub>Raquel Swire Guimarães</sub>](https://github.com/rhswire)<br/>[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rhswire)](https://www.linkedin.com/in/rhswire) | 
| :----------------------------------------------------------: | 