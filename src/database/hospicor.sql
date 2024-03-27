CREATE DATABASE HOSPICOR;
CREATE USER DLEONC WITH ENCRYPTED PASSWORD '0952866606';
GRANT ALL PRIVILEGES ON DATABASE HOSPICOR TO DLEONC;
/*CREATE USER LMERA WITH ENCRYPTED PASSWORD 'XXX';
GRANT ALL PRIVILEGES ON DATABASE HOSPICOR TO LMERA;*/

/** Tablas que pueden aumentar en el futuro y rellenan cajas de seleccion **/
/** Inicio **/

CREATE TABLE DATOSESTABLECIMIENTO(
    id serial PRIMARY KEY,
    instituciondelsistema varchar(20),
    unicodigo varchar(15),
    establecimientodesalud varchar(20),
    tipologia varchar(30),
    estado boolean
);

CREATE TABLE CARGO(
    id SERIAL PRIMARY KEY,
    nombre varchar(40),
    estado boolean
);/** Rol de una persona de la clinica/hospital **/

CREATE TABLE SERVICIO(
    id SERIAL PRIMARY KEY,
    nombre varchar(40),
    estado boolean
);/** Especialidad de un doctor o trabajo asignado **/

CREATE TABLE GENEROS(
    id serial PRIMARY KEY,
    descripcion VARCHAR(20),
    estado boolean
);/** Genero de los usuarios y pacientes **/

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
    nombreusuario VARCHAR(20),
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

CREATE TABLE TIPOIDENTIFICACION(
    id serial PRIMARY KEY,
    tipo varchar(10),
    regla integer,
    estado boolean
);/** Metodo de identificacion **/

CREATE TABLE ESTADOCIVIL(
    id serial PRIMARY KEY,
    nombre varchar(15),
    estado boolean
);/** Estado civil del paciente **/

CREATE TABLE ETNIA(
    id serial PRIMARY KEY,
    nombre varchar(25),
    estado boolean
);/** Etnia del paciente **/

CREATE TABLE INSTRUCCION(
    id serial PRIMARY KEY,
    nombre varchar(15),
    estado boolean
);/** Nivel academico del paciente **/

CREATE TABLE SEGURO(
    id serial PRIMARY KEY,
    nombre varchar(15),
    estado boolean
);/** Nombre del seguro del paciente **/

CREATE TABLE ACUERDO(
    id serial PRIMARY KEY,
    acuerdo varchar(50),
    seguroid serial,
    estado boolean
    FOREIGN KEY(seguroid) references SEGURO(id)
);/** Tipo de acuerdo del seguro **/

CREATE TABLE ZONA(
    id serial PRIMARY KEY, 
    zona varchar(20),
    estado boolean
);/** Tipo de zona de la vivienda del paciente **/

CREATE TABLE TIPOAFILIADO(
    id serial PRIMARY KEY,
    tipo varchar(20),
    seguroid serial,
    estado boolean
    OREIGN KEY(seguroid) references SEGURO(id)
);/** Tipo de afiliacion del paciente al seguro **/

CREATE TABLE PACIENTE(
    tipoidentificacionid serial,
    identificacion varchar(15) PRIMARY KEY,
    nombre varchar(15),
    nombre2 varchar(15),
    apellido varchar(15),
    apellido2 varchar(15),    
    edad integer,
    generoid serial,
    fechaNacimiento timestamp,
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
    fechafallecimiento timestamp,
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
    abreviatura VARCHAR(3),
    estado boolean default true
);/** Tipo de categoria de un item del sistema **/

CREATE TABLE ESTADOINVENTARIO(
    id serial PRIMARY KEY,
    nombre varchar(20),
    estado boolean default true
);/** Estado de las transferencias, despachos **/

CREATE TABLE TRANSFERENCIA(
    id serial PRIMARY KEY,
    fecharegistro timestamp,
    usuariocrea varchar(15),
    usuariorecibe varchar(15),
    inbodegaid serial,
    outbodegaid serial,
    estado serial,
    observacion varchar(50),
    FOREIGN KEY(inbodegaid) references BODEGA(id),
    FOREIGN KEY(outbodegaid) references BODEGA(id),
    FOREIGN KEY(estado) references ESTADOINVENTARIO(id)
);/** Registro de transferencia entre bodegas y subbodegas **/

