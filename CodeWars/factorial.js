//URL--
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

//INSTRUCTIONS--
/* In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
*/

//SOLUTION--
/* 
If the input is less than 0 or more than 12, throw a range error
set product to 1
iterate from n to 0
    multiply the the product by i each loop
return the product
*/
function factorial(n) {
    if (n < 0 || n > 12) {
        throw new RangeError('Input must be between 0 and 12')
    }
    let product = 1
    for (let i = n; i > 0; i--) {
        product *= i
    }
    return product
}
//TESTCASES--
console.log(factorial(0), 1, "factorial for 0 is 1");
console.log(factorial(1), 1, "factorial for 1 is 1");
console.log(factorial(2), 2, "factorial for 2 is 2");
console.log(factorial(3), 6, "factorial for 3 is 6");