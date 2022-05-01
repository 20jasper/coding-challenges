//URL--
// https://www.codewars.com/kata/554003323fd6af1c4200004e

//INSTRUCTIONS--
/* Create a function that checks if a number is odd.

Expect negative and decimal numbers too. Remember... all negative numbers can also be either odd or even.

Decimal numbers always return false
Examples

Example:
isOdd(2)--> false
isOdd(5)--> true
isOdd(4)--> false
isOdd(-17)--> true
isOdd(-7.0)--> true
isOdd(-7.1)--> false
isOdd(4.23)--> false
isOdd(5.0)-->true
isOdd(5.23)--> false

*/

//SOLUTION--
/* If mod 1 of the input is not zero, it is not an integer, so return false
If mod 2 of the input is 0, it is even and return false
If mod 2 of the input is not 0, it is odd so return true
*/
function isOdd(n) {
    if (n % 1 != 0) {
        return false
    }
    if (n % 2 == 0) {
        return false
    }
    return true
}
//TESTCASES--
console.log(isOdd(5), true);
console.log(isOdd(2), false);
console.log(isOdd(5.3), false);
console.log(isOdd(-5), true);
console.log(isOdd(-2), false);