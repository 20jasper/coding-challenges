//URL--
// https://www.codewars.com/kata/58b7fafd0571aa5f44000038

//INSTRUCTIONS--
/* Write a function called surviveFirst like this:

  function surviveFirst(str) {
    // your code
  }

If str = 'abcdefg', the result should be 'a******'.

str will never be empty.

*/

//SOLUTION--
/* I am going to return a string with the first letter of the string and one less than the length of string asterisks after it
*/
function surviveFirst(str) {
    return str[0] + '*'.repeat(str.length - 1)
}
//TESTCASES--
console.log(surviveFirst("abced"), "a****");
console.log(surviveFirst("z"), "z");