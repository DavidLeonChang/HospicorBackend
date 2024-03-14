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