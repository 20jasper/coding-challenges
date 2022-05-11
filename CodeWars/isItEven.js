//URL--
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5

//INSTRUCTIONS--
/* In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

*/

//SOLUTION--
/* I am going to check if the number mod 2 is equal to 0, and return the truth value
*/
function testEven(n) {
    return n % 2 === 0
}
//TESTCASES--
console.log(testEven(0), true);
console.log(testEven(0.5), false);
console.log(testEven(1), false);
console.log(testEven(-2), true);