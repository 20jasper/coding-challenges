//URL--
// https://www.codewars.com/kata/544675c6f971f7399a000e79
 
//INSTRUCTIONS--
/* We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/ 
 
//SOLUTION--
/* I am going to use the Number() method to explicitly change the strings to numbers
*/ 
const stringToNumber = function(str){
    return Number(str);
  }
//TESTCASES--
console.log(stringToNumber("1234")) //1234
console.log(stringToNumber("605")) //605