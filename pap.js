const fs=require('fs');
const zlib=require('zlib');
const gunzip=zlib.createGunzip(); 
const readStream= fs.createReadStream('./input2.txt.gz','utf8');
const writeStream= fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);
//