//URL--
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

//INSTRUCTIONS--
/* Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

*/

//SOLUTION--
/* I am going to return 0 if the array length is 1 or 0
Else return the difference between the max and min of the array
*/
function sumOfDifferences(arr) {
    if (arr.length <= 1) {
        return 0
    }
    return Math.max(...arr) - Math.min(...arr)
}
//TESTCASES--
console.log(sumOfDifferences([-3, -2, -1]), 2);
console.log(sumOfDifferences([1, 2, 10]), 9);

