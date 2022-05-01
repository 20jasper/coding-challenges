//URL--
// https://www.codewars.com/kata/570597e258b58f6edc00230d
 
//INSTRUCTIONS--
/* You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
*/ 
 
//SOLUTION--
/* I am going to split the string by ',' to get an array of numbers
Then I will check to see if it less than three characters
If so return null
If not make a new array with the elements from index 1 to the second to last element
Then join the array together by ' '
*/ 
function array(str){
    const arr = str.split(',');
    if (arr.length<3){
      return null;
    }
    return arr.slice(1,-1)
              .join(' ')
  }
  
//TESTCASES--
console.log(array('1,2,3')); //'2'
console.log(array('1,2,3,4,5')); //'2 3 4'
console.log(array('1,2')); //null