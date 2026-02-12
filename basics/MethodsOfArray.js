//let array = [2,3,4,5,6];
let number = new Array(4,2,5,6,7,8,9);

//push()-it will the add the element at the of the array
number.push(10);
//pop()-removes thelemnet from then end of the array
number.pop();
//shif()-removes the element from starting of the array
number.shift();
//unshift()-adds the element to the start
number.unshift(0);
console.log(number);//4  will be removed
//Array.of()-return the array of an object
let num = Array.of(3,4,5);

//splice()-it delete the number of carray at specific loaction
num.splice(0,1,1);
console.log(num);

let fruits = ['mango','banana','grapes','orrange','mango','kiwi'];
//fruits.splice(0,0,'apple')
fruits.splice(1,1,'cherry');//['apple','cherrey,mango]
console.log(fruits);
let num1=[2,3,4,5];
//slice()-startindex,endIndex=>(endIndexlength)-startIndex
let newarry=num1.slice(1,2);//length=2-1=1
console.log(newarry);
//indexOf()-returns the array of the first index
console.log(fruits.indexOf('mango'));
//forEach()
let num2=[10,11,12];
let num3=[3,5,6,7,8,9];
num3.forEach(element => {
    console.log(element);
});
let num4=num2.concat(num3);
console.log(num4);

//map()-return new array-transfoms each element
let num5=num2.map(ele=>ele*2);
console.log(num5);

// let num6=[3,5,7,9,4];
// //filter()-keeps the elements that meets the condition(return new array)
// let num7=num6.filter(n=>n%2===0);
// console.log(num7);

let num6=[3,5,7,9,4];
// reduce-reduce array to single value
let num8=num6.reduce((num8,n)=>(num8+n,0));
console.log(num8);

//includes()
let fruit = ["apple", "banana", "cherry"];

console.log(fruit.indexOf("banana")); // 1
console.log(fruit.includes("grapes")); // false

//join()
let fruitas=["banan","mango","cherry"];
console.log(fruitas.join("-"));

//reverse()
let num9=[3,4,5,6,7,8,9];
console.log(num9.reverse());

//find()
let num10=[10,21,34,45,67,42,25];
let firstNum=num10.find(num=>num>25);
console.log(firstNum);

//every() – Checks if all elements satisfy a condition
let num11=[2,4,3,8];
let evenNum=num11.every(num=>num%2===0);
console.log(num11);//return true with all even number on the console

let mixedNumber=num11.every(num=>num%2==0);
console.log(mixedNumber);//false

//some()--Checks if any element satisfies a condition
let numbers = [1, 3, 5, 8];
// Check if there is at least one even number
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true
// If none satisfies the condition, returns false
let oddNumbers = [1, 3, 5];
console.log(oddNumbers.some(num => num % 2 === 0)); // false
let fruita = ["banana", "apple", "cherry"];
fruits.sort(); // ["apple", "banana", "cherry"]

let number12 = [10, 2, 33, 4];
number12.sort((a, b) => a - b); // [2, 4, 10, 33]