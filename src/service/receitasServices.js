

const model = require('../model/receitasModel.js');



const listarDespesas = async () => {
   const resultadoQuery = await model.listarTodasReceitas();
   return resultadoQuery;
};


const detalharDespesas = async (id) => {
    const resultadoUmaReceita = await model.detalharUmaReceita(id);
    return resultadoUmaReceita;
};


const criarDespesas = async (descricao, valor) => {
    const novaReceita = await model.criarUmaReceita(descricao , valor );
    return novaReceita;
};



const atualizarDespesa = async (descricao , valor , id) => {
    const receitaAtualizada =  await model.atualizarUmaReceita(descricao, valor , id);
    return receitaAtualizada;
}; 

const deletarDespesa = async (id) => {
    const receitaDeletada = await model.deletarUmaReceita(id);
    return receitaDeletada;
}


module.exports = {
    listarDespesas,
    detalharDespesas,
    criarDespesas,
    atualizarDespesa,
    deletarDespesa
}