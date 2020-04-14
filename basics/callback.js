// console.log('callbacks')
// Not available in JS library, so we have to define the sleep function explicitly..
function sleep(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

function synch(){
    console.log('do some sync functinality');
    sleep(5000)
    return "success"
}

// console.log('starting...')
// var result = synch();
// console.log(result)
// console.log('finished...')

// asynch function will wait for 5 sec and then execute.
function asynch(callback){
    setTimeout(()=>{
        console.log('do some sync functinality');
        sleep(5000)
        callback("success")
        // return "success"
    }, 0)   
}

console.log('starting...')

function callback(result){
    console.log(result)
}

// var result = asynch((result)=> console.log(result));
var result = asynch(callback);
console.log(result)
console.log('finished...')