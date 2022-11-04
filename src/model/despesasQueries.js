const requisicoesBanco = {
    SelectAllDespesas : 'SELECT * FROM financeiro.despesas;',
    SelectOneDespesa : 'SELECT * FROM financeiro.despesas WHERE id = ($1);',
    InsertDespesa : 'INSERT INTO financeiro.despesas (descricao , valor, categoria) VALUES ( ($1) , ($2) , ($3));' ,
    UpdateDespesa : 'UPDATE financeiro.despesas SET descricao = ($1) , valor = ($2) WHERE id = ($3);',
    DeleteDespesa : 'DELETE FROM financeiro.despesas WHERE id = ($1);',
    DespesaPorTipo : 'SELECT * FROM financeiro.despesas WHERE descricao = ($1);',
    DespesasPorMes : 'SELECT * FROM financeiro.despesas WHERE EXTRACT(year FROM data) = ($1) AND EXTRACT(month FROM data) = ($2)'
};

module.exports = requisicoesBanco;