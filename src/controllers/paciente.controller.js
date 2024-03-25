const { Pool } = require('pg');
const { response } = require('express');
require('dotenv').config({ path: '../.env' });
const { config } = require('../config/configuracion');
import auxiliar from '../config/auxiliar';

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})
//TIPO DE IDENTIFICACION
const getTipoIdentidadAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM TIPOIDENTIFICACION');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getTipoIdentidad = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM TIPOIDENTIFICACION WHERE estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createTipoIdentidadAdmin = async (req, res) => {
    try {
        const { tipo, regla } = req.body;
        const estado = true;
        const response = await pool.query("INSERT INTO TIPOIDENTIFICACION(tipo, regla,estado) VALUES ($1,$2,$3)", [tipo, regla, estado]);
        res.json({ status: 200, data: "El tipo de identificación ha sido registrado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "El tipo de identificacion no pudo ser creado" });
    }
}
const deleteTipoIdentidadAdmin = async (req, res) => {
    try {
        const estado = false;
        const id = req.params.id;
        const response = await pool.query('UPDATE TIPOIDENTIFICACION SET estado=$2 WHERE TIPOIDENTIFICACION.id = $1', [id, estado]);
        res.json({ status: 200, data: "El tipo de identificación ha sido eliminado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al eliminar tipo de identidad" });
    }
}
//ESTADO CIVIL
const getEstadoCivilAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ESTADOCIVIL');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getEstadoCivil = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM ESTADOCIVIL WHERE estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createEstadoCivilAdmin = async (req, res) => {
    try {
        const estado = true;
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO ESTADOCIVIL(nombre,estado) VALUES ($1,$2)", [nombre, estado]);
        res.json({ status: 200, data: "El estado civil ha sido registrado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "El estado civil no pudo ser creado" });
    }
}
const deleteEstadoCivilAdmin = async (req, res) => {
    try {
        const estado = false;
        const id = req.params.id;
        const response = await pool.query('UPDATE ESTADOCIVIL SET estado=$2 WHERE ESTADOCIVIL.id = $1', [id, estado]);
        res.json({ status: 200, data: "El estado civil ha sido eliminado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al eliminar estado civil" });
    }
}
//ETNIA
const getEtniaAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ETNIA');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getEtnia = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM ETNIA WHERE ETNIA.estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createEtniaAdmin = async (req, res) => {
    try {
        const estado = true;
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO ETNIA(nombre,estado) VALUES ($1,$2)", [nombre, estado]);
        res.json({ status: 200, data: "La etnia ha sido registrada" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "La etnia no pudo ser creada" });
    }
}
const deleteEtniaAdmin = async (req, res) => {
    try {
        const estado = false;
        const id = req.params.id;
        const response = await pool.query('UPDATE ETNIA SET estado=$2 WHERE ETNIA.id = $1', [id, estado]);
        res.json({ status: 200, data: "La etnia ha sido eliminada" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al eliminar la etnia" });
    }
}
//INSTRUCCION
const getIntruccionAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM INSTRUCCION');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getIntruccion = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM INSTRUCCION WHERE INSTRUCCION.estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createInstruccionAdmin = async (req, res) => {
    try {
        const estado = true;
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO INSTRUCCION(nombre,estado) VALUES ($1,$2)", [nombre, estado]);
        res.json({ status: 200, data: "El nivel academico ha sido registrado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "El nivel academico no pudo ser creado" });
    }
}
const deleteInstruccionAdmin = async (req, res) => {
    try {
        const estado = false;
        const id = req.params.id;
        const response = await pool.query('UPDATE INSTRUCCION SET estado=$2 WHERE INSTRUCCION.id = $1', [id, estado]);
        res.json({ status: 200, data: "El nivel academico ha sido eliminado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al eliminar el nivel academico" });
    }
}
//SEGURO
const getSeguroAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM SEGURO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getSeguro = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM SEGURO WHERE SEGURO.estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createSeguroAdmin = async (req, res) => {
    try {
        const estado = true;
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO SEGURO(nombre,estado) VALUES ($1,$2)", [nombre, estado]);
        res.json({ status: 200, data: "El seguro ha sido registrado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "El seguro no pudo ser creado" });
    }
}
const deleteSeguroAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE SEGURO SET estado=$2  WHERE SEGURO.id = $1', [id, estado]);
        res.json({ status: 200, data: "El seguro ha sido eliminado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al eliminar el seguro" });
    }
}
//ACUERDO
const getAcuerdoAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ACUERDO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getAcuerdo = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM ACUERDO WHERE ACUERDO.estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createAcuerdoAdmin = async (req, res) => {
    try {
        const estado = true;
        const { acuerdo, seguroid } = req.body;
        const response = await pool.query("INSERT INTO ACUERDO(acuerdo,seguroid,estado) VALUES ($1,$2,$3)", [acuerdo, seguroid, estado]);
        res.json({ status: 200, data: "El acuerdo ha sido registrado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "El acuerdo no pudo ser creado" });
    }
}
const deleteAcuerdoAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE ACUERDO SET estado=$2 WHERE ACUERDO.id = $1', [id, estado]);
        res.json({ status: 200, data: "El acuerdo ha sido eliminado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al eliminar acuerdo" });
    }
}
//ZONA
const getZonaAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ZONA');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getZona = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM ZONA WHERE ZONA.estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createZonaAdmin = async (req, res) => {
    try {
        const estado = true;
        const { zona } = req.body;
        const response = await pool.query("INSERT INTO ZONA(zona,estado) VALUES ($1,$2)", [zona, estado]);
        res.json({ status: 200, data: "La zona ha sido registrada" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "La zona no pudo ser creada" });
    }
}
const deleteZonaAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE ZONA SET estado=$2 WHERE ZONA.id = $1', [id, estado]);
        res.json({ status: 200, data: "La zona ha sido eliminada" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al eliminar la zona" });
    }
}
//TIPO AFILIADO
const getTipoAfiliadoAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM TIPOAFILIADO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getTipoAfiliado = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM TIPOAFILIADO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createTipoAfiliadoAdmin = async (req, res) => {
    try {
        const estado = true;
        const { tipo, seguroid } = req.body;
        const response = await pool.query("INSERT INTO TIPOAFILIADO(tipo,seguroid,estado) VALUES ($1,$2,$3)", [tipo, seguroid, estado]);
        res.json({ status: 200, data: "El tipo de afiliado ha sido registrado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "El tipo de afiliado no pudo ser creado" });
    }
}
const deleteTipoAfiliadoAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE TIPOAFILIADO SET estado=$2 WHERE TIPOAFILIADO.id = $1', [id, estado]);
        res.json({ status: 200, data: "El tipo de afiliado ha sido eliminado" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al eliminar el tipo de afiliado" });
    }
}
//PACIENTE
const getPacienteAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM PACIENTE');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getPacienteByNombre = async (req, res) => {
    try {
        const nombrecedula = req.body.valor;
        const response = {};
        if (parseInt(nombrecedula) > 0) {
            response = await pool.query('SELECT * FROM PACIENTE WHERE PACIENTE.identificacion=$1', [nombrecedula]);
        } else {
            const arreglo = nombrecedula.trim().split(" ");
            const numla = arreglo.length;
            switch (numla) {
                case (1):
                    if (nombrecedula != "") {
                        response = await pool.query(`SELECT * FROM PACIENTE WHERE PACIENTE.nombre LIKE %$1% OR 
                                                                                  PACIENTE.nombre2 LIKE %$1% OR 
                                                                                  PACIENTE.apellido LIKE %$1% OR 
                                                                                  PACIENTE.apellido2 LIKE %$1%`, [arreglo[0]]);
                    } else {
                        res.json({ status: 200, data: "No se pudo buscar el campo esta vacio" });
                        return;
                    }
                    break;
                case (2):
                    if (nombrecedula != "") {
                        response = await pool.query(`SELECT * FROM PACIENTE WHERE PACIENTE.nombre LIKE %$1% OR 
                                                                                  PACIENTE.nombre2 LIKE %$1% OR 
                                                                                  PACIENTE.apellido LIKE %$1% OR 
                                                                                  PACIENTE.apellido2 LIKE %$1% UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombre LIKE %$2% OR 
                                                                                  PACIENTE.nombre2 LIKE %$2% OR 
                                                                                  PACIENTE.apellido LIKE %$2% OR 
                                                                                  PACIENTE.apellido2 LIKE %$2%
                                                                                  `, [arreglo[0], arreglo[1]]);
                    }
                    break;
                case (3):
                    if (nombrecedula != "") {
                        response = await pool.query(`SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE %$1% OR 
                                                                                  PACIENTE.nombre2LIKE %$1% OR 
                                                                                  PACIENTE.apellidoLIKE %$1% OR 
                                                                                  PACIENTE.apellido2LIKE %$1% UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombre LIKE %$2% OR 
                                                                                  PACIENTE.nombre2 LIKE %$2% OR 
                                                                                  PACIENTE.apellido LIKE %$2% OR 
                                                                                  PACIENTE.apellido2 LIKE %$2% UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombre LIKE %$3% OR 
                                                                                  PACIENTE.nombre2 LIKE %$3% OR 
                                                                                  PACIENTE.apellido LIKE %$3% OR 
                                                                                  PACIENTE.apellido2 LIKE %$3%
                                                                                  `, [arreglo[0], arreglo[1], arreglo[2]]);
                    }
                    break;
                case (4):
                    if (nombrecedula != "") {
                        response = await pool.query(`SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE %$1% OR 
                                                                                  PACIENTE.nombre2LIKE %$1% OR 
                                                                                  PACIENTE.apellidoLIKE %$1% OR 
                                                                                  PACIENTE.apellido2LIKE %$1% UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombre LIKE %$2% OR 
                                                                                  PACIENTE.nombre2 LIKE %$2% OR 
                                                                                  PACIENTE.apellido LIKE %$2% OR 
                                                                                  PACIENTE.apellido2 LIKE %$2% UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombre LIKE %$3% OR 
                                                                                  PACIENTE.nombre2 LIKE %$3% OR 
                                                                                  PACIENTE.apellido LIKE %$3% OR 
                                                                                  PACIENTE.apellido2 LIKE %$3% UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombre LIKE %$4% OR 
                                                                                  PACIENTE.nombre2 LIKE %$4% OR 
                                                                                  PACIENTE.apellido LIKE %$4% OR 
                                                                                  PACIENTE.apellido2 LIKE %$4%;                             
                                                                                  `, [arreglo[0], arreglo[1], arreglo[2], arreglo[3]]);
                    }
                    break;
            }

        }
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getPacienteByDate = async (req, res) => {
    try {
        const { fechaIni, fechaFin } = req.body;
        const response = await pool.query(`SELECT PACIENTE.*,FICHA_MEDICA.id,FICHA_MEDICA.fechaentrada,FICHA_MEDICA.fechasalida 
                                           FROM PACIENTE,FICHA_MEDICA 
                                           WHERE PACIENTE.id=FICHA_MEDICA.pacienteid 
                                                AND FICHA_MEDICA.fechaentrada>=$1 
                                                AND FICHA_MEDICA.fechaentrada<=$2;
                                          `, [fechaIni, fechaFin]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getPacienteByStatus = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM PACIENTE,FICHA_MEDICA WHERE PACIENTE.id=FICHA_MEDICA.pacienteid AND FICHA_MEDICA.estado = $1;', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createPaciente = async (req, res) => {
    try {
        const { tipoidentificacionid, identificacion, nombre, nombre2, apellido, apellido2, edad, generoid,
            fechaNacimiento, lugarNacimiento, estadocivilid, etniaid, instruccionid, zonaid, discapacitado,
            carnetdiscapacitado, telefono, direccion, lugartrabajo, ocupacion, correo, acompañante, telefonoacompa,
            direccionacompa, seguroid, acuerdoid, tipoafiliadoid, creadoporid } = req.body;

        const response = await pool.query(`INSERT INTO PACIENTE(tipoidentificacionid, identificacion, nombre, nombre2, apellido, apellido2, edad, generoid,
                                                        fechaNacimiento, lugarNacimiento, estadocivilid, etniaid, instruccionid, zonaid, discapacitado,
                                                        carnetdiscapacitado, telefono, direccion, lugartrabajo, ocupacion, correo, acompañante, telefonoacompa,
                                                        direccionacompa, seguroid, acuerdoid, tipoafiliadoid, creadoporid) 
                                                VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28)
                                           RETURNING id;     
                                          `, [tipoidentificacionid, identificacion, nombre, nombre2, apellido, apellido2, edad, generoid,
            fechaNacimiento, lugarNacimiento, estadocivilid, etniaid, instruccionid, zonaid, discapacitado,
            carnetdiscapacitado, telefono, direccion, lugartrabajo, ocupacion, correo, acompañante, telefonoacompa,
            direccionacompa, seguroid, acuerdoid, tipoafiliadoid, creadoporid]);
        const id = response.rows[0].id;
        const establecimientoid = config.establecimiento;
        const fecha = auxiliar.datein();
        const response2 = await pool.query(`INSERT INTO FICHA_MEDICA(datosestablecimientoid,pacienteid,fechaentrada)
                                            VALUES ($1,$2,$3)`, [establecimientoid, id, fecha]);

        res.json({ status: 200, data: "El paciente ha sido registrado y una nueva ficha medica ha sido registrada" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "El paciente no pudo ser registrado" });
    }
}
const updatePaciente = async (req, res) => {
    try {
        const id = req.params.id;
        const { tipoidentificacionid, identificacion, nombre, nombre2, apellido, apellido2, edad, generoid,
            fechaNacimiento, lugarNacimiento, estadocivilid, etniaid, instruccionid, zonaid, discapacitado,
            carnetdiscapacitado, telefono, direccion, lugartrabajo, ocupacion, correo, acompañante, telefonoacompa,
            direccionacompa, seguroid, acuerdoid, tipoafiliadoid, fechafallecimiento, editadoporid } = req.body;
        const response = await pool.query(` UPDATE PACIENTE SET tipoidentificacionid=$1, identificacion=$2, nombre=$3, nombre2=$4, apellido=$5, apellido2=$6, 
                                            edad=$7, generoid=$8, fechaNacimiento=$9, lugarNacimiento=$10, estadocivilid=$11, etniaid=$12, instruccionid=$13,
                                            zonaid=$14, discapacitado=$15, carnetdiscapacitado=$16, telefono=$17, direccion=$18, lugartrabajo=$19, ocupacion=$20, 
                                            correo=$21, acompañante=$22, telefonoacompa=$23, direccionacompa=$24, seguroid=$25, acuerdoid=$26, tipoafiliadoid=$27, 
                                            fechafallecimiento=$28, editadoporid=$29 WHERE PACIENTE.id=$30);
                                        `, [tipoidentificacionid, identificacion, nombre, nombre2, apellido, apellido2, edad, generoid,
                                            fechaNacimiento, lugarNacimiento, estadocivilid, etniaid, instruccionid, zonaid, discapacitado,
                                            carnetdiscapacitado, telefono, direccion, lugartrabajo, ocupacion, correo, acompañante, telefonoacompa,
                                            direccionacompa, seguroid, acuerdoid, tipoafiliadoid, fechafallecimiento, editadoporid, id]);
        res.json({ status: 200, data: "El paciente ha sido actualizado exitosamente" });
    } catch {
        console.log(error);
        res.json({ status: 500, data: "El paciente no pudo ser actualizado" });
    }
}
const deletePacienteAdmin = async (req, res) => {
    try {
        const fichamedicaid = req.params.id;
        const response = await pool.query('SELECT estado FROM FICHA_MEDICA WHERE FICHA_MEDICA.id = $1', [fichamedicaid]);
        if (response.rows[0].estado == false) {
            const response1 = await pool.query('DELETE FROM FICHA_MEDICA WHERE FICHA_MEDICA.id = $1 RETURNING pacienteid', [fichamedicaid]);
            const pacienteid = response1.rows[0].pacienteid;
            const response2 = await pool.query('DELETE FROM PACIENTE WHERE PACIENTE.id = $1', [pacienteid]);
            res.json({ status: 200, data: "El paciente ha sido eliminado" });
        } else {
            res.json({ status: 200, data: "El paciente no puede ser eliminado no se han cumplido los requisitos necesarios" });
        }
    } catch {
        console.log(error);
        res.json({ status: 500, data: "El paciente no puede ser eliminado existen dependencias por lo tanto hay cobros pendientes" });
    }
}
//FICHA_MEDICA
const createFichaMedica = async (req, res) => {
    try {
        const pacienteid = req.params.id;
        const establecimientoid = config.establecimiento;
        const fechaentrada = auxiliar.datein();
        if (pacienteid != null && establecimientoid != null && fechaentrada != null) {
            const response = await pool.query(`INSERT INTO FICHA_MEDICA(pacienteid,establecimientoid,fechaentrada) VALUES($1,$2,$3)`, [pacienteid, establecimientoid, fechaentrada]);
            res.json({ status: 200, data: "El reingreso se ha generado"});
        }else{
            res.json({ status: 500, data: "La informacion enviada no es valida" });
        }
    } catch {
        console.log(error);
        res.json({ status: 500, data: "La ficha medica no se ha creado" });
    }
}
const updateFichaMedica = async (req, res) => {
    try {
        const fichamedicaid = req.params.id;
        const { datosestablecimientoid, pacienteid, fechaentrada, fechasalida } = req.body;
        const response = await pool.query(`UPDATE FICHA_MEDICA SET datosestablecimientoid=$1, pacienteid=$2, fechaentrada=$3, fechasalida=$4 WHERE FICHA_MEDICA.id=$5`, [datosestablecimientoid, pacienteid, fechaentrada, fechasalida,fichamedicaid]);
            res.json({ status: 200, data: "El reingreso se ha generado"});
    } catch {
        console.log(error);
        res.json({ status: 500, data: "Error al actualizar la ficha medica" });
    }
}
const deleteFichaMedica = async (req, res) => {
    try {
        const fichamedicaid = req.params.id;
        const estado = false;
        const fechasalida = auxiliar.datein();
        const response = await pool.query(`UPDATE FICHA_MEDICA SET estado=$1,fechasalida=$2 WHERE FICHA_MEDICA.id=$3`, [estado,fechasalida,fichamedicaid]);
        //falta cambiar el estado de la cama a false;
        res.json({ status: 200, data: "El paciente se le ha dado de alta"});
    } catch {
        console.log(error);
        res.json({ status: 500, data: "No se ha podido dar de alta al paciente" });
    }
}

module.exports = {
    getTipoIdentidadAdmin,
    getTipoIdentidad,
    createTipoIdentidadAdmin,
    deleteTipoIdentidadAdmin,
    getEstadoCivilAdmin,
    getEstadoCivil,
    createEstadoCivilAdmin,
    deleteEstadoCivilAdmin,
    getEtniaAdmin,
    getEtnia,
    createEtniaAdmin,
    deleteEtniaAdmin,
    getIntruccionAdmin,
    getIntruccion,
    createInstruccionAdmin,
    deleteInstruccionAdmin,
    getSeguroAdmin,
    getSeguro,
    createSeguroAdmin,
    deleteSeguroAdmin,
    getAcuerdoAdmin,
    getAcuerdo,
    createAcuerdoAdmin,
    deleteAcuerdoAdmin,
    getZonaAdmin,
    getZona,
    createZonaAdmin,
    deleteZonaAdmin,
    getTipoAfiliadoAdmin,
    getTipoAfiliado,
    createTipoAfiliadoAdmin,
    deleteTipoAfiliadoAdmin,
    getPacienteAdmin,
    getPacienteByDate,
    getPacienteByNombre,
    getPacienteByStatus,
    createPaciente,
    updatePaciente,
    deletePacienteAdmin,
    createFichaMedica,
    updateFichaMedica,
    deleteFichaMedica
};