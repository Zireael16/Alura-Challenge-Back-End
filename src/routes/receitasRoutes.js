

const express = require('express');
const router = express.Router();

const receitasController = require('../controller/receitasController.js');



router.get('/' , receitasController.listaReceitasPorTipo , receitasController.listaReceitas);
router.get('/detalharReceita/:id' , receitasController.detalhaReceita);

router.get('/:ano/:mes' , receitasController.listarReceitasPorMes);

router.post('/criarNovaReceita' , receitasController.criaReceita);
router.put('/atualizarReceita/:id' , receitasController.atualizaReceita);
router.delete('/deletarReceita/:id' , receitasController.deletaReceita);


module.exports = router;