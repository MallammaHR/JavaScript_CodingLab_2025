let vowelCount = 0;
let consCount = 0;
let str = "MALL   AMMA";
 let vowels ="aeiouAEIOU";

for(let i = 0;i<str.length;i++)
{
    let ch=str[i];
    if(ch = " ") continue;
    if(vowels.includes(ch))
    {
        vowelCount++;
    }
    else
    {
        consCount++;
    }
}
 console.log(vowelCount);
 console.log(consCount);