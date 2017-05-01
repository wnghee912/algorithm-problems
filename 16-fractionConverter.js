/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */


const gcd = function(a, b) {
  return !b ? a : gcd(b, a % b);
}

const toFraction = function(number) {
  const numberToArray = number.toString().split('');
  let denominator, numerator;

  if (numberToArray.length === 1) {
    denominator = 1;
    numerator = Number(numberToArray[0]);
  } else {
    // delete demical point //
    numberToArray.splice(numberToArray.indexOf('.'), 1);
    denominator = Math.pow(10, (numberToArray.length - 1));
    numerator = Number(numberToArray.join(''));
  }

  const fractionGcd = gcd(denominator, numerator);
  const result = (numerator / fractionGcd) + '/' + (denominator / fractionGcd);

  return result;
};

console.log(toFraction(3.0))
console.log(toFraction(2.5))
console.log(toFraction(3.0))
console.log(toFraction(2.14)) /* 107/50 */
console.log(toFraction(5.6505)) /* 11301/2000 */
console.log(toFraction(25.0504)) /* 31313/12500 */
