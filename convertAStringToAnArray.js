//URL--
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
 
//INSTRUCTIONS--
/* Write a function to split a string and convert it into an array of words.
*/ 
 
//SOLUTION--
/* I am going to split the string into an array by spaces
*/ 
function stringToArray(string){
    return string.split(' ');
  }
//TESTCASES--
console.log(stringToArray("Robin Singh")) //["Robin", "Singh"]