//3.dont wait for anytging ,just proceed : dont use await while calling 
function senEmailNotification(emailID){
    if(emailID ==='null') break;
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(`email has been sent to ${emailID}`);
        },1500);

    })
}
//calling it :withot await
senEmailNotification(null);
console.log('checkout the order ...Done!!!!!!!!!!!');