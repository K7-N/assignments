/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str = str.toLowerCase();
    let v = ['a','e','i', 'o', 'u'];
    let c = 0;
    for(let i=0; i<str.length; i++){
      for(let j=0; j<v.length; j++){
        if(str[i] === v[j]){
          c += 1;
          continue;
        }
      }
    }
    return(c);
}

module.exports = countVowels;