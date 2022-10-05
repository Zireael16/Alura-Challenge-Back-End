


const express = require('express');
const app = express();
app.use(express.json());
const receitasRouter = require('./src/routes/receitasRoutes.js');
const despesasRouter = require('./src/routes/despesasRoutes.js');
const resumoRouter = require('./src/routes/resumoRoutes.js');
const usuarioRouter = require('./src/routes/usuarioRoutes.js');

app.use('/receitas' , receitasRouter);
app.use('/despesas' , despesasRouter);
app.use('/resumo' , resumoRouter);
app.use('/usuario' , usuarioRouter);


const PORT = process.env.PORT || 8001;
app.listen(PORT , () => {
    console.log(`app is running on port ${PORT}`)
});
