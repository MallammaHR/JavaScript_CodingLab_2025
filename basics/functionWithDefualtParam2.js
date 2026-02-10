function print(name='Mallu'){
    console.log('hi '+ name);
}
print();
print('MalluMani');
console.log("***************************************");
function multiply(a=0,b=0){
    console.log(a*b);
}
multiply();
multiply(3,4);
multiply(4,0);
console.log("***************************************");
/**
 * 
 * @param {string} browserName 
 */
function openBrowser(browserName='chrome'){
    switch (browserName) {
        case 'chrome':
             console.log('Browser is Launched on the -chrome');
             break;
        case 'firefox':
            console.log('Browser is Launched on the -firefox');
            break;
        case 'edge':
            console.log('Browser is Launched on the -edge');
            break;

        default:console.log('invlaid browser,hence running on the chrome broswer');
            break;
    }
}
openBrowser('ie');