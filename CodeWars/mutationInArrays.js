//URL--
// https://www.codewars.com/kata/566039931cb747be82000095

//INSTRUCTIONS--
/* We have an array that records a game's moves, to determine a winner we need to get the last two items in the array and return in ascending order, but we need to keep the original array the way it is.

Write a function that returns the last two items in an array, in ascending order. We should still have access to the original array.

HINT: Watch out for methods that mutate the array.

*/

//SOLUTION--
/* I am going to take a slice of the last two elements of the array and then sort them, then I will return the result
*/
function lastTwo(arr) {
    return arr
        .slice(-2)
        .sort((a, z) => a - z)

}
//TESTCASES--
console.log(lastTwo([5, 6, 2, 7, 9, 1]), [1, 9]);
console.log(lastTwo([3, 8]), [3, 8]);
console.log(lastTwo([6, 2]), [2, 6]);