//pedning
//fullfiled--resolved---it will be given to then(),i willgive the value 
//rejecetd-error--it will be given to catch(),i will give the erre why 
 
let myPromise= new Promise((resolve,reject)=>{
    console.log("Start the promise-----------------");
     let success = true;
     if(success)
     {
        resolve('training is done...........')
     }
     else{
        reject('failed.......')
     }

});
myPromise.then(result=>{
    console.log(result);
}).then(error=>{
console.log(error);
}).finally(()=>{
    console.log('lets Go home....');
});

//example-2
let cakePromise = new Promise((resolve,rejected)=>{
    console.log("let start making the cake....");

    let success = false;
    if(success)
    {
        resolve('cake is ready!!!');
    }
    else{
        rejected('sorry i was sick');
    }
});

cakePromise
.then(result =>{
    console.log(result);
}).catch(error=>{
    console.log(error);
}).finally(()=>{
    console.log('lets have a party.....');
})