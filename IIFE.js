//IIFE-Immediately invoked function expression:no-name-similar to anonymosu function
//1.anonymous IIFE function but no name
(function(){
    console.log('start the serever...');
})();

//2.anonymous IIFE function with name
(function test (){
    console.log('start the serever...');
})();//but the name we cannot call outside 

(function countdown(n) {
    if (n > 0) {
        console.log(n);
        countdown(n - 1); // works because it has a local name
    }
})(3);

// //IIFE with parameter
(function(name){
    console.log(name);
})("TOM");


// //IIFE-does not return anf if we want to reutrn something then we have to return from the function expression
let newEmpName=(function(empName){
    return empName.toUpperCase();
})('Roopa');
console.log(newEmpName);

//IIFE canot be used as resuable function and hwich has no name and has no function expression

//IIFE -doenot support the function expresssion
//But i can retrun something fro IIFE function 
//we have to store in a varaible  if we want to return something from IIFE function

