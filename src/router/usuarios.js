const { Router }=require('express');
const router=Router();

//DATOSESTABLECIMIENTO
const { getEstablecimientoAdmin ,getEstablecimiento, createEstablecimientoAdmin, deleteEstablecimientoAdmin, getCargoAdmin, getRolAdmin } =require('../controllers/usuarios.controller');
//CARGO
const { getCargoAdmin , getCargo , createCargoAdmin, deleteCargoAdmin } =require('../controllers/usuarios.controller');
//SERVICIO
const { getServicioAdmin, getServicio, createServicioAdmin, deleteServicioAdmin } =require('../controllers/usuarios.controller');
//GENEROS
const { getGeneroAdmin,getGenero, createGeneroAdmin, deleteGeneroAdmin } =require('../controllers/usuarios.controller');
//ROLES USUARIO
const { getCargoAdmin,getRol, createRolAdmin, deleteRolAdmin } =require('../controllers/usuarios.controller');
//USUARIOS
const { getUsuario, createUsuarioAdmin, updateUsuario, deleteUsuarioAdmin , postLogin } =require('../controllers/usuarios.controller');

//Rutas
//DATOSESTABLECIMIENTO
router.get('/admin/establecimiento',getEstablecimientoAdmin)
router.get('/establecimiento',getEstablecimiento);
router.post('/establecimiento/nuevo',createEstablecimientoAdmin);
router.delete('/establecimiento/:id',deleteEstablecimientoAdmin);
//CARGO
router.get('/admin/cargo',getCargoAdmin);
router.get('/cargo',getCargo);
router.post('/cargo/nuevo',createCargoAdmin);
router.delete('/cargo/:id',deleteCargoAdmin);
//SERVICIO
router.get('/admin/servicio',getServicioAdmin);
router.get('/servicio',getServicio);
router.post('/servicio/nuevo',createServicioAdmin);
router.delete('/servicio/:id',deleteServicioAdmin);
//GENEROS
router.get('/admin/genero',getGeneroAdmin);
router.get('/genero',getGenero );
router.post('/genero/nuevo',createGeneroAdmin );
router.delete('/genero/:id',deleteGeneroAdmin);
//ROLES USUARIO
router.get('/admin/rol',getRolAdmin);
router.get('/rol',getRol);
router.post('/rol/nuevo',createRolAdmin);
router.delete('/rol/:id',deleteRolAdmin);
//USUARIOS
router.get('/usuario',getUsuario);
router.post('/usuario/nuevo',createUsuarioAdmin);
router.put('/usuario/update/:id',updateUsuario);
router.delete('/usuario/:id',deleteUsuarioAdmin);
router.post('/users/login',postLogin);

module.exports=router;