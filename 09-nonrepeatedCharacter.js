/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

const firstNonRepeatedCharacter = (string) => {
 // TODO: your solution here
  for (let i = 0; i < string.length; i += 1) {
    let duplicateCount = 0;
    for (let p = 0; p < string.length; p += 1) {
      if (string[i] === string[p]) {
        duplicateCount += 1;
      }
    }
    if (duplicateCount === 1) {
      return string[i];
    }
  }
};

console.log(firstNonRepeatedCharacter('ABA'))
console.log(firstNonRepeatedCharacter('AACBDB'))
console.log(firstNonRepeatedCharacter('AACCBDB'))
