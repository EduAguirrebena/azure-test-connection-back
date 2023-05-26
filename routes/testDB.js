const { Router } = require('express');

// const { validarCampos } = require('../middlewares');
const { getDB } = require('../controllers');

const router = Router();

router.get('/revision', getDB);

// router.post('/recibir', recibirBeetrack);


module.exports = router;