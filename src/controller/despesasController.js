

//  Importa o service
const despesasService = require('../service/despesasServices.js');

//  Lista todas as as despesas criadas

const listaDespesas = async ( _ , res ) => {

    try {

        const resultadoService = await despesasService.listarDespesas();
        res.status(200).json(resultadoService.rows);

    } catch (error) {

        res.status(500).json( { error : error.message } );

    }
};

//  Detalha uma despesa a partir do ID

const detalhaDespesa = async ( req , res ) => {

    try {

        const { id } = req.params

        const resultadoService = await despesasService.detalharDespesa(id);
        res.status(200).json(resultadoService.rows);

    } catch (error) {

        res.status(500).json( { error : error.message } );

    }
};

// Cria uma nova despesa

const criaDespesa = async ( req , res )  => {
    
    try {

        const { descricao , valor, categoria } = req.body;
        
        await despesasService.criarDespesa(descricao,valor, categoria)
        res.status(201).send({Message : 'Despesa Criada com Sucesso!'})
        
    } catch (error) {
        
        res.status(500).json( { error : error.message } );
        
    }
};

// Atualiza uma despesa a partir do ID

const atualizarDespesa = async ( req , res ) => {

    try {

        const { descricao , valor } = req.body;
        const { id } = req.params;
    
        await despesasService.atualizarDespesa(descricao,valor , id);
        res.status(200).send( {message : 'Despesa Atualizada com Sucesso!'} );

    } catch (error) {

        res.status(500).json( { error : error.message } );

    }
};

// Deleta uma despesa a partir do ID

const deletaDespesa = async ( req , res ) => {

    try {
        const { id } = req.params;
        
        await despesasService.deletarDespesa(id);
        res.status(200).send( { message : 'Despesa Deletada com Sucesso!' } );

    } catch (error) {
        
        res.status(500).json( { error : error.message } );

    }
};

// Lista as despesas por categoria

const despesaPorTipo = async( req , res, next ) => {

    try {

        const { descricao } = req.query;
        const listaPorTipo = await despesasService.despesasPorTipo(descricao);
        if (descricao) {
            if(listaPorTipo.rowCount === 0){
                return res.status(404).json( { message : 'Descrição Inválida.' } )
            }
            return res.status(200).json(listaPorTipo.rows)
        }
        next();
        
    } catch (error) {

        res.status(500).json( { error : error.message } );
        
    }

};

// Lista as despesas por mês

const listarDespesasPorMes = async( req , res ) => {
    
    try {

        const { ano , mes} = req.params;

        const listarPorMes = await despesasService.DespesasMes(ano, mes);
        return res.status(200).json(listarPorMes.rows);
        
    } catch (error) {

        res.status(500).json( { error : error.message } );
        
    }
};

// Exporta as funções
module.exports = {
        listaDespesas,
        detalhaDespesa,
        criaDespesa,
        atualizarDespesa,
        deletaDespesa,
        despesaPorTipo,
        listarDespesasPorMes
}