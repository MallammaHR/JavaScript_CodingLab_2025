//pedning
//fullfiled--resolved---it will be given to then()
//rejecetd-error--it will be given to catch()
 
let myPromise= new Promise((resolve,reject)=>{
    console.log("Start the promise-----------------");
     let success = false;
     if(success)
     {
        resolve('training is done...........')
     }
     else{
        reject('failed.......')
     }

});

myPromise.then(result => {
     console.log(result);
}).catch(error =>{
    console.log(error);
});


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