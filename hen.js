const EventEmitter =require('events');
const eventEmitter =new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
}); 
eventEmitter.emit('tutorial',1,2);

class person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }
    get name(){
        return this._name;
    }
}

let hendry= new person('hendry');
let marietha=new person('marietha');
marietha.on('name',()=>{
    console.log('my name is' + marietha.name);
})
hendry.on('name',()=>{
    console.log('my name is' + hendry.name);
});
hendry.emit('name');
marietha.emit('name');