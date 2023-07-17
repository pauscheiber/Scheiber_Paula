CREATE TABLE pais
(
pais_id int auto_increment primary key,
nombre_pais varchar(50) not null
);

CREATE TABLE provincia
(
provincia_id int auto_increment primary key,
nombre_provincia varchar(50) not null,
pais_id int not null,
foreign key (pais_id) references pais(pais_id)
);

CREATE TABLE localidad
(
codigo_localidad int auto_increment primary key,
nombre varchar(50) not null,
codigo_postal varchar(10) not null unique,
provincia_id int not null,
foreign key (provincia_id) references provincia(provincia_id)
);

CREATE TABLE empleado
(
empleado_id int auto_increment primary key,
nombre varchar(50) not null,
dni varchar(9) not null unique,
telefono int(10),
email varchar(50),
fecha_alta date not null,
codigo_localidad int not null,
foreign key (codigo_localidad) references localidad(codogo_localidad)
);

INSERT INTO pais VALUES ( null, 'Argentina');
INSERT INTO pais VALUES ( null, 'Uruguay');
INSERT INTO pais VALUES ( null, 'Paraguay');
INSERT INTO provincia VALUES ( null, 'Misiones', 1);
INSERT INTO provincia VALUES ( null, 'Buenos Aires', 1);
INSERT INTO provincia VALUES ( null, 'Itapua', 3);
INSERT INTO localidad VALUES ( null, 'Posadas', 'MP3300', 1);
INSERT INTO localidad VALUES ( null, 'Encarnación', 'IE69758', 3);
INSERT INTO localidad VALUES ( null, 'Necochea', 'BSN5697', 2);
INSERT INTO empleado VALUES ( null, 'Vazquez Ramon', '12589756', 356489752, 'ramonvaz@gmail.com', 01/03/2016, 2);
INSERT INTO empleado VALUES ( null, 'Bitler James', '26859741', 458956654, 'bitlerjs@gmail.com', 1/06/2018, 1);
INSERT INTO empleado VALUES ( null, 'Nuñez Yesica', '41304004', 115891124, 'yes_nuñez@gmail.com', 1/12/2022, 3);


