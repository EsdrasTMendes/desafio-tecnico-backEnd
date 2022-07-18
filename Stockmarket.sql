DROP DATABASE IF EXISTS StockmarketXP;
CREATE DATABASE StockmarketXP;
USE StockmarketXP;
CREATE TABLE acoes(
  cod_ativo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cod_mercado VARCHAR(255) NOT NULL UNIQUE,
  valor_ativo DECIMAL(5,2) NOT NULL
);
CREATE TABLE corretoras(
  corretora_id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nome_corretora VARCHAR(255) NOT NULL
);
CREATE TABLE clientes(
  codigo_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome_cliente VARCHAR(255) NOT NULL,
  saldo_conta DECIMAL(10,2) NOT NULL,
  saldo_custodia DECIMAL (10,2) NOT NULL,
  corretora_id INT NOT NULL,
  FOREIGN KEY (corretora_id) REFERENCES corretoras(corretora_id)
);
CREATE TABLE investimentos(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  codigo_cliente INTEGER NOT NULL,
  cod_ativo  INTEGER NOT NULL,
  qtd_ativo INTEGER NOT NULL,
  FOREIGN KEY (codigo_cliente) REFERENCES clientes(codigo_cliente),
  FOREIGN KEY (cod_ativo) REFERENCES acoes(cod_ativo)
);
CREATE TABLE posicao_corretoras(
  corretora_id INTEGER NOT NULL,
  cod_ativo INTEGER NOT NULL,
  qtd_disponivel INTEGER NOT NULL,
  FOREIGN KEY (corretora_id) REFERENCES corretoras(corretora_id),
  FOREIGN KEY (cod_ativo) REFERENCES acoes(cod_ativo)
);

USE StockmarketXP;
INSERT INTO `acoes`(cod_mercado, valor_ativo) values ('ABEV3', 14.59);
INSERT INTO `acoes`(cod_mercado, valor_ativo) values ('PETR4', 27.96);
INSERT INTO `acoes`(cod_mercado, valor_ativo) values ('CMIG4', 10.45);
INSERT INTO `acoes`(cod_mercado, valor_ativo) values ('GGBR4', 23.54);
INSERT INTO `acoes`(cod_mercado, valor_ativo) values ('ITUB4', 22.55);
INSERT INTO `acoes`(cod_mercado, valor_ativo) values ('BBDC4', 16.44);
INSERT INTO `acoes`(cod_mercado, valor_ativo) values ('BBAS3', 33.28);
INSERT INTO `acoes`(cod_mercado, valor_ativo) values ('VALE3', 68.37);
INSERT INTO `acoes`(cod_mercado, valor_ativo) values ('RAIZ4', 4.42);
INSERT INTO `acoes`(cod_mercado, valor_ativo) values ('SMTO3', 33.50);
INSERT INTO `acoes`(cod_mercado, valor_ativo) values ('ARZZ3', 74.40);
INSERT INTO `corretoras`(nome_corretora) values ('XP');
INSERT INTO `corretoras`(nome_corretora) values ('Rico');
INSERT INTO `corretoras`(nome_corretora) values ('Modal Mais');
INSERT INTO `corretoras`(nome_corretora) values ('CLEAR');
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(1, 1, 1000);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(1, 2, 500);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(1, 3, 1000);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(1, 4, 800);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(1, 9, 2000);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(2, 11, 1000);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(2, 1, 500);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(2, 7, 300);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(2, 6, 100);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(2, 3, 700);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(3, 10, 100);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(3, 4, 500);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(3, 6, 200);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(3, 7, 400);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(3, 1, 100);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(4, 2, 300);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(4, 5, 1500);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(4, 7, 500);
INSERT INTO `posicao_corretoras`(corretora_id, cod_ativo, qtd_disponivel)values(4, 9, 200);

INSERT INTO `clientes`(nome_cliente, saldo_conta, saldo_custodia, corretora_id) values ('Esdras Tenório Mendes', 100.00, 0.00, 1);
INSERT INTO `clientes`(nome_cliente, saldo_conta, saldo_custodia, corretora_id) values ('Natalia Pedroso Veil', 1000.00, 0.00, 2);