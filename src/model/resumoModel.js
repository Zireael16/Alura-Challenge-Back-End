

const { Pool } = require('pg');
const config = require('../../config/dbConnection.js');
const queries = require('./resumoQueries.js');


const resumoMes = async (ano , mes) => {
    const pool = new Pool(config);

    const valorReceitas = await pool.query(queries.totalReceitas , [ ano , mes ]);
    const valorDespesas = await pool.query(queries.totalDespesas , [ ano , mes ]);

    const valorAlimentacao = await pool.query(queries.mensalAlimentacao , [mes]);
    const valorSaude = await pool.query(queries.mensalSaude , [mes]);
    const valorMoradia = await pool.query(queries.mensalMoradia , [mes]);
    const valorTransporte = await pool.query(queries.mensalTransporte, [mes]);
    const valorEducacao = await pool.query(queries.mensalEducacao , [mes]);
    const valorLazer = await pool.query(queries.mensalLazer , [mes]);
    const valorImprevistos = await pool.query(queries.mensalImprevistos, [mes]);
    const valorOutras = await pool.query(queries.mensalOutras , [mes]); 

    const totalAlimentacao = valorAlimentacao.rows[0].sum !== null ?valorAlimentacao.rows[0].sum : 0;
    const totalSaude = valorSaude.rows[0].sum !== null ?valorSaude.rows[0].sum : 0;
    const totalMoradia = valorMoradia.rows[0].sum !== null ?valorMoradia.rows[0].sum : 0;
    const totalTransporte = valorTransporte.rows[0].sum !== null ?valorTransporte.rows[0].sum : 0;
    const totalEducacao = valorEducacao.rows[0].sum !== null ?valorEducacao.rows[0].sum : 0;
    const totalLazer = valorLazer.rows[0].sum !== null ?valorLazer.rows[0].sum : 0;
    const totalImprevistos = valorImprevistos.rows[0].sum !== null ?valorImprevistos.rows[0].sum : 0;
    const totalOutras = valorOutras.rows[0].sum !== null ?valorOutras.rows[0].sum : 0;

    const totalReceitas = valorReceitas.rows[0].sum !== null ?valorReceitas.rows[0].sum : 0;
    const totalDespesas = valorDespesas.rows[0].sum !== null ?valorDespesas.rows[0].sum : 0; 
    const saldoFinal = totalReceitas - totalDespesas;

    
    pool.end();
    return { totalReceitas, totalDespesas , saldoFinal, totalAlimentacao , totalSaude , totalMoradia , totalTransporte, totalEducacao , totalLazer , totalImprevistos , totalOutras };

}


module.exports = {
    resumoMes
}





