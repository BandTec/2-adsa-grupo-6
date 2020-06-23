create database shadowtec; 
use shadowtec;

-- Inicio da criação de tableas sem FK

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
login varchar(45),
senha varchar(45));

-- create table Rede (idMaquina
-- idRede int primary key,
-- nome varchar(45),
-- dataHora datetime);

create table Computador (
idMaquina int primary key,
fkUsuario int,
processador varchar(45),
disco varchar(45),
memoria varchar(45),
mac varchar(45),
foreign key (fkUsuario) references Usuario(idUsuario));

-- Inicio criação de tabelas com FK.
-- Essa tabela abaixo se relaciona com 3 tabelas criadas acima.

-- create table UsuarioComputador (
-- idUsuarioComputador int primary key,
-- fkAluno int,
-- fkMaquina int,
-- fkIdRede int,
-- foreign key (fkAluno) references Usuario(idUsuario),
-- foreign key (fkMaquina) references Computador(idMaquina),
-- foreign key (fkIdRede) references Rede(idRede));

-- As tableas a seguir serão tableas com FK más que se relacionam com a tabela Computador.

create table Registros (
idRegistros int primary key auto_increment,
cpuPc varchar(45),
memoria varchar(45),
disco varchar(45),
dataHora datetime,
fkComputador int,
foreign key (fkComputador) references Computador(idMaquina));

create table Processos (
idProcessos int primary key auto_increment,
nome varchar(45),
consumo varchar(45),
fkComputador int,
foreign key (fkComputador) references Computador(idMaquina))auto_increment = 1;

insert into Usuario(nome, login, senha) values ('braia', 'braian@braian', '123');
select * from Usuario;
select * from Computador;
select * from Registros;
select * from Processos;