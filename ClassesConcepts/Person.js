class Person{
   
    // constructor()//possible
    // {
        
    // }
//     constructor(name,age)
//     {
//        this.name=name;
//        this.age=age;
//     }
//    /**
//     * @param {number} speed
//     */
//    drive(speed){

//         console.log(` ${this.name} is driving at ${speed} km/hr`);
//     }

    getAddres()
    {
        return 'Banaglore-India';
    }


}

//creat the object:we can create the object of the Person class using new-keyword
let p1=new Person('Mallu',15);
console.log(p1.name);
console.log(p1.age);
console.log(p1);

p1.drive(120)
let addres=p1.getAddres();
console.log(addres);

// let p2= new Person();//GC
// console.log(p2.name);
// console.log(p2.age);


