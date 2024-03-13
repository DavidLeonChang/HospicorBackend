



CREATE DATABASE HOSPICOR;

create table ROLES_USUARIOS(
    id SERIAL PRIMARY KEY,
    nombre varchar(20),
    diasedicion integer,
    estado boolean
);

CREATE TABLE USUARIOS(
    id SERIAL PRIMARY KEY,
    CEDULA VARCHAR(11),
    contrasena VARCHAR(30),
    nombre1 VARCHAR(15),
    nombre2 VARCHAR(15),
    apellido1 VARCHAR(15),
    apellido2 VARCHAR(15),
    tipousuario Serial,
    generoid serial,
    cargoid serial,
    servicioid serial,
    estado boolean,
    FOREIGN KEY(tipousuario) references ROLES_USUARIOS(id),
    FOREIGN KEY(generoid) references GENEROS(id),
    FOREIGN KEY(cargoid) references CARGO(id),
    FOREIGN KEY(servicioid) references SERVICIO(id)
);


CREATE TABLE CARGO(
    id SERIAL PRIMARY KEY,
    nombre varchar(40)
);

CREATE TABLE SERVICIO(
    id SERIAL PRIMARY KEY,
    nombre varchar(30)
);

CREATE TABLE GENEROS(
    id serial PRIMARY KEY,
    descripcion VARCHAR(20)
);

CREATE TABLE PACIENTE(
    id serial PRIMARY KEY
);

CREATE TABLE HABITACION(
    id serial PRIMARY KEY,
    nombre VARCHAR(20)
);

CREATE TABLE CAMA(
    id serial PRIMARY KEY,
    habitacionid serial,
    pacienteid serial,
    nombre VARCHAR(2),
    estado boolean,
    FOREIGN KEY(habitacionid) references HABITACION(id),
    FOREIGN KEY(pacienteid) references PACIENTE(id),
);

CREATE TABLE TIPO(
    id serial PRIMARY KEY,
    descripcion VARCHAR(15)
);

CREATE TABLE TIPODIETA(
    id serial PRIMARY KEY,
    descripcion VARCHAR(100)
);

CREATE TABLE NUTRICION(
    id serial PRIMARY KEY,
    camaid serial,
    tipoid serial,
    tipodietaid serial,
    fecha date,
    observacion text,
    FOREIGN KEY(camaid) references CAMA(id),
    FOREIGN KEY(tipoid) references TIPO(id),
    FOREIGN KEY(tipodietaid) references TIPODIETA(id)
);

CREATE TABLE CATEGORIA_INVETARIO(
    id serial PRIMARY KEY,
    nombre VARCHAR(25),
    abreviatura VARCHAR(3)
);

CREATE TABLE PROVEEDORES(
    id serial PRIMARY KEY,
    nombre varchar(100),
    nofactura integer,
    fecha date,
    cantidad integer,
    coste real,
    fechacaducidad date,
    lote varchar(20),
    registrosanitario varchar(30),
    estado varchar(15),
    bn_nc varchar(20)
);

CREATE TABLE ITEM_INVENTARIO(
    id serial PRIMARY KEY,
    nombre VARCHAR(100),
    abreviatura VARCHAR(30),
    nombre_homologado VARCHAR(100),
    nombre_comercial VARCHAR(50),
    categoriaid serial,
    nivel integer,
    uso varchar(20),
    presentacion varchar(20),
    formafarmaceutica varchar(20),
    concentracion1 real,
    concentracion2 real,
    unidad_medida1 varchar(5),
    unidad_medida2 varchar(5),
    volumen real,
    stock_alarma integer,
    concentracion varchar(20),
    preciocompra real,
    preciotecho real,
    pvpublico real,
    pvprivado real,
    activo boolean,
    iva boolean,
    cnmb boolean,
    sustaciacontrolada boolean,
    antibioticorestringido boolean,
    rpis boolean,
    creado date,
    actualizado date,
    provedorid serial,
    FOREIGN KEY(categoriaid) references CATEGORIA_INVETARIO(id),
    FOREIGN KEY(provedorid) references PROVEEDORES(id)
);



CREATE TABLE BODEGA(
    id serial PRIMARY KEY,
    nombre VARCHAR(20),
    itemid serial,
    cantidad integer,
    FOREIGN KEY(itemid) references ITEM_INVENTARIO(id),
);
