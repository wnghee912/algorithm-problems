/*jshint expr:true*/

/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
**/

const insertionSort = (array) => {
  // Your code goes here. Feel free to add helper functions if needed.
  for (let i = 1; i < array.length; i += 1) {
    for (let p = 0; p < i; p += 1) {
      if (array[i] < array[p]) {
        const temp = array.splice(i, 1)[0];
        array.splice(p, 0, temp);
        break;
      }
    }
  }
  return array;
};


console.log(insertionSort([15, 22, 13, 27, 12, 10, 20, 25])) // [ 10, 12, 13, 15, 20, 22, 25, 27 ] //
console.log(insertionSort([10, 8, 11, 20, 31, 1, 4, 100, 7])) // [ 1, 4, 7, 8, 10, 11, 20, 31, 100 ] //
