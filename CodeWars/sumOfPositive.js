//URL--
// https://www.codewars.com/kata/5715eaedb436cf5606000381

//INSTRUCTIONS--
/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

//SOLUTION--
/* I am going to use reduce to add all of the positive values
return the result
*/
function positiveSum(arr) {
    return arr.reduce((sum, value) => {
        if (value > 0) {
            sum += value
        }
        return sum
    }, 0)
}
//TESTCASES--
console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);