/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

Array.prototype.isSubsetOf = function (arr) {
  // your code here
  let result = 0;
  for (let i = 0; i < this.length; i += 1) {
    for (let p = 0; p < arr.length; p += 1) {
      if (this[i] === arr[p]) {
        result += 1;
        break;
      }
    }
    if (i + 1 !== result) {
      return false;
    }
  }
  return true;
};
const b = ['merge','reset','reset']
console.log(b.isSubsetOf(['reset','merge','add','commit']));
const a = ['commit','push','blame'];
console.log(a.isSubsetOf(['commit','rebase','push','blame']));
