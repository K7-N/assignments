/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  i = 0;
  j = str.length -1;
  while(i < j){
    let i1 = str.charCodeAt(i);
    let i2 = str.charCodeAt(j);
    while(i1 >122 || i1 < 97){
      i += 1;
      i1 = str.charCodeAt(i);
    }
    while(i2 >122 || i2 < 97){
      j -= 1;
      i2 = str.charCodeAt(j);
    }
    if(i > j){
      return false;
    }
    if(str[i] != str[j]){
      return false;
    }
    i += 1;
    j -=1;
  }
  return true;
}

module.exports = isPalindrome;
