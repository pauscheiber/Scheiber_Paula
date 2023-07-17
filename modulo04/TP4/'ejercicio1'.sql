CREATE TABLE profesor
( 
profesor_id int primary key,
nombre varchar(50) not null,
especialidad varchar(100) not null,
email varchar(50)
);

CREATE TABLE curso
(
cod_curso varchar(10) primary key,
nombre varchar(100) not null,
impartido int not null,
inscritos varchar(10) not null,
foreign key (impartido) references profesor(profesor_id)
);

CREATE TABLE alumno
(
cod_matricula varchar(10) primary key,
nombre varchar(50) not null,
dni varchar(9) not null unique,
fecha_nac date not null,
email varchar(50)
);

CREATE TABLE inscritos
(
nro_inscripción int auto_increment primary key,
cod_matricula varchar(10) not null,
cod_curso varchar(10) not null,
foreign key (cod_matricula) references alumno(cod_matricula),
foreign key (cod_curso) references curso(cod_curso)
);

INSERT INTO profesor VALUES (1, 'Fernandez Walter', 'Economía', 'ferwalter@gmail.com');
INSERT INTO profesor VALUES (2, 'Jagou Nancy', 'Estadística', 'jagounancy@gmai.com');
INSERT INTO profesor VALUES (3, 'Villalba Dario', 'Contabilidad', 'villalba_dario@gmail.com');
INSERT INTO alumno VALUES ('LE0118864', 'Da Silva Estefinia', '40852789', 15/02/1996, 'estefids@gmail.com');
INSERT INTO alumno VALUES ('CP0115697', 'Polkoski Ezequiel', '38956742', 25/07/1995, 'ezepolko@gmail.com');
INSERT INTO alumno VALUES ('LA0225687', 'Micciulo Micaela', '40639785', 21/06/1997, 'micamicciulo@gmail.con');
INSERT INTO curso VALUES ('MACRO', 'Macroeconomía', 1);
INSERT INTO curso VALUES ('ESUNO', 'Estadística I', 2);
INSERT INTO curso VALUES ('COBAS', 'Contabilidad Básica', 3);










