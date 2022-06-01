//URL--
// https://www.codewars.com/kata/567bf4f7ee34510f69000032

//INSTRUCTIONS--
/* Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

//SOLUTION--
/* I am going to test if the input is non NaN and its length is 1 and return the value

I tried to trim the string before testing its length since spaces are considered not NaN in JavaScript
    This didn't work since now " 1" counts as a digit
I changed the conditional for being not NaN to a regular expression checking for numbers 0-9 and checked if the length of the object was 1
*/

String.prototype.digit = function () {
    return /[0-9]/.test(this) && this.length === 1;
};
//TESTCASES--
console.log(''.digit(), false);
console.log('a'.digit(), false);
console.log('14'.digit(), false);
console.log(' '.digit(), false);
console.log(' 1'.digit(), false);
console.log('1 '.digit(), false);
console.log('5'.digit(), true);