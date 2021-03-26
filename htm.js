const http=require('http');
server=http.createServer((req,res)=>{
//     const readStream=fs.createReadStream('./static/ind.html');
//     res.writeHead(200,{'content-type':'text/html'});
//     readStream.pipe(res); 
//     // if(req.url=== '/'){
    //     res.write('hello world rfom hendry');
    //     res.end();
    // }
    // else{
    //     res.write('using some other domain');
    //     res.end();
    // }
// res.write('hello world rfom hendry');
// res.end();
});
server.listen('3000');