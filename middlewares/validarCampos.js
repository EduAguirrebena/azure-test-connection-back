const { validationResult } = require('express-validator');

// al ser un middleware y si no resulta con errores debe tener un next
// esto para pasar al siguiente
const validarCampos = ( req, res, next ) => {
    const errors = validationResult(req);
    if( !errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}

module.exports = {
    validarCampos,
}