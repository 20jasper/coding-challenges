//URL--
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

//INSTRUCTIONS--
/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

//SOLUTION--
/* 
I am going to return s repeated n times
*/
function repeatStr(n, s) {
    return s.repeat(n)
}
//TESTCASES--
console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");