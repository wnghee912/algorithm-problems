/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

const longestRun = function (string) {
  let resultCharactersInfo = [0, 0];
  let startIndex = 0;
  let endIndex = 0;
  let duplicateCount = 0;
  let newDuplicateCount = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== string[i + 1]) {
      endIndex = i;
      newDuplicateCount = endIndex - startIndex + 1;
      if (newDuplicateCount > duplicateCount) {
        resultCharactersInfo = [startIndex, endIndex];
        duplicateCount = newDuplicateCount;
      }
      startIndex = i + 1;
    }
  }
  return resultCharactersInfo;
};

console.log(longestRun("abbbcc"))
console.log(longestRun("aabbc"))
console.log(longestRun("abcd"))
console.log(longestRun('aabbbdddbbbbccdddccccsssscsacasvbbbb')); // [8, 11]
console.log(longestRun('aabbbdddbbbbccdddccccsssscsacasvbbbbb')); // [32, 36]
