//URL--
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/

//INSTRUCTIONS--
/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

//SOLUTION--
/* I am going to check to see if the array is empty or null and if so return an empty array
Otherwise, I am going to return an array with the amount of of positive numbers and the sum of the negative numbers
*/
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    const positives = input.filter(x => x > 0).length
    const negativeSum = input.reduce((sum, value) => {
        if (value < 0) {
            sum += value
        }
        return sum
    }, 0)
    return [positives, negativeSum];
}
//TESTCASES--
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65]);
console.log(countPositivesSumNegatives([]), []);
console.log(countPositivesSumNegatives(null), []);