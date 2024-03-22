const { Router }=require('express');
const router=Router();

//TIPO DE IDENTIFICACION
const { getTipoIdentidad, createTipoIdentidad, deleteTipoIdentidad } =require('../controllers/users.controller');
//ESTADO CIVIL
const { getEstadoCivil, createEstadoCivil, deleteEstadoCivil } =require('../controllers/users.controller');
//ETNIA
const { getEtnia, createEtnia, deleteEtnia } =require('../controllers/users.controller');
//INSTRUCCION
const { getIntruccion, createInstruccion, deleteInstruccion } =require('../controllers/users.controller');
//SEGURO
const { getSeguro, createSeguro, deleteSeguro } =require('../controllers/users.controller');
//ACUERDO
const { getAcuerdo, createAcuerdo, deleteAcuerdo } =require('../controllers/users.controller');
//ZONA
const { getZona, createZona, deleteZona } =require('../controllers/users.controller');
//TIPO AFILIADO
const { getTipoAfiliado, createTipoAfiliado, deleteTipoAfiliado } =require('../controllers/users.controller');
//PACIENTE
const { getPaciente, createPaciente, updatePaciente, deletePaciente } =require('../controllers/users.controller');

router.get('',getTipoIdentidad);
router.post('',createTipoIdentidad);
router.delete('',deleteTipoIdentidad);
router.get('',getEstadoCivil);
router.post('',createEstadoCivil);
router.delete('',deleteEstadoCivil);
router.get('',getEtnia);
router.post('',createEtnia);
router.delete('',deleteEtnia);
router.get('',getIntruccion);
router.post('',createInstruccion);
router.delete('',deleteInstruccion);
router.get('',getSeguro);
router.post('',createSeguro);
router.delete('',deleteSeguro);
router.get('',getAcuerdo);
router.post('',createAcuerdo);
router.delete('',deleteAcuerdo);
router.get('',getZona);
router.post('',createZona);
router.delete('',deleteZona);
router.get('',getTipoAfiliado);
router.post('',createTipoAfiliado);
router.delete('',deleteTipoAfiliado);
router.get('',getPaciente);
router.post('',createPaciente);
router.put('',updatePaciente);
router.delete('',deletePaciente);


module.exports=router;