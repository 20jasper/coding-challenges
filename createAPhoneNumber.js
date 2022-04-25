//URL--
// https://www.codewars.com/kata/525f50e3b73515a6db000b83

//INSTRUCTIONS--
/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

*/

//SOLUTION--
/* I am going to destructure the input array and then return a template literal with the first three numbers in parentheses, then a space, then the next 7 numbers with a hyphen after the first 3
*/
function createPhoneNumber([num1, num2, num3, num4, num5, num6, num7, num8, num9, num10]) {
    return `(${num1}${num2}${num3}) ${num4}${num5}${num6}-${num7}${num8}${num9}${num10}`
}
//TESTCASES--
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");