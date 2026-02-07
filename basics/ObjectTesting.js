//creating the object  by using class(constructor way)
//reuauablity
//structred and scalbale
//we can create as manay objects as we wnat

class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }


}

//create the product using the new-keyword
let p1=new Product('MacBook',100);
console.log(p1.name);
console.log(p1.price);