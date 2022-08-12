

const model = require('../model/receitasModel.js');



const listarReceitas = async () => {
   const resultadoQuery = await model.listarTodasReceitas();
   return resultadoQuery;
};


const detalharReceitas = async (id) => {
    const resultadoUmaReceita = await model.detalharUmaReceita(id);
    return resultadoUmaReceita;
};


const criarReceitas = async (descricao, valor) => {
    const novaReceita = await model.criarUmaReceita(descricao , valor );
    return novaReceita;
};



const atualizarReceita = async (descricao , valor , id) => {
    const receitaAtualizada =  await model.atualizarUmaReceita(descricao, valor , id);
    return receitaAtualizada;
}; 

const deletarReceita = async (id) => {
    const receitaDeletada = await model.deletarUmaReceita(id);
    return receitaDeletada;
}

const listarPorTipo = async (descricao) => {
    const receitasPorTipo = await model.listarPorTipo(descricao);
    return receitasPorTipo;  
}

const listaPorMes = async (ano, mes) => {
    const listaMes = await model.receitasPorMes(ano , mes);
    return listaMes;
}

module.exports = {
    listarReceitas,
    detalharReceitas,
    criarReceitas,
    atualizarReceita,
    deletarReceita,
    listarPorTipo,
    listaPorMes
}