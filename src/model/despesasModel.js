const { Pool } = require('pg');
const config = require('../../config/dbConnection.js');
const queries = require('./despesasQueries.js');


//Post Despesas CREATE
const criarUmaDespesa = async(descricao , valor, categoria ) => {
    const pool = new Pool(config);
    if(categoria) {
        const despesaCriada  = await pool.query(queries.InsertDespesa, [descricao , valor , categoria]);
        pool.end();
        return despesaCriada;
    }
    const despesaCriada  = await pool.query(queries.InsertDespesa, [descricao , valor, "Outras"]);
        pool.end();
        return despesaCriada;
};

//Get Despesas READ
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

//Put Receita UPDATE  
const atualizarUmaDespesa = async (descricao , valor , id) => {
    const pool = new Pool(config);
    const despesaAtualizada = await pool.query( queries.UpdateDespesa, [descricao , valor , id]);
    pool.end();
    return despesaAtualizada;
}

//Delete Receita DELETE
const deletarUmaDespesa = async (id) => {
    const pool = new Pool(config);
    const despesaDeletada = await pool.query( queries.DeleteDespesa , [id])
    pool.end();
    return despesaDeletada;
}
//Features 
const despesasPorTipo = async (descricao) => {
    const pool = new Pool(config);
    const listaPorTipo = await pool.query(queries.DespesaPorTipo , [descricao])
    pool.end();
    return listaPorTipo;
}

const despesasPorMes = async ( ano , mes )  => {
    const pool = new Pool(config);
    const despesaMes = await pool.query(queries.DespesasPorMes , [ano , mes]);
    pool.end();
    return despesaMes;
}

module.exports = {
    listarTodasDespesas,
    detalharUmaDespesa,
    criarUmaDespesa,
    atualizarUmaDespesa,
    deletarUmaDespesa,
    despesasPorTipo,
    despesasPorMes
};