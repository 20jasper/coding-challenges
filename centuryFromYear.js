//URL--
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

//INSTRUCTIONS--
/* Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20


*/

//SOLUTION--
/* I am going to divide the year by 100 and use Math.ceil() to round up the number
*/
function century(year) {
    return Math.ceil(year / 100);
}
//TESTCASES--
console.log(century(1705), 18);
console.log(century(89), 1);
console.log(century(2000), 20);