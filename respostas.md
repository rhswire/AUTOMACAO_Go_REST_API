### Porque o Postman

Escolhi o Postman para automatizar os testes da API Go REST porque é uma ferramenta que possuo bastante conhecimento e prática e que me oferece muita flexibilidade para testar a API de diferentes maneiras. Uma das principais vantagens do Postman é que ele permite fazer tanto testes manuais quanto automatizados, por isso posso começar explorando a API manualmente, criando requisições e verificando as respostas de forma rápida e intuitiva.

Depois, com base nesses testes, consigo automatizar usando scripts de teste em JavaScript diretamente na ferramenta. Isso me permite validar os dados retornados pela API, checar o status das respostas, e garantir que tudo está no formato esperado, sem precisar ficar repetindo o trabalho manualmente.

Além disso, o Postman se integra muito bem com o GitHub Actions através do Newman, permitindo que eu configure a execução automática dos testes toda vez que houver uma mudança no código. Essa flexibilidade de alternar entre testes manuais e automatizados me dá o controle que preciso para garantir a qualidade dos projetos, identificando problemas rapidamente e mantendo um ciclo de desenvolvimento ágil e seguro.

Para mim, o Postman é uma escolha segura porque me permite ser mais eficiente, combinando testes exploratórios e automatizados, e ao mesmo tempo integrando tudo isso diretamente no pipeline de CI/CD através do Github Action, o que facilita a colaboração quando há uma equipe envolvida e garantindo uma API funcionando como esperado.

### Endpoint "Todos"

Além de alguns testes nos outros endpoints no Postman, fiz 2 testes no endpoint "Todos" validando o schema, o status completed e o formato da data due_on.


### Porque o K6

Para implementar testes de carga na API Go REST, sugiro o uso da ferramenta K6. O K6 é uma ferramenta de código aberto moderna, focada em testes de carga e performance, que permite escrever scripts em JavaScript para simular usuários virtuais interagindo com a API.

É importante considerar que a API GoRest possui uma limitação no número de requisições que podem ser feitas por minuto com cada token de acesso. Por isso, os testes de carga precisam ser configurados de forma cuidadosa para respeitar essas restrições e evitar que o teste seja bloqueado devido ao excesso de requisições.

Uma abordagem recomendada neste caso específico da Go REST é usar o K6 para executar testes de carga com um número controlado de usuários virtuais (VUs) e ajustar a taxa de requisições, garantindo que o limite de requisições por minuto não seja ultrapassado. Mesmo com essa limitação, o K6 permite simular diferentes níveis de carga e analisar o comportamento da API, ajudando a identificar possíveis gargalos de desempenho e a entender melhor como a API reage sob diferentes condições de uso.

Também é possível integrar os testes do K6 diretamente no pipeline de CI/CD através do Github Action.

Criei um pequeno teste no K6 para registro de um novo User e integrei na pipeline deste projeto para exemplificar.

### Nota sobre a Implementação dos Workflows de CI/CD

Criei dois workflows no Github Action neste projeto para exemplificar a integração de testes no CI/CD usando o Postman/Newman para testes funcionais e o K6 para testes de carga. No entanto, esses testes devem idealmente ser executados no ambiente de testes ou desenvolvimento do projeto ou repositório da própria API, e não neste meu repositório. A execução diretamente no repositório da API permite uma validação mais precisa e relevante, garantindo que as mudanças sejam validadas de forma contínua toda vez que tiver uma atualização e que o desempenho seja monitorado diretamente no contexto da API em questão.

