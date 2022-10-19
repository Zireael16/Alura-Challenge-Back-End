

// Importa o service
const service = require('../service/usuarioService.js');

// Cria um novo usuário

const criarUsuario = async ( req , res ) => {

    try {
            const { nome , email , senha, confirmarSenha  } = req.body;
            await service.criarUsuario(nome , email , senha);

            if(!nome || !email || !senha || !confirmarSenha) {
                return res.status(422).send({ message: 'Preencha todos os campos' });
                
            } else if(senha !== confirmarSenha) {
                return res.status(422).send({ message: 'Senhas não conferem' });

            } else {
                res.status(201).json( { message : "Usuario criado com sucesso"} );

            }

        } catch (error) {
            if(error.code == '23505') {
                res.status(500).json( {message : "Email Cadastrado já existe"} )
            } else {
                res.status(500).json({ 
                    code : error.code,
                    error : error.message
                
                });
            }

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




