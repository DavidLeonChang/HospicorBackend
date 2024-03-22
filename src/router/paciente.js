const { Router }=require('express');
const router=Router();

//TIPO DE IDENTIFICACION
const { getTipoIdentidadAdmin,getTipoIdentidad, createTipoIdentidad, deleteTipoIdentidad } =require('../controllers/users.controller');
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


//TIPO DE IDENTIFICACION

router.get('',getTipoIdentidad);
router.post('',createTipoIdentidad);
router.delete('',deleteTipoIdentidad);
//ESTADO CIVIL
router.get('',getEstadoCivil);
router.post('',createEstadoCivil);
router.delete('',deleteEstadoCivil);
//ETNIA
router.get('',getEtnia);
router.post('',createEtnia);
router.delete('',deleteEtnia);
//INSTRUCCION
router.get('',getIntruccion);
router.post('',createInstruccion);
router.delete('',deleteInstruccion);
//SEGURO
router.get('',getSeguro);
router.post('',createSeguro);
router.delete('',deleteSeguro);
//ACUERDO
router.get('',getAcuerdo);
router.post('',createAcuerdo);
router.delete('',deleteAcuerdo);
//ZONA
router.get('',getZona);
router.post('',createZona);
router.delete('',deleteZona);
//TIPO AFILIADO
router.get('',getTipoAfiliado);
router.post('',createTipoAfiliado);
router.delete('',deleteTipoAfiliado);
//PACIENTE
router.get('',getPaciente);
router.post('',createPaciente);
router.put('',updatePaciente);
router.delete('',deletePaciente);


module.exports=router;