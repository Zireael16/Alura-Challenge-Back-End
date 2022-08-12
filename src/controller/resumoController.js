


const resultadoService = require('../service/resumoServices.js');


const balancoDoMes = async ( req , res ) => {
    const { ano , mes } = req.params;
    const balanco =  await resultadoService.balancoDoMes(ano , mes);

    res.status(200).json(balanco);

};


module.exports = {
    balancoDoMes
}