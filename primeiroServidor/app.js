const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html;charset=utf-8'});
    switch(req.url){
        case '/':
            res.end('Index');
            break;
        case '/contato':
            res.end('Contato');
            break;
        default:
            res.end('404 not found');
            break;
    }
}).listen(3000);