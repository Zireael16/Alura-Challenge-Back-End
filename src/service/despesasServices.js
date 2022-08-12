const model = require('../model/despesasModel.js');



const listarDespesas = async () => {
   const resultadoQuery = await model.listarTodasDespesas();
   return resultadoQuery;
};


const detalharDespesa = async (id) => {
    const resultadoQuery = await model.detalharUmaDespesa(id);
    return resultadoQuery;
};


const criarDespesa = async (descricao, valor , categoria) => {
    const resultadoQuery = await model.criarUmaDespesa(descricao , valor , categoria );
    return resultadoQuery;
};



const atualizarDespesa = async (descricao , valor , id) => {
    const resultadoQuery =  await model.atualizarUmaDespesa(descricao, valor , id);
    return resultadoQuery;
}; 

const deletarDespesa = async (id) => {
    const resultadoQuery = await model.deletarUmaDespesa(id);
    return resultadoQuery;
}

const despesasPorTipo = async (descricao) => {
    const despesaPorTipo = await model.despesasPorTipo(descricao);
    return despesaPorTipo;
}

const DespesasMes = async (ano, mes) => {
    const listaMes = await model.despesasPorMes(ano , mes);
    return listaMes;
}

module.exports = {
    listarDespesas,
    detalharDespesa,
    criarDespesa,
    atualizarDespesa,
    deletarDespesa,
    despesasPorTipo,
    DespesasMes
}