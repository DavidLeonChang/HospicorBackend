const { Router }=require('express');
const router=Router();

//TIPO DE IDENTIFICACION
const { getTipoIdentidad, createTipoIdentidad, deleteTipoIdentidad } =require('../controllers/users.controller');
//ESTADO CIVIL
const {  } =require('../controllers/users.controller');
//ETNIA
const {  } =require('../controllers/users.controller');
//INSTRUCCION
const {  } =require('../controllers/users.controller');
//SEGURO
const {  } =require('../controllers/users.controller');
//ACUERDO
const {  } =require('../controllers/users.controller');
//ZONA
const {  } =require('../controllers/users.controller');
//TIPO AFILIADO
const {  } =require('../controllers/users.controller');
const {  } =require('../controllers/users.controller');

router.get('/users/:id',getUserByID);


module.exports=router;