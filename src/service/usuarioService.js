


const { createHash } = require('crypto');
const resultadoQuery = require('../model/usuarioModel.js');

const criarUsuario = async (login , senha) => {
    const criaHash = (senha) => {
    return createHash('sha256').update(senha).digest('hex');
    }
    
    const hash = criaHash(senha);
    const resultadoModel = await resultadoQuery.criarUsuario(login , hash);
    return resultadoModel;
};

const autenticarUsuario = async (login , senha) => {
    const criaHash = (senha) => {
        return createHash('sha256').update(senha).digest('hex');
    };
    const hash = criaHash(senha);
    const resultadoModel = await resultadoQuery.autenticarUsuario(login);

    const usuarioEstaAutenticado = (hash === resultadoModel.rows[0].hash);
    return usuarioEstaAutenticado; 
};


module.exports = {
    criarUsuario,
    autenticarUsuario
    
}