CREATE TABLE ITEM_TRANSFERENCIA(
    id serial PRIMARY KEY,
    transferenciaid serial,
    itemid serial,
    estado boolean default true,
    FOREIGN KEY(transferenciaid) references TRANSFERENCIA(id),
    FOREIGN KEY(itemid) references ITEM_INVENTARIO(id)
);/** Registro de items de transferencia entre bodegas y subbodegas **/

CREATE TABLE PROVEEDORES(
    id serial PRIMARY KEY,
    nombre varchar(100),
    nofactura integer,
    fecha timestamp,
    cantidad integer,
    coste real,
    fechacaducidad date,
    lote varchar(20),
    registrosanitario varchar(30),
    estado varchar(15),
    eliminado boolean default false
);/** Proveedores de un item del sistema **/

CREATE TABLE DESPACHO(
    id serial PRIMARY KEY,
    fichamedicaid serial,
    estado serial,
    numItem integer,    
    FOREIGN KEY(estado) references ESTADOINVENTARIO(id)
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);/** Lista de item a despachar **/

CREATE TABLE DESPACHOITEM(
    id serial PRIMARY KEY,
    despachoid serial,
    itemid serial,
    cantidad integer,
    estado boolean default true,
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
    creadofec timestamp,
    editadofec timestamp,
    provedorid serial,
    FOREIGN KEY(categoriaid) references CATEGORIA_INVETARIO(id),
    FOREIGN KEY(provedorid) references PROVEEDORES(id)
);/** Item del sistema **/

CREATE TABLE BODEGA(
    id serial PRIMARY KEY,
    nombre VARCHAR(20),
    super boolean default false,
    estado boolean default true
);/** Lugar de almacenamiento del item del sistema **/

CREATE TABLE ITEM_BODEGA(
    id serial PRIMARY KEY,
    bodegaid serial,
    itemid serial,
    cantidad integer,
    FOREIGN KEY(bodegaid) references BODEGA(id)
    FOREIGN KEY(itemid) references ITEM_INVENTARIO(id)
);/** Referencia de la cantidad de items que hay en una bodega especifica **/

CREATE TABLE AREA(
    id serial PRIMARY KEY,
    nombre varchar(25),
    estado boolean default true
);

CREATE TABLE CONSUMO_INTERNO(
    id serial PRIMARY KEY,
    fechasol timestamp,
    usersol varchar(20),
    usernombre varchar(60),
    bodegaid serial,
    estado serial,
    fechades timestamp,
    userdes varchar(20),
    
);

CREATE TABLE ITEM_CONSUMO_INTERNO(
    id serial PRIMARY KEY,
    consumoid,
    itemid,
    cantidad
);

CREATE TABLE REGULACION(
    id serial PRIMARY KEY,
);

/** Fin **/

/** Proceso medico **/
/** Inicio **/

CREATE TABLE FICHA_MEDICA(
    id serial PRIMARY KEY,
    datosestablecimientoid serial,
    pacienteid varchar(15),
    fechaentrada timestamp,
    fechasalida timestamp,
    estado boolean,    
    FOREIGN KEY(datosestablecimientoid) references DATOSESTABLECIMIENTO(id),    
    FOREIGN KEY(pacienteid) references PACIENTE(id)
);/** Toda actividad e insumos consumido durante el proceso medico **/

    /** TABLAS ADICIONALES DE INFORMACION DEL PACIENTE Y FORMULARIOS */
    /** Inicio **/

CREATE TABLE ANTECEDENTES(
    id serial PRIMARY KEY,
    fichamedicaid serial,
    FOREIGN KEY (fichamedicaid) references FICHA_MEDICA(id)
)

CREATE TABLE CIE10(
    id varchar(6) PRIMARY KEY,
    nombre text
);

CREATE TABLE DIAGNOSTICOCIE10(
    id serial PRIMARY KEY,
    fichamedicaid serial,
    tipo integer,
    estado boolean,
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);

/** FORM003 ANE **/
/** INICIO **/

CREATE TABLE EVENTOINGRESO(
    id serial PRIMARY KEY,
    fecha timestamp,
    condiciondellegada varchar(30),
    motivo varchar(30)
    fichamedicaid serial,
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);

/** FIN **/

/** FORM005 EVOLUCIONES **/
/** INICIO **/

CREATE TABLE EVOLUCIONES(
    id serial PRIMARY KEY,
    fichamedicaid serial,
    fechainicio timestamp,
    fechafinal timestamp,
    evoluciontexto text,
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);
CREATE TABLE PLANEVOLUCION(

);

