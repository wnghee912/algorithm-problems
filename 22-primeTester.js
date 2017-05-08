/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = function(n) {
  if (typeof n !== 'number' || n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(primeTester(11)); // true //
console.log(primeTester(1212)); // false //
