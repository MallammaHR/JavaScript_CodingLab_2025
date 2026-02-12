//Synchronous Callback
function add(a,b){
    return a+b;
}
function calaculator(a,b,operation){
return operation(a,b);
}

let s1=calaculator(2,4,add);

console.log(s1);

//Asynchronous Callback
 function getMarks(fun){
   fun(200);
    return 500;
 }

let s2= getMarks((num)=> {
    console.log(num);//200
});
console.log(s2);//500