

const resumoModel = require('../model/resumoModel.js');


const balancoDoMes = async (ano , mes) => {
    const resultadoModel =  await resumoModel.resumoMes(ano , mes)
    return resultadoModel;
}

module.exports = {
    balancoDoMes
}