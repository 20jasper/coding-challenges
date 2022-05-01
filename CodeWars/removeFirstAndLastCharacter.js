//URL--
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
 
//INSTRUCTIONS--
/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/ 
 
//SOLUTION--
/* I'm going to return the substring from index 1 to the second to last character
*/ 
function removeChar(str){
    return str.slice(1,-1);
  };
//TESTCASES--
 console.log(removeChar('eloquent')) //'loquen'
 console.log(removeChar('country')) //'ountr'