


const express = require('express');
const app = express();
app.use(express.json());
const receitasRouter = require('./src/routes/receitasRoutes.js')
const despesasRouter = require('./src/routes/despesasRoutes.js')


app.use('/receitas' , receitasRouter);
app.use('/despesas' , despesasRouter)


const PORT = process.env.PORT || 8000;
app.listen(PORT , () => {
    console.log(`app is running on port ${PORT}`)
});
