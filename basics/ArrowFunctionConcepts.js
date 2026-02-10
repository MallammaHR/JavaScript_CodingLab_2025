//1.single Expression 
const print=()=>console.log('Hi,Mallu');
print();

//2.Single Expression Eith Parameter
let name='Mallamma';
const greet=(name)=>console.log(`Hi,${this.name}`);
greet();

//3.arrow function with multiple parameter
const add=(a,b)=>a+b;
console.log(add(3,3));

//4.arrow functions with MultipleParamater
const sum = (a, b) => a + b;
console.log(sum(5, 3)); // 8
//5.Single Expression Eith Parameter
const addAndLog = (a, b) => {
    const sum = a + b;
    console.log('Sum is', sum);
    return sum;
};

addAndLog(5, 10); 
// Sum is 15

const createUser = (name, age) => ({ name: name, age: age });
console.log(createUser('Mallu', 30));

//6.single expresion wit parameter
let even=(num)=>num%2 === 0 ;
even(2);
console.log(even(4));

//7.
const result = (() => 10 * 2)();
console.log(result);

//8 Arrow functions do not have their own this.
(() => {
    console.log(this);
})();

//9
(function() {
    console.log(this);
})();

//10 ..args
((...args) => {
    console.log(args);
})(1, 2,3);
//11
(() => {})(); // ✅


//function() => {}