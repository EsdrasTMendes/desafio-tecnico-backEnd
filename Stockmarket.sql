DROP DATABASE IF EXISTS StockmarketXP;
CREATE DATABASE StockmarketXP;
USE StockmarketXP;
CREATE TABLE acoes(
  cod_ativo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cod_mercado VARCHAR(255) NOT NULL UNIQUE,
  valor_ativo DECIMAL(5,2) NOT NULL,
  qtde_disponivel INT NOT NULL
);
CREATE TABLE clientes(
  cod_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome_cliente VARCHAR(255) NOT NULL,
  email_cliente VARCHAR(255) NOT NULL,
  saldo_conta DECIMAL(10,2) NOT NULL,
  saldo_custodia DECIMAL (10,2) NOT NULL,
  password_cliente VARCHAR(255) NOT NULL
);
CREATE TABLE investimentos(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cod_cliente INTEGER NOT NULL,
  cod_ativo  INTEGER NOT NULL,
  qtd_ativo INTEGER NOT NULL,
  FOREIGN KEY (cod_cliente) REFERENCES clientes(cod_cliente),
  FOREIGN KEY (cod_ativo) REFERENCES acoes(cod_ativo)
);


USE StockmarketXP;
INSERT INTO `acoes`(cod_mercado, valor_ativo, qtde_disponivel) values ('ABEV3', 14.59, 300);
INSERT INTO `acoes`(cod_mercado, valor_ativo, qtde_disponivel) values ('PETR4', 27.96, 100);
INSERT INTO `acoes`(cod_mercado, valor_ativo, qtde_disponivel) values ('CMIG4', 10.45, 200);
INSERT INTO `acoes`(cod_mercado, valor_ativo, qtde_disponivel) values ('GGBR4', 23.54, 100);
INSERT INTO `acoes`(cod_mercado, valor_ativo, qtde_disponivel) values ('ITUB4', 22.55, 200);
INSERT INTO `acoes`(cod_mercado, valor_ativo, qtde_disponivel) values ('BBDC4', 16.44, 400);
INSERT INTO `acoes`(cod_mercado, valor_ativo, qtde_disponivel) values ('BBAS3', 33.28, 300);
INSERT INTO `acoes`(cod_mercado, valor_ativo, qtde_disponivel) values ('VALE3', 68.37, 100);
INSERT INTO `acoes`(cod_mercado, valor_ativo, qtde_disponivel) values ('RAIZ4', 4.42, 500);
INSERT INTO `acoes`(cod_mercado, valor_ativo, qtde_disponivel) values ('SMTO3', 33.50, 600);
INSERT INTO `acoes`(cod_mercado, valor_ativo, qtde_disponivel) values ('ARZZ3', 74.40, 200);
INSERT INTO `clientes`(nome_cliente, email_cliente, saldo_conta, saldo_custodia, password_cliente) values ('Esdras Tenório Mendes', 'esdrastmendes@gmail.com' 100.00, 0.00, 'senhateste2');
INSERT INTO `clientes`(nome_cliente, email_cliente, saldo_conta, saldo_custodia, password_cliente) values ('Natalia Pedroso Veil', 'nataliaveil@gmail.com', 1000.00, 0.00, 'senhateste1');