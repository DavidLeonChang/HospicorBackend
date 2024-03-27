const { Router }=require('express');
const router=Router();

//HABITACION
const { getHabitacion, createHabitacionAdmin, updateHabitacionAdmin } =require('../controllers/nutricion.controller');
//CAMA
const { getCama, createCamaAdmin, updateCamaAdmin, trasladoCama } =require('../controllers/nutricion.controller');
//TIPO
const { getTipo, createTipoAdmin, updateTipoAdmin } =require('../controllers/nutricion.controller');
//TIPODIETA
const { getTipoDieta, createTipoDieta, updateTipoDieta } =require('../controllers/nutricion.controller');
//NUTRICION
const { getNutricionbyday, createNutricion, updateNutricion } =require('../controllers/nutricion.controller');

//HABITACION
router.get('/habitacion',getHabitacion);
router.post('/admin/habitacion/nuevo',createHabitacionAdmin);
router.put('/admin/habitacion/:id',updateHabitacionAdmin);
//CAMA
router.get('/cama',getCama);
router.post('/admin/cama/nuevo',createCamaAdmin);
router.put('/admin/cama/:id',updateCamaAdmin);
router.put('/traslado/cama/:id',trasladoCama);
//TIPO
router.get('/tipo',getTipo);
router.post('/admin/tipo/nuevo',createTipoAdmin);
router.put('/admin/tipo/:id',updateTipoAdmin);
//TIPODIETA
router.get('/tipodieta',getTipoDieta);
router.post('/admin/tipodieta/nuevo',createTipoDieta);
router.put('/admin/tipodieta/:id',updateTipoDieta);
//NUTRICION
router.get('/nutricion',getNutricionbyday);
router.get('/nutricion/:id',getNutricionbyid);
router.post('/nutricion/nuevo',createNutricion);
router.put('/nutricion/update/:id',updateNutricion);

module.exports = router;