const requisicaoBanco = {
    criarUsuario : 'INSERT INTO usuario.dados (nome , email , hash) VALUES ( ($1), ($2),($3) );',
    autenticarUsuario : 'SELECT hash FROM usuario.dados WHERE login = ($1);',

}

module.exports = requisicaoBanco;