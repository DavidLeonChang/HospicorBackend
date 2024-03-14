INSERT INTO CARGO(nombre) VALUES
    ('ADMINISTRADOR'),
    ('LICENCIADO(A) DE ENFERMERÍA'),
    ('AUXILIAR DE ENFERMERÍA'),
    ('JEFE DE MÉDICOS'),
    ('MEDICO RESIDENTE'),
    ('NUTRICIONISTA'),
    ('RECEPCIÓN'),
    ('PSICÓLOGO(A) CLÍNICO(A)'),
    ('JEFE DE FARMACIA'),
    ('AUXILIAR DE FARMACIA'),
    ('AUDITOR INTERNO');

INSERT INTO SERVICIO(nombre) VALUES
    ('ADMINSTRACION'),
    ('ADMISION HOSPITALARIA'),
    ('ALERGIAS E INMUNOLOGÍA (HO)'),
    ('ALERGOLOGÍA'),
    ('AMBULANCIA'),
    ('ANESTESIOLOGÍA'),
    ('ANATOMÍA PATOLÓGICA'),
    ('ANESTESIOLOGÍA Y REANIMACIÓN'),
    ('ANGIOLOGÍA Y CIRUGÍA VASCULAR'),
    ('AUXILIAR ENFERMERÍA'),
    ('CARDIOLOGÍA'),
    ('CARDIÓLOGO PEDIATRA'),
    ('CARDIOTORACICA'),
    ('CIRUGÍA CARDIOVASCULAR'),
    ('CENTRO DE DIÁLISIS'),
    ('CIRUGÍA CLÍNICA DE HERIDAS'),
    ('CIRUGÍA GENERAL'),
    ('CIRUGÍA GENERAL Y DEL APARATO DIGESTIVO'),
    ('CIRUGÍA GENERAL Y LAPAROSCÓPICA'),
    ('CIRUGÍA GENERAL Y ANCOLÓGICA'),
    ('CIRUGÍA MAXILOFACIAL'),
    ('CIRUGÍA MENOR'),
    ('CIRUGÍA PEDIATRICA'),
    ('CIRUGÍA PLÁSTICA'),
    ('CIRUGÍA PULMONAR'),
    ('CIRUGÍA VASCULAR'),
    ('CUIDADOS INTENSIVOS CORONARIOS'),
    ('ENDOSCOPÍA'),
    ('ENFERMERÍA'),
    ('FARMACIA'),
    ('GASTROENTEROLOGÍA'),
    ('GINECOLOGÍA'),
    ('HEMODIÁLISIS'),
    ('HEMODINÁMICA'),
    ('IMAGENOLOGÍA'),
    ('INTERNOS/RESIDENTES/POSTGRADO'),
    ('LABORATORIO'),
    ('MEDICINA GENERAL'),
    ('MEDICINA INTERNA'),
    ('NEFROLOGÍA'),
    ('NEUMOLOGÍA'),
    ('NEUROCIRUGÍA'),
    ('OTORRINOLARINGOLOGÍA'),
    ('TERAPIA ENDOVASCULAR NEUROLÓGICA'),
    ('TRAUMATOLOGÍA/ORTOPEDIA'),
    ('NEUROFISIOLOGÍA'),
    ('NEUROLOGÍA'),
    ('NUTRICIÓN'),
    ('NUTRICIÓN Y DIETÉTICA'),
    ('PSICOLOGÍA CLÍNICA'),
    ('TERAPIA INTENSIVA'),
    ('TERAPIA RESPIRATORIA'),
    ('UROLOGÍA');

INSERT INTO GENEROS(descripcion) VALUES
    ('FEMENINO'),
    ('MASCULINO');    

CREATE TABLE BODEGA(
    id serial PRIMARY KEY,
    nombre VARCHAR(20)
);
CREATE TABLE CATEGORIA_INVETARIO(
    id serial PRIMARY KEY,
    nombre VARCHAR(25),
    abreviatura VARCHAR(3)
);
CREATE TABLE TIPO(
    id serial PRIMARY KEY,
    descripcion VARCHAR(15)
);

CREATE TABLE TIPODIETA(
    id serial PRIMARY KEY,
    descripcion VARCHAR(100)
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
