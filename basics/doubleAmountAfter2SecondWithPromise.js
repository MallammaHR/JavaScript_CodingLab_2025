function doubleAmountAfter2Sceond(x)
{
    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve(x*2);},2000);

    })

};
doubleAmountAfter2Sceond(5).
            then(result=>{console.log(result);//10
                return doubleAmountAfter2Sceond(result);
            }).then(result=>{
                console.log(result);
            
});