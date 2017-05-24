/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

 const commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  let duplicateCharacter = '';
  for (let i = 0; i < string1.length; i += 1) {
    if (duplicateCharacter.indexOf(string1[i]) === -1) {
      if (string2.indexOf(string1[i]) !== -1) {
        duplicateCharacter += string1[i];
      }
    }
  }
  return duplicateCharacter;
};

console.log(commonCharacters('acexivou', 'aegihobu'))
console.log(commonCharacters('asflkjasfdlk', 'afdlkeope'))
