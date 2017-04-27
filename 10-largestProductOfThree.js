/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


const largestProductOfThree = (array) => {
  const arraySorted = array.sort((a, b) => {
    return a - b;
  });
  const includedNegativeNumbers = arraySorted[0] * arraySorted[1] * arraySorted[array.length - 1];
  const nonIncludedNegativeNumbers = arraySorted[array.length - 1] * arraySorted[array.length - 2] * arraySorted[array.length - 3];

  return includedNegativeNumbers > nonIncludedNegativeNumbers ?
  includedNegativeNumbers : nonIncludedNegativeNumbers;
};

console.log(largestProductOfThree([2, 1, 3, 7]))
console.log(largestProductOfThree([-2,-1,-8,9,10]))
console.log(largestProductOfThree([-2,-1,-8,-9,-30,9,10,11,21]))
