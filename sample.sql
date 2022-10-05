CREATE DATABASE alurachallenge;
CREATE SCHEMA financeiro;
CREATE SCHEMA usuario;

create table financeiro.despesas (
	id serial ,
	descricao varchar(200) not null,
	valor integer not null,
	data date not null default CURRENT_DATE ,
	categoria  varchar(50) default  'Outros'
);

create table financeiro.receitas (
	id serial ,
	descricao varchar(200) not null,
	valor integer not null,
	data date not null default CURRENT_DATE 
);

create table usuario.dados (
	id serial,
	login varchar(50) not null,
	hash varchar(200) not null,
	constraint idUnico unique (login)
);

