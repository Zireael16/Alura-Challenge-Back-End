
const { Pool } = require('pg');
const config = require('../../config/dbConnection.js');
const queries = require('./receitasQueries.js');



//Post Receitas CREATE

const criarUmaReceita = async(descricao , valor ) => {
    const pool = new Pool(config);
    const receitaCriada  = await pool.query(queries.InsertReceita, [descricao , valor]);
    pool.end();
    return receitaCriada;
}

//Get Receitas READ
const listarTodasReceitas = async () => {
    const pool = new Pool(config)
    const receitasListadas = await pool.query(queries.SelectAllReceitas);
    pool.end();
    return receitasListadas;
}

const detalharUmaReceita = async (id) => {
    const pool = new Pool(config)
    const receitaDetalhada = await pool.query(queries.SelectOneReceita , [id] );
    pool.end();
    return receitaDetalhada;
}
//Put Receita UPDATE  
const atualizarUmaReceita = async (descricao , valor , id) => {
    const pool = new Pool(config);
    const receitaAtualizada = await pool.query( queries.UpdateReceita, [descricao , valor , id]);
    pool.end();
    return receitaAtualizada;
}
//Delete Receita DELETE
const deletarUmaReceita = async (id) => {
    const pool = new Pool(config);
    const receitaDeletada = await pool.query( queries.DeleteReceita , [id])
    pool.end();
    return receitaDeletada;
}

//Features
const listarPorTipo = async (descricao) => {
    const pool = new Pool(config);
    const listaPorTipo = await pool.query(queries.ReceitaPorTipo , [descricao])
    pool.end();
    return listaPorTipo;
}

const receitasPorMes = async ( ano , mes )  => {
    const pool = new Pool(config);
    const listaPorMes = await pool.query(queries.ReceitasPorMes , [ano , mes]);
    pool.end();
    return listaPorMes;
}


module.exports = {
    listarTodasReceitas,
    detalharUmaReceita,
    criarUmaReceita,
    atualizarUmaReceita,
    deletarUmaReceita,
    listarPorTipo,
    receitasPorMes
};