//URL--
// https://www.codewars.com/kata/596e5b0fdba3fa5fa7000026/

//INSTRUCTIONS--
/* You are given an array called arr.

TASK: Your job is to return a multidimensonal array with arr in it using arrow functions. The length of the array you are returning depends on the length of arr.

EXAMPLES:

[1,2,3] --> [[1,2,3],[1,2,3],[1,2,3]]

['a','b'] --> [['a','b'],['a','b']]

[1,2,3,4,5] --> [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]

And BTW. Your code needs to be less than 35 characters long.

Good Luck!

*/

//SOLUTION--
/* I am going to use an array constructor to make an array that is as the same length as the input array
Then I am going to fill it with the original array
Return the resultant array

Shorten the variable name if necessary to fit under the character limit
*/
arrayPower = arr => Array(arr.length).fill(arr)
//TESTCASES--
console.log(arrayPower([1, 2, 3]), [[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
console.log(arrayPower([1, 2, 3, 4, 5]), [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]);