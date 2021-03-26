const fs=require('fs');
const readStream= fs.createReadStream('./input.txt','utf8');
const writeStream= fs.createWriteStream('input2.txt');
readStream.pipe(writeStream);