


const { Pool } = require('pg');
const config = require('../../config/dbConnection.js');

const { createHash } = require('crypto');
const resultadoModel = require('../model/usuarioModel.js');

const criarUsuario = async (nome, email , senha) => {
    const criaHash = (senha) => {

    return createHash('sha256').update(senha).digest('hex');

    };
    
    const hash = criaHash(senha);
    const result = await resultadoModel.criarUsuario(nome ,email , hash);
    return result;
};

const autenticarUsuario = async (login , senha) => {
    const criaHash = (senha) => {
        return createHash('sha256').update(senha).digest('hex');
    };
    const hash = criaHash(senha);
    const resultadoModel = await resultadoModel.autenticarUsuario(login);

    const usuarioEstaAutenticado = (hash === resultadoModel.rows[0].hash);
    return usuarioEstaAutenticado; 
};


module.exports = {
    criarUsuario,
    autenticarUsuario,
    
    
}