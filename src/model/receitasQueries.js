

const requisicoesBanco = {
    SelectAllReceitas : 'SELECT * FROM financeiro.receitas;',
    SelectOneReceita : 'SELECT * FROM financeiro.receitas WHERE id = ($1);',
    InsertReceita : 'INSERT INTO financeiro.receitas (descricao , valor) VALUES ( ($1) , ($2));' ,
    UpdateReceita : 'UPDATE financeiro.receitas SET descricao = ($1) , valor = ($2) WHERE id = ($3);',
    DeleteReceita : 'DELETE FROM financeiro.receitas WHERE id = ($1);',
    ReceitaPorTipo : 'SELECT * FROM financeiro.receitas WHERE descricao = ($1);',
    ReceitasPorMes : 'SELECT * FROM financeiro.receitas WHERE EXTRACT(year FROM data) = ($1) AND EXTRACT(month FROM data) = ($2)'
};

module.exports = requisicoesBanco;

