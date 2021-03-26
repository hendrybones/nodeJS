const fs=require('fs');
fs.mkdir('tutorial',(err)=>{
    if(err)
    console.log(err);
    else
    fs.writeFile('./tutorial/example.t','123',(err)=>{
        if(err)
        console.log(err);
        else{
            console.log('succesfully created file');  
        }
    });
    //this is to delete a folder

    // fs.rmdir('tutorial',(err)=>{
    //     if(err)
    //     console.log(err)
    //     else
    //     console.log('successfully deleted');
    // })
    // console.log('succesfully created a folder');
    
})