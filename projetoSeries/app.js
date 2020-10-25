const express = require('express');
const app = express();

let series = [{id:1,name:"Friends"},{id:2,name:"Breaking Bad"},{id:3,name:"Dexter" },{id:4,name:"Six Feet Under"}];

//Devolve a série de acordo com o id solicitado
app.get("/serie/:id", (req, res)=>{
    let {id} = req.params;
    res.send(series[id-1]);
});

app.listen(2000,()=>console.log('servidor rodando na porta 2000'));