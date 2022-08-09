const { Pool } = require('pg');
const config = require('../../config/dbConnection.js');
const queries = require('./despesasQueries.js');




//Get Receitas READ
const listarTodasDespesas = async () => {
    const pool = new Pool(config)
    const despesasListadas = await pool.query(queries.SelectAllDespesas);
    pool.end();
    return despesasListadas;
}

const detalharUmaDespesa = async (id) => {
    const pool = new Pool(config)
    const despesaDetalhada = await pool.query(queries.SelectOneDespesa , [id] );
    pool.end();
    return despesaDetalhada;
}
//Post Receitas CREATE

const criarUmaDespesa = async(descricao , valor ) => {
    const pool = new Pool(config);
    const despesaCriada  = await pool.query(queries.InsertDespesa, [descricao , valor]);
    pool.end();
    return despesaCriada;
}
//Put Receita UPDATE  
const atualizarUmaDespesa = async (descricao , valor , id) => {
    const pool = new Pool(config);
    const despesaAtualizada = await pool.query( queries.UpdateDespesa, [descricao , valor , id]);
    pool.end();
    return despesaAtualizada;
}

const deletarUmaDespesa = async (id) => {
    const pool = new Pool(config);
    const despesaDeletada = await pool.query( queries.DeleteDespesa , [id])
    pool.end();
    return despesaDeletada;
}

module.exports = {
    listarTodasDespesas,
    detalharUmaDespesa,
    criarUmaDespesa,
    atualizarUmaDespesa,
    deletarUmaDespesa
};