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

 const characterFrequency = (string) => {
   const CountOfcharacters = {};
   let characters = [];
   let result = [];
   for (let i = 0; i < string.length; i += 1) {
     if (CountOfcharacters[string[i]]) {
       CountOfcharacters[string[i]] += 1;
     } else {
       CountOfcharacters[string[i]] = 1;
       characters.push(string[i]);
     }
   }
   characters = characters.sort();
   for (let p = 0; p < characters.length; p += 1) {
     result.push([characters[p], CountOfcharacters[characters[p]]]);
   }

   return result.sort((a, b) =>  b[1] - a[1]);
 };

console.log(characterFrequency('miaaiaaippi'))
console.log(characterFrequency('miaaiaaippi'))
console.log(characterFrequency('mmmaaaiiibbb'))
