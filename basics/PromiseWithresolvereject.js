let promiseErorr=new Promise((resolve,reject)=>{
    reject('Something went to wrong....')
});

promiseErorr.catch(error=>{
    console.log(error);
});