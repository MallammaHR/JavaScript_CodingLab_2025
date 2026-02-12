let string1="Amma";
let str=string1.split('').reverse().join('');
console.log(str);

function isPalindrom(word){
    return word === word.split('').reverse().join('');
}
console.log(isPalindrom(string1.trim().toLocaleLowerCase()));//true