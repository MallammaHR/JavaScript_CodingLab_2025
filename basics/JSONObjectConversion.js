let person={
    name:'TOM',
    age:40,
    salary:13.44,
    isActive:true,
    status:'pending'
};
console.log(typeof(person));//objcet
let personJSON=JSON.stringify(person);
console.log(personJSON);
console.log(typeof(personJSON));//string