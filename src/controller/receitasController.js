

const ServiceReceita = require('../service/receitasServices.js');


const listaReceitas = async (_ , res) => {
    const resultadoReceita = await ServiceReceita.listarReceitas();
    res.status(200).json(resultadoReceita.rows);
}

const detalhaReceita = async (req , res) => {

    const { id } = req.params

    const listarUmaReceita = await ServiceReceita.detalharReceita(id);
    res.status(200).json(listarUmaReceita.rows);
}

const criaReceita = async (req , res)  => {
    const { descricao , valor } = req.body
    await ServiceReceita.criaReceita(descricao,valor)
    res.status(201).send({Message : 'Receita Criada com Sucesso!'})

}

const atualizaReceita = async ( req , res ) => {
    const { descricao , valor } = req.body;
    const { id } = req.params;
    await ServiceReceita.atualizaReceita(descricao,valor , id);

    res.status(200).send( {message : 'Receita Atualizada com Sucesso!'} );
}

const deletaReceita = async (req , res) => {
    const { id } = req.params;
    await ServiceReceita.deletaReceita(id);

    res.status(200).send( {message : 'Receita Deletada com Sucesso!'} );
}
module.exports = {
        listaReceitas,
        detalhaReceita,
        criaReceita,
        atualizaReceita,
        deletaReceita
}