function getProductDetals(productData){//productdata=
    console.log(productData);
    productData.price=2000;

}

let product={//only one object and tow object reference:productData,product
    name:'macbook pro',
    brand:'apple',
    stock:'in-stock',
    price:1000

};

getProductDetals(product);//call by refernce
console.log(product.price);