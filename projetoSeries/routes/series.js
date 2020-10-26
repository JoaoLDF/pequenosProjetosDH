const express = require('express');
const router = express.Router();
let series = require("../data/json");

router.get('/', (req,res) => res.send('Página Home'));
router.get('/genero/:genero?', (req,res) => {
    let {genero} = req.params;
    res.send(series.filter((item)=>item.genero == genero));
});
router.get('/criar', (req,res) => {res.send("Página para Cadastrar uma série")});
router.get("/serie/:id", (req, res)=>{
    let {id} = req.params;
    res.send(series[id-1]);
});

module.exports = router;