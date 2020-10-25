const express = require('express');
const app = express();

let serie = [{id:1,name:"Friends"},{id:2,name:"Breaking Bad"},{id:3,name:"Dexter" },{id:4,name:"Six Feet Under"}];
const seriePorId = (array, idReq) =>{
    let resultado = array.filter((item) =>item.id == idReq);

    if (resultado.length !== 0){
        return resultado[0]
    } else {
        return "Esta página não existe";
    }
}

app.get("/", (req, res)=> res.send("Você está no index"));
app.get("/serie/:id?", (req, res)=> {
    let {id} = req.params;
    console.log(id);
    res.send(seriePorId(serie, id));
});

app.listen(2000,()=>console.log('servidor rodando na porta 2000'));