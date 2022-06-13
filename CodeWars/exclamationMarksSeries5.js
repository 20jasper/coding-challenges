//URL--
// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/

//INSTRUCTIONS--
/*  Description:

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
Examples

remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"


*/

//SOLUTION--
/*Use regex to replace all exclamation marks with empty strings then add an exclamation mark to the end
return the result
*/
function remove(string) {
    return string.replace(/\!/g, '') + '!'
}
//TESTCASES--
console.log(remove("Hi!") === "Hi!");
console.log(remove("Hi!!!") === "Hi!");
console.log(remove("!Hi") === "Hi!");
console.log(remove("Hi! Hi!") === "Hi Hi!");