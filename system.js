const fs=require('fs');
 //creater a file
//  fs.writeFile('example.t', "this is an example",(err)=>{
//      if(err)
//      console.log(err);
//      else{
//         console.log('file created');
//         fs.readFile('example.t', 'utf8' ,(err,file)=>{
//             if(err)
//             console.log(err);
//             else
//             console.log(file);
//         })

//      }
     
//  });
// fs.rename('example.t', 'example2.t',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('succefully rename');
// });

// fs.appendFile('example2.t', 'some data appended',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('succesfully appended data to file');
// })

fs.unlink('example2.t',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('succesfully deleted');
})