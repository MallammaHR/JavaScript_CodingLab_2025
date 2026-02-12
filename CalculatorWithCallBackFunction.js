let sum =(a,b)=>a+b;
let sub =(a,b)=>a-b;
let div =(a,b)=>a/b;
let mul =(a,b)=>a*b;

//actual caluclator function
function caluclator(a,b,opertaion){
    return opertaion(a,b);
}
 //calling the respection opertions
let result=caluclator(10,20,sum);
console.log(result);
