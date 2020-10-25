const express = require('express');
const app = express();

let series = [{id:1,name:"Friends"},{id:2,name:"Breaking Bad"},{id:3,name:"Dexter" },{id:4,name:"Six Feet Under"}];

app.get("/serie/:id?", (req, res)=> {
    let {id} = req.params;
    let filtro = series.filter((item) =>item.id == id);
    filtro.length>=1?filtro.forEach((item)=>res.send(item.name)):res.send("id não cadastrado");
});

app.listen(2000,()=>console.log('servidor rodando na porta 2000'));