//1.Assignment Operator(=)
let x =5;
console.log(x);
console.log(typeof(x));
console.log('*************************************************');
//2.Loose Equality(==)(comspres the vlaue and ignore the data type)
let a=5;//number
let b='5';//string
console.log(a == b);//true
console.log(1 == true);//true
console.log(null == undefined);//true
console.log('*************************************************');
//3.strict egality(===)(comapre the both claue and data tye and No tpe conversion is applocabel)
let c = 5;//number
let d = '5';//string
console.log(5 === 5);//true
console.log(c === d);//false ->differnt data types
console.log(1 === true);//false
console.log(null === undefined);//false
