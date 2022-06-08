//URL--
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

//INSTRUCTIONS--
/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

*/

//SOLUTION--
/* I am going to use map to change each element to the index of the element +1, then a colon and space
return the resultant array
*/
const number = function (array) {
    return array.map((x, i) => `${i + 1}: ${x}`)
}
//TESTCASES--
console.log(number([]), [], 'Empty array should return empty array');
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers'); 