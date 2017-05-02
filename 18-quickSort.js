/*
  Implement Quick sort:
  - The divide-and-conquer strategy is used in quicksort. Below the recursion step is described:
    - Choose a pivot value. We take the value of the middle element
    as pivot value, but it can be any value, which is in range of
    sorted values, even if it doesn't present in the array.
    - Partition. Rearrange elements in such a way, that all elements which are lesser than the pivot go to the left part of the array
    and all elements greater than the pivot, go to the right part of
    the array. Values equal to the pivot can stay in any part of the array. Notice, that array may be divided in non-equal parts.
    - Sort both parts. Apply quicksort algorithm recursively to the
    left and the right parts.
*/

const quickSort = (array) => {

  if (array.length <= 1) return array;

  const pivotIndex = Math.floor((array.length - 1) / 2);
  const pivotValue = array[pivotIndex];
  const lessValues = [];
  const moreValues = [];
  // remove pivotIndex in array //
  array.splice(pivotIndex, 1);

  for (let i = 0; i < array.length; i += 1) {
    array[i] < pivotValue ? lessValues.push(array[i]) : moreValues.push(array[i]);
  }

  return (quickSort(lessValues)).concat([pivotValue], quickSort(moreValues));
};

console.log(quickSort([15,22,13,27,12,10,20,25]));  // [10, 12, 13, 15, 20, 22, 25, 27] //
