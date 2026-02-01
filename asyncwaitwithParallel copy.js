
async function getUser(){
    return new Promise((resolve)=>{
         setTimeout(()=>{
            resolve([{id:'1',name:'Mallamma'}])
         },1500);   
    })
}




async function getOrders(){
     return new Promise(resolve=>{

        setTimeout(()=>{
            resolve([
                {orderId : 101,item:'LapTop'},
                 {orderId : 102,item:'Mac'}])
        },1500);
     });
}

// async function main() {
//     let orders = await getOrders();
//     console.log(orders);
// }

// main();
let myUser  = getUser();//1.5
let myOrders = getOrders();//2

// //after resolved fetch the value using Promise.all()
// let [user,order] = await Promise.all([myUser, myOrders]);
// console.log(order);


// let data= await Promise.all([myUser,myOrders]);
// console.log(data);


