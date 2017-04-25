/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

const sumArray = function(array) {
  let presentSum = 0;
  let resultSum = 0;
  for (let i = 0; i < array.length; i += 1) {
    presentSum += array[i];
    if (presentSum > resultSum) {
      resultSum = presentSum;
    }
    if (presentSum < 0) {
      presentSum = 0;
    }
  }
  return resultSum;
};

console.log(sumArray([1, 2, 3]));
console.log(sumArray([1, 2, 3, -4]));
console.log(sumArray([1, 2, 3, -4, 5]));
console.log(sumArray([4, -1, 5]));
console.log(sumArray([10, -11, 11]));
