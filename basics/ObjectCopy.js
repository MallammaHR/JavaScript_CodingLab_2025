let user={
    name:'TOM',
    city:'LA'
};
console.log(user);
let person={...user};
person.city='Bombay';
console.log(person);
console.log(user);//even if we make changes with new object that we have copies it woill not effect the prmary object
//whatever changes we make with second object ,i will not effect the  first obejct


// console.log("---------------------------------------------------");
// //incas of array aslo we can copy from one array object to another 
// let first=[2,3,4];
// let second=[...first];
// console.log(second);

