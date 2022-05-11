//URL--
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

//INSTRUCTIONS--
/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

//SOLUTION--
/* I am going to loop through the array and add each second element 
*/
function removeEveryOther(arr) {
    const evensOnly = []
    for (let i = 0; i < arr.length; i += 2) {
        evensOnly.push(arr[i])
    }
    return evensOnly
}
//TESTCASES--
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);