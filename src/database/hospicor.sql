



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
    nombre varchar(40)
);

CREATE TABLE GENEROS(
    id serial PRIMARY KEY,
    descripcion VARCHAR(20)
);

CREATE TABLE TIPOIDENTIFICACION(
    id serial PRIMARY KEY,
    tipo varchar(10),
    regla integer
);

CREATE TABLE ESTADOCIVIL(
    id serial PRIMARY KEY,
    estado varchar(15)
);

CREATE TABLE ETNIA(
    id serial PRIMARY KEY,
    nombre varchar(25),
);

CREATE TABLE INSTRUCCION(
    id serial PRIMARY KEY,
    nombre varchar(15)
);

CREATE TABLE SEGURO(
    id serial PRIMARY KEY,
    nombre varchar(15)
);

CREATE TABLE ACUERDO(
    id serial PRIMARY KEY,
    acuerdo varchar(50),
    seguroid serial,
    FOREIGN KEY(seguroid) references SEGURO(id)
);

CREATE TABLE ZONA(
    id serial PRIMARY KEY, 
    zona varchar(20)
);

CREATE TABLE TIPOAFILIADO(
    id serial PRIMARY KEY,
    tipo varchar(20),
    seguroid serial,
    OREIGN KEY(seguroid) references SEGURO(id)
);

CREATE TABLE PACIENTE(
    id serial PRIMARY KEY,
    nombre varchar(15),
    nombre2 varchar(15),
    apellido varchar(15),
    apellido2 varchar(15),
    tipoidentificacionid serial,
    identificacion varchar(15),
    edad integer,
    generoid serial,
    fechaNacimiento date,
    lugarNacimiento varchar(20),
    estadocivilid serial,
    etniaid serial,
    instruccionid serial,
    zonaid serial,
    discapacitado boolean,
    carnetdiscapacitado varchar(15),
    telefono varchar(15),
    direccion varchar(100),
    lugartrabajo varchar(50),
    ocupacion varchar(25),
    correo varchar(25),
    acompañante varchar(60),
    telefonoacompa varchar(15),
    direccionacompa varchar(100),
    seguroid serial,
    acuerdoid serial,
    tipoafiliadoid serial,
    fechafallecimiento date,
    creadoporid varchar(20),
    editadoporid varchar(20),
    FOREIGN KEY(tipoidentificacionid) references TIPOIDENTIFICACION(id),
    FOREIGN KEY(generoid) references GENEROS(id),
    FOREIGN KEY(estadocivilid) references ESTADOCIVIL(id),
    FOREIGN KEY(etniaid) references ETNIA(id),
    FOREIGN KEY(instruccionid) references INSTRUCCION(id),
    FOREIGN KEY(seguroid) references SEGURO(id),
    FOREIGN KEY(tipoafiliadoid) references TIPOAFILIADO(id),
    FOREIGN KEY(zonaid) references ZONA(id),
    FOREIGN KEY(acuerdoid) references ACUERDO(id)
);

CREATE TABLE HABITACION(
    id serial PRIMARY KEY,
    nombre VARCHAR(20)
);

CREATE TABLE CAMA(
    id serial PRIMARY KEY,
    habitacionid serial,
    pacienteid serial,
    nombre VARCHAR(7),
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
);

CREATE TABLE DESPACHO(
    id serial PRIMARY KEY,
    fichamedicaid serial,
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);

CREATE TABLE DESPACHOITEM(
    id serial PRIMARY KEY,
    despachoid serial,
    itemid serial,
    cantidad integer,
    FOREIGN KEY(despachoid) references DESPACHO(id),
    FOREIGN KEY(itemid) references ITEM_INVENTARIO(id)
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
    laboratorioActual varchar(50),
    laboratorioAnterior varchar(50),
    activo boolean,
    iva boolean,
    cnmb boolean,
    sustaciacontrolada boolean,
    antibioticorestringido boolean,
    rpis boolean,
    creadopor VARCHAR(20),
    editadopor VARCHAR(20),
    creadofec date,
    editadofec date,
    provedorid serial,
    FOREIGN KEY(categoriaid) references CATEGORIA_INVETARIO(id),
    FOREIGN KEY(provedorid) references PROVEEDORES(id)
);

CREATE TABLE BODEGA(
    id serial PRIMARY KEY,
    nombre VARCHAR(20)
);

CREATE TABLE ITEM_BODEGA(
    id serial PRIMARY KEY,
    bodegaid serial,
    itemid serial,
    cantidad integer,
    FOREIGN KEY(bodegaid) references BODEGA(id)
    FOREIGN KEY(itemid) references ITEM_INVENTARIO(id)
);

CREATE TABLE FORM(
    id serial PRIMARY KEY,
    pacienteid serial,
    FOREIGN KEY(pacienteid) references PACIENTE(id)
);

CREATE TABLE FICHA_MEDICA(
    id serial PRIMARY KEY,
    pacienteid serial,

    FOREIGN KEY(pacienteid) references PACIENTE(id)
);