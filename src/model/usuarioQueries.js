const requisicaoBanco = {
    criarUsuario : 'INSERT INTO usuario.dados (login, hash) VALUES ( ($1), ($2) );',
    autenticarUsuario : 'SELECT hash FROM usuario.dados WHERE login = ($1);',

}

module.exports = requisicaoBanco;