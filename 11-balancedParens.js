/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
const balancedParens = (input) => {
  const temp = [];
  let result = false;
  const bracketPair = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === '{' || input[i] === '(' || input[i] === '[') {
      temp.push(input[i]);
    }
    else if (input[i] === '}' || input[i] === ')' || input[i] === ']') {
      bracketPair[input[i]] === temp.pop() ? result = true : result = false;
    }
  }
  return temp.length ? false : result;
};

console.log(balancedParens('('));  // false
console.log(balancedParens('()'));  // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
console.log(balancedParens('[](){}'));  // true
console.log(balancedParens('[({})]'));  // true
console.log(balancedParens('[(]{)}'));  // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));  // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));  // false
