//1.Hoisted and named 
function test(){
    console.log("test-hoisted");
}
//test();

//2.function with expression

let test1= function(){
    console.log("test1-not hoisted ");
}
//test1();

//3.Arrow Function(//❌ No this, argument, Not hoisted)
const test2 = () => {
    console.log("test2-not hoisted");
    };

    //test2();

//4.Anonymous Function
setTimeout(function () {
  console.log("as-a callback");
}, 1000);
//as -array
let nums = [1, 2, 3];
nums.map(function (n) {
  return n * 2;
});
//5.Parameterized Function
function test3(emailId) {
    console.log(`enter-emailID : ${emailId}`);
}

test3('mallumani123@gmail.com');