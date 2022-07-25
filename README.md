
# Desafio Back End XP

Aqui você encontrará uma API que simula o mercado financeiro, imitando a compra e venda de ações. 

## Autores

- [@Esdras Tenório](https://www.github.com/EsdrasTMendes)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/EsdrasTMendes/desafio-tecnico-backEnd
```

Entre no diretório do projeto

```bash
  cd desafio-tecnico-backEnd
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm  start -> Para iniciar o servidor em JS.
  npm run build -> para iniciar o serivor em TS.
```

Para rodar os testes localmente

```bash
  npm test -> Para executar os testes unitários
  npm run test:coverage -> Para executar a cobertura de testes. 
```

Para criar o seu banco de dados, existe um arquivo `Stockmarket.sql` para criar seu database, basta utilizar a query de exemplo que ele criará o banco de dados com as informações mínimas para executar a API. 
Fique à vontade caso queira inserir novas informações no banco de dados. Apenas recomendo que as querys sigam o padrão que foram escritas. 




## Variáveis de Ambiente
Após executar a query de criação do banco de dados
para o funcionamento correto desse projeto, você irá precisar adicionar as seguintes variáveis de ambiente no seu `.env`,
esse projeto utiliza o `mysql2` para fazer a conexão com o banco de dados, utilizando as seguintes variáveis de ambiente:

`API_PORT = 3000`

`MYSQL_PORT= 3306`

`MYSQL_DB_NAME = EXEMPLE_NAME_DB`

`MYSQL_USER= EXEMPLE_MYSQL_USER`

`MYSQL_PASSWORD=EXEMPLE_MYSQL_PASSWORD`


## Documentação da API

#### Efetua login da pessoa usuária

Essa api contém autenticação JWT em algumas rotas, sendo assim, para realizar algumas requisições é necessário estar autenticado. A Autenticação é realizada através do token que é retornado quando realizamos o login com os dados corretos (`email` e `password` devem ser valores válidos que estão cadastrados no banco de dados).

```http
  POST /login
```
O corpo da requisição deve conter os seguintes parâmetros:
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | email de cadastro da pessoa usuária |
| `password` | `string` | senha escolhida no cadastro da pessoa usuaria |

#### Retorna um token que será usado para a autenticação nas rotas autenticadas.

Caso queira cadastrar novas pessoas, basta seguir a rota, após o cadastro será possível fazer o login para receber o token:
```http
  POST /cadastro
```
O corpo da requisição deve conter os seguintes parâmetros:
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nomeCliente`      | `string` | **Obrigatório**. O nome da pessoa usuária |
| `emailCliente`      | `string` | **Obrigatório**. O email da pessoa usuária |
| `saldoConta`      | `number` | **Obrigatório**. O saldo da conta da pessoa usuaria |
| `saldoCustodia`      | `number` | **Obrigatório**. O saldo em custódia da pessoa usuaria |
| `passwordCliente`      | `string` | **Obrigatório**. Senha de cadastro da pessoa usuária |

#### Recebe uma mensagem de confirmação do cadastro.

### Rotas que exigem autenticação
#### Todas as proximas rotas exigem autenticação para realização das operações. Para se autenticar, basta informar um `headers` `authorization` informando o valor do token que foi recebido no momento do login. 


Compra uma quantidade determinada de um ativo.
```http
  POST /investimento/comprar
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `codCliente`      | `number` | código da pessoa usuária. |
| `codAtivo`      | `number` | código do ativo que quer comprar |
| `qtdeAtivo`      | `number` | quantidade total do ativo que quer comprar |


#### Recebe um objeto com as informações do investimento.

Vende uma quantidade determinada de um ativo.
```http
  POST /investimento/vender
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `codCliente`      | `number` | código da pessoa usuária. |
| `codAtivo`      | `number` | código do ativo que quer vender |
| `qtdeAtivo`      | `number` | quantidade total do ativo que quer vender |


#### Recebe um objeto com as informações da venda.
Realiza um depósito na conta da pessoa usuária.
```http
  POST /conta/deposito
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `CodCliente`      | `number` | código da pessoa usuária. |
| `Valor`      | `number` | quantidade de dinheiro que quer depositar |


#### Recebe uma mensagem: "Depósito realizado com sucesso".

Realiza um saque na conta da pessoa usuária.
```http
  POST /conta/saque
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `codCliente`      | `number` | código da pessoa usuária. |
| `codAtivo`      | `number` | código do ativo que quer vender |



#### Recebe uma mensagem: "Saque realizado com sucesso"

Realiza uma busca de investimentos pelo codigo do cliente da pessoa usuária.
```http
  GET /conta/investimento/{codCliente}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `codCliente`      | `number` | código da pessoa usuária. |




#### Recebe um array com todos os investimentos do cliente informado.

Realiza a busca de um ativo especifico.
```http
  GET /ativos/{codAtivo}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `codAtivo`      | `number` | código do ativo que se quer buscar |



#### Recebe um objeto com todas as informações do Ativo buscado.

Realiza uma busca por um cliente específico.
```http
  GET /conta/{codCliente}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `codCliente`      | `number` | código da pessoa usuária que se quer buscar. |




#### Recebe um objeto com as informações da pessoa usuária que foi informada.
## Aprendizados

Gostaria de relatar a alegria de conseguir entregar a API com todos os requisitos obrigatórios e alguns requisitos bônus: JWT e testes.
Me desafiei codar em TypeScript, por gostar muito da linguagem tipada, mas ao mesmo tempo por tentar me desafiar um pouco mais. 
Ao longo do processo de desenvolvimento foram inúmeros bugs inesperados, erros que não sabia como lidar, implementação de testes em TypeScript (talvez tenha sido o mais desafiador).
Porém não tem preço superar os bugs sozinho, apesar de não ser esse o objetivo principal, sinto que esse desafio técnico virou uma chavinha interna sobre o quão é divertido construir aplicações! 
Agradeço a XP INC pela oportunidade de demonstrar um pouco do meu aprendizado até aqui!