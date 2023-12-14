/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let a = {};
  let b = {};
  let l1 = str1.length;
  let l2 = str2.length;
  if(l1 != l2){
    return(false);
  }
  for(let i=0; i<l1; i++){
    let t1 = str1[i];
    let t2 = str2[i];
    if(a[t1]){
      a[t1] += 1;
    } else{
      a[t1] = 1;
    }
    if(b[t2]){
      b[t2] += 1;
    } else{
      b[t2] = 1;
    }
  }
  if(a.length != b.length){
    return false;
  }
  for(const k in a){
    if(a[k] != b[k]){
      return(false);
    }
  }
  return true;
}
console.log(isAnagram("hello", "world"))
module.exports = isAnagram;
