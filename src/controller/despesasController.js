


const despesasService = require('../service/despesasServices.js');


const listaDespesas = async (_ , res) => {
    const resultadoService = await despesasService.listarDespesas();
    res.status(200).json(resultadoService.rows);
}

const detalhaDespesa = async (req , res) => {

    const { id } = req.params

    const resultadoService = await despesasService.detalharDespesa(id);
    res.status(200).json(resultadoService.rows);
}

const criaDespesa = async (req , res)  => {
    const { descricao , valor } = req.body
    await despesasService.criarDespesa(descricao,valor)
    res.status(201).send({Message : 'Despesa Criada com Sucesso!'})

}

const atualizarDespesa = async ( req , res ) => {
    const { descricao , valor } = req.body;
    const { id } = req.params;
    await despesasService.atualizarDespesa(descricao,valor , id);

    res.status(200).send( {message : 'Despesa Atualizada com Sucesso!'} );
}

const deletaDespesa = async (req , res) => {
    const { id } = req.params;
    await despesasService.deletarDespesa(id);

    res.status(200).send( {message : 'Despesa Deletada com Sucesso!'} );
}
module.exports = {
        listaDespesas,
        detalhaDespesa,
        criaDespesa,
        atualizarDespesa,
        deletaDespesa
}