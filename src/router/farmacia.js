const { Router } = require('express');
const router = Router();

//CATEGORIA_INVETARIO
const { getCategoriaInventarioAdmin, getCategoriaInventario, createCategoriaInventarioAdmin, deleteCategoriaInventarioAdmin } = require('../controllers/farmacia.controller');
//PROVEEDORES
const { getProveedorAdmin, getProveedor, createProveedorAdmin, deleteProveedorAdmin } = require('../controllers/farmacia.controller');
//DESPACHO
const { getDespachoAdmin, getDespachobyid, createDespacho, deleteDespacho } = require('../controllers/farmacia.controller');
//DESPACHOITEM
const { getItemDespachoAdmin, getItemDespacho, createItemDespachoAdmin, deleteItemDespachoAdmin } = require('../controllers/farmacia.controller');
//ITEM_INVENTARIO
const { getItemInventarioAdmin, getItemInventario, createItemInventarioAdmin, deleteItemInventarioAdmin } = require('../controllers/farmacia.controller');
//BODEGA
const { getBodegaAdmin, getBodega, createBodegaAdmin, deleteBodegaAdmin } = require('../controllers/farmacia.controller');
//ITEM_BODEGA
const { getItemBodegaAdmin, gettemBodega, createtemBodegaAdmin, deletetemBodegaAdmin } = require('../controllers/farmacia.controller');

//RUTAS
//CATEGORIA_INVETARIO
router.get('/admin/', getCategoriaInventarioAdmin);
router.get('/', getCategoriaInventario);
router.post('/admin//nuevo', createCategoriaInventarioAdmin);
router.put('/admin//:id', deleteCategoriaInventarioAdmin);
//PROVEEDORES
router.get('/admin/', getProveedorAdmin);
router.get('/', getProveedor);
router.post('/admin//nuevo', createProveedorAdmin);
router.put('/admin//:id', deleteProveedorAdmin);
//DESPACHO
router.get('/admin/', getDespachoAdmin);
router.get('/', getDespachobyid);
router.post('/admin//nuevo', createDespacho);
router.put('/admin//:id', deleteDespacho);
//DESPACHOITEM
router.get('/admin/', getItemDespachoAdmin);
router.get('/', getItemDespacho);
router.post('/admin//nuevo', createItemDespachoAdmin);
router.put('/admin//:id', deleteItemDespachoAdmin);
//ITEM_INVENTARIO
router.get('/admin/', getItemInventarioAdmin);
router.get('/', getItemInventario);
router.post('/admin//nuevo', createItemInventarioAdmin);
router.put('/admin//:id', deleteItemInventarioAdmin);
//BODEGA
router.get('/admin/', getBodegaAdmin);
router.get('/', getBodega);
router.post('/admin//nuevo', createBodegaAdmin);
router.put('/admin//:id', deleteBodegaAdmin);
//ITEM_BODEGA
router.get('/admin/', getItemBodegaAdmin);
router.get('/', gettemBodega);
router.post('/admin//nuevo', createtemBodegaAdmin);
router.put('/admin//:id', deletetemBodegaAdmin);


module.exports = router;