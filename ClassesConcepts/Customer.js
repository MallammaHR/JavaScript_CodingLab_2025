class Car{
    //name-public
    //price-private
    #price;
     constructor(name,price)
     {
        this.name=name;
        this.#price=price;
     }

     testDrive()
     {
        console.log(this.#price);
     }

     //public
     getPrice()
     {
        return this.#price;
     }

     setPrice(price)
     {
        this.#price=price
     }

     //OOP:Encapsulation:private data of the class can be accessed using public method

}

let c1=new Car('BW',40);
console.log(c1.name);
//console.log(c1.#price);//error coz of private(#)
//c1.testDrive();

let price=c1.getPrice();
console.log(price);//40

c1.setPrice(80);
console.log(c1.getPrice());
