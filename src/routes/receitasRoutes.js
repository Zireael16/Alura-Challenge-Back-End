

const express = require('express');
const router = express.Router();

const receitasController = require('../controller/receitasController.js');


router.get('/listarReceita' , receitasController.listaReceitas);
router.get('/listarUmaReceita/:id' , receitasController.detalhaReceita);
router.post('/criarNovaReceita' , receitasController.criaReceita);
router.put('/atualizarReceita/:id' , receitasController.atualizaReceita);
router.delete('/deletarReceita/:id' , receitasController.deletaReceita);


module.exports = router;