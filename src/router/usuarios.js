const { Router }=require('express');
const router=Router();

//DATOSESTABLECIMIENTO
const { getEstablecimiento, createEstablecimiento, deleteEstablecimiento } =require('../controllers/usuarios.controller');
//CARGO
const { getCargo , createCargo, deleteCargo } =require('../controllers/usuarios.controller');
//SERVICIO
const { getServicio, createServicio, deleteServicio } =require('../controllers/usuarios.controller');
//GENEROS
const { getGenero, createGenero, deleteGenero } =require('../controllers/usuarios.controller');
//ROLES USUARIO
const { getRol, createRol, deleteRol } =require('../controllers/usuarios.controller');
//USUARIOS
const { getUsuario, createUsuario, updateUsuario, deleteUsuario , postLogin } =require('../controllers/usuarios.controller');

//Rutas
//DATOSESTABLECIMIENTO
router.get('/establecimiento',getEstablecimiento);
router.post('/establecimiento/nuevo',createEstablecimiento);
router.delete('/establecimiento/:id',deleteEstablecimiento);
//CARGO
router.get('/cargo',getCargo);
router.post('/cargo/nuevo',createCargo);
router.delete('/cargo/:id',deleteCargo);
//SERVICIO
router.get('/servicio',getServicio);
router.post('/servicio/nuevo',createServicio);
router.delete('/servicio/:id',deleteServicio);
//GENEROS
router.get('/genero',getGenero );
router.post('/genero/nuevo',createGenero );
router.delete('/genero/:id',deleteGenero);
//ROLES USUARIO
router.get('/rol',getRol);
router.post('/rol/nuevo',createRol);
router.delete('/rol/:id',deleteRol);
//USUARIOS
router.get('/usuario',getUsuario);
router.post('/usuario/nuevo',createUsuario);
router.put('/usuario/update/:id',updateUsuario);
router.delete('/usuario/:id',deleteUsuario);
router.post('/users/login',postLogin);

module.exports=router;