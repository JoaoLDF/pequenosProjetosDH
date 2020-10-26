const express = require('express');
const app = express();
const rotasSeries = require("./routes/series")

app.use('/', rotasSeries);
app.use('/genero/:genero', rotasSeries);
app.use('/criar', rotasSeries);
app.use("/serie/:id", rotasSeries);

app.listen(2000,()=>console.log('servidor rodando na porta 2000'));