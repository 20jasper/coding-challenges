//URL--
// https://www.codewars.com/kata/52c31f8e6605bcc646000082

//INSTRUCTIONS--
/* Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2)

*/

//SOLUTION--
/* I am going to loop through the array
    If there is an element after the current element equal to the target minus the current element, return the indices of both elements

After doing it, I realized it could be done in O(n) instead of O(n^2)
I am going to loop through the array
    For each element, I am going to a key of the number and set its value to its index.
    If the target - the current number is in the hashmap, return its index and the current index in an array
*/

// first version
// function twoSum(numbers, target) {
//     for (let i = 0; i < numbers.length - 1; i++) {
//         for (let y = i + 1; y < numbers.length; y++) {
//             if (target - numbers[i] === numbers[y]) {
//                 return [i, y]
//             }
//         }
//     }
// }
// refactored version
function twoSum(numbers, target) {
    const hashMap = {}
    for (let i = 0; i < numbers.length; i++) {
        const num1 = numbers[i]
        const num2 = target - num1
        if (hashMap[num2] !== undefined) {
            return [i, hashMap[num2]]
        }
        hashMap[num1] = i
    }
}
//TESTCASES--
console.log(twoSum([1, 2, 3], 4), [2, 0]);
console.log(twoSum([1, 3], 4), [1, 0]);
console.log(twoSum([1234, 5678, 9012], 14690), [2, 1]);