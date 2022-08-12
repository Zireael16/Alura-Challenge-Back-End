

const bancoResumo = {
    totalReceitas : `SELECT SUM(valor) from financeiro.receitas where extract(year from data) = ($1) and extract (month from data) = ($2);`,
    totalDespesas : `SELECT SUM(valor) from financeiro.despesas where extract(year from data) = ($1) and extract (month from data) = ($2);`,
    mensalAlimentacao : `SELECT SUM(valor) from financeiro.despesas where categoria = 'Alimentação' and extract (month from data) = ($1);`,
    mensalSaude : `SELECT SUM(valor) from financeiro.despesas where categoria = 'Saúde' and extract (month from data) = ($1);`,
    mensalMoradia : `SELECT SUM(valor) from financeiro.despesas where categoria = 'Moradia' and extract (month from data) = ($1);`,
    mensalTransporte : `SELECT SUM(valor)  from financeiro.despesas where categoria = 'Transporte' and extract (month from data) = ($1);`,
    mensalEducacao : `SELECT SUM(valor) from financeiro.despesas where categoria = 'Educação' and extract (month from data) = ($1);`,
    mensalLazer : `SELECT SUM(valor) from financeiro.despesas where categoria = 'Lazer' and extract (month from data) = ($1);`,
    mensalImprevistos : `SELECT SUM(valor) from financeiro.despesas where categoria = 'Imprevistos' and extract (month from data) = ($1);`,
    mensalOutras : `SELECT SUM(valor) from financeiro.despesas where categoria = 'Outras' and extract (month from data) = ($1);`
}

module.exports = bancoResumo;