


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
    const { descricao , valor, categoria } = req.body;
    
    await despesasService.criarDespesa(descricao,valor, categoria)
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

const despesaPorTipo = async( req , res, next ) => {
    const { descricao } = req.query;
    const listaPorTipo = await despesasService.despesasPorTipo(descricao);
    if (descricao) {
        if(listaPorTipo.rowCount === 0){
            return res.status(404).json( { message : 'Descrição Inválida.' } )
        }
        return res.status(200).json(listaPorTipo.rows)
    }
    next();

}

const listarDespesasPorMes = async( req , res ) => {
    const { ano , mes} = req.params;
    const listarPorMes = await despesasService.DespesasMes(ano, mes);
    return res.status(200).json(listarPorMes.rows);
}


module.exports = {
        listaDespesas,
        detalhaDespesa,
        criaDespesa,
        atualizarDespesa,
        deletaDespesa,
        despesaPorTipo,
        listarDespesasPorMes
}