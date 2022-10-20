

const { Pool } = require('pg');
const config = require('../../config/dbConnection.js');
const query = require('./usuarioQueries.js');

const criarUsuario = async (nome , email,  hash) => {
    const pool = new Pool(config);

    const usuarioCriado = pool.query( query.criarUsuario, [nome , email , hash]);
    
    pool.end();
    return usuarioCriado;
};

const autenticarUsuario = async(email) => {
    const pool = new Pool(config);
    const hashUsuarioLogado = await pool.query(query.autenticarUsuario, [email]);
    pool.end();
    return hashUsuarioLogado;
};



module.exports = {
    criarUsuario,   
    autenticarUsuario
}