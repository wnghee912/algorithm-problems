
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const translateRomanNumeral = function (romanNumeral) {
  let result = 0;
  for (let i = 0; i < romanNumeral.length; i += 1) {
    // compare two roman value //
    if (DIGIT_VALUES[romanNumeral[i + 1]]) {
      if (DIGIT_VALUES[romanNumeral[i]] >= DIGIT_VALUES[romanNumeral[i + 1]]) {
        result += DIGIT_VALUES[romanNumeral[i]];
      } else {
        result -= DIGIT_VALUES[romanNumeral[i]];
      }
    } else {
      result += DIGIT_VALUES[romanNumeral[i]];
    }
    // check one smaller numeral may appear in front of larger one. //
    if (DIGIT_VALUES[romanNumeral[i + 2]]) {
      if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 2]] &&
        DIGIT_VALUES[romanNumeral[i + 1]] < DIGIT_VALUES[romanNumeral[i + 2]]) {
        return null;
      }
    }
  }
  return result;
};

console.log(translateRomanNumeral("LX"));  /* 60 */
console.log(translateRomanNumeral("IV"));  /* 4 */
console.log(translateRomanNumeral("LXVIII")); /* 68 */
console.log(translateRomanNumeral("LXIII")); /* 63 */
console.log(translateRomanNumeral("XLIX")); /* 49 */
console.log(translateRomanNumeral("LXXXVIII")); /* 88 */
console.log(translateRomanNumeral("XLIV")); /* 44 */
console.log(translateRomanNumeral("LIIXXXVIII")); /* null */
