//An object is collection of properties:key-value
//suppose if we want to create only one object and quick and simple way then we can  
//create it by using lterals and here only one object will be created there is no resuablitity
//key==alwyas string
//value=anything

let user = {
    name:'TOM',
    age:30,
    status:'active',
    isEmployed:true
};
//1.using user.
// console.log(user.name);
// console.log(user.age);
// console.log(user.status);
// console.log(user.isEmployed);
// console.log(user);

//add more groups
user.city='LA';
console.log(user);

//delete specific property
delete user.isEmployed;
console.log(user);
console.log(user.isEmployed);//undefined
if(user.name==='TOM'){
    console.log('pass');
}
//iterate the obeject properties
//using for..in loop

let car={
    name:'bmw',
    price:40,
    model:'xl',
    color:'red'
};
for(let key in car){
    console.log(key + ':'+ car[key]);
}

//which object is eligible for garbage collector
//the object which is having null refernce 
let person = {
    name:'Bunny',
    age:30
};
console.log(person);
person=null;//eligible for garbage collector
console.log(person);