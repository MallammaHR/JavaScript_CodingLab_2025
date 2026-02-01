//callback hell:pyrmid of doom


//callback:example
function startMachine(callback){
    console.log("starting the machine --------");
    callback();
}

//callback using arrow function
startMachine(()=>{
    console.log("Done!!!");
});

//call back function using anonymous function (a function but without function name )
startMachine(function() {
    console.log("Pass!!!!");
})