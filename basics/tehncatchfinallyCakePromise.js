let cakePromise = new Promise((resolve,reject)=>{
    let success = false;
    if(success)
    {
        resolve("cake is ready...");
    }
    else{
        reject("Sorry i was Sick ..i could not make make...")
    }
});

cakePromise.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
}).finally(()=>{
    console.log("lets have a party...");
})