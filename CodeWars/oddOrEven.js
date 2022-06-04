//URL--
// https://www.codewars.com/kata/5949481f86420f59480000e7

//INSTRUCTIONS--
/* Task:

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

Have fun!

*/

//SOLUTION--
/* I am going to add up each element in the array with reduce
    Then I will check to see if it is odd or even with the modulus operator
        return "odd" if it's odd, and "even" if it's even
*/
function oddOrEven(array) {
    const sum = array.reduce((sum, value) => sum + value, 0)
    if (sum % 2 === 0) {
        return "even"
    }
    return "odd"
}
//TESTCASES--
console.log(oddOrEven([0]), 'even');
console.log(oddOrEven([1]), 'odd');
console.log(oddOrEven([]), 'even');
console.log(oddOrEven([2, 2, 2, 2, 2, 2, 22, 2, 2]), 'even');
console.log(oddOrEven([3, 3, 3, 3, 3]), 'odd');