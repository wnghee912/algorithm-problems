/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

const longestPalindrome = function (string) {
  let result = [];
  for (let i = 0; i < string.length; i += 1) {
    const frontArray = [];
    const backArray = [];
    for (let p = string.length - 1; p > 0; p -= 1) {
      let tempI = i;
      let tempP = p;
      while (string[tempI] === string[tempP] && (tempI !== tempP && tempI - tempP !== 1)) {
        frontArray.push(string[tempI]);
        backArray.unshift(string[tempP]);
        tempI += 1;
        tempP -= 1;
      }
      if (frontArray.length + backArray.length > result.length) {
        if (tempI === tempP) {
          frontArray.push(string[tempI]);
          result = frontArray.concat(backArray);
        }
        else if (tempI - tempP === 1) {
          result = frontArray.concat(backArray);
        }
        break;
      }
    }
  }
  return result.join('');
};

console.log(longestPalindrome("My dad is a racecar athlete"));
console.log(longestPalindrome("My dad is a athlete"));
console.log(longestPalindrome("My racecar athlete"));
