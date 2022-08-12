

const ServiceReceita = require('../service/receitasServices.js');


const listaReceitas = async (_ , res ) => {
     const resultadoReceita = await ServiceReceita.listarReceitas();
        res.status(200).json(resultadoReceita.rows); 
}

const detalhaReceita = async (req , res) => {
    const { id } = req.params
    const listarUmaReceita = await ServiceReceita.detalharReceitas(id);
    res.status(200).json(listarUmaReceita.rows);
}

const criaReceita = async (req , res)  => {
    const { descricao , valor } = req.body
    await ServiceReceita.criarReceitas(descricao,valor)
    res.status(201).json({Message : 'Receita Criada com Sucesso!'})

}

const atualizaReceita = async ( req , res ) => {
    const { descricao , valor } = req.body;
    const { id } = req.params;
    await ServiceReceita.atualizarReceita(descricao,valor , id);

    res.status(200).json( {message : 'Receita Atualizada com Sucesso!'} );
}

const deletaReceita = async (req , res) => {
    const { id } = req.params;
    await ServiceReceita.deletarReceita(id);
    res.status(200).json( { message : 'Receita Deletada com Sucesso!' } );
}


// Busca de Receitas pela Descrição
const listaReceitasPorTipo = async( req , res, next ) => {
    const { descricao } = req.query;
    const listaPorTipo = await ServiceReceita.listarPorTipo(descricao);
    if (descricao) {
        if(listaPorTipo.rowCount === 0){
            return res.status(404).json( { message : 'Descrição Inválida.' } )
        }
        return res.status(200).json(listaPorTipo.rows)
    }
    next();

}

const listarReceitasPorMes = async( req , res ) => {
    const { ano , mes} = req.params;
    const listarPorMes = await ServiceReceita.listaPorMes(ano, mes);
    return res.status(200).json(listarPorMes.rows);
}
module.exports = {
        listaReceitas,
        detalhaReceita,
        criaReceita,
        atualizaReceita,
        deletaReceita,
        listaReceitasPorTipo,
        listarReceitasPorMes
}