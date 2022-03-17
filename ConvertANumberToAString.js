//URL--
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8
 
//INSTRUCTIONS--
/* We need a function that can transform a number into a string.

What ways of achieving this do you know?
*/ 
 
//SOLUTION--
/* I am going to use the "String" method to explicitly convert the expression to a string
*/ 
function numberToString(num) {
    return String(num);
  }
//TESTCASES--
console.log(numberToString(1));
console.log(numberToString(5));
console.log(numberToString(1.5));
console.log(numberToString(18558585));
console.log(numberToString(100));