let greet= function(name="Mallu"){
    console.log('Hi, '+name);
}
// greet();
// greet('Alex');


let test= function(a=0,b=0){
    return a+b;
}
console.log(test());//0
console.log(test(2));//2
console.log(test(2,3));//5

function print(name) {
    name = name || "Guest";
    console.log("Hello " + name);
}
print('Mani');


