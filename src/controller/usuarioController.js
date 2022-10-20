

// Importa o service
const service = require('../service/usuarioService.js');
// Cria um novo usuário
const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const criarUsuario = async ( req , res ) => {

    try {
            const { nome , email , senha, confirmarSenha  } = req.body;
            await service.criarUsuario(nome , email , senha);

            if(!nome || !email || !senha || !confirmarSenha) {
                return res.status(422).send({ message: 'Preencha todos os campos' });
                
            } else if(senha !== confirmarSenha) {
                return res.status(422).send({ message: 'Senhas não são iguais' });

            } else if (email.match(validRegex)){
                res.status(201).json( { message : "Usuario criado com sucesso"} );

            } else {
                return res.status(422).send({ message: 'Email inválido' });
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
        
            const { email , senha } = req.body;
            
            const userExists =  await service.autenticarUsuario(email);
            if(!email || !senha) {
                return res.status(422).send({ message: 'Preencha todos os campos' });
            }

            if(!email.match(validRegex)) {
                return res.status(422).send({ message: 'Email inválido' });
            }
    
            if(userExists.rows[0] == undefined) {
                return res.status(404).send({ message: 'Email não encontrado' });
            } else if (await service.verificarSenha(senha , userExists.rows[0].hash) == true) {

                const token = await service.gerarToken(email);
                return res.status(200).send({ message: 'Logado com sucesso', token});
            }  else {
                return res.status(422).send({ message: 'Senha incorreta' });
            }
        } catch (error) {
            res.status(500).json({
                code: error.code,
                error: error.message
            });

        }
};


// Exporta as funções

module.exports = {
    criarUsuario,
    autenticarUsuario
}




