//a function without name
//an anonmousy function should be assigned to the external variables
//to call the anonu=ymous function we shoul;d call the external varaibale
//anaounymous function cannot be hoisted
//say();--cannot be hoisted
  let say=function test(){
    console.log('I am Anonyous function and i dont have name and you cann acess me by assisgnin ght e external varaiabel');
  }

  
say();

let add=function(a,b){
    return a+b;
}
let s1=add(4,5);
console.log(s1);