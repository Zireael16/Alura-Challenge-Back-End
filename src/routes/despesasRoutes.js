

const express = require('express');
const router = express.Router();

const despesasController = require('../controller/despesasController.js');


router.get('/', despesasController.despesaPorTipo , despesasController.listaDespesas);
router.get('/despesasPorMes/:ano/:mes' , despesasController.listarDespesasPorMes);
router.get('/detalharDespesa/:id' , despesasController.detalhaDespesa);
router.post('/criarNovaDespesa' , despesasController.criaDespesa);
router.put('/atualizarDespesa/:id' , despesasController.atualizarDespesa);
router.delete('/deletarDespesa/:id' , despesasController.deletaDespesa);


module.exports = router;