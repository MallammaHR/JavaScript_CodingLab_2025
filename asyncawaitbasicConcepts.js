//1.async function with zero paramater
//1. async function can have zero await
//It still returns a Promise
//No await is required
async function foo(params) {
    console.log('Hi');
    
}
foo();

//2.async function with parametr
async function test(name) {
    console.log('Hi, '+name); 
}
test('Mallu');

//3.If you use await, the function must be async
await fetchData();
async function food() {
    await fetchData(); // ❌ SyntaxError
}
food('Vegartables');

//await ➜ needs async
//async ➜ does NOT need await

async ({page}) => {
  await fetchData(); 

}

//function Expression inside IIFE

(function(){
    function sayHi(){
        console.log('say hi....');
    }
    sayHi();
})();

//2. About assigning the IIFE to a variable
//The IIFE itself executes immediately. Whatever it returns is what gets assigned.
let rest = (function() {
    return function() {
        console.log('Hi');
    };
})();

rest(); 



