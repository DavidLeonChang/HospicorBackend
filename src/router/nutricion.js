const { Router }=require('express');
const router=Router();

//HABITACION
//CAMA
//TIPO
//TIPODIETA
//NUTRICION
const { getEtnia, createEtnia, deleteEtnia } =require('../controllers/nutricion.controller');

//HABITACION
//CAMA
//TIPO
//TIPODIETA
//NUTRICION
router.get('',getEtnia);
router.post('',createEtniaAdmin);
router.delete('',deleteEtniaAdmin);