/** FIN **/



    /** FORM006 REFERENCIA Y CONTRAREFERENCIA **/
    /** INICIO **/
    /** 06 EPICRICIS **/


CREATE TABLE EPICRISIS(
    id serial PRIMARY KEY,
    resumencclinico text,
    resumenevolucion text,
    hallazgos text,
    resumentratamiente text,
    indicacionesalta text,
    causaexterna text,
    estadoegreso boolean,
    condicionalta boolean,
    asintomatico boolean,
    discapacidad boolean,
    retironoautorizado boolean,
    defuncionmenos48h boolean,
    diasestada integer,
    diasreposo integer,
    elaboradopor varchar(40),
    fechaepi timestamp,
    userid serial,
    fichamedicaid serial,
    FOREIGN KEY(userid) references USUARIOS(id),
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);

/** FORM007 INTERCONSULTA **/
/** INICIO **/
/** 07 INTERCONSULTASOLICITUD 09 INTERCONSULTAINFORME **/

CREATE TABLE SOLICITUD(
    id Serial PRIMARY KEY,
    fichamedicaid serial,
    motivo text,
    cuadroclinico text,
    resultadoexamenes text,
    planterapeutico text,
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);
CREATE TABLE INTERCONSULTA(    
    id serial PRIMARY KEY,
    fichamedicaid serial,
    fecha timestamp,
    duracion integer,
    cuadroclinico text,
    resumencclinico text,
    planpropuesto text,
    planterapeuticopropuesto text,
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);

/** FIN **/

/** FORM008 EMERGENCIA **/
/** INICIO **/


/** FIN **/
    

    /** FORM010 EXAMENES LABORATORIO **/
    /** INICIO **/
CREATE TABLE EXAMENLAB(
    id integer PRIMARY KEY,
    nombre varchar(100),
    categoria varchar(30)    
);



CREATE TABLE LABORATORIO(
    id serial PRIMARY KEY,

);



    /** FIN **/

/** FORM053 REFERENCIA Y CONTRAREFERENCIA **/
/** INICIO **/
/** 52-REFERENCIA 53-CONTRAREFERENCIA  **/

CREATE TABLE REFERENCIACONTRAREFERENCIA(
    id serial PRIMARY KEY,
    motivo text,
    establecimientoderiva varchar(50),
    resumencclinicoderiva text,
    hallazgosderiba TEXT,
    referencia boolean,
    derivacion boolean,
    establecimientoid serial,
    institureferencia varchar(30),
    establereferencia varchar(30),
    distritreferencia varchar(30),
    fechareferencia timestamp,
    resumencclinicocontra text,
    hallazgoscontra text,
    tratamientocontra text,
    tratamientorecomendado text,
    fechainforme timestamp,
    userid serial,
    fichamedicaid serial,
    FOREIGN KEY(userid) references USUARIOS(id),
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);
    /** Fin **/


    /** Tablas necesarias para Nutricion **/
    /** Inicio **/

CREATE TABLE HABITACION(
    id serial PRIMARY KEY,
    nombre VARCHAR(20),
    estado boolean
);/** Seccion de la clinica **/

CREATE TABLE CAMA(
    id serial PRIMARY KEY,
    habitacionid serial,
    fichamedicaid serial,
    nombre VARCHAR(10),
    estado boolean,
    FOREIGN KEY(habitacionid) references HABITACION(id),
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id)
);/** Espacio disponible para el paciente **/

CREATE TABLE TIPO(
    id serial PRIMARY KEY,
    descripcion VARCHAR(15),
    estado boolean
);/** Nombre de la comida segun el momento del dia **/

CREATE TABLE TIPODIETA(
    id serial PRIMARY KEY,
    descripcion VARCHAR(100),
    precio real
);/** Tipo de comida segun la dieta **/

CREATE TABLE NUTRICION(
    id serial PRIMARY KEY,
    fichamedicaid serial,
    tipoid serial,
    tipodietaid serial,
    administrado boolean default false,
    familiar boolean default false,
    fecha date,
    observacion text,
    FOREIGN KEY(fichamedicaid) references FICHA_MEDICA(id),
    FOREIGN KEY(tipoid) references TIPO(id),
    FOREIGN KEY(tipodietaid) references TIPODIETA(id)
);/** Inicio **/

    /** Fin **/

/** Fin **/