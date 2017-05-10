/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency

// Feel free to add helper functions if needed.


const bubbleSort = (array) => {
  // Your code here.
  for (let i = 1; i < array.length; i += 1) {
    let flag = 0;
    for (let p = 0; p < array.length - i; p += 1) {
      if (array[p] > array[p + 1]) {
        const temp = array[p];
        array[p] = array[p + 1];
        array[p + 1] = temp;
        flag += 1;
      }
    }
    if (flag === 0) {
      return array;
    } else {
      continue;
    }
  }
  return array;
};

console.log(bubbleSort([2, 1, 3, 3, 5, 2, 1, 7]));
console.log(bubbleSort([2, 1, 3, 5, 1, 2, 3, 9, 4, 6]));
console.log(bubbleSort([1, 3, 4, 7, 11, 18, 33, 40]));
