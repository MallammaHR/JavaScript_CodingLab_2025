let u1 = {
    name :"roopa",
    age : 40,
    status : "active"
};
let u2 = {
    name :"jhon",
    age : 30,
    status : "active"
};
let u3 = {
    name :"guna",
    age : 35,
    status : "inactive"
};
let u4 = {
    name :"shnau",
    age : 35,
    status : "inactive"
};
 console.log(u1);//roopa
 console.log(u2);//jhon
 console.log(u3);//guna
 console.log(u4);//shanu
 console.log("===========");
 u1=u2
 console.log(u1);//jhon
 console.log(u2);//jhon
 console.log(u3);//guna
 console.log(u4);//shanu
 console.log("===========");

 u2=u3
 console.log(u1);//jhon
 console.log(u2);//guna
 console.log(u3);//guna
 console.log(u4);//shanu
 console.log("===========");
 u3=u4
 console.log(u1);//jhon
 console.log(u2);//guna
 console.log(u3);//shanu
 console.log(u4);//shanu
 console.log("===========");
 u4=u1
 console.log(u1);//jhon
 console.log(u2);//guna
 console.log(u3);//shanu
 console.log(u4);//jhon