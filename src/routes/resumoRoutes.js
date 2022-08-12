const express = require('express');
const router = express.Router();

const resultadoController = require('../controller/resumoController.js');

router.get('/:ano/:mes' , resultadoController.balancoDoMes);


module.exports = router;