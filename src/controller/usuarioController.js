

// Importa o service
const service = require('../service/usuarioService.js');

// Cria um novo usuário

const criarUsuario = async ( req , res ) => {

    try {
            const { login , senha } = req.body;

            await service.criarUsuario(login , senha);
            res.status(201).json( { message : "Usuario criado com sucesso"} );

        } catch (error) {

            res.status(500).json( { error : error.message} );

        }
        
};

// Autentica um usuário

const autenticarUsuario = async ( req , res ) => {

    try {
        
            const { login , senha } = req.body;

            await service.autenticarUsuario(login , senha);
            res.status(200).json( { message : "Usuario autenticado com sucesso"} );

        } catch (error) {

            res.status(500).json( { error : error.message} );

        }
};


// Exporta as funções

module.exports = {
    criarUsuario,
    autenticarUsuario
}