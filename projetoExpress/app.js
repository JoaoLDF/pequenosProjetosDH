const express = require('express');

const app = express();


let produto = {
    tipoProduto: null,
    preco: null,
    quantidade: null
  }
  
app.post("/produto/criar", (req, res)=> res.send(produto = {tipoProduto:"living", preco:1245, quantidade:300}));
app.get('/produtos/:id?', (req, res)=> {
    let {id} = req.params;
    console.log('estou no id: ', id);
});
app.get('/', (req,res)=>res.send('Olá Mundo!'));
app.listen(3000,()=>console.log('servidor rodando na porta 3000'));