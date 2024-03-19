CREATE DATABASE HOSPICOR;
CREATE USER DLEONC WITH ENCRYPTED PASSWORD '0952866606';
GRANT ALL PRIVILEGES ON DATABASE HOSPICOR TO DLEONC;
/*CREATE USER LMERA WITH ENCRYPTED PASSWORD 'XXX';
GRANT ALL PRIVILEGES ON DATABASE HOSPICOR TO LMERA;*/

/** Tablas que pueden aumentar en el futuro y rellenan cajas de seleccion **/
/** Inicio **/

CREATE TABLE CARGO(
    id SERIAL PRIMARY KEY,
    nombre varchar(40)
);/** Rol de una persona de la clinica/hospital **/

CREATE TABLE SERVICIO(
    id SERIAL PRIMARY KEY,
    nombre varchar(40)
);/** Especialidad de un doctor o trabajo asignado **/

CREATE TABLE GENEROS(
    id serial PRIMARY KEY,
    descripcion VARCHAR(20)
);/** Genero de los usuarios **/

CREATE TABLE TIPOIDENTIFICACION(
    id serial PRIMARY KEY,
    tipo varchar(10),
    regla integer
);/** Metodo de identificacion **/

CREATE TABLE ESTADOCIVIL(
    id serial PRIMARY KEY,
    estado varchar(15)
);/** Estado civil del paciente **/

CREATE TABLE ETNIA(
    id serial PRIMARY KEY,
    nombre varchar(25),
);/** Etnia del paciente **/

CREATE TABLE INSTRUCCION(
    id serial PRIMARY KEY,
    nombre varchar(15)
);/** Nivel academico del paciente **/

CREATE TABLE SEGURO(
    id serial PRIMARY KEY,
    nombre varchar(15)
);/** Nombre del seguro del paciente **/

CREATE TABLE ACUERDO(
    id serial PRIMARY KEY,
    acuerdo varchar(50),
    seguroid serial,
    FOREIGN KEY(seguroid) references SEGURO(id)
);/** Tipo de acuerdo del seguro **/

CREATE TABLE ZONA(
    id serial PRIMARY KEY, 
    zona varchar(20)
);/** Tipo de zona de la vivienda del paciente **/

CREATE TABLE TIPOAFILIADO(
    id serial PRIMARY KEY,
    tipo varchar(20),
    seguroid serial,
    OREIGN KEY(seguroid) references SEGURO(id)
);/** Tipo de afiliacion del paciente al seguro **/

/** Usuarios que intervienen en el sistema **/
/** Inicio **/

create table ROLES_USUARIOS(
    id SERIAL PRIMARY KEY,
    nombre varchar(20),
    diasedicion integer,
    estado boolean
);/** Privilegios de tiempo en edicion en el sistema segun el tipo de usuario **/

CREATE TABLE USUARIOS(
    id SERIAL PRIMARY KEY,
    nombreusuario VARCHAR(15),
    cedula VARCHAR(11),
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
); /** Usuarios del sistema **/

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
); /** Paciente del sistema **/

/** Fin **/

/** Tablas necesarias para inventario **/
/** Inicio **/

CREATE TABLE CATEGORIA_INVETARIO(
    id serial PRIMARY KEY,
    nombre VARCHAR(25),
    abreviatura VARCHAR(3)
);/** Tipo de categoria de un item del sistema **/

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
);/** Proveedores de un item del sistema **/

CREATE TABLE DESPACHO(
    id serial PRIMARY KEY,
    fichamedicaid serial,
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);/** Lista de item a despachar **/

CREATE TABLE DESPACHOITEM(
    id serial PRIMARY KEY,
    despachoid serial,
    itemid serial,
    cantidad integer,
    FOREIGN KEY(despachoid) references DESPACHO(id),
    FOREIGN KEY(itemid) references ITEM_INVENTARIO(id)
);/** Referencia de la lista de item a despachar **/

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
);/** Item del sistema **/

CREATE TABLE BODEGA(
    id serial PRIMARY KEY,
    nombre VARCHAR(20)
);/** Lugar de almacenamiento del item del sistema **/

CREATE TABLE ITEM_BODEGA(
    id serial PRIMARY KEY,
    bodegaid serial,
    itemid serial,
    cantidad integer,
    FOREIGN KEY(bodegaid) references BODEGA(id)
    FOREIGN KEY(itemid) references ITEM_INVENTARIO(id)
);/** Referencia de la cantidad de items que hay en una bodega especifica **/

/** Fin **/

/** Proceso medico **/
/** Inicio **/

CREATE TABLE FICHA_MEDICA(
    id serial PRIMARY KEY,
    pacienteid serial,
    fechaentrada date,
    fechasalida date,
    antecedentes text,
    FOREIGN KEY(pacienteid) references PACIENTE(id)
);/** Toda actividad e insumos consumido durante el proceso medico **/

    /** Formularios **/
    /** Inicio **/

CREATE TABLE FORM(
    id serial PRIMARY KEY,
    fichamedicaid serial,
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);

    /** Fin **/

    /** Tablas necesarias para Nutricion **/
    /** Inicio **/

CREATE TABLE HABITACION(
    id serial PRIMARY KEY,
    nombre VARCHAR(20)
);/** Seccion de la clinica **/

CREATE TABLE CAMA(
    id serial PRIMARY KEY,
    habitacionid serial,
    fichamedicaid serial,
    nombre VARCHAR(10),
    estado boolean,
    FOREIGN KEY(habitacionid) references HABITACION(id),
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id),
);/** Espacio disponible para el paciente **/

CREATE TABLE TIPO(
    id serial PRIMARY KEY,
    descripcion VARCHAR(15)
);/** Nombre de la comida segun el momento del dia **/

CREATE TABLE TIPODIETA(
    id serial PRIMARY KEY,
    descripcion VARCHAR(100)
);/** Tipo de comida segun la dieta **/

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
);/** Inicio **/

    /** Fin **/

/** Fin **/