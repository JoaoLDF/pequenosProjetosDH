const fs = require('fs');
const moment = require('moment');
const superHeroes = require('./superHeroes');

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');
let data = moment().format('MMM do YY');

console.log(superHeroes);