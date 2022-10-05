

const express = require('express');
const router = express.Router();
const resultadoController = require('../controller/usuarioController.js');

router.post('/criarUsuario' , resultadoController.criarUsuario);
router.post('/autenticarUsuario' , resultadoController.autenticarUsuario);

module.exports = router