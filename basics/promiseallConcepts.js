let promise1 = new Promise((resolve,reject)=>{
    resolve('promise-1 is passed');
})
let promise2 = new Promise((resolve,reject)=>{
    resolve('promise-2 is passed');
})
let promise3 = new Promise((resolve,reject)=>{
    reject('promise-3 is failed');
})
Promise.all([promise1,promise2,promise3])
        .then((result)=>{
            console.log(result);
            console.log(("all-promises are done..."));
        })
        .catch((error)=>{
            console.log(error);
            console.log('FAILED...');
        })
