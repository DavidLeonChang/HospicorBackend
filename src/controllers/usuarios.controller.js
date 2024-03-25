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
const getEstablecimientoAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM DATOSESTABLECIMIENTO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getEstablecimiento = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM DATOSESTABLECIMIENTO where DATOSESTABLECIMIENTO.estado=$1',[estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createEstablecimientoAdmin = async (req, res) => {
    try {
        const { instituciondelsistema, unicodigo, establecimientodesalud, tipologia } = req.body;
        const estado = true;
        const response = await pool.query("INSERT INTO DATOSESTABLECIMIENTO(instituciondelsistema, unicodigo, establecimientodesalud, tipologia,estado) VALUES ($1,$2,$3,$4,$5)", [instituciondelsistema, unicodigo, establecimientodesalud, tipologia,estado]);
        res.json({ status: 200, data: "El centro de salud ha sido registrado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "El centro de salud no pudo ser creado" });
    }
}
const deleteEstablecimientoAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE DATOSESTABLECIMIENTO SET estado=$2 WHERE DATOSESTABLECIMIENTO.id = $1', [id,estado]);
        res.json({ status: 200, data: "El centro de salud ha sido eliminado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al eliminar el centro de salud" });
    }
}
//CARGO
const getCargoAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM CARGO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getCargo = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM CARGO WHERE CARGO.estado=$1',[estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createCargoAdmin = async (req, res) => {
    try {
        const { nombre } = req.body;
        const estado = true;
        const response = await pool.query("INSERT INTO CARGO(nombre,estado) VALUES ($1,$2)", [nombre,estado]);
        res.json({ status: 200, data: "El cargo ha sido registrado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "El cargo no pudo ser creado" });
    }
}
const deleteCargoAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE CARGO SET estado=$2 WHERE CARGO.id = $1', [id,estado]);
        res.json({ status: 200, data: "El cargo ha sido eliminado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al eliminar el cargo" });
    }
}
//SERVICIO
const getServicio = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM SERVICIO WHERE SERVICIO.estado=$1',[estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getServicioAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM SERVICIO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createServicioAdmin = async (req, res) => {
    try {
        const estado = true;
        const { nombre } = req.body;
        const response = await pool.query("INSERT INTO SERVICIO(nombre,estado) VALUES ($1,$2)", [nombre,estado]);
        res.json({ status: 200, data: "El servicio ha sido registrado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "El servicio no pudo ser creado" });
    }
}
const deleteServicioAdmin = async (req, res) => {
    try {
        const estado = false;
        const id = req.params.id;
        const response = await pool.query('UPDATE SERVICIO SET estado=$2 WHERE SERVICIO.id = $1', [id,estado]);
        res.json({ status: 200, data: "El servicio ha sido eliminado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al eliminar servicio" });
    }
}
//GENEROS
const getGeneroAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM GENEROS');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getGenero = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM GENEROS WHERE GENEROS.estado=$1',[estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createGeneroAdmin = async (req, res) => {
    try {
        const estado = true;
        const { descripcion } = req.body;
        const response = await pool.query("INSERT INTO GENEROS(descripcion,estado) VALUES ($1,$2)", [descripcion,estado]);
        res.json({ status: 200, data: "El genero ha sido registrado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "El genero no pudo ser creado" });
    }
}
const deleteGeneroAdmin = async (req, res) => {
    try {
        const estado = false;
        const id = req.params.id;
        const response = await pool.query('UPDATE GENEROS SET estado=$2 WHERE GENEROS.id = $1', [id,estado]);
        res.json({ status: 200, data: "El genero ha sido eliminado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al eliminar el genero" });
    }
}
//ROLES USUARIO
const getRolAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ROLES_USUARIOS');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const getRol = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM ROLES_USUARIOS WHERE ROLES_USUARIOS.estado=$1',[estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createRolAdmin = async (req, res) => {
    try {
        const estado = true;
        const { nombre, diasedicion } = req.body;
        const response = await pool.query("INSERT INTO ROLES_USUARIOS(nombre, diasedicion, estado) VALUES ($1)", [nombre, diasedicion, estado]);
        res.json({ status: 200, data: "El rol ha sido registrado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "El rol no pudo ser creado" });
    }
}
const deleteRolAdmin = async (req, res) => {
    try {
        const estado = false;
        const id = req.params.id;
        const response = await pool.query('UPDATE ROLES_USUARIOS SET estado=$2 WHERE ROLES_USUARIOS.id = $1', [id,estado]);
        res.json({ status: 200, data: "El rol ha sido eliminado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al eliminar rol" });
    }
}
//USUARIOS
const getUsuario = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM USUARIOS');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error)
        res.json({ status: 500, data: "Error al traer data" });
    }
}
const createUsuarioAdmin = async () => {
    try {
        const estado = true;
        const { nombreusuario, cedula, contrasena, nombre1, nombre2, apellido1, apellido2, tipousuario, generoid, cargoid, servicioid } = req.body;
        const response = await pool.query('INSERT INTO USUARIOS(nombreusuario,cedula,contrasena,nombre1,nombre2,apellido1,apellido2,tipousuario,generoid,cargoid,servicioid,estado) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [nombreusuario, cedula, contrasena, nombre1, nombre2, apellido1, apellido2, tipousuario, generoid, cargoid, servicioid, estado]);
        res.json({ status: 200, data: "El usuario ha sido registrado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "El usuario no pudo ser creado" });
    }
}
const updateUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombreusuario, cedula, contrasena, nombre1, nombre2, apellido1, apellido2, tipousuario, generoid, cargoid, servicioid, estado } = req.body;
        const response = await pool.query('UPDATE USUARIOS SET nombreusuario=$1,cedula=$2,contrasena=$3,nombre1=$4,nombre2=$5,apellido1=$6,apellido2=$7,tipousuario=$8,generoid=$9,cargoid=$10,servicioid=$11,estado=$12 WHERE id=$13', [nombreusuario, cedula, contrasena, nombre1, nombre2, apellido1, apellido2, tipousuario, generoid, cargoid, servicioid, estado,id]);
        res.json({ status: 200, data: "El usuario ha sido actualizado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al actualizar el usuario" });
    }
}

const deleteUsuarioAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE USUARIOS SET estado=$2 WHERE USUARIOS.id = $1', [id, estado]);
        res.json({ status: 200, data: "El usuario ha sido eliminado" });
    } catch {
        console.log(error)
        res.json({ status: 500, data: "Error al eliminar usuario" });
    }
}

const postLogin = async (req, res) => {
    try {
        var { front_name, front_pass } = req.body;
        var response = await pool.query('SELECT USUARIOS.*,ROLES_USUARIOS.nombre FROM USUARIOS,ROLES_USUARIOS where USUARIOS.nombreusuario = $1 AND USUARIOS.contrasena=$2 and USUARIOS.tipousuario = ROLES_USUARIOS.id', [front_name, front_pass]);
        if (response.rows[0]) {
            response.rows[0].contrasena = '';
            res.status(200).json({ status: 200, data: response.rows[0] });
        } else {
            res.status(500).json({status: 500 , data:"Usuario/Contraseña incorrecta"});
        }        
    }catch{
        console.log(error)
        res.json({ status: 500, data: "No es posible conectar, compruebe su coneccion a internet" });
    }
}

module.exports = {
    getEstablecimiento,
    getEstablecimientoAdmin,
    createEstablecimientoAdmin,
    deleteEstablecimientoAdmin,
    getCargo,
    getCargoAdmin,
    createCargoAdmin,
    deleteCargoAdmin,
    getServicio,
    getServicioAdmin,
    createServicioAdmin,
    deleteServicioAdmin,
    getGenero,
    getGeneroAdmin,
    createGeneroAdmin,
    deleteGeneroAdmin,
    getRol,
    getRolAdmin,
    createRolAdmin,
    deleteRolAdmin,
    getUsuario,
    createUsuarioAdmin,
    updateUsuario,
    deleteUsuarioAdmin,
    postLogin
}