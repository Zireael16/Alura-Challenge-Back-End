

const express = require('express');
const router = express.Router();

const despesasController = require('../controller/despesasController.js');


router.get('/listarDespesas' , despesasController.listaDespesas);
router.get('/listarUmaDespesa/:id' , despesasController.detalhaDespesa);
router.post('/criarNovaDespesa' , despesasController.criaDespesa);
router.put('/atualizarDespesa/:id' , despesasController.atualizarDespesa);
router.delete('/deletarDespesa/:id' , despesasController.deletaDespesa);


module.exports = router;