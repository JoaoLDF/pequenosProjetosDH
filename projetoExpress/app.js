const express = require('express');

let app = express();

app.get('/', (req,res)=>res.send('Olá Mundo!'));
app.listen(3000,()=>console.log('servidor rodando na porta 3000'));