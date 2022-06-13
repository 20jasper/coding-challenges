//URL--
// https://leetcode.com/problems/two-sum/

//INSTRUCTIONS--
/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

*/

//SOLUTION--
/* 
Iterate through the array
I am going to check if the next element is equal to the target - the target number
    If not, check to see if the number is in the hashmap
        If not, add it with the property of the element's value and a value of its index
        If so, return the index of the number in the hash map and the current element's index in an array
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i]
        const num2 = target - num1
        if (hashMap[num2] !== undefined) {
            return [hashMap[num2], i]
        }
        hashMap[num1] = i
    }
}
//TESTCASES--
console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);