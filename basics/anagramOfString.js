let name1 = 'silent';
let name2 = 'listen';

function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === 
         str2.split('').sort().join('');
}

console.log(isAnagram(name1, name2)); // true