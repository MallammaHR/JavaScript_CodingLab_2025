//arrow functions: which is written with arrow(=>)
    //no function name
    //also called as anonympouse function
    //no need to write function() keyword also

let print = ()=> {
    console.log("I run immediately!");
}
print();
// ()();


(function () {
  console.log("I run immediately!");
})();

(function test() {
  console.log("I run immediately!");
})();

( ()=>{
  console.log("I run immediately!");
})();


    
 let openBrowser=browserName => {
        switch(browserName){
            case 'chrome' :
                console.log('Launch Chrome');
                return true;
            
            default :
                console.log('invalid browser '+browserName);
                return false;
        }

  }

  let flag = openBrowser('chrome');
  console.log(flag);


