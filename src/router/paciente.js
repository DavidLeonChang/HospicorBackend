const { Router } = require('express');
const router = Router();

//TIPO DE IDENTIFICACION
const { getTipoIdentidadAdmin, getTipoIdentidad, createTipoIdentidadAdmin, deleteTipoIdentidadAdmin } = require('../controllers/paciente.controller');
//ESTADO CIVIL
const { getEstadoCivilAdmin , getEstadoCivil, createEstadoCivilAdmin, deleteEstadoCivilAdmin } = require('../controllers/paciente.controller');
//ETNIA
const { getEtniaAdmin , getEtnia, createEtniaAdmin, deleteEtniaAdmin } = require('../controllers/paciente.controller');
//INSTRUCCION
const { getIntruccionAdmin,getIntruccion, createInstruccionAdmin, deleteInstruccionAdmin } = require('../controllers/paciente.controller');
//SEGURO
const { getSeguroAdmin,getSeguro, createSeguroAdmin, deleteSeguroAdmin } = require('../controllers/paciente.controller');
//ACUERDO
const { getAcuerdoAdmin,getAcuerdo, createAcuerdoAdmin, deleteAcuerdoAdmin } = require('../controllers/paciente.controller');
//ZONA
const { getZonaAdmin,getZona, createZonaAdmin, deleteZonaAdmin } = require('../controllers/paciente.controller');
//TIPO AFILIADO
const { getTipoAfiliadoAdmin,getTipoAfiliado, createTipoAfiliadoAdmin, deleteTipoAfiliadoAdmin } = require('../controllers/paciente.controller');
//PACIENTE
const { getPacienteAdmin, getPacienteByDate, getPacienteByNombre, getPacienteByStatus, createPaciente, updatePaciente, deletePacienteAdmin } = require('../controllers/paciente.controller');
//FICHA_MEDICA
const { createFichaMedica, updateFichaMedica, deleteFichaMedica } = require('../controllers/paciente.controller');


//TIPO DE IDENTIFICACION
router.get('/admin/tipoidentidad', getTipoIdentidadAdmin);
router.get('/tipoidentidad', getTipoIdentidad);
router.post('/admin/tipoidentidad/nuevo', createTipoIdentidadAdmin);
router.put('/admin/tipoidentidad/:id', deleteTipoIdentidadAdmin);
//ESTADO CIVIL
router.get('/admin/estadocivil', getEstadoCivilAdmin);
router.get('/estadocivil', getEstadoCivil);
router.post('/admin/estadocivil/nuevo', createEstadoCivilAdmin);
router.put('/admin/estadocivil/:id', deleteEstadoCivilAdmin);
//ETNIA
router.get('/admin/etnia', getEtniaAdmin);
router.get('/etnia', getEtnia);
router.post('/admin/etnia/nuevo', createEtniaAdmin);
router.put('/admin/etnia/:id', deleteEtniaAdmin);
//INSTRUCCION
router.get('/admin/instruccion', getIntruccionAdmin);
router.get('/instruccion', getIntruccion);
router.post('/admin/instruccion/nuevo', createInstruccionAdmin);
router.put('/admin/instruccion/:id', deleteInstruccionAdmin);
//SEGURO
router.get('/admin/seguro', getSeguroAdmin);
router.get('/seguro', getSeguro);
router.post('/admin/seguro/nuevo', createSeguroAdmin);
router.put('/admin/seguro/:id', deleteSeguroAdmin);
//ACUERDO
router.get('/admin/acuerdo', getAcuerdoAdmin);
router.get('/acuerdo', getAcuerdo);
router.post('/admin/acuerdo/nuevo', createAcuerdoAdmin);
router.put('/admin/acuerdo/:id', deleteAcuerdoAdmin);
//ZONA
router.get('/admin/zona', getZonaAdmin);
router.get('/zona', getZona);
router.post('/admin/zona/nuevo', createZonaAdmin);
router.put('/admin/zona/:id', deleteZonaAdmin);
//TIPO AFILIADO
router.get('/admin/tipoafiliado', getTipoAfiliadoAdmin);
router.get('/tipoafiliado', getTipoAfiliado);
router.post('/admin/tipoafiliado/nuevo', createTipoAfiliadoAdmin);
router.put('/admin/tipoafiliado/:id', deleteTipoAfiliadoAdmin);
//PACIENTE
router.get('/admin/paciente', getPacienteAdmin);
router.get('/paciente/date', getPacienteByDate);
router.get('/paciente/nombre', getPacienteByNombre);
router.get('/paciente/status', getPacienteByStatus);
router.post('/paciente/nuevo', createPaciente);
router.put('/paciente/:id', updatePaciente);
router.delete('/admin/paciente/:id', deletePacienteAdmin);
//FICHA_MEDICA
router.post('/fichamedica/nuevo',createFichaMedica);
router.put('/fichamedica/:id',updateFichaMedica);
router.put('/fichamedica/alta/:id',deleteFichaMedica);
module.exports = router;