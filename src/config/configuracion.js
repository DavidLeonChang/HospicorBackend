const config = {
    urlbase: '',
    establecimiento: 1,
    mensajes: {
        getF: 'Error al traer data',
//-------------------------------------------- Mensaje de Usuarios Inicio -------------------------------------------
        establecimiento: {
            createS: 'El centro de salud ha sido registrado',
            createF: 'El centro de salud no pudo ser creado',
            deleteS: 'El centro de salud ha sido eliminado',
            deleteF: 'Error al eliminar el centro de salud'
        },
        cargo: {
            createS: 'El cargo ha sido registrado',
            createF: 'El cargo no pudo ser creado',
            deleteS: 'El cargo ha sido eliminado',
            deleteF: 'Error al eliminar el cargo'            
        },
        servicio: {
            createS: 'El servicio ha sido registrado',
            createF: 'El servicio no pudo ser creado',
            deleteS: 'El servicio ha sido eliminado',
            deleteF: 'Error al eliminar servicio'             
        },
        genero: {
            createS: 'El genero ha sido registrado',
            createF: 'El genero no pudo ser creado',
            deleteS: 'El genero ha sido eliminado',
            deleteF: 'Error al eliminar el genero'             
        },
        roles: {
            createS: 'El rol ha sido registrado',
            createF: 'El rol no pudo ser creado',
            deleteS: 'El rol ha sido eliminado',
            deleteF: 'Error al eliminar rol'             
        },
        usuarios: {
            createS: 'El usuario ha sido registrado',
            createF: 'El usuario no pudo ser creado',
            updateS: 'El usuario ha sido actualizado',
            updateF: 'Error al actualizar el usuario',
            deleteS: 'El usuario ha sido eliminado',
            deleteF: 'Error al eliminar usuario',
            loginS: 'Usuario/Contraseña incorrecta',
            loginF: 'No es posible conectar, compruebe su coneccion a internet'  
        },
//---------------------------------------------- Mensajes de usuarios Fin ---------------------------------------------


//---------------------------------------------- Mensajes de Pacientes Inicio -----------------------------------------
        tipoidentidad: {
            createS: 'El tipo de identificación ha sido registrado',
            createF: 'El tipo de identificacion no pudo ser creado',
            deleteS: 'El tipo de identificación ha sido eliminado',
            deleteF: 'Error al eliminar tipo de identidad'             
        },
        estadocivil: {
            createS: 'El estado civil ha sido registrado',
            createF: 'El estado civil no pudo ser creado',
            deleteS: 'El estado civil ha sido eliminado',
            deleteF: 'Error al eliminar estado civil'             
        },
        etnia: {
            createS: 'La etnia ha sido registrada',
            createF: 'La etnia no pudo ser creada',
            deleteS: 'La etnia ha sido eliminada',
            deleteF: 'Error al eliminar la etnia'             
        },
        instruccion: {
            createS: 'El nivel academico ha sido registrado',
            createF: 'El nivel academico no pudo ser creado',
            deleteS: 'El nivel academico ha sido eliminado',
            deleteF: 'Error al eliminar el nivel academico'             
        },
        seguro: {
            createS: 'El seguro ha sido registrado',
            createF: 'El seguro no pudo ser creado',
            deleteS: 'El seguro ha sido eliminado',
            deleteF: 'Error al eliminar el seguro'             
        },
        acuerdo: {
            createS: 'El acuerdo ha sido registrado',
            createF: 'El acuerdo no pudo ser creado',
            deleteS: 'El acuerdo ha sido eliminado',
            deleteF: 'Error al eliminar acuerdo'             
        },
        zona: {
            createS: 'La zona ha sido registrada',
            createF: 'La zona no pudo ser creada',
            deleteS: 'La zona ha sido eliminada',
            deleteF: 'Error al eliminar la zona'             
        },
        tipoafiliado: {
            createS: 'El tipo de afiliado ha sido registrado',
            createF: 'El tipo de afiliado no pudo ser creado',
            deleteS: 'El tipo de afiliado ha sido eliminado',
            deleteF: 'Error al eliminar el tipo de afiliado'             
        },
        paciente: {
            createS: 'El paciente ha sido registrado y una nueva ficha medica ha sido registrada',
            createF: 'El paciente no pudo ser registrado',
            updateS: 'El paciente ha sido actualizado exitosamente',
            updateF: 'El paciente no pudo ser actualizado',
            deleteS: 'El paciente ha sido eliminado',
            deleteF: 'El paciente no puede ser eliminado no se han cumplido los requisitos necesarios',
            deleteF2: 'El paciente no puede ser eliminado existen dependencias por lo tanto hay cobros pendientes', 
        },
        fichamedica: {
            createS: 'El reingreso se ha generado',
            createF: 'La informacion enviada no es valida',
            createF2: 'La ficha medica no se ha creado',
            updateS: 'El reingreso se ha generado',
            updateF: 'Error al actualizar la ficha medica',
            deleteS: 'El paciente se le ha dado de alta',
            deleteF: 'No se ha podido dar de alta al paciente'             
        },
//---------------------------------------------------- Mensajes de Paciente Fin ----------------------------------------------------


//--------------------------------------------------- Mensajes de Nutricion Inicio -------------------------------------------------
        habitacion: {
            createS: 'La habitación ha sido creada',
            createF: 'La habitación no pudo ser creada',
            deleteS: 'La habitación se ha eliminado',
            deleteF: 'Error al eliminar la habitación'             
        },
        cama: {
            createS: 'La cama ha sido creada',
            createF: 'La cama no pudo ser creada',
            updateS: 'La cama ha sido actualizada',
            updateF: 'La cama no pudo ser actulizada',
            deleteS: 'La cama se ha eliminado',
            deleteF: 'Error al eliminar la cama',
            trasladoS: 'El paciente ha sido trasladado',
            trasladoF: 'La cama esta ocupada por otro paciente',
            trasladoF2: 'Error al trasladar al paciente'         
        },
        tipo: {
            createS: 'El tipo ha sido creado',
            createF: 'El tipo no pudo ser creado',
            deleteS: 'El tipo se ha eliminado',
            deleteF: 'Error al eliminar el tipo'             
        },
        tipodieta: {
            createS: 'El tipo de dieta ha sido creado',
            createF: 'El tipo de dieta no pudo ser creado',
            deleteS: 'El tipo de dieta se ha eliminado',
            deleteF: 'Error al eliminar el tipo de dieta'             
        },
        nutricion: {
            createS: 'El plan nutricional se añadio',
            createF: 'El plan nutricional no pudo ser agregado',
            updateS: '',
            updateF: '',
            deleteS: 'El plan nutricional se ha actualizado',
            deleteF: 'Error al actualizar el plan nutricional'             
        },
//---------------------------------------------------- Mensajes de Nutricion Fin ---------------------------------------------------------


//---------------------------------------------------- Mensajes de  Inicio ---------------------------------
        s:{
            createS: '',
            createF: '',
            deleteS: '',
            deleteF: ''
        }

    }
};

module.exports = { config };