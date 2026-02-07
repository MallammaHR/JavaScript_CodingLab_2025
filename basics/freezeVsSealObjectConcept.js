

let user ={
    name:'Mallu',
    city:'Puebla',
};
//freeze -add/delete cnanot be done modificationnexixitinf also not done
Object.freeze(user);
//user.city='LA';//update also cannot be done
//delete user.name;

//seal
let person={
    name:'MallUmani',
    age:45,
};
Object.seal(person);
person.age=34
//person.salary=12.33//not allowed
delete person.age;


