let myPromise = new Promise((resolve,reject)=>{
    console.log("Success....");
    let success = true;
    if(success)
    {
        resolve('training is Done!!!! ...')
    }
    else{
        reject('cancelled...')
    }

});

myPromise.then(result=>{
    console.log("Resolved ,",result);
}).catch(error=>{
console.log("Rejeceted,",error);
}).finally(()=>{
    console.log("Finised  ");
});

//Want to do Promise chaining output questions, or jump to Promise.all vs race (very common interview comparison)?