//URL--
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

//INSTRUCTIONS--
/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

//SOLUTION--
/* I am going to use replace all to replace the !s with empty string
*/
function removeExclamationMarks(s) {
    return s.replaceAll("!", "");
}
//TESTCASES--
console.log(removeExclamationMarks("Hello World!"), "Hello World");
