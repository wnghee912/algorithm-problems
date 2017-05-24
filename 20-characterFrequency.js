/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

const characterFrequency = function(string) {
  const result = [];
  for (let i = 0; i < string.length; i += 1) {
    let temp = 0;
    for (let p = 0; p < result.length; p += 1) {
      if (string[i] === result[p][0]) {
        result[p][1] += 1;
        temp += 1;
        break;
      }
    }
    if (!temp) {
      result.push([string[i], 1]);
    }
  }

  result.sort((a, b) => {
    return a[0] > b[0];
  }).sort((a, b) => {
    return b[1] > a[1];
  })

  return result;
};

console.log(characterFrequency('mmmaaaiiibbb'))
console.log(characterFrequency('mississippi'))
console.log(characterFrequency('miaaiaaippi'))
