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
const getTipoIdentidad = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM TIPOIDENTIFICACION');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createTipoIdentidad = async (req, res) => {
    try {
        const { tipo, regla } = req.body;
        const response = await pool.query("INSERT INTO TIPOIDENTIFICACION(tipo, regla) VALUES ($1,$2)", [tipo, regla]);
        res.json({ status: 200, data: "El tipo de identificación ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteTipoIdentidad = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM TIPOIDENTIFICACION WHERE TIPOIDENTIFICACION.id = $1', [id]);
        res.json({ status: 200, data: "El tipo de identificación ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//ESTADO CIVIL
const getEstadoCivil = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ESTADOCIVIL');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createEstadoCivil = async (req, res) => {
    try {
        const { estado } = req.body;
        const response = await pool.query("INSERT INTO ESTADOCIVIL(estado) VALUES ($1)", [estado]);
        res.json({ status: 200, data: "El estado civil ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteEstadoCivil = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM ESTADOCIVIL WHERE ESTADOCIVIL.id = $1', [id]);
        res.json({ status: 200, data: "El estado civil ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//ETNIA
const getEtnia = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ETNIA');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createEtnia = async (req, res) => {
    try {
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO ETNIA(nombre) VALUES ($1)", [nombre]);
        res.json({ status: 200, data: "La etnia ha sido registrada" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteEtnia = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM ETNIA WHERE ETNIA.id = $1', [id]);
        res.json({ status: 200, data: "La etnia ha sido eliminada" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//INSTRUCCION
const getIntruccion = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM INSTRUCCION');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createInstruccion = async (req, res) => {
    try {
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO INSTRUCCION(nombre) VALUES ($1)", [nombre]);
        res.json({ status: 200, data: "El nivel academico ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteInstruccion = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM INSTRUCCION WHERE INSTRUCCION.id = $1', [id]);
        res.json({ status: 200, data: "El nivel academico ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//SEGURO
const getSeguro = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM SEGURO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createSeguro = async (req, res) => {
    try {
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO SEGURO(nombre) VALUES ($1)", [nombre]);
        res.json({ status: 200, data: "El seguro ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteSeguro = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE SEGURO SET estado=$2  WHERE SEGURO.id = $1', [id,estado]);
        res.json({ status: 200, data: "El seguro ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//ACUERDO
const getAcuerdo = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ACUERDO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createAcuerdo = async (req, res) => {
    try {
        const { acuerdo, seguroid } = req.body;
        const response = await pool.query("INSERT INTO ACUERDO(acuerdo,seguroid) VALUES ($1,$2)", [acuerdo, seguroid]);
        res.json({ status: 200, data: "El acuerdo ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteAcuerdo = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM CARGO WHERE CARGO.id = $1', [id]);
        res.json({ status: 200, data: "El cargo ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//ZONA
const getZona = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ZONA');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createZona = async (req, res) => {
    try {
        const { zona } = req.body;
        const response = await pool.query("INSERT INTO ZONA(zona) VALUES ($1)", [zona]);
        res.json({ status: 200, data: "El  ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteZona = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM CARGO WHERE CARGO.id = $1', [id]);
        res.json({ status: 200, data: "El cargo ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//TIPO AFILIADO
const getTipoAfiliado = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM TIPOAFILIADO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createTipoAfiliado = async (req, res) => {
    try {
        const { tipo,seguroid } = req.body;
        const response = await pool.query("INSERT INTO (tipo,seguroid) VALUES ($1,$2)", [tipo,seguroid]);
        res.json({ status: 200, data: "El  ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteTipoAfiliado = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM CARGO WHERE CARGO.id = $1', [id]);
        res.json({ status: 200, data: "El cargo ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//PACIENTE
const getPaciente = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM PACIENTE');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createPaciente = async (req, res) => {
    try {
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO (nombre) VALUES ($1)", [nombre]);
        res.json({ status: 200, data: "El  ha sido registrado" });
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
        const response = await pool.query('DELETE FROM CARGO WHERE CARGO.id = $1', [id]);
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