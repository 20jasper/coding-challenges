//URL--
// https://www.codewars.com/kata/57f780909f7e8e3183000078

//INSTRUCTIONS--
/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


*/

//SOLUTION--
/* I am going to use the reduce method to multiply each number together
*/
function grow(x) {
    return x.reduce((product, value) => product * value, 1)
}
//TESTCASES--
console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);