const requisicoesBanco = {
    SelectAllDespesas : 'SELECT * FROM financeiro.despesas;',
    SelectOneDespesa : 'SELECT * FROM financeiro.despesas WHERE id = ($1);',
    InsertDespesa : 'INSERT INTO financeiro.despesas (descricao , valor) VALUES ( ($1) , ($2));' ,
    UpdateDespesa : 'UPDATE financeiro.despesas SET descricao = ($1) , valor = ($2) WHERE id = ($3);',
    DeleteDespesa : 'DELETE FROM financeiro.despesas WHERE id = ($1);'
};

module.exports = requisicoesBanco;