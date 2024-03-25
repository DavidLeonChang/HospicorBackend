const { Router } = require('express');
const router = Router();

//TIPO DE IDENTIFICACION
const { getTipoIdentidadAdmin, getTipoIdentidad, createTipoIdentidadAdmin, deleteTipoIdentidadAdmin } = require('../controllers/paciente.controller');
//ESTADO CIVIL
const { getEstadoCivil, createEstadoCivilAdmin, deleteEstadoCivilAdmin } = require('../controllers/paciente.controller');
//ETNIA
const { getEtnia, createEtniaAdmin, deleteEtniaAdmin } = require('../controllers/paciente.controller');
//INSTRUCCION
const { getIntruccion, createInstruccionAdmin, deleteInstruccionAdmin } = require('../controllers/paciente.controller');
//SEGURO
const { getSeguro, createSeguroAdmin, deleteSeguroAdmin } = require('../controllers/paciente.controller');
//ACUERDO
const { getAcuerdo, createAcuerdoAdmin, deleteAcuerdoAdmin } = require('../controllers/paciente.controller');
//ZONA
const { getZona, createZonaAdmin, deleteZonaAdmin } = require('../controllers/paciente.controller');
//TIPO AFILIADO
const { getTipoAfiliado, createTipoAfiliadoAdmin, deleteTipoAfiliadoAdmin } = require('../controllers/paciente.controller');
//PACIENTE
const { getPacienteAdmin, getPacienteByDate, getPacienteByNombre, getPacienteByStatus, createPaciente, updatePaciente, deletePaciente } = require('../controllers/paciente.controller');
//FICHA_MEDICA
const { createFichaMedica, updateFichaMedica, deleteFichaMedica } = require('../controllers/paciente.controller');


//TIPO DE IDENTIFICACION
router.get('', getTipoIdentidadAdmin);
router.get('', getTipoIdentidad);
router.post('', createTipoIdentidadAdmin);
router.put('', deleteTipoIdentidadAdmin);
//ESTADO CIVIL
router.get('', getEstadoCivil);
router.post('', createEstadoCivilAdmin);
router.put('', deleteEstadoCivilAdmin);
//ETNIA
router.get('', getEtnia);
router.post('', createEtniaAdmin);
router.put('', deleteEtniaAdmin);
//INSTRUCCION
router.get('', getIntruccion);
router.post('', createInstruccionAdmin);
router.put('', deleteInstruccionAdmin);
//SEGURO
router.get('', getSeguro);
router.post('', createSeguroAdmin);
router.put('', deleteSeguroAdmin);
//ACUERDO
router.get('', getAcuerdo);
router.post('', createAcuerdoAdmin);
router.put('', deleteAcuerdoAdmin);
//ZONA
router.get('', getZona);
router.post('', createZonaAdmin);
router.put('', deleteZonaAdmin);
//TIPO AFILIADO
router.get('', getTipoAfiliado);
router.post('', createTipoAfiliadoAdmin);
router.put('', deleteTipoAfiliadoAdmin);
//PACIENTE
router.get('', getPacienteAdmin);
router.get('', getPacienteByDate);
router.get('', getPacienteByNombre);
router.get('', getPacienteByStatus);
router.post('', createPaciente);
router.put('', updatePaciente);
router.delete('', deletePaciente);
//FICHA_MEDICA
router.post('',createFichaMedica);
router.put('',updateFichaMedica);
router.put('',deleteFichaMedica);


module.exports = router;