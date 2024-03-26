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

//HABITACION
const getHabitacion = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM HABITACION');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createHabitacionAdmin = async (req, res) => {
    try {
        const nombre = req.body.nombre;
        const estado = true;
        const response = await pool.query('INSERT INTO HABITACION(nombre,estado) VALUES($1,$2)', [nombre, estado]);
        res.json({ status: 200, data: config.mensajes.habitacion.createS });
    } catch {
        console.log(error);
        res.json({ status: 500, data: config.mensajes.habitacion.createF });
    }
}
const updateHabitacionAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, estado } = req.body;
        const response = await pool.query('UPDATE HABITACION SET nombre=$1,estado=$2 WHERE id=$3', [nombre, estado, id]);
        res.json({ status: 200, data: config.mensajes.habitacion.deleteS });
    } catch {
        console.log(error);
        res.json({ status: 500, data: config.mensajes.habitacion.deleteF });
    }
}
//CAMA
const getCama = async (req, res) => {
    try {
        const response = await pool.query('SELECT CAMA.*,HABITACION.nombre FROM CAMA,HABITACION WHERE CAMA.id=HABITACION.id');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createCamaAdmin = async (req, res) => {
    try {
        const { habitacionid, nombre } = req.body;
        const estado = true;
        const response = await pool.query('INSERT INTO CAMA(habitacionid,nombre,estado) VALUES($1,$2,$3)', [habitacionid, nombre, estado]);
        res.json({ status: 200, data: config.mensajes.cama.createS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.cama.createF });
    }
}
const updateCamaAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const { habitacionid, fichamedicaid, nombre, estado } = req.body;
        const response = await pool.query('UPDATE CAMA SET habitacionid=$1,fichamedicaid=$2,nombre=$3,estado=$4 WHERE id=$5', [habitacionid, fichamedicaid, nombre, estado, id]);
        res.json({ status: 200, data: config.mensajes.cama.updateS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.cama.updateF });
    }
}
const trasladoCama = async (req, res) => {
    try {
        const camaidfinal = req.params.id;
        const { fichamedicaid, camaid } = req.body;
        const response = await pool.query('SELECT estado FROM CAMA WHERE id=$1', [camaidfinal]);
        if (response.rows[0].estado == false) {
            const estado = true;
            const fichanull = null;
            const response2 = await pool.query('UPDATE CAMA SET fichamedicaid=$1,estado=$2 WHERE id=$3', [fichanull, response.rows[0].estado, camaid]);
            const response3 = await pool.query('UPDATE CAMA SET fichamedicaid=$1,estado=$2 WHERE id=$3', [fichamedicaid, estado, camaidfinal]);
            res.json({ status: 200, data: config.mensajes.cama.trasladoS });
        } else {
            res.json({ status: 500, data: config.mensajes.cama.trasladoF });
        }
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.cama.trasladoF2 });
    }
}
//TIPO
const getTipo = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM TIPO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createTipoAdmin = async (req, res) => {
    try {
        const { descripcion, estado } = req.body;
        const response = await pool.query('INSERT INTO TIPO(descripcion,estado) VALUES($1,$2)', [descripcion, estado]);
        res.json({ status: 200, data: config.mensajes.tipo.createS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.tipo.createF });
    }
}
const updateTipoAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const { descripcion, estado } = req.body;
        const response = await pool.query('UPDATE TIPO SET descripcion=$1,estado=$2 WHERE id=$3', [descripcion, estado, id]);
        res.json({ status: 200, data: config.mensajes.tipo.updateS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.tipo.updateF });
    }
}
//TIPODIETA
const getTipoDieta = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM TIPODIETA');
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createTipoDieta = async (req, res) => {
    try {
        const descripcion = req.body.descripcion;
        const response = await pool.query('INSERT INTO TIPODIETA(descripcion) VALUES($1,$2)', [descripcion]);
        res.json({ status: 200, data: config.mensajes.tipodieta.createS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.tipodieta.createF });
    }
}
const updateTipoDieta = async (req, res) => {
    try {
        const id = req.params.id;
        const descripcion = req.body.descripcion;
        const response = await pool.query('UPDATE TIPODIETA SET descripcion=$1 WHERE id=$2', [descripcion, id]);
        res.json({ status: 200, data: config.mensajes.tipodieta.updateS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.tipodieta.updateF });
    }
}
//NUTRICION
const getNutricionbyday = async (req, res) => {
    try {
        const fecha = req.body.fecha;
        const response = await pool.query(`SELECT * FROM FICHA_MEDICA fm
                                            INNER JOIN PACIENTE p ON fm.PACIENTEID = p.id
                                            INNER JOIN CAMA c ON fm.id = c.fichamedicaid
                                            INNER JOIN HABITACION h ON c.habitacionid = h.id
                                            LEFT JOIN NUTRICION n ON fm.id = n.fichamedicaid AND n.fecha = $1
                                            WHERE fm.estado = true;
                                            `, [fecha]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error);
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createNutricion = async (req, res) => {
    try {
        const { fichamedicaid,tipoid,tipodietaid,fecha,observacion } = req.body;
        const response = await pool.query('INSERT INTO NUTRICION(fichamedicaid,tipoid,tipodietaid,fecha,observacion) VALUES($1,$2,$3,$4,$5)', [fichamedicaid,tipoid,tipodietaid,fecha,observacion]);
        res.json({ status: 200, data: config.mensajes.nutricion.createS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.nutricion.createF });
    }
}
const updateNutricion = async (req, res) => {
    try {
        const id = req.params.id;
        const { fichamedicaid,tipoid,tipodietaid,administrado,familiar,fecha,observacion } = req.body;
        const response = await pool.query('UPDATE TIPODIETA SET fichamedicaid=$1,tipoid=$2,tipodietaid=$3,administrado=$4,familiar=$5,fecha=$6,observacion=$7 WHERE id=$8', [fichamedicaid,tipoid,tipodietaid,administrado,familiar,fecha,observacion,id]);
        res.json({ status: 200, data: config.mensajes.nutricion.updateS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.nutricion.updateF });
    }
}

module.exports = {
    getHabitacion,
    createHabitacionAdmin,
    updateHabitacionAdmin,
    getCama,
    createCamaAdmin,
    updateCamaAdmin,
    trasladoCama,
    getTipo,
    createTipoAdmin,
    updateTipoAdmin,
    getTipoDieta,
    createTipoDieta,
    updateTipoDieta,
    getNutricionbyday,
    createNutricion,
    updateNutricion
}