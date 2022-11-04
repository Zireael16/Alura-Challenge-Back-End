
require('dotenv').config()
const config = process.env
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const resultadoModel = require('../model/usuarioModel.js');

const criarUsuario = async (nome, email , senha) => {
    const nomeLimpo = nome.toLowerCase();
    const emailLimpo = email.toLowerCase();

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(senha, salt);
    const result = await resultadoModel.criarUsuario(nomeLimpo ,emailLimpo , hash);
    return result;
};

const autenticarUsuario = async (login) => {
    const result = await resultadoModel.autenticarUsuario(login);
    return result;
};

const gerarToken = async (email) => {
    const userExists = await autenticarUsuario(email);
        const secret = config.TOKEN_KEY;
        const token = jwt.sign( {
            email : email
        },
        secret,
        {
            expiresIn : '1h'
        });
        return token;
    
};

const verificarSenha = async(senha , hashResult) => {
    const verificado = await bcrypt.compare(senha, hashResult);
    return verificado;
}

const verificaToken = async (req , res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) {
        return res.status(403).json({ message : 'A token is required for authentication' });
    } 
    try {
        const secret = process.env.TOKEN_KEY;
        jwt.verify(token, secret);
        return next();
    } catch (error) {
        return res.status(400).json({ message : 'Invalid Token' });
    }
}


module.exports = {
    criarUsuario,
    autenticarUsuario,
    verificarSenha,
    gerarToken,
    verificaToken
}