// let i =1
// let sum =0;
// while(i<=100){
//     sum += i;
//     i++
// }
// console.log(sum);
// //create a loop for multiplication of 5
// let sum1=0;
// for(let i =1;i<=10;i++){
//     sum1 = i*5;
//     console.log(`5*${i} = ${sum1}`);
   
// }

//Write a loop to count vowels in a string


//let st = "HE LLO" let count=0; let vowels ="aeiouAEIOU" for(let i =0;i<st.trim().toLowerCase().length;i++){ if(vowels.includes(st[i])){ count++; } }
let st = "HE  LLO";
let vowels = "aeiouAEIOU";
let vCount = 0;
let cCount = 0;

for (let i = 0; i < st.length; i++) {
    let ch = st[i];

    if (ch === " ") continue; // ignore space

    if (vowels.includes(ch)) {
        vCount++;
    } else {
        cCount++;
    }
}

console.log("Vowels:", vCount);       // 2
console.log("Consonants:", cCount);   // 3
// //Create a loop to reverse a number
// let num = "8765";
// let revnum ="";
// for(let i =num.length;i<=num.length;i--){
//     revnum = num[i];
   
// }
// console.log(revnum);