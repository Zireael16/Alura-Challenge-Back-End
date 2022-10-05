

//  Importa o service
const resultadoService = require('../service/resumoServices.js');

// Traz o balanço de despesas e receitas do mês

const balancoDoMes = async ( req , res ) => {

    try{

        const { ano , mes } = req.params;

        const balanco =  await resultadoService.balancoDoMes(ano , mes);
        res.status(200).json(balanco);

    }   catch (error) {

        res.status(500).json( { error : error.message } );

    }
};


// Exporta a função

module.exports = {
    balancoDoMes
}