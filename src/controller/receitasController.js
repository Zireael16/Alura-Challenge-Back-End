

//Importa o service
const receitasModel = require('../model/receitasModel.js');

// lista todas as receitas criadas

const listaReceitas = async ( _ , res ) => {
    try {
        const resultadoReceita = await receitasModel.listarTodasReceitas();
           res.status(200).json(resultadoReceita.rows); 
    } catch (error) {
        res.status(500).json( { error : error.message } );
    }
};

// Detalha uma receita a partir do id

const detalhaReceita = async ( req , res ) => {
    try {
        const { id } = req.params
        const listarUmaReceita = await receitasModel.detalharUmaReceita(id);
        res.status(200).json(listarUmaReceita.rows); 
    } catch (error) {
        res.status(500).json( { error : error.message } );
    }
};

// Cria uma nova receita

const criaReceita = async ( req , res )  => {
    try {
        const { descricao , valor } = req.body
        await receitasModel.criarUmaReceita(descricao,valor)
        res.status(201).json( { Message : 'Receita Criada com Sucesso!' } );
    } catch (error) {
        res.status(500).json( { error : error.message } );
    }
};

// Atualiza a receita a partir do ID

const atualizaReceita = async ( req , res ) => {
    try {
        const { descricao , valor } = req.body;
        const { id } = req.params;
        await receitasModel.atualizarUmaReceita(descricao,valor , id);
        res.status(200).json( { message : 'Receita Atualizada com Sucesso!' } );
    } catch (error) {
        res.status(500).json( { error : error.message } );
    }
};

// Deleta a receita a partir do ID

const deletaReceita = async ( req , res ) => {
    try {
        const { id } = req.params;
        await receitasModel.deletarUmaReceita(id);
        res.status(200).json( { message : 'Receita Deletada com Sucesso!' } );
    } catch(error) {
        res.status(500).json( { error : error.message } );
    }
};

// Busca de Receitas pela Descrição

const listaReceitasPorTipo = async( req , res, next ) => {
    try {
        const { descricao } = req.query;
        const listaPorTipo = await receitasModel.listarPorTipo(descricao);
        if (descricao) {
            if(listaPorTipo.rowCount === 0){
                return res.status(404).json( { message : 'Descrição Inválida.' } );
            }
            return res.status(200).json(listaPorTipo.rows);
        }
        next();
    } catch (error) {
        res.status(500).json( { error : error.message } );
    }
};

// Lista as Receitas por mês

const listarReceitasPorMes = async( req , res ) => {
    try {
        const { ano , mes } = req.params;
        const listarPorMes = await receitasModel.receitasPorMes(ano, mes);
        return res.status(200).json(listarPorMes.rows);
    } catch (error) {
        res.status(500).json( { error : error.message } );
    }
};

// Exporta as funções

module.exports = {
        listaReceitas,
        detalhaReceita,
        criaReceita,
        atualizaReceita,
        deletaReceita,
        listaReceitasPorTipo,
        listarReceitasPorMes
};

