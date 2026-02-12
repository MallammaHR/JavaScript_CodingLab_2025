let string = "greeks";

function countCharacter(text){
    let count ={};

    for(let char of text){
        count[char]=((count[char]||0)+1);
    }
    return count;
}
console.log(countCharacter(string));