
const { Pool } = require('pg');
const config = require('../../config/dbConnection.js');
const queries = require('./receitasQueries.js');




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
//Post Receitas CREATE

const criarUmaReceita = async(descricao , valor ) => {
    const pool = new Pool(config);
    const receitaCriada  = await pool.query(queries.InsertReceita, [descricao , valor]);
    pool.end();
    return receitaCriada;
}
//Put Receita UPDATE  
const atualizarUmaReceita = async (descricao , valor , id) => {
    const pool = new Pool(config);
    const receitaAtualizada = await pool.query( queries.UpdateReceita, [descricao , valor , id]);
    pool.end();
    return receitaAtualizada;
}

const deletarUmaReceita = async (id) => {
    const pool = new Pool(config);
    const receitaDeletada = await pool.query( queries.DeleteReceita , [id])
    pool.end();
    return receitaDeletada;
}

module.exports = {
    listarTodasReceitas,
    detalharUmaReceita,
    criarUmaReceita,
    atualizarUmaReceita,
    deletarUmaReceita
};