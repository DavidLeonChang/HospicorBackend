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


const getUserByID = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM USUARIOS WHERE USUARIOS.id = $1', [id]);
        res.status(200).json(response.rows);
    } catch(error) {
        console.log(error)
        res.status(500).send();
    }
}

module.exports = {
    getUserByID
}