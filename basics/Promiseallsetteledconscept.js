let p1= new Promise((resolve,rekject)=>{

    setTimeout( ()=>{
    resolve('p1-pass..')
    }, 2000);

});

let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('p2-pass..')
    }, 4000);

});

let p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject('p2-fail..')
    }, 4000);

});

Promise.allSettled([p1,p2,p3])
    .then(result=>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error);
    }).finally(()=>{});