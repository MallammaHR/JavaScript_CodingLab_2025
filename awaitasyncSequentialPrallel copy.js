async function getUser() {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve([
                {id:1,name:'MalluMani'}])
        },1500)
    })
}

async function getOrders(){
    return new Promise(resolve=>{
        let sucess= false;
        if(sucess){
                  setTimeout(()=>{
            resolve([
                
                { orderId:101,orderName:'LapTop'},
                { orderId:102,orderName:'MacBook-Pro'}
            ])
        },2000)

        }
  
    })
}


async function sequential(){
    let user=await getUser();
    let order=await getOrders();
    console.log([user,order]);
}

sequential();


async function Parallel()
{
    let myUser =  getUser();
    let myOrders = getOrders();

    let [user,orders] = await Promise.all([
        myUser,
        myOrders

    ]);
    console.log(user);
    console.log(orders);
}
//Parallel();