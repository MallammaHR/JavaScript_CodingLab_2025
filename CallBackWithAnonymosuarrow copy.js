//call back
function getInfo(callback){
    console.log("Getting some Info....");
    callback();
}

//arrow function
getInfo(()=>{
    console.log("Getting...");
});

//anaonumyos function but no-name
getInfo(function() {
    console.log("Getting...");
});

 function getMarks(callback){
    console.log("hi!! getting marks....");
   // callback(200);
    return 500;
 }

let s1= getMarks((num)=> {
    console.log(num);
});
console.log(s1);


function getMyInfo(callback){
console.log("getting my details...");
callback();
}

getMyInfo(()=>{})


function getMyMarsk(callback){
    console.log("getting My marks....");
    callback(800);
    return 400;
}

let m1=getMyMarsk(function(num){
    console.log(num);
})
console.log(m1);


//open the ur without call function
function openPage(url){
    console.log("open the Url : " + url);
    return true;
}

let page = openPage("https://www.google.com");
console.log(page); // 



//open the ur with callback function
function lunchBrowser(url,callback){
    console.log("open the url : "+url);
    let broswer = callback('Amzon Login Page');
    console.log(broswer);
    return true;
}

 let page1=lunchBrowser('https://www.google.com',(title)=>{
    console.log("Getting the page title..."+title);
    return 'chrome';
 })
 console.log(page1);