const fs = require ('fs');
const readStream = fs.createReadStream('./input txt .gz');
readStream.on('data', (chunk)=>{
    console.log(chunk);
});