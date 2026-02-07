let user={
    name :'Bunny',
    age:40,
    status:'active',
    isActive:true,
    address:{
        city:'LA',
        zip:56017,
        area:{
            areaName:'newarea'
        }
    }

};

for(let key in user){
 
     if (typeof user[key] === 'object' && user[key] !== null) {
        for (let nestedKey in user[key]) {
            console.log(user[key][nestedKey]);
        }
    } else {
        console.log(user[key]);
    }
}


//let userKeys=Object.keys(user);
// console.log(userKeys);//fecthing the keys
// let userValues=Object.values(user);
// console.log(userValues);

