DROP DATABASE IF EXISTS StockmarketXP;
CREATE DATABASE StockmarketXP;
USE StockmarketXP;
CREATE TABLE acoes(
  ativo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cod_ativo VARCHAR(255) NOT NULL UNIQUE,
  valor_ativo DECIMAL(5,2) NOT NULL
);
CREATE TABLE clientes(
  cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cod_cliente VARCHAR(255) UNIQUE NOT NULL,
  saldo_conta DECIMAL(5,2) NOT NULL,
  saldo_custodia DECIMAL (5,2) NOT NULL
);
CREATE TABLE corretoras(
  corretora_id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  ativo_id INTEGER NOT NULL,
  qtd_disponível INTEGER NOT NULL,
  qtd_custodia INTEGER NOT NULL,
  codigo_corretora VARCHAR(255) NOT NULL,
  nome_corretora VARCHAR(255) NOT NULL,
  FOREIGN KEY (ativo_id) REFERENCES acoes(ativo_id)
);
CREATE TABLE carteiras(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cliente_id INTEGER NOT NULL,
  ativo_id INTEGER NOT NULL,
  qtd_ativo_custodia INTEGER NOT NULL,
  corretora_id INTEGER NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id),
  FOREIGN KEY (ativo_id) REFERENCES acoes(ativo_id),
  FOREIGN KEY (corretora_id) REFERENCES corretoras(corretora_id)
)