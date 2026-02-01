let myPromise = new Promise((resolve,reject)=>{
    let success= true;

    if(success)
    {
        setTimeout(() => {
    if (success) {
      resolve("cake is ready 🍰");
    } else {
      reject("cake is not ready ❌");
    }
    }, 5000);
}

});

myPromise.then(result=>{
    console.log(result);

}).catch(error=>{
    console.log(error);
}).finally(()=>{
    console.log("Finally ...");
})