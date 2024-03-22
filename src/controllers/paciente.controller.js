const { Pool } = require('pg');
const { response } = require('express');
require('dotenv').config({ path: '../.env' });

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
        console.log(error)
        res.status(500).send();
    }
}
const getTipoIdentidad = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM TIPOIDENTIFICACION WHERE estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createTipoIdentidadAdmin = async (req, res) => {
    try {
        const { tipo, regla } = req.body;
        const estado = true;
        const response = await pool.query("INSERT INTO TIPOIDENTIFICACION(tipo, regla,estado) VALUES ($1,$2,$3)", [tipo, regla, estado]);
        res.json({ status: 200, data: "El tipo de identificación ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteTipoIdentidadAdmin = async (req, res) => {
    try {
        const estado = false;
        const id = req.params.id;
        const response = await pool.query('UPDATE TIPOIDENTIFICACION SET estado=$2 WHERE TIPOIDENTIFICACION.id = $1', [id, estado]);
        res.json({ status: 200, data: "El tipo de identificación ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//ESTADO CIVIL
const getEstadoCivilAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ESTADOCIVIL');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const getEstadoCivil = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM ESTADOCIVIL WHERE estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createEstadoCivilAdmin = async (req, res) => {
    try {
        const estado = true;
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO ESTADOCIVIL(nombre,estado) VALUES ($1,$2)", [nombre, estado]);
        res.json({ status: 200, data: "El estado civil ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteEstadoCivilAdmin = async (req, res) => {
    try {
        const estado = false;
        const id = req.params.id;
        const response = await pool.query('UPDATE ESTADOCIVIL SET estado=$2 WHERE ESTADOCIVIL.id = $1', [id, estado]);
        res.json({ status: 200, data: "El estado civil ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//ETNIA
const getEtniaAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ETNIA');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const getEtnia = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM ETNIA WHERE ETNIA.estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createEtniaAdmin = async (req, res) => {
    try {
        const estado = true;
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO ETNIA(nombre,estado) VALUES ($1,$2)", [nombre, estado]);
        res.json({ status: 200, data: "La etnia ha sido registrada" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteEtniaAdmin = async (req, res) => {
    try {
        const estado = false;
        const id = req.params.id;
        const response = await pool.query('UPDATE ETNIA SET estado=$2 WHERE ETNIA.id = $1', [id, estado]);
        res.json({ status: 200, data: "La etnia ha sido eliminada" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//INSTRUCCION
const getIntruccionAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM INSTRUCCION');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const getIntruccion = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM INSTRUCCION WHERE INSTRUCCION.estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createInstruccionAdmin = async (req, res) => {
    try {
        const estado = true;
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO INSTRUCCION(nombre,estado) VALUES ($1,$2)", [nombre, estado]);
        res.json({ status: 200, data: "El nivel academico ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteInstruccionAdmin = async (req, res) => {
    try {
        const estado = false;
        const id = req.params.id;
        const response = await pool.query('UPDATE INSTRUCCION SET estado=$2 WHERE INSTRUCCION.id = $1', [id, estado]);
        res.json({ status: 200, data: "El nivel academico ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//SEGURO
const getSeguroAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM SEGURO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const getSeguro = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM SEGURO WHERE SEGURO.estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createSeguroAdmin = async (req, res) => {
    try {
        const estado = true;
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO SEGURO(nombre,estado) VALUES ($1,$2)", [nombre, estado]);
        res.json({ status: 200, data: "El seguro ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteSeguroAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE SEGURO SET estado=$2  WHERE SEGURO.id = $1', [id, estado]);
        res.json({ status: 200, data: "El seguro ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//ACUERDO
const getAcuerdoAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ACUERDO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const getAcuerdo = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM ACUERDO WHERE ACUERDO.estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createAcuerdoAdmin = async (req, res) => {
    try {
        const estado = true;
        const { acuerdo, seguroid } = req.body;
        const response = await pool.query("INSERT INTO ACUERDO(acuerdo,seguroid,estado) VALUES ($1,$2,$3)", [acuerdo, seguroid, estado]);
        res.json({ status: 200, data: "El acuerdo ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteAcuerdoAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE CARGO SET estado=$2 WHERE CARGO.id = $1', [id, estado]);
        res.json({ status: 200, data: "El acuerdo ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//ZONA
const getZonaAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ZONA');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const getZona = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM ZONA WHERE ZONA.estado=$1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createZonaAdmin = async (req, res) => {
    try {
        const estado = true;
        const { zona } = req.body;
        const response = await pool.query("INSERT INTO ZONA(zona,estado) VALUES ($1,$2)", [zona, estado]);
        res.json({ status: 200, data: "La zona ha sido registrada" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteZonaAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE ZONA SET estado=$2 WHERE ZONA.id = $1', [id, estado]);
        res.json({ status: 200, data: "La zona ha sido eliminada" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//TIPO AFILIADO
const getTipoAfiliadoAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM TIPOAFILIADO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const getTipoAfiliado = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM TIPOAFILIADO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createTipoAfiliadoAdmin = async (req, res) => {
    try {
        const estado = true;
        const { tipo, seguroid } = req.body;
        const response = await pool.query("INSERT INTO (tipo,seguroid,estado) VALUES ($1,$2,$3)", [tipo, seguroid, estado]);
        res.json({ status: 200, data: "El tipo de afiliado ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteTipoAfiliadoAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE CARGO SET estado=$2 WHERE CARGO.id = $1', [id, estado]);
        res.json({ status: 200, data: "El tipo de afiliado ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//PACIENTE
const getPacienteAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM PACIENTE');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const getPacienteByNombre = async (req, res) => {
    try {
        const nombrecedula = req.body.valor;
        const response = {};
        if (parseInt(nombrecedula) > 0) {
            response = await pool.query('SELECT * FROM PACIENTE WHERE PACIENTE.cedula=$1', [nombrecedula]);
        } else {
            const arreglo = nombrecedula.trim().split(" ");
            const numla = arreglo.length;
            switch (numla) {
                case (1):
                    if (nombrecedula != "") {
                        response = await pool.query(`SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE$1 OR 
                                                                                  PACIENTE.nombre2LIKE$1 OR 
                                                                                  PACIENTE.apellidoLIKE$1 OR 
                                                                                  PACIENTE.apellidoLIKE$1`, [arreglo[0]]);
                    } else {
                        res.json({ status: 200, data: "No se pudo buscar el campo esta vacio" });
                        return;
                    }
                    break;
                case (2):
                    if (nombrecedula != "") {
                        response = await pool.query(`SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE$1 OR 
                                                                                  PACIENTE.nombre2LIKE$1 OR 
                                                                                  PACIENTE.apellidoLIKE$1 OR 
                                                                                  PACIENTE.apellidoLIKE$1 UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE$2 OR 
                                                                                  PACIENTE.nombre2LIKE$2 OR 
                                                                                  PACIENTE.apellidoLIKE$2 OR 
                                                                                  PACIENTE.apellidoLIKE$2
                                                                                  `, [arreglo[0], arreglo[1]]);
                    }
                    break;
                case (3):
                    if (nombrecedula != "") {
                        response = await pool.query(`SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE$1 OR 
                                                                                  PACIENTE.nombre2LIKE$1 OR 
                                                                                  PACIENTE.apellidoLIKE$1 OR 
                                                                                  PACIENTE.apellidoLIKE$1 UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE$2 OR 
                                                                                  PACIENTE.nombre2LIKE$2 OR 
                                                                                  PACIENTE.apellidoLIKE$2 OR 
                                                                                  PACIENTE.apellidoLIKE$2 UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE$3 OR 
                                                                                  PACIENTE.nombre2LIKE$3 OR 
                                                                                  PACIENTE.apellidoLIKE$3 OR 
                                                                                  PACIENTE.apellidoLIKE$3
                                                                                  `, [arreglo[0], arreglo[1], arreglo[2]]);
                    }
                    break;
                case (4):
                    if (nombrecedula != "") {
                        response = await pool.query(`SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE$1 OR 
                                                                                  PACIENTE.nombre2LIKE$1 OR 
                                                                                  PACIENTE.apellidoLIKE$1 OR 
                                                                                  PACIENTE.apellidoLIKE$1 UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE$2 OR 
                                                                                  PACIENTE.nombre2LIKE$2 OR 
                                                                                  PACIENTE.apellidoLIKE$2 OR 
                                                                                  PACIENTE.apellidoLIKE$2 UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE$3 OR 
                                                                                  PACIENTE.nombre2LIKE$3 OR 
                                                                                  PACIENTE.apellidoLIKE$3 OR 
                                                                                  PACIENTE.apellidoLIKE$3 UNION
                                                     SELECT * FROM PACIENTE WHERE PACIENTE.nombreLIKE$4 OR 
                                                                                  PACIENTE.nombre2LIKE$4 OR 
                                                                                  PACIENTE.apellidoLIKE$4 OR 
                                                                                  PACIENTE.apellidoLIKE$                             
                                                                                  `, [arreglo[0], arreglo[1], arreglo[2], arreglo[3]]);
                    }
                    break;
            }

        }
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const getPacienteByDate = async (req, res) => {
    try {
        const { fechaIni, fechaFin } = req.body;
        const response = await pool.query(`SELECT PACIENTE.*,FICHA_MEDICA.id,FICHA_MEDICA.fechaentrada,FICHA_MEDICA.fechasalida 
                                           FROM PACIENTE,FICHA_MEDICA 
                                           WHERE PACIENTE.id=FICHA_MEDICA.pacienteid 
                                                AND FICHA_MEDICA.fechaentrada>=$1 
                                                AND FICHA_MEDICA.fechaentrada<=$2
                                          `, [fechaIni, fechaFin]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const getPacienteByStatus = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM PACIENTE,FICHA_MEDICA WHERE PACIENTE.id=FICHA_MEDICA.pacienteid AND PACIENTE.estado = $1', [estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createPaciente = async (req, res) => {
    try {
        const { tipoidentificacionid, identificacion, nombre, nombre2, apellido, apellido2, edad, generoid,
            fechaNacimiento, lugarNacimiento, estadocivilid, etniaid, instruccionid, zonaid, discapacitado,
            carnetdiscapacitado, telefono, direccion, lugartrabajo, ocupacion, correo, acompañante, telefonoacompa,
            direccionacompa, seguroid, acuerdoid, tipoafiliadoid, fechafallecimiento, creadoporid, editadoporid } = req.body;



        const response = await pool.query(`INSERT INTO (tipoidentificacionid, identificacion, nombre, nombre2, apellido, apellido2, edad, generoid,
                                                        fechaNacimiento, lugarNacimiento, estadocivilid, etniaid, instruccionid, zonaid, discapacitado,
                                                        carnetdiscapacitado, telefono, direccion, lugartrabajo, ocupacion, correo, acompañante, telefonoacompa,
                                                        direccionacompa, seguroid, acuerdoid, tipoafiliadoid, fechafallecimiento, creadoporid, editadoporid) 
                                                VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30)
                                          `, [tipoidentificacionid, identificacion, nombre, nombre2, apellido, apellido2, edad, generoid,
                                              fechaNacimiento, lugarNacimiento, estadocivilid, etniaid, instruccionid, zonaid, discapacitado,
                                              carnetdiscapacitado, telefono, direccion, lugartrabajo, ocupacion, correo, acompañante, telefonoacompa,
                                              direccionacompa, seguroid, acuerdoid, tipoafiliadoid, fechafallecimiento, creadoporid, editadoporid]);

        res.json({ status: 200, data: "El paciente ha sido registrado y una nueva ficha medica ha sido registrada" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const updatePaciente = async (req, res) => {

}
const deletePaciente = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE CARGO SET estado=$2 WHERE CARGO.id = $1', [id, estado]);
        res.json({ status: 200, data: "El cargo ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}

module.exports = {
    getTipoIdentidad,
    createTipoIdentidad,
    deleteTipoIdentidad,
    getEstadoCivil,
    createEstadoCivil,
    deleteEstadoCivil,
    getEtnia,
    createEtnia,
    deleteEtnia,
    getIntruccion,
    createInstruccion,
    deleteInstruccion,
    getSeguro,
    createSeguro,
    deleteSeguro,
    getAcuerdo,
    createAcuerdo,
    deleteAcuerdo,
    getZona,
    createZona,
    deleteZona,
    getTipoAfiliado,
    createTipoAfiliado,
    deleteTipoAfiliado,
    getPaciente,
    createPaciente,
    updatePaciente,
    deletePaciente,
}