//URL--
// https://www.codewars.com/kata/57f501f1beb0b4d46d000248

//INSTRUCTIONS--
/* You need to return a new array with only those elements of array that fall in the interval from start to end (both inclusive).

In tests you will be given only integers.

*/

//SOLUTION--
/* I will filter the array to remove anything not within the given interval then return it
*/
function arrayInterval(array, start, end) {
    return array.filter(x => x >= start && x <= end)
}
//TESTCASES--
console.log(arrayInterval([1, 3, 5, 6, 8, 2, 4, 3], 2, 4), [3, 2, 4, 3]);
console.log(arrayInterval([1, 3, 5, 6, 8, 2, 4, 3], 5, 8), [5, 6, 8]);
console.log(arrayInterval([1, 2, 4, 7, 3, 2, 3, 11, 2, 3, 4], 6, 11), [7, 11]);