//URL--
// https://www.codewars.com/kata/577303d4914da62b4b0001c4

//INSTRUCTIONS--
/* Given an array of numbers, find the smallest pair sum in the array.

For example

[10,14,2,23,19] should return 12 (i.e. sum of 10,2)

[99,2,2,23,19] should return 4 (i.e. sum of 2,2)

Input array contains minimum two elements and every element is a number. Note :

    not all elements are distinct, and duplicates are not ignored

Ex :

[1,1,2] => 1+1 = 2


*/

//SOLUTION--
/* I'm going to sort the array and add the two smallest numbers
return the result
*/
function smallestPairSum(numbers) {
    const arrSorted = numbers.sort((a, z) => a - z)
    return arrSorted[0] + arrSorted[1]
}
//TESTCASES--
console.log(smallestPairSum([10, 14, 2, 23, 19]), 12);
console.log(smallestPairSum([-100, -29, -24, -19, 19]), -129);
console.log(smallestPairSum([1, 2, 3, 4, 6, -1, 2]), 0);