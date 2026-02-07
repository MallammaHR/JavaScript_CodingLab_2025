//simple function:no input and no-return type
//simple function:no input and no-return type

//named function
function test(){
    console.log('I-m named function');
}
test();

//hoisting for function

rest();
function rest(){
    console.log('i am taking rest');
}

//function with input but no return type
function add(a,b){
    console.log('Adding two numbers : ');
    let c=a+b;
    console.log((c));
}

add(19,23);
/**
 * 
 * @param {string} name 
 */
function getTraineName(name){
    console.log('My trainer name : '+name);
}

getTraineName('Mallu');

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
//function with input and no-return type
function sum(a,b){
    let sum = a + b;
    return sum;
}

let s = sum(100,200);
console.log(s); // 300

//ac:create a function which will take paramaeter
//parameter is browsername:chrome/firefox/edge
//return :true/false
//true:if the browswer is available
//flase:if the borswer is launched

/**
 * 
 * @param {string} browserName 
 */
function isBrowserLaunched(browserName){
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('chrome is launched');
            return true;
        case 'chrome':
            console.log('chrome is launched');
            return true;
        case 'chrome':
            console.log('chrome is launched');
            return true;
         case 'chrome':
            console.log('chrome is launched');
            return true;
            break;
    
        default:
            break;
    }

}