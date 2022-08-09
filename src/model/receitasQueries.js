

const requisicoesBanco = {
    SelectAllReceitas : 'SELECT * FROM financeiro.receita;',
    SelectOneReceita : 'SELECT * FROM financeiro.receita WHERE id = ($1);',
    InsertReceita : 'INSERT INTO financeiro.receita (descricao , valor) VALUES ( ($1) , ($2));' ,
    UpdateReceita : 'UPDATE financeiro.receita SET descricao = ($1) , valor = ($2) WHERE id = ($3);',
    DeleteReceita : 'DELETE FROM financeiro.receita WHERE id = ($1);'
};

module.exports = requisicoesBanco;