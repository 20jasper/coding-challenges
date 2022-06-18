//URL--
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

//INSTRUCTIONS--
/* Task

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
Example

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

*/

//SOLUTION--
/* if array is null, undefined, or less than three, return 0
else sort the array and add all the numbers except 
*/
function sumArray(array) {
    if (array === null || array === undefined || array.length < 3) {
        return 0
    }
    return array
        .sort((a, z) => a - z)
        .reduce((sum, value, index) => {
            //if it's the first or last element, don't add it
            if (index === 0 || index === array.length - 1) {
                return sum
            }
            //else add the value to the sum
            return sum + value
        }, 0)
}
//TESTCASES--
console.log(sumArray([1, 2, 3, 4]), 5);
console.log(sumArray(null), 0);
console.log(sumArray([]), 0);
console.log(sumArray([3]), 0);
console.log(sumArray([3, 5]), 0);
console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray([0, 1, 6, 10, 10]), 17);
console.log(sumArray([-6, -20, -1, -10, -12]), -28);
console.log(sumArray([-6, 20, -1, 10, -12]), 3);
