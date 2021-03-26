const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    const readStream=fs.createReadStream('./static/ind.html');
    res.writeHead(200,{'content-type':'text/html'});
    readStream.pipe(res); 

});
server.listen('2000');