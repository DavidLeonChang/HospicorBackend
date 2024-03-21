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

//DATOSESTABLECIMIENTO
const getEstablecimiento = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM DATOSESTABLECIMIENTO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createEstablecimiento = async (req, res) => {
    try {
        const { instituciondelsistema, unicodigo, establecimientodesalud, tipologia } = req.body;
        const response = await pool.query("INSERT INTO DATOSESTABLECIMIENTO(instituciondelsistema, unicodigo, establecimientodesalud, tipologia) VALUES ($1,$2,$3,$4)", [instituciondelsistema, unicodigo, establecimientodesalud, tipologia]);
        res.json({ status: 200, data: "El centro de salud ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteEstablecimiento = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM DATOSESTABLECIMIENTO WHERE DATOSESTABLECIMIENTO.id = $1', [id]);
        res.json({ status: 200, data: "El centro de salud ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//CARGO
const getCargo = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM CARGO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createCargo = async (req, res) => {
    try {
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO CARGO(nombre) VALUES ($1)", [nombre]);
        res.json({ status: 200, data: "El cargo ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteCargo = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM CARGO WHERE CARGO.id = $1', [id]);
        res.json({ status: 200, data: "El cargo ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//SERVICIO
const getServicio = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM SERVICIO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createServicio = async (req, res) => {
    try {
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO SERVICIO(nombre) VALUES ($1)", [nombre]);
        res.json({ status: 200, data: "El servicio ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteServicio = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM SERVICIO WHERE SERVICIO.id = $1', [id]);
        res.json({ status: 200, data: "El servicio ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//GENEROS
const getGenero = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM GENEROS');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createGenero = async (req, res) => {
    try {
        const { descripcion } = req.body;
        const response = await pool.query("INSERT INTO GENEROS(descripcion) VALUES ($1)", [descripcion]);
        res.json({ status: 200, data: "El genero ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteGenero = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM GENEROS WHERE GENEROS.id = $1', [id]);
        res.json({ status: 200, data: "El genero ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//ROLES USUARIO
const getRol = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ROLES_USUARIOS');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const createRol = async (req, res) => {
    try {
        const { nombre, diasedicion, estado } = req.body;
        const response = await pool.query("INSERT INTO ROLES_USUARIOS(nombre, diasedicion, estado) VALUES ($1)", [nombre, diasedicion, estado]);
        res.json({ status: 200, data: "El rol ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const deleteRol = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('DELETE FROM ROLES_USUARIOS WHERE ROLES_USUARIOS.id = $1', [id]);
        res.json({ status: 200, data: "El rol ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
//USUARIOS


const getUsuario = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM USUARIOS');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error)
        res.status(500).send();
    }
}
const createUsuario = async () => {
    try {
        const { nombreusuario, cedula, contrasena, nombre1, nombre2, apellido1, apellido2, tipousuario, generoid, cargoid, servicioid, estado } = req.body;
        const response = await pool.query('INSERT INTO USUARIOS(nombreusuario,cedula,contrasena,nombre1,nombre2,apellido1,apellido2,tipousuario,generoid,cargoid,servicioid,estado) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [nombreusuario, cedula, contrasena, nombre1, nombre2, apellido1, apellido2, tipousuario, generoid, cargoid, servicioid, estado]);
        res.json({ status: 200, data: "El usuario ha sido registrado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}
const updateUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombreusuario, cedula, contrasena, nombre1, nombre2, apellido1, apellido2, tipousuario, generoid, cargoid, servicioid, estado } = req.body;
        const response = await pool.query('UPDATE USUARIOS SET nombreusuario=$1,cedula=$2,contrasena=$3,nombre1=$4,nombre2=$5,apellido1=$6,apellido2=$7,tipousuario=$8,generoid=$9,cargoid=$10,servicioid=$11,estado=$12', [nombreusuario, cedula, contrasena, nombre1, nombre2, apellido1, apellido2, tipousuario, generoid, cargoid, servicioid, estado]);
        res.json({ status: 200, data: "El usuario ha sido actualizado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}

const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE USUARIOS SET estado=$2 WHERE USUARIOS.id = $1', [id, estado]);
        res.json({ status: 200, data: "El usuario ha sido eliminado" });
    } catch {
        console.log(error)
        res.status(500).send();
    }
}

const postLogin = async (req, res) => {
    try {
        var { front_name, front_pass } = req.body;
        var response = await pool.query('SELECT * FROM USUARIOS where USUARIOS.nombreusuario = $1 AND USUARIOS.contrasena=$2', [front_name, front_pass]);
        if (response.rows[0]) {
            response.rows[0].contrasena = '';
            res.status(200).json({ status: 200, data: response.rows[0] });
        } else {
            res.status(500).json({status: 500 , data:"Usuario/Contraseña incorrecta"});
        }        
    }catch{
        console.log(error)
        res.status(500).send();
    }
}

module.exports = {
    getEstablecimiento,
    createEstablecimiento,
    deleteEstablecimiento,
    getCargo,
    createCargo,
    deleteCargo,
    getServicio,
    createServicio,
    deleteServicio,
    getGenero,
    createGenero,
    deleteGenero,
    getRol,
    createRol,
    deleteRol,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    postLogin
}