function getUser(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             let success = false;

             if(success)
             {
                resolve('Mallamma')
             }
             else
             {
                reject('404-Not found');
             }

            },2000);
        })
}

// getUser().then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// });

async function showDetails()
{
    let user = await getUser();
    console.log(user);
}
showDetails();



