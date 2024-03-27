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

//CATEGORIA_INVETARIO
const getCategoriaInventarioAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM CATEGORIA_INVETARIO');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const getCategoriaInventario = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM CATEGORIA_INVETARIO where CATEGORIA_INVETARIO.estado=$1',[estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createCategoriaInventarioAdmin = async (req, res) => {
    try {
        const { nombre, abreviatura } = req.body;
        const response = await pool.query("INSERT INTO CATEGORIA_INVETARIO(nombre, abreviatura) VALUES ($1,$2)", [nombre, abreviatura]);
        res.json({ status: 200, data: config.mensajes });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes });
    }
}
const deleteCategoriaInventarioAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE CATEGORIA_INVETARIO SET estado=$2 WHERE CATEGORIA_INVETARIO.id = $1', [id,estado]);
        res.json({ status: 200, data: config.mensajes });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes });
    }
}
//PROVEEDORES
const getProveedorAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM PROVEEDORES');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const getProveedorbyid = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query(`SELECT PROVEEDORES.* 
                                             FROM PROVEEDORES,ITEM_INVENTARIO 
                                            WHERE PROVEEDORES.eliminado=$1 
                                              AND PROVEEDORES.id=ITEM_INVENTARIO.provedorid 
                                              AND ITEM_INVENTARIO.id=$2`,[estado,id]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createProveedor = async (req, res) => {
    try {
        const { nombre,nofactura,fecha,cantidad,coste,fechacaducidad,lote,registrosanitario,estado } = req.body;
        const response = await pool.query("INSERT INTO PROVEEDORES(nombre,nofactura,fecha,cantidad,coste,fechacaducidad,lote,registrosanitario,estado) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)", [nombre,nofactura,fecha,cantidad,coste,fechacaducidad,lote,registrosanitario,estado]);
        res.json({ status: 200, data: config.mensajes.proveedor.createS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.proveedor.createF });
    }
}
const deleteProveedorAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const eliminado = true;
        const response = await pool.query('UPDATE  SET eliminado=$2 WHERE .id = $1', [id,eliminado]);
        res.json({ status: 200, data: config.mensajes.proveedor.deleteS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.proveedor.deleteF });
    }
}
//DESPACHO
const getDespachoAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM DESPACHO ORDER BY DESPACHO.id desc limit 100');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const getDespachobyid = async (req, res) => {
    try {
        const idtext = req.body.texto;
        const response = await pool.query('SELECT * FROM DESPACHO where cast(DESPACHO.id as text) like $1 limit 1000;',[idtext]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createDespacho = async (req, res) => {
    try {
        const { fichamedicaid, numItem } = req.body;
        const response = await pool.query("INSERT INTO DESPACHO(fichamedicaid, numItem) VALUES ($1,$2)", [fichamedicaid, numItem]);
        res.json({ status: 200, data: config.mensajes.despacho.createS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.despacho.createF });
    }
}
const deleteDespacho = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = true;
        const response = await pool.query('UPDATE DESPACHO SET anulado=$2 WHERE DESPACHO.id = $1', [id,estado]);
        res.json({ status: 200, data: config.mensajes.despacho.deleteS });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.despacho.deleteF });
    }
}
//DESPACHOITEM
const getItemDespachobyid = async (req, res) => {
    try {
        const id = req.params.id
        const response = await pool.query('SELECT * FROM ITEM_DESPACHO WHERE id=$1',[id]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const getItemDespacho = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM  where .estado=$1',[estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createItemDespachoAdmin = async (req, res) => {
    try {
        const { nombre, abreviatura } = req.body;
        const response = await pool.query("INSERT INTO (nombre, abreviatura) VALUES ($1,$2)", [nombre, abreviatura]);
        res.json({ status: 200, data: config.mensajes });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes });
    }
}
const deleteItemDespachoAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE  SET estado=$2 WHERE .id = $1', [id,estado]);
        res.json({ status: 200, data: config.mensajes });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes });
    }
}
//ITEM_INVENTARIO
const getItemInventarioAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const getItemInventario = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM  where .estado=$1',[estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createItemInventarioAdmin = async (req, res) => {
    try {
        const { nombre, abreviatura } = req.body;
        const response = await pool.query("INSERT INTO (nombre, abreviatura) VALUES ($1,$2)", [nombre, abreviatura]);
        res.json({ status: 200, data: config.mensajes });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes });
    }
}
const deleteItemInventarioAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE  SET estado=$2 WHERE .id = $1', [id,estado]);
        res.json({ status: 200, data: config.mensajes });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes });
    }
}
//BODEGA
const getBodegaAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const getBodega = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM  where .estado=$1',[estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createBodegaAdmin = async (req, res) => {
    try {//super bodega FARMACIA
        const { nombre, abreviatura } = req.body;
        const response = await pool.query("INSERT INTO (nombre, abreviatura) VALUES ($1,$2)", [nombre, abreviatura]);
        res.json({ status: 200, data: config.mensajes });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes });
    }
}
const deleteBodegaAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE  SET estado=$2 WHERE .id = $1', [id,estado]);
        res.json({ status: 200, data: config.mensajes });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes });
    }
}
//ITEM_BODEGA
const getItemBodegaAdmin = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM ');
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const gettemBodega = async (req, res) => {
    try {
        const estado = true;
        const response = await pool.query('SELECT * FROM  where .estado=$1',[estado]);
        res.status(200).json(response.rows);
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes.getF });
    }
}
const createtemBodegaAdmin = async (req, res) => {
    try {
        const { nombre, abreviatura } = req.body;
        const response = await pool.query("INSERT INTO (nombre, abreviatura) VALUES ($1,$2)", [nombre, abreviatura]);
        res.json({ status: 200, data: config.mensajes });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes });
    }
}
const deletetemBodegaAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const estado = false;
        const response = await pool.query('UPDATE  SET estado=$2 WHERE .id = $1', [id,estado]);
        res.json({ status: 200, data: config.mensajes });
    } catch {
        console.log(error)
        res.json({ status: 500, data: config.mensajes });
    }
}
/*
//ESTADOINVENTARIO
    nombre,estado
//TRANSFERENCIA
    fecharegistro,usuariocrea,usuariorecibe,inbodegaid,outbodegaid,estado,observacion
//ITEM_TRANSFERENCIA
    transferenciaid,itemid,estado     
//AREA
    nombre,estado
//CONSUMO_INTERNO
    fechasol,usersol,usernombre,bodegaid,estado,fechades,userdes
//ITEM_CONSUMO_INTERNO
    consumoid,itemid,cantidad
//REGULACION
    */
module.exports = {
    getCategoriaInventarioAdmin,
    getCategoriaInventario,
    createCategoriaInventarioAdmin,
    deleteCategoriaInventarioAdmin,
    getProveedorAdmin,
    getProveedorbyid,
    createProveedor,
    deleteProveedorAdmin,
    getDespachoAdmin,
    getDespachobyid,
    createDespacho,
    deleteDespacho,
    getItemDespachoAdmin,
    getItemDespacho,
    createItemDespachoAdmin,
    deleteItemDespachoAdmin,
    getItemInventarioAdmin,
    getItemInventario,
    createItemInventarioAdmin,
    deleteItemInventarioAdmin,
    getBodegaAdmin,
    getBodega,
    createBodegaAdmin,
    deleteBodegaAdmin,
    getItemBodegaAdmin,
    gettemBodega,
    createtemBodegaAdmin,
    deletetemBodegaAdmin